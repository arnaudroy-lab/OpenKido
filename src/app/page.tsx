import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { SignInButton } from "@/components/auth/sign-in-button";

export default async function Home() {
  const session = await auth();
  if (session) redirect("/issues");

  const ua = (await headers()).get("user-agent") ?? "";
  const isElectron = /Electron/i.test(ua);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
      <div className="flex flex-col items-center gap-3 text-center">
        {/* Le logo contient déjà le nom : le h1 reste dans la page pour les lecteurs d'écran et le SEO. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo.png" alt="" width={883} height={297} className="h-20 w-auto mb-2" />
        <h1 className="sr-only">OpenKido</h1>
        <p className="text-muted-foreground text-sm max-w-sm">
          Scannez vos dépendances, détectez les CVE réelles, recevez des PR d&apos;autofix.
          Branché directement sur vos repos GitHub.
        </p>
      </div>

      <SignInButton electronHint={isElectron} />

      <p className="text-[11px] text-muted-foreground">Permissions demandées : lecture des repos et des organisations</p>
    </div>
  );
}
