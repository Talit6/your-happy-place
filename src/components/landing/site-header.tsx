import { useState } from "react";
import { Menu, PawPrint, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SiteHeaderProps {
  onBuy: () => void;
}

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#historia", label: "Nossa ideia" },
  { href: "#oferta", label: "O kit" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
];

export function SiteHeader({ onBuy }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="announcement">
        <span>Um carinho a mais para a rotina de quem você ama</span>
        <span className="announcement-divider" aria-hidden="true">✦</span>
        <span>Oferta ilustrativa • frete a definir na loja real</span>
      </div>
      <header className="site-header">
        <div className="container-shell header-inner">
          <a href="#inicio" className="brand" aria-label="PataFeliz, voltar ao início" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark"><PawPrint size={22} strokeWidth={2.4} /></span>
            <span>Pata<span className="brand-accent">Feliz</span><span className="brand-dot">.</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <div className="header-actions">
            <Button variant="hero" size="pill" onClick={onBuy} className="header-buy">Comprar agora</Button>
            <Button variant="ghost" size="icon" className="menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação móvel">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          <Button variant="hero" size="pill" onClick={() => { setMenuOpen(false); onBuy(); }}>Comprar agora</Button>
        </nav>}
      </header>
    </>
  );
}