import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = (a_position + 1.0) * 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  varying vec2 v_uv;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform float u_intensity;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float star(vec2 uv, float scale, float threshold) {
    vec2 grid = uv * scale;
    vec2 id = floor(grid);
    vec2 gv = fract(grid) - 0.5;
    float rnd = hash(id);
    float mask = step(threshold, rnd);
    float radius = mix(0.28, 0.04, rnd);
    float twinkle = 0.8 + 0.2 * sin(u_time * 0.3 + rnd * 6.0);
    return smoothstep(radius, 0.0, length(gv)) * mask * twinkle;
  }

  float nebula(vec2 uv, float seed) {
    float n = sin((uv.x + seed) * 2.1 + u_time * 0.06) *
      sin((uv.y - seed) * 1.7 - u_time * 0.04);
    n += sin((uv.x + uv.y + seed) * 1.3 + u_time * 0.03);
    return smoothstep(0.2, 0.8, n * 0.5 + 0.5);
  }

  void main() {
    vec2 uv = v_uv;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 uvBase = uv;
    vec2 uvFar = uv;
    uvFar.x = (uvFar.x - 0.5) * aspect + 0.5;
    uvFar.y += u_time * 0.01;
    vec2 uvNear = uv;
    uvNear.x = (uvNear.x - 0.5) * aspect + 0.5;
    uvNear += vec2(0.02, -0.03) * sin(u_time * 0.05);
    uvNear.y += u_time * 0.02;

    vec3 base = vec3(0.01, 0.02, 0.045);
    float stars = 0.0;
    stars += star(uvFar, 40.0, 0.965);
    stars += star(uvFar + 0.2, 60.0, 0.972) * 0.9;
    stars += star(uvNear - 0.5, 28.0, 0.96) * 0.9;
    stars += star(uvNear + 0.8, 90.0, 0.975) * 0.7;

    float haze = 0.0;
    haze += nebula(uvBase * vec2(aspect, 1.0), 0.1) * 0.45;
    haze += nebula(uvBase * vec2(aspect, 1.0) + 0.3, 0.6) * 0.35;
    vec3 hazeColor = vec3(0.15, 0.22, 0.35) * haze;

    float vignette = smoothstep(1.2, 0.4, distance(v_uv, vec2(0.5)));
    vec3 color = base + hazeColor;
    color += vec3(0.7, 0.8, 1.0) * stars * 1.1 * u_intensity;
    color *= vignette;
    gl_FragColor = vec4(color, 1.0);
  }
`;

const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const createProgram = (gl: WebGLRenderingContext, vertex: WebGLShader, fragment: WebGLShader) => {
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  return program;
};

const HomeHero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [webglReady, setWebglReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const gl = canvas.getContext("webgl", { antialias: false, powerPreference: "low-power" });
    if (!gl || prefersReduced) return;

    const vertex = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertex || !fragment) return;

    const program = createProgram(gl, vertex, fragment);
    if (!program) return;

    const positionLocation = gl.getAttribLocation(program, "a_position");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const intensityLocation = gl.getUniformLocation(program, "u_intensity");

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.5);
      const scale = isMobile ? 0.75 : 1;
      const width = Math.floor(canvas.clientWidth * dpr * scale);
      const height = Math.floor(canvas.clientHeight * dpr * scale);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    let rafId = 0;
    let lastFrame = 0;
    const targetFrameMs = isMobile ? 1000 / 30 : 1000 / 60;

    const render = (time: number) => {
      rafId = requestAnimationFrame(render);
      if (time - lastFrame < targetFrameMs) return;
      lastFrame = time;
      resize();
      gl.useProgram(program);
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform1f(intensityLocation, isMobile ? 0.7 : 1.0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    resize();
    setWebglReady(true);
    rafId = requestAnimationFrame(render);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
      <div className="absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          className="hero-webgl w-full h-full"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 520px at 18% 12%, rgba(6, 10, 16, 0.78), transparent 60%), radial-gradient(800px 520px at 82% 18%, rgba(6, 10, 16, 0.7), transparent 65%)",
          }}
        />
        {!webglReady && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 520px at 18% 12%, rgba(16, 22, 34, 0.8), transparent 60%), radial-gradient(800px 520px at 82% 18%, rgba(12, 18, 28, 0.75), transparent 65%)",
            }}
          />
        )}
      </div>

      <div className="container-editorial relative z-10">
        <div className="max-w-3xl pt-6 md:pt-10">
          <div className="mb-8">
            <span className="text-4xl md:text-5xl font-light tracking-[0.6em] text-foreground">
              NOVARA
            </span>
          </div>
          <p className="label-small mb-4">BORN FROM LIGHT.</p>
          <h1 className="headline-hero mb-5">Quiet systems for the web.</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="btn-primary rounded-full px-7 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Contact
            </Link>
            <Link
              to="/websites"
              className="btn-secondary rounded-full px-6 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Websites
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
