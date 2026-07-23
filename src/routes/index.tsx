import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Download, Smartphone, Apple, ShieldCheck, Sparkles, PlayCircle } from "lucide-react";
import logoAsset from "@/assets/dramabox-logo.png.asset.json";
import iconAsset from "@/assets/dramabox-icon.png.asset.json";
import premiumAsset from "@/assets/dramabox-premium.png.asset.json";
import garantiasAsset from "@/assets/garantias.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Obrigado pela compra — Dramabox Ilimitado" },
      { name: "description", content: "Sua compra foi confirmada! Siga o passo a passo para instalar o Dramabox Ilimitado e começar a assistir agora mesmo." },
      { property: "og:title", content: "Obrigado pela compra — Dramabox Ilimitado" },
      { property: "og:description", content: "Sua compra foi confirmada! Siga o passo a passo para instalar o Dramabox Ilimitado e começar a assistir agora mesmo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <div className="min-h-screen bg-background bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <img src={logoAsset.url} alt="Dramabox" className="h-8 w-auto" />
          <span className="text-xs text-muted-foreground hidden sm:inline">Compra confirmada</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Hero */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <CheckCircle2 className="h-4 w-4" />
            Pagamento aprovado
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Obrigado pela sua compra! <br />
            <span className="text-gradient-brand">Seu acesso está liberado</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Falta pouco para você mergulhar nas melhores histórias. Instale o app do{" "}
            <strong className="text-foreground">Dramabox Premium</strong> agora mesmo e comece a assistir.
          </p>

          <div className="flex justify-center mb-10">
            <img
              src={premiumAsset.url}
              alt="Dramabox Premium"
              className="max-w-[320px] w-full drop-shadow-2xl"
            />
          </div>
        </section>

        {/* Passo a passo */}
        <section className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-brand mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Como instalar em 3 passos
          </h2>

          <ol className="space-y-5">
            {[
              {
                t: "Escolha sua loja",
                d: "Clique no botão abaixo correspondente ao seu celular (Android ou iPhone).",
              },
              {
                t: "Baixe o aplicativo",
                d: "A loja oficial vai abrir. Toque em Instalar e aguarde o download terminar.",
              },
              {
                t: "Faça login com o e-mail da compra",
                d: "Abra o Dramabox e entre com o mesmo e-mail que você usou aqui. Seu Premium estará ativo.",
              },
            ].map((s, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-brand text-primary-foreground font-bold flex items-center justify-center shadow-glow">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{s.t}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Download buttons */}
        <section className="grid sm:grid-cols-2 gap-4 mb-10">
          <a
            href="https://download2435.mediafire.com/mp4blh21oxag3O0KPKKe8JzYlR2MPBVSKO7b1T_U426uz-I6igPUPyIJJ5s7xljESi0_Q3YOu_b1YCS1P54mnwn2P2XmcI74PuGLCacPZM3Bbu6P6VwXKeiaDqojGyODDQLsFTpBu6g6MChqMrFL20FMOFOhnAVOnRZDYFCasfyfysSR/0faf7ic5cvb2439/DramaBox+Ilimitado.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-gradient-brand text-primary-foreground rounded-xl px-6 py-4 font-semibold shadow-brand hover:shadow-glow transition-all hover:scale-[1.02]"
          >
            <Smartphone className="h-6 w-6" />
            <div className="text-left">
              <div className="text-[10px] opacity-90 uppercase tracking-wide">Baixar APK para</div>
              <div className="text-base leading-tight">Android</div>
            </div>
            <Download className="h-5 w-5 ml-auto opacity-80 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://serverflow.dad/c/dramabox-premium-197a"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-card border border-border rounded-xl px-6 py-4 font-semibold hover:border-primary/60 hover:bg-secondary transition-all hover:scale-[1.02]"
          >
            <Apple className="h-6 w-6" />
            <div className="text-left">
              <div className="text-[10px] opacity-90 uppercase tracking-wide">Baixar para</div>
              <div className="text-base leading-tight">iPhone (iOS)</div>
            </div>
            <Download className="h-5 w-5 ml-auto opacity-80 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </section>

        {/* Info card */}
        <section className="bg-card/60 border border-border rounded-2xl p-6 mb-10 flex gap-4 items-start">
          <img src={iconAsset.url} alt="" className="h-14 w-14 rounded-xl flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1 flex items-center gap-2">
              <PlayCircle className="h-4 w-4 text-primary" />
              Dica importante
            </h3>
            <p className="text-sm text-muted-foreground">
              Use o <strong className="text-foreground">mesmo e-mail</strong> da compra ao fazer login no app.
              Seu Premium é ativado automaticamente — sem precisar de cupom ou código.
            </p>
          </div>
        </section>

        {/* Suporte */}
        <section className="text-center bg-secondary/40 border border-border rounded-2xl p-6 mb-10">
          <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-2" />
          <h3 className="font-semibold mb-1">Precisa de ajuda?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Nosso suporte responde em até 24 horas.
          </p>
          <a
            href="mailto:suporte@dramabox.com"
            className="text-sm text-primary hover:underline font-medium"
          >
            suporte@dramabox.com
          </a>
        </section>

        {/* Selos */}
        <div className="flex justify-center opacity-70">
          <img src={garantiasAsset.url} alt="Compra segura, satisfação garantida, privacidade protegida" className="max-w-sm w-full" />
        </div>
      </main>

      <footer className="border-t border-border/40 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dramabox. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
