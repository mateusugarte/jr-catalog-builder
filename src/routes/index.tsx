import { createFileRoute } from "@tanstack/react-router";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import jrLogo from "@/assets/jr-logo.jpeg";
import {
  ChevronDown,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
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
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Segmentos />
      <Cases />
      <Galeria />
      <Clientes />
      <Diferenciais />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

/* ============== HEADER ============== */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-jr-black/80 border-b border-jr-red/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-12 lg:px-20 py-2.5 md:py-3">
        <div className="flex items-center gap-2.5 md:gap-3 min-w-0">
          <img
            src={jrLogo}
            alt="JR Balanças e Máquinas"
            className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full border-2 border-jr-red/60 shadow-[0_0_18px_oklch(0.535_0.215_25/0.35)] shrink-0"
          />
          <div className="leading-tight min-w-0">
            <div className="font-display font-black uppercase text-jr-white text-sm md:text-lg tracking-wide truncate">
              JR Balanças <span className="text-jr-red">&</span> Máquinas
            </div>
            <div className="font-mono-tech text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-jr-gray-dark">
              Desde 2009 · Grande SP
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/5511960477538?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="hidden sm:inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider uppercase text-jr-white bg-jr-red hover:bg-jr-red-vivid px-4 py-2.5 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href="https://wa.me/5511960477538?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-jr-red text-jr-white shrink-0 active:scale-95 transition"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

/* ============== FLOATING WHATSAPP ============== */
function FloatingWhats() {
  return (
    <a
      href="https://wa.me/5511960477538?utm_source=chatgpt.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="md:hidden fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-jr-red text-jr-white shadow-[0_8px_30px_oklch(0.535_0.215_25/0.55)] active:scale-95 transition"
    >
      <span className="absolute inset-0 rounded-full bg-jr-red/40 animate-ping" />
      <MessageCircle className="w-6 h-6 relative" />
    </a>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-5 md:px-12 lg:px-20 pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-7 md:mb-8">
            <img
              src={jrLogo}
              alt="JR Balanças e Máquinas"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-jr-red shadow-[0_0_30px_oklch(0.535_0.215_25/0.45)]"
            />
            <div>
              <div className="font-display font-black uppercase text-jr-white text-xl sm:text-2xl md:text-4xl leading-none">
                JR Balanças <span className="text-jr-red">&</span> Máquinas
              </div>
              <div className="mt-1.5 font-mono-tech text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] uppercase text-jr-gray">
                15 anos · Grande São Paulo
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="inline-flex items-center gap-2 border border-jr-red/60 px-3 py-1.5 text-jr-white font-mono-tech text-[10px] sm:text-[11px] tracking-[0.18em] uppercase">
            <span className="text-jr-red">▸</span> Atendimento No Local
          </span>
        </Reveal>

        <Reveal delay={200}>
          <h1
            className="font-display font-black uppercase leading-[0.92] mt-6 md:mt-8 text-jr-white"
            style={{ fontSize: "clamp(38px, 9vw, 110px)" }}
          >
            Conserto e manutenção
            <br />
            de maquinário <span className="text-jr-red">industrial</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 md:mt-8 text-jr-gray font-sans text-[15px] md:text-lg max-w-2xl leading-relaxed">
            15 anos de expertise. Atendimento rápido onde sua máquina está.
            Especialistas em máquinas de frios e a vácuo.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-7 md:mt-9">
            <a
              href="https://wa.me/5511960477538?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-jr-red text-jr-white font-mono-tech text-xs tracking-[0.18em] uppercase px-6 py-4 hover:bg-jr-red-vivid transition-colors active:scale-[0.98] shadow-[0_8px_30px_oklch(0.535_0.215_25/0.4)]"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={440}>
          <div className="accent-bar mt-8 md:mt-10" />
        </Reveal>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 text-jr-red animate-bounce-down">
        <ChevronDown className="w-6 h-6 md:w-7 md:h-7" />
      </div>
    </section>
  );
}

/* ============== SOBRE ============== */
function Sobre() {
  return (
    <section className="relative bg-jr-black-medium py-16 md:py-32 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div>
          <Reveal>
            <span className="section-label">▸ Sobre a JR</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-jr-white font-display uppercase leading-[0.95] mt-5 md:mt-6 text-[34px] sm:text-4xl md:text-5xl lg:text-[56px]">
              Autoridade em maquinário industrial há 15 anos
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 md:mt-8 text-jr-gray text-[15px] md:text-base leading-[1.75]">
              A JR Balanças e Máquinas nasceu do chão de fábrica — do contato direto
              com açougues, mercados e indústrias que não podem parar. Em 15 anos,
              construímos uma reputação baseada em diagnóstico rápido, reparo
              eficiente e atendimento no local onde a sua máquina opera.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-6 text-jr-white text-[15px] md:text-base leading-[1.75] border-l-[3px] border-jr-red pl-4 md:pl-5">
              Não trabalhamos com soluções genéricas. Cada equipamento tem sua
              especificidade, e é com esse nível de atenção que atendemos toda a
              Grande São Paulo — e interior sob acordo.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-5">
          {[
            { value: <><Counter to={15} />+</>, label: "Anos de mercado" },
            { value: "GRSP", lgValue: "Grande SP", label: "Área de atuação" },
            { value: "No Local", label: "Atendimento" },
          ].map((s: any, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="bg-jr-black-soft border border-jr-red/25 p-4 sm:p-6 lg:p-8 rounded-sm h-full">
                <div className="font-display font-black text-jr-red leading-none text-3xl sm:text-4xl lg:text-7xl">
                  <span className="lg:hidden">{s.value}</span>
                  <span className="hidden lg:inline">{s.lgValue ?? s.value}</span>
                </div>
                <div className="mt-2 lg:mt-3 font-mono-tech text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.18em] uppercase text-jr-gray leading-tight">
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
    <section className="relative py-16 md:py-32 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal><span className="section-label">▸ Serviços</span></Reveal>
        <Reveal delay={100}>
          <h2 className="text-jr-white font-display uppercase mt-5 md:mt-6 text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[0.95]">
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
        <div className="mt-20 -mx-5 md:-mx-12 lg:-mx-20 bg-jr-red px-5 md:px-12 lg:px-20 py-12 md:py-14 text-center">
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
];

function Segmentos() {
  const loop = [...segmentos, ...segmentos];
  return (
    <section className="bg-jr-black-medium py-16 md:py-32 px-5 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal><span className="section-label">▸ Quem atendemos</span></Reveal>
        <Reveal delay={100}>
          <h2 className="text-jr-white font-display uppercase mt-5 md:mt-6 text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[0.95]">
            Do açougue ao restaurante
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee">
          {loop.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center text-center px-10 py-4 min-w-[160px]">
                <s.Icon className="w-12 h-12 text-jr-white" strokeWidth={1.3} />
                <span className="mt-4 font-barlow font-medium text-sm uppercase tracking-wider text-jr-gray whitespace-nowrap">
                  {s.name}
                </span>
              </div>
              <div className="w-px h-16 bg-jr-gray-dark" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <p className="mt-12 text-center font-mono-tech text-xs text-jr-gray-dark tracking-wider">
          Se sua operação depende de um equipamento, a JR pode atender.
        </p>
      </div>
    </section>
  );
}

/* ============== CASES (Antes × Depois) ============== */
const SUPABASE_BASE = "https://jlzckqjggdzpzqiuvgcv.supabase.co/storage/v1/object/public/jr%20maquinas";

const reparos = [
  {
    antes: `${SUPABASE_BASE}/antes%201.jpeg`,
    depois: `${SUPABASE_BASE}/depois%201.jpeg`,
  },
  {
    antes: `${SUPABASE_BASE}/antes%202.jpeg`,
    depois: `${SUPABASE_BASE}/depois%202.jpeg`,
  },
  {
    antes: `${SUPABASE_BASE}/antes%203.jpeg`,
    depois: `${SUPABASE_BASE}/depois%203.jpeg`,
  },
  {
    antes: `${SUPABASE_BASE}/antes%204.jpeg`,
    depois: `${SUPABASE_BASE}/depois%204.jpeg`,
  },
];

function CaseImage({ src, label }: { src: string; label: "ANTES" | "DEPOIS" }) {
  return (
    <div className="relative aspect-[4/3] bg-jr-black-soft border border-jr-gray-dark/50 overflow-hidden">
      <img src={src} alt={label} loading="lazy" className="w-full h-full object-cover" />
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

function Cases() {
  return (
    <section className="py-16 md:py-32 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal><span className="section-label">▸ Nossos cases</span></Reveal>
        <Reveal delay={100}>
          <h2 className="text-jr-white font-display uppercase mt-5 md:mt-6 text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[0.95]">
            O antes e o depois
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-5 md:mt-6 text-jr-gray text-[15px] md:text-lg max-w-2xl">
            Equipamentos realmente restaurados. Resultados reais.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-16 grid lg:grid-cols-2 gap-6 md:gap-8">
          {reparos.map((r, i) => (
            <Reveal key={i} delay={(i % 2) * 100}>
              <div className="jr-card p-4 sm:p-6 md:p-8 rounded-sm">
                <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-3 items-center">
                  <CaseImage src={r.antes} label="ANTES" />
                  <div className="hidden md:flex flex-col items-center justify-center text-jr-red">
                    <ArrowRight className="w-7 h-7" />
                  </div>
                  <CaseImage src={r.depois} label="DEPOIS" />
                </div>
                <div className="mt-5 md:mt-6 flex items-center gap-3">
                  <div className="h-[2px] w-8 md:w-10 bg-jr-red" />
                  <h3 className="font-display uppercase text-jr-white text-xl md:text-2xl tracking-wide">
                    Antes × Depois
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== GALERIA — Máquinas Prontas ============== */
const MAQUINAS_BASE = `${SUPABASE_BASE}/MAQUINAS%20PRONTAS`;
const maquinasPronas = [
  `${MAQUINAS_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.12.33.jpeg`,
  `${MAQUINAS_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.12.34%20(1).jpeg`,
  `${MAQUINAS_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.12.34.jpeg`,
  `${MAQUINAS_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.12.35.jpeg`,
  `${MAQUINAS_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.12.37.jpeg`,
  `${MAQUINAS_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.12.38%20(1).jpeg`,
  `${MAQUINAS_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.12.38.jpeg`,
];

function Galeria() {
  return (
    <section className="bg-jr-black-medium py-16 md:py-32 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal><span className="section-label">▸ Máquinas reparadas</span></Reveal>
        <Reveal delay={100}>
          <h2 className="text-jr-white font-display uppercase mt-5 md:mt-6 text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[0.95]">
            Prontas para operar
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-jr-gray text-lg max-w-2xl">
            Equipamentos entregues após reparo completo pela JR.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {maquinasPronas.map((src, i) => (
            <Reveal key={i} delay={(i % 4) * 70}>
              <div className="relative aspect-square bg-jr-black-soft border border-jr-red/20 overflow-hidden group">
                <img
                  src={src}
                  alt={`Máquina reparada ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== CLIENTES / EMPRESAS ATENDIDAS ============== */
const CLIENTES_BASE = `${SUPABASE_BASE}/Untitled%20folder`;
const clientes = [
  `${CLIENTES_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.14.49.jpeg`,
  `${CLIENTES_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.14.50.jpeg`,
  `${CLIENTES_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.14.51%20(1).jpeg`,
  `${CLIENTES_BASE}/WhatsApp%20Image%202026-05-11%20at%2010.14.51.jpeg`,
];

function Clientes() {
  const loop = [...clientes, ...clientes];
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <Reveal><span className="section-label">▸ Clientes</span></Reveal>
        <Reveal delay={100}>
          <h2 className="text-jr-white font-display uppercase mt-5 md:mt-6 text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[0.95]">
            Empresas que confiam na JR
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-jr-gray text-lg max-w-2xl">
            Algumas das empresas que já contaram com nosso atendimento.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 pr-5">
          {loop.map((src, i) => (
            <div
              key={i}
              className="relative w-[260px] md:w-[320px] aspect-square shrink-0 bg-jr-black-soft border border-jr-red/20 overflow-hidden"
            >
              <img
                src={src}
                alt={`Empresa atendida ${(i % clientes.length) + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== DIFERENCIAIS ============== */
const diferenciais = [
  { title: "Atendimento no local", desc: "Vamos até onde a máquina está. Sem necessidade de transporte ou desmontagem.", Icon: MapPin },
  { title: "Rapidez no diagnóstico", desc: "Equipe treinada para diagnóstico rápido, com mínimo tempo de máquina parada.", Icon: Zap },
  { title: "15 anos de especialização", desc: "Conhecimento acumulado em décadas de serviço no segmento industrial.", Icon: Wrench },
  { title: "Grande São Paulo", desc: "Cobertura completa da Grande SP. Interior sob acordo.", Icon: MapIcon },
  { title: "Especialistas em frios e vácuo", desc: "Os maquinários mais críticos e complexos são nossa principal especialidade.", Icon: Snowflake },
  { title: "Atendimento a qualquer segmento", desc: "Açougues, mercados, padarias, restaurantes, indústrias — atendemos toda a cadeia.", Icon: Handshake },
];

function Diferenciais() {
  return (
    <section className="bg-jr-red py-16 md:py-32 px-5 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-jr-black font-display font-black uppercase text-center text-[40px] sm:text-5xl md:text-6xl lg:text-[64px] leading-[0.95]">
            Por que a JR?
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-16 grid md:grid-cols-2 gap-x-12 gap-y-9 md:gap-y-12">
          {diferenciais.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 80}>
              <div className="flex gap-4 md:gap-5">
                <d.Icon className="w-8 h-8 md:w-9 md:h-9 shrink-0 text-jr-black mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display font-bold uppercase text-jr-black text-xl md:text-2xl tracking-wide">
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
    <footer className="bg-jr-black border-t-2 border-jr-red py-14 md:py-20 px-5 md:px-12 lg:px-20 pb-24 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img
            src={jrLogo}
            alt="JR Balanças e Máquinas"
            className="w-16 h-16 object-cover rounded-full border-2 border-jr-red/50 shadow-[0_0_20px_oklch(0.535_0.215_25/0.35)]"
          />
          <div>
            <h2 className="font-display font-extrabold uppercase text-jr-white text-3xl md:text-[32px] tracking-wide leading-none">
              JR Balanças <span className="text-jr-red">&</span> Máquinas
            </h2>
            <p className="mt-2 text-jr-gray-dark text-sm">
              Especialistas em maquinário industrial · Desde 2009
            </p>
          </div>
        </div>

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
            <p className="mt-3 text-jr-white text-base">No local</p>
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
