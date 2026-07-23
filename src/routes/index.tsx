import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, PlayCircle, Lock, AlertTriangle, Loader2, ShieldAlert } from "lucide-react";
import { useState } from "react";
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
  const [status, setStatus] = useState<"idle" | "verifying" | "failed">("idle");
  const CHECKOUT_URL = "#"; // será substituído pelo link do checkout

  const steps = [
    "Validando dados da compra...",
    "Autenticando identidade...",
    "Verificando idade do usuário...",
  ];
  const [stepIdx, setStepIdx] = useState(0);

  const handleVerify = () => {
    setStatus("verifying");
    setStepIdx(0);
    let i = 0;
    const iv = setInterval(() => {
      i++;
      if (i >= steps.length) {
        clearInterval(iv);
        setTimeout(() => setStatus("failed"), 700);
      } else {
        setStepIdx(i);
      }
    }, 900);
  };

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

          {/* Botão central: Liberar acesso agora */}
          <div className="mb-12">
            <button
              onClick={handleVerify}
              disabled={status === "verifying"}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-brand text-primary-foreground rounded-2xl px-10 py-5 text-lg font-bold shadow-brand hover:shadow-glow transition-all hover:scale-[1.03] disabled:opacity-80 disabled:cursor-not-allowed"
            >
              {status === "verifying" ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  Verificando...
                </>
              ) : (
                <>
                  <Lock className="h-6 w-6" />
                  LIBERAR ACESSO AGORA
                </>
              )}
            </button>
            {status === "verifying" && (
              <p className="mt-4 text-sm text-muted-foreground animate-pulse">
                {steps[stepIdx]}
              </p>
            )}
          </div>
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

      {/* Modal de verificação falhou */}
      {status === "failed" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative bg-card border-2 border-destructive/60 rounded-2xl max-w-lg w-full my-8 shadow-2xl">
            <div className="bg-destructive/15 border-b border-destructive/40 rounded-t-2xl px-6 py-4 flex items-center gap-3">
              <AlertTriangle className="h-7 w-7 text-destructive flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-destructive">Verificação falhou</div>
                <div className="text-sm text-muted-foreground">Por favor, verifique a identificação de idade.</div>
              </div>
            </div>

            <div className="p-6 space-y-5 text-sm">
              <div className="flex items-center gap-2 justify-center text-base font-bold text-destructive">
                <ShieldAlert className="h-5 w-5" />
                🔒 ALERTA DE SEGURANÇA
              </div>

              <div className="text-center">
                <h3 className="font-bold text-foreground text-base">
                  Tarifa de Segurança (BWYZ272)
                </h3>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mt-1">
                  Verificação Obrigatória
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Com o objetivo de reforçar a segurança da plataforma e impedir o acesso de menores de idade, realizamos uma validação obrigatória antes da liberação do acesso.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                A <strong className="text-foreground">Tarifa de Segurança Legal (T.S.L.)</strong> faz parte do procedimento oficial de verificação e autenticação de acesso.
              </p>

              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3">
                <p className="font-semibold text-destructive text-xs uppercase tracking-wide mb-1">⚠️ Acesso condicionado à validação</p>
                <p className="text-muted-foreground text-xs">
                  A liberação do acesso ocorrerá somente após a conclusão do processo de verificação.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                <p className="font-semibold text-primary text-xs uppercase tracking-wide mb-1">🚨 Importante</p>
                <p className="text-muted-foreground text-xs">
                  Após a confirmação dos dados e aprovação da validação, o valor da tarifa será <strong className="text-foreground">integralmente reembolsado</strong> ao usuário.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">✔️ Benefícios da Verificação</p>
                <ul className="space-y-1 text-muted-foreground text-xs">
                  <li>• Maior proteção dos membros</li>
                  <li>• Prevenção contra fraudes</li>
                  <li>• Ambiente mais seguro</li>
                  <li>• Processo rápido e automatizado</li>
                </ul>
              </div>

              <a
                href={CHECKOUT_URL}
                className="block w-full text-center bg-gradient-brand text-primary-foreground rounded-xl px-6 py-4 font-bold shadow-brand hover:shadow-glow transition-all hover:scale-[1.02]"
              >
                CONTINUAR VERIFICAÇÃO
              </a>

              <button
                onClick={() => setStatus("idle")}
                className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
