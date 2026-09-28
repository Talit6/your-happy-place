import { ArrowRight, BadgeCheck, Check, Gift, Heart, LockKeyhole, PawPrint, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/patafeliz-hero-wide.jpg";
import mobileHeroImage from "@/assets/patafeliz-hero.jpg";
import storyImage from "@/assets/patafeliz-story.jpg";
import kitImage from "@/assets/patafeliz-kit.jpg";

interface ActionProps { onBuy: () => void }

export function Hero() {
  return <section id="inicio" className="hero">
    <div className="hero-visual">
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileHeroImage} />
        <img src={heroImage} alt="Cachorro e gato descansando juntos em uma casa iluminada" width={1920} height={1104} fetchPriority="high" />
      </picture>
    </div>
    <div className="container-shell hero-content">
      <div className="hero-copy">
        <span className="hero-eyebrow"><PawPrint size={15} /> PARA QUEM AMA DE VERDADE</span>
        <h1>Seu pet merece uma rotina <em>mais feliz.</em></h1>
        <p>Os melhores momentos moram nos pequenos cuidados. Conheça um kit pensado para transformar carinho em passeios, brincadeiras e conexão todos os dias.</p>
        <div className="hero-buttons">
          <Button asChild variant="hero" size="wide"><a href="#oferta">Quero cuidar melhor <ArrowRight /></a></Button>
          <Button asChild variant="subtle" size="wide"><a href="#beneficios">Conhecer o kit</a></Button>
        </div>
        <div className="hero-trust"><span className="trust-icon"><Heart size={17} fill="currentColor" /></span><span>Mais presença. Mais brincadeira. Mais momentos juntos.</span></div>
      </div>
      <div className="hero-seal" aria-label="Feito com carinho para cães e gatos"><PawPrint size={19} /><span>FEITO COM<br /><b>CARINHO</b></span></div>
    </div>
  </section>;
}

export function CredibilityStrip() {
  return <div className="credibility-strip"><div className="container-shell credibility-inner">
    <span><Heart size={22} /> Cuidado em cada detalhe</span>
    <span><Sparkles size={22} /> Mais momentos de alegria</span>
    <span><PawPrint size={22} /> Pensado para a vida com pets</span>
    <span><Gift size={22} /> Uma experiência para compartilhar</span>
  </div></div>;
}

const benefits = [
  { icon: Heart, number: "01", title: "Conexão que se sente", text: "Pequenos rituais de cuidado que deixam o tempo juntos ainda mais especial." },
  { icon: Sparkles, number: "02", title: "Diversão todos os dias", text: "Mais oportunidades para brincar, explorar e sair da mesmice da rotina." },
  { icon: ShieldCheck, number: "03", title: "Cuidado com intenção", text: "Uma seleção ilustrativa que reúne passeio, brincadeira e atenção em um só lugar." },
];

export function Benefits() {
  return <section id="beneficios" className="benefits-section section-pad"><div className="container-shell">
    <div className="section-heading centered"><p className="eyebrow">UM JEITO NOVO DE CUIDAR</p><h2 className="section-title">Por que escolher o <em>PataFeliz?</em></h2><p className="section-copy">Porque o amor aparece nos detalhes de cada dia.</p></div>
    <div className="benefits-grid">{benefits.map(({ icon: Icon, number, title, text }) => <article className="benefit-card" key={number}>
      <div className="benefit-top"><span className="benefit-icon"><Icon size={28} strokeWidth={1.75} /></span><span className="benefit-number">{number} / 03</span></div>
      <h3>{title}</h3><p>{text}</p>
    </article>)}</div>
  </div></section>;
}

export function Story() {
  return <section id="historia" className="story-section section-pad"><div className="container-shell story-grid">
    <div className="story-image-wrap"><img src={storyImage} alt="Pessoa acariciando seu cachorro enquanto um gato descansa por perto" loading="lazy" width={1104} height={1200} /><span className="story-sticker"><Heart size={20} fill="currentColor" /> AMOR EM CADA DETALHE</span></div>
    <div className="story-content"><p className="eyebrow">A GENTE ENTENDE ESSE AMOR</p><h2 className="section-title">Porque seu pet não é <em>só um pet.</em></h2><p className="section-copy">É quem te recebe na porta. Quem transforma um dia difícil em um abraço sem palavras. Quem faz da casa um lar.</p><p className="section-copy">Por isso, imaginamos o Kit PataFeliz: um convite para desacelerar e viver mais desses momentos juntos.</p>
      <ul className="check-list"><li><Check /> Mais tempo de qualidade</li><li><Check /> Brincadeiras que aproximam</li><li><Check /> Pequenos cuidados, grandes memórias</li></ul>
      <Button asChild variant="hero" size="wide"><a href="#oferta">Ver a oferta <ArrowRight /></a></Button>
    </div>
  </div></section>;
}

export function Offer({ onBuy }: ActionProps) {
  return <section id="oferta" className="offer-section section-pad"><div className="container-shell">
    <div className="section-heading centered"><p className="eyebrow">UM PRESENTE PARA A ROTINA DE VOCÊS</p><h2 className="section-title">Conheça o <em>Kit PataFeliz.</em></h2><p className="section-copy">Tudo o que importa, reunido em uma ideia cheia de carinho.</p></div>
    <div className="offer-layout"><div className="offer-image"><img src={kitImage} alt="Representação ilustrativa do Kit PataFeliz: guia, brinquedo, bolsinha e escova" loading="lazy" width={1104} height={1104} /><span className="offer-image-note">Imagem ilustrativa do kit</span></div>
      <div className="offer-details"><span className="offer-kicker"><BadgeCheck size={16} /> NOSSA SELEÇÃO ESPECIAL</span><h3>Kit PataFeliz</h3><p className="offer-intro">Mais do que itens para o dia a dia, uma desculpa perfeita para criar novas memórias juntos.</p>
        <div className="offer-divider" /><p className="offer-includes-title">O que você recebe nesta proposta:</p>
        <ul className="offer-includes"><li><Check /> Guia para os passeios juntos</li><li><Check /> Brinquedo para momentos de diversão</li><li><Check /> Bolsinha para petiscos</li><li><Check /> Escova de cuidados</li></ul>
        <div className="offer-divider" /><div className="price-line"><span>De <s>R$ 199,90</s> por</span><span className="discount-badge">25% OFF</span></div>
        <div className="price">R$ 149,90</div><p className="installments">ou 2x de R$ 74,95 • valores ilustrativos</p>
        <Button variant="hero" size="wide" className="w-full offer-button" onClick={onBuy}>Quero o meu kit <ArrowRight /></Button>
        <p className="offer-safe"><LockKeyhole size={15} /> Checkout demonstrativo, sem cobrança real</p>
      </div>
    </div>
  </div></section>;
}

const testimonials = [
  { quote: "A ideia de dedicar um tempinho só para brincar com meu cachorro mudou a forma como vejo a nossa rotina.", name: "Marina & Bento", pet: "Tutora de cachorro" },
  { quote: "É sobre criar aqueles momentos simples que viram as melhores lembranças com quem está sempre ao nosso lado.", name: "Rafaela & Mia", pet: "Tutora de gata" },
  { quote: "Adorei a proposta de reunir cuidado e diversão em um único kit. Uma ideia que dá vontade de compartilhar.", name: "Lucas & Sol", pet: "Tutor de cachorro" },
];

export function Testimonials() {
  return <section id="depoimentos" className="testimonials-section section-pad"><div className="container-shell">
    <div className="section-heading centered"><p className="eyebrow">HISTÓRIAS QUE INSPIRAM</p><h2 className="section-title">Todo amor tem uma <em>história.</em></h2><p className="section-copy">Depoimentos fictícios apresentados apenas como exemplo desta página.</p></div>
    <div className="testimonials-grid">{testimonials.map(({ quote, name, pet }) => <article className="testimonial-card" key={name}>
      <span className="quote-mark" aria-hidden="true">“</span><blockquote>{quote}</blockquote><div className="testimonial-person"><span className="testimonial-avatar"><PawPrint size={20} /></span><div><strong>{name}</strong><small>{pet} • exemplo fictício</small></div></div>
    </article>)}</div>
  </div></section>;
}

export function ClosingCTA() {
  return <section className="closing-section"><div className="container-shell closing-content"><span className="closing-icon"><PawPrint size={27} /></span><p className="eyebrow">O PRÓXIMO CAPÍTULO COMEÇA AQUI</p><h2>Mais amor na rotina.<br /><em>Mais felicidade em cada pata.</em></h2><p>Para eles, o melhor presente sempre vai ser estar perto de você.</p><Button asChild variant="light" size="wide"><a href="#oferta">Quero conhecer o kit <ArrowRight /></a></Button></div></section>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container-shell footer-top"><div><a href="#inicio" className="brand footer-brand"><span className="brand-mark"><PawPrint size={21} /></span><span>Pata<span className="brand-accent">Feliz</span><span className="brand-dot">.</span></span></a><p>Porque felicidade é estar junto.</p></div><nav aria-label="Links do rodapé"><a href="#beneficios">Benefícios</a><a href="#historia">Nossa ideia</a><a href="#oferta">O kit</a><a href="#depoimentos">Depoimentos</a><a href="#faq">Dúvidas</a></nav></div><div className="container-shell footer-bottom"><span>© {new Date().getFullYear()} PataFeliz. Projeto demonstrativo.</span><span><Truck size={15} /> Frete e entrega serão definidos em uma loja real.</span></div></footer>;
}