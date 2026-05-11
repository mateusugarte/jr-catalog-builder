import { createFileRoute } from "@tanstack/react-router";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import {
  ChevronDown,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  ArrowDown,
  Slice,
  Package,
  Wind,
  CircleDot,
  Blend,
  Cog,
  Scale,
  Beef,
  ShoppingCart,
  Store,
  Croissant,
  UtensilsCrossed,
  Factory,
  Zap,
  Wrench,
  Map as MapIcon,
  Snowflake,
  Handshake,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Hero />
      <Sobre />
      <Servicos />
      <Segmentos />
      <Cases />
      <Galeria />
      <Diferenciais />
      <Footer />
    </div>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <Reveal>
          <span className="inline-flex items-center gap-2 border border-jr-red/60 px-3 py-1.5 text-jr-white font-mono-tech text-[11px] tracking-[0.18em] uppercase">
            <span className="text-jr-red">▸</span> Grande São Paulo · Atendimento In Loco
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1
            className="font-display font-black uppercase leading-[0.92] mt-8 text-jr-white"
            style={{ fontSize: "clamp(48px, 10vw, 120px)" }}
          >
            Conserto e manutenção
            <br />
            de maquinário <span className="text-jr-red">industrial</span>
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-8 text-jr-gray font-sans text-base md:text-lg max-w-2xl leading-relaxed">
            15 anos de expertise. Atendimento rápido onde sua máquina está.
            Especialistas em máquinas de frios e a vácuo.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="accent-bar my-8" />
        </Reveal>

        <Reveal delay={420}>
          <p className="font-mono-tech text-[13px] tracking-[0.2em] uppercase text-jr-gray-dark">
            JR Balanças e Máquinas · Desde 2009
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-8 right-8 z-10 text-jr-red animate-bounce-down">
        <ChevronDown className="w-7 h-7" />
      </div>
    </section>
  );
}

/* ============== SOBRE ============== */
function Sobre() {
  return (
    <section className="relative bg-jr-black-medium py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <Reveal>
            <span className="section-label">▸ Sobre a JR</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-jr-white font-display uppercase leading-[0.95] mt-6 text-4xl md:text-5xl lg:text-[56px]">
              Autoridade em maquinário
              <br />
              industrial há 15 anos
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-jr-gray text-base leading-[1.75]">
              A JR Balanças e Máquinas nasceu do chão de fábrica — do contato direto
              com açougues, mercados e indústrias que não podem parar. Em 15 anos,
              construímos uma reputação baseada em diagnóstico rápido, reparo
              eficiente e atendimento no local onde a sua máquina opera.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-6 text-jr-white text-base leading-[1.75] border-l-[3px] border-jr-red pl-5">
              Não trabalhamos com soluções genéricas. Cada equipamento tem sua
              especificidade, e é com esse nível de atenção que atendemos toda a
              Grande São Paulo — e interior sob acordo.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5">
          {[
            { value: <><Counter to={15} />+</>, label: "Anos de mercado" },
            { value: "Grande SP", label: "Área de atuação" },
            { value: "In Loco", label: "Atendimento" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="bg-jr-black-soft border border-jr-red/25 p-8 rounded-sm">
                <div className="font-display font-black text-jr-red leading-none text-5xl md:text-6xl lg:text-7xl">
                  {s.value}
                </div>
                <div className="mt-3 font-mono-tech text-[11px] tracking-[0.2em] uppercase text-jr-gray">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== SERVIÇOS ============== */
const servicos = [
  { name: "Fatiador", desc: "Diagnóstico e reparo de lâminas, motores e sistemas de acionamento.", Icon: Slice },
  { name: "Embalador Resinite", desc: "Manutenção de resistências, rolos e mecanismos de embalagem.", Icon: Package },
  { name: "Embalador a Vácuo", desc: "Reparo de bombas, câmaras de vácuo e sistemas de selagem.", Icon: Wind },
  { name: "Ralador", desc: "Reparo de discos, motores e estruturas de processamento.", Icon: CircleDot },
  { name: "Liquidificador Industrial", desc: "Conserto de hélices, copos e sistemas de alta rotação.", Icon: Blend },
  { name: "Processador", desc: "Manutenção de engrenagens, motores e lâminas industriais.", Icon: Cog },
  { name: "Balanças", desc: "Calibração, reparo e manutenção de balanças comerciais e industriais.", Icon: Scale },
];

function Servicos() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal><span className="section-label">▸ Serviços</span></Reveal>
        <Reveal delay={100}>
          <h2 className="text-jr-white font-display uppercase mt-6 text-4xl md:text-5xl lg:text-[56px] leading-[0.95]">
            Máquinas que dominamos
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicos.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 80}>
              <div className="jr-card p-7 h-full rounded-sm">
                <s.Icon className="w-10 h-10 text-jr-white" strokeWidth={1.4} />
                <h3 className="mt-6 font-display font-bold uppercase text-jr-white text-xl tracking-wide">
                  {s.name}
                </h3>
                <div className="my-4 h-px w-10 bg-jr-gray-dark" />
                <p className="text-jr-gray text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Especialidades faixa */}
      <Reveal>
        <div className="mt-20 -mx-6 md:-mx-12 lg:-mx-20 bg-jr-red px-6 md:px-12 lg:px-20 py-14 text-center">
          <h3 className="font-display font-extrabold uppercase text-jr-black text-3xl md:text-4xl lg:text-[40px] leading-tight">
            Especialistas em máquinas de frios e máquinas a vácuo
          </h3>
          <div className="mx-auto my-5 h-[2px] w-24 bg-jr-black/40" />
          <p className="text-jr-black/75 text-base md:text-lg max-w-2xl mx-auto">
            Os segmentos de maior complexidade técnica.
            Nossa principal área de domínio.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ============== SEGMENTOS ============== */
const segmentos = [
  { name: "Açougues", Icon: Beef },
  { name: "Mercados", Icon: ShoppingCart },
  { name: "Supermercados", Icon: Store },
  { name: "Padarias", Icon: Croissant },
  { name: "Restaurantes", Icon: UtensilsCrossed },
  { name: "Indústrias", Icon: Factory },
];

function Segmentos() {
  return (
    <section className="bg-jr-black-medium py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal><span className="section-label">▸ Quem atendemos</span></Reveal>
        <Reveal delay={100}>
          <h2 className="text-jr-white font-display uppercase mt-6 text-4xl md:text-5xl lg:text-[56px] leading-[0.95]">
            Do açougue à indústria
          </h2>
        </Reveal>

        <div className="mt-14 -mx-6 md:mx-0 overflow-x-auto">
          <div className="flex items-stretch min-w-max md:min-w-0 md:justify-between gap-0 px-6 md:px-0">
            {segmentos.map((s, i) => (
              <div key={s.name} className="flex items-center">
                <Reveal delay={i * 70}>
                  <div className="flex flex-col items-center text-center px-8 py-4 min-w-[140px]">
                    <s.Icon className="w-12 h-12 text-jr-white" strokeWidth={1.3} />
                    <span className="mt-4 font-barlow font-medium text-sm uppercase tracking-wider text-jr-gray">
                      {s.name}
                    </span>
                  </div>
                </Reveal>
                {i < segmentos.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-jr-gray-dark" />
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center font-mono-tech text-xs text-jr-gray-dark tracking-wider">
          Se sua operação depende de um equipamento, a JR pode atender.
        </p>
      </div>
    </section>
  );
}

/* ============== CASES ============== */
function Placeholder({ label, Icon }: { label: "ANTES" | "DEPOIS"; Icon: typeof Slice }) {
  return (
    <div className="relative aspect-[4/3] bg-jr-black-soft border border-jr-gray-dark/50 flex items-center justify-center overflow-hidden">
      <Icon className="w-20 h-20 text-jr-gray-dark" strokeWidth={1} />
      <span
        className={`absolute top-3 left-3 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-jr-white px-2.5 py-1 backdrop-blur-sm ${
          label === "DEPOIS" ? "bg-jr-red/85" : "bg-black/70"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

const cases = [
  { title: "Fatiador industrial", Icon: Slice },
  { title: "Embalador a vácuo", Icon: Wind },
  { title: "Balança comercial", Icon: Scale },
];

function Cases() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal><span className="section-label">▸ Nossos cases</span></Reveal>
        <Reveal delay={100}>
          <h2 className="text-jr-white font-display uppercase mt-6 text-4xl md:text-5xl lg:text-[56px] leading-[0.95]">
            O antes e o depois
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-jr-gray text-lg max-w-2xl">
            Equipamentos realmente restaurados. Resultados reais.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="jr-card p-6 md:p-8 rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-center">
                  <Placeholder label="ANTES" Icon={c.Icon} />
                  <div className="flex md:flex-col items-center justify-center text-jr-red">
                    <ArrowRight className="hidden md:block w-7 h-7" />
                    <ArrowDown className="md:hidden w-7 h-7" />
                  </div>
                  <Placeholder label="DEPOIS" Icon={c.Icon} />
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[2px] w-10 bg-jr-red" />
                  <h3 className="font-display uppercase text-jr-white text-2xl tracking-wide">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-2 font-mono-tech text-xs uppercase tracking-wider text-jr-gray">
                  Restauração completa · Antes × Depois
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== GALERIA ============== */
const galeriaIcons = [Slice, Wind, Scale, Package, Blend, Cog];

function Galeria() {
  return (
    <section className="bg-jr-black-medium py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal><span className="section-label">▸ Galeria</span></Reveal>
        <Reveal delay={100}>
          <h2 className="text-jr-white font-display uppercase mt-6 text-4xl md:text-5xl lg:text-[56px] leading-[0.95]">
            Máquinas restauradas
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-jr-gray text-lg max-w-2xl">
            Uma seleção de equipamentos que voltaram à operação pelas mãos da JR.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5">
          {galeriaIcons.map((Icon, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <div className="relative aspect-square bg-jr-black-soft border border-jr-red/20 flex items-center justify-center group overflow-hidden">
                <Icon className="w-16 h-16 text-jr-gray-dark group-hover:text-jr-red transition-colors duration-500" strokeWidth={1} />
                <span className="absolute bottom-3 left-3 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-jr-gray">
                  Foto {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== DIFERENCIAIS ============== */
const diferenciais = [
  { title: "Atendimento in loco", desc: "Vamos até onde a máquina está. Sem necessidade de transporte ou desmontagem.", Icon: MapPin },
  { title: "Rapidez no diagnóstico", desc: "Equipe treinada para diagnóstico rápido, com mínimo tempo de máquina parada.", Icon: Zap },
  { title: "15 anos de especialização", desc: "Conhecimento acumulado em décadas de serviço no segmento industrial.", Icon: Wrench },
  { title: "Grande São Paulo", desc: "Cobertura completa da Grande SP. Interior sob acordo.", Icon: MapIcon },
  { title: "Especialistas em frios e vácuo", desc: "Os maquinários mais críticos e complexos são nossa principal especialidade.", Icon: Snowflake },
  { title: "Atendimento a qualquer segmento", desc: "Açougues, mercados, padarias, restaurantes, indústrias — atendemos toda a cadeia.", Icon: Handshake },
];

function Diferenciais() {
  return (
    <section className="bg-jr-red py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-jr-black font-display font-black uppercase text-center text-5xl md:text-6xl lg:text-[64px] leading-[0.95]">
            Por que a JR?
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-12">
          {diferenciais.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 80}>
              <div className="flex gap-5">
                <d.Icon className="w-9 h-9 shrink-0 text-jr-black mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display font-bold uppercase text-jr-black text-2xl tracking-wide">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-jr-black/75 text-[15px] leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== FOOTER ============== */
function Footer() {
  return (
    <footer className="bg-jr-black border-t-2 border-jr-red py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-extrabold uppercase text-jr-white text-3xl md:text-[32px] tracking-wide">
          JR Balanças e Máquinas
        </h2>
        <p className="mt-2 text-jr-gray-dark text-sm">
          Especialistas em maquinário industrial · Desde 2009
        </p>

        <div className="my-10 h-px bg-jr-gray-dark" />

        <div className="grid md:grid-cols-3 gap-10 font-mono-tech text-sm text-jr-gray">
          <div>
            <div className="flex items-center gap-2 text-jr-white">
              <Phone className="w-4 h-4 text-jr-red" />
              <span className="uppercase tracking-[0.18em] text-[11px] text-jr-gray-dark">Telefone</span>
            </div>
            <p className="mt-3 text-jr-white text-base">(11) 99480-3895</p>
            <p className="mt-1 flex items-center gap-2 text-jr-gray text-xs">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp disponível
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-jr-white">
              <MapPin className="w-4 h-4 text-jr-red" />
              <span className="uppercase tracking-[0.18em] text-[11px] text-jr-gray-dark">Atuação</span>
            </div>
            <p className="mt-3 text-jr-white text-base">Grande São Paulo</p>
            <p className="mt-1 text-jr-gray text-xs">Interior sob acordo</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-jr-white">
              <Wrench className="w-4 h-4 text-jr-red" />
              <span className="uppercase tracking-[0.18em] text-[11px] text-jr-gray-dark">Atendimento</span>
            </div>
            <p className="mt-3 text-jr-white text-base">In loco</p>
            <p className="mt-1 text-jr-gray text-xs">Onde sua máquina está</p>
          </div>
        </div>

        <div className="mt-16 text-center font-mono-tech text-[11px] text-jr-gray-dark tracking-wider">
          © 2026 JR Balanças e Máquinas · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
