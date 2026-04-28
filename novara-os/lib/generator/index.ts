export type GeneratorContext = {
  phase: "v1";
};

export function buildGeneratorContext(): GeneratorContext {
  return { phase: "v1" };
}
