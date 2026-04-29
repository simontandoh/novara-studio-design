import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { signInAction } from "@/app/(auth)/login/actions";

type LoginPageProps = {
  searchParams?: Promise<{ error?: string; next?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }

  const params = searchParams ? await searchParams : undefined;
  const errorMessage = params?.error;
  const nextPath = params?.next ?? "/";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] p-6 text-[#f3f3f1]">
      <Card className="w-full max-w-md border-[#1f1f1f] bg-[#111111]">
        <CardHeader>
          <p className="text-xs tracking-[0.28em] text-[#bba87d]">NOVARA OS</p>
          <CardTitle className="mt-2 text-xl tracking-tight">
            Internal Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={signInAction} className="space-y-4">
            <input type="hidden" name="next" value={nextPath} />
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@novarastudios.co.uk"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
              />
            </div>
            {errorMessage ? (
              <p className="text-sm text-[#d4a8a8]">{errorMessage}</p>
            ) : null}
            <Button type="submit" className="w-full bg-[#e7dcc5] text-[#111111]">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
