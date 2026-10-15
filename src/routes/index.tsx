import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Share2, MapPin, Instagram, Mail, Copy, Check, FileText, Link2, Heart, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import portrait from '@/assets/lucas-portrait.jpg';
import project from '@/assets/forma-project.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Lucas Martins — Design, ideias e conexões | elo' },
    { name: 'description', content: 'O pequeno universo de Lucas Martins. Design independente, projetos selecionados, referências e boas conversas.' },
    { property: 'og:title', content: 'Lucas Martins — Meu pequeno universo' },
    { property: 'og:description', content: 'Design, projetos, ideias e conexões em um só lugar.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

type Modal = 'about' | 'project' | 'contact' | 'notes' | 'share' | null;
function Index() {
  const [modal, setModal] = useState<Modal>(null);
  const [copied, setCopied] = useState(false);
  const open = (value: Modal) => { setCopied(false); setModal(value); };
  const copy = async (text: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(true); }
    catch { setCopied(false); }
  };
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="wordmark min-w-0">elo<span className="wordmark-dot">.</span><span className="header-caption">um pouco de mim, em cada link.</span></div>
        <Button variant="outline" className="share-button shrink-0" onClick={() => open('share')} aria-label="Compartilhar perfil"><Share2 size={13} /><span className="hidden sm:inline">Compartilhar</span></Button>
      </header>
      <main>
        <div className="section-label"><span /> MEU PEQUENO UNIVERSO</div>
        <div className="bento-grid">
          <section className="tile profile-tile">
            <div className="profile-top"><img src={portrait} alt="Retrato de Lucas Martins" className="portrait" width={72} height={72} /><span className="availability"><span className="status-dot" />Disponível para projetos</span></div>
            <h1>Oi, eu sou o Lucas<span> ✳</span></h1>
            <p className="profile-description"><strong>Designer independente & curioso por natureza.</strong> Transformo ideias em experiências digitais com propósito e personalidade.</p>
            <div className="profile-bottom"><span className="location-line"><MapPin size={13} />São Paulo, Brasil</span><Button variant="ghost" className="about-button" onClick={() => open('about')}>Mais sobre mim <ArrowUpRight size={13} /></Button></div>
          </section>
          <a className="tile tile-link project-tile" href="#projeto-forma" onClick={e => { e.preventDefault(); open('project'); }} aria-label="Ver projeto Forma Studio">
            <div className="project-topline"><span className="eyebrow">PROJETO EM DESTAQUE</span><ArrowUpRight size={19} /></div>
            <img src={project} alt="Escultura cromada em forma de laço sobre fundo verde-lima, projeto Forma Studio" className="project-photo" width={1280} height={896} />
            <div className="project-info"><div><h2 className="project-title">forma®</h2><p className="project-caption">Identidade visual & direção de arte</p></div><span className="arrow-badge"><ArrowUpRight size={15} /></span></div>
          </a>
          <a className="tile tile-link social-tile instagram-tile" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><div className="social-top"><Instagram size={26} strokeWidth={1.6} /><ArrowUpRight size={18} /></div><h2>Instagram</h2><p>Entre ideias e bastidores.</p></a>
          <a className="tile tile-link social-tile behance-tile" href="https://www.behance.net/" target="_blank" rel="noreferrer"><div className="social-top"><span className="behance-icon">Bē</span><ArrowUpRight size={18} /></div><h2>Behance</h2><p>Projetos que ganham vida.</p></a>
          <a className="tile tile-link contact-tile" href="#contato" onClick={e => { e.preventDefault(); open('contact'); }}><Mail size={23} strokeWidth={1.5} /><h2>Boas ideias começam<br />com uma conversa.</h2><p>Tem um projeto em mente? Vamos conversar.</p><ArrowUpRight size={27} className="contact-arrow" /></a>
          <a className="tile tile-link music-tile" href="https://open.spotify.com/search/Tame%20Impala%20The%20Less%20I%20Know%20The%20Better" target="_blank" rel="noreferrer" aria-label="Ouvir The Less I Know The Better no Spotify"><div className="music-top"><Music2 size={14} /><span>NA MINHA PLAYLIST</span><ArrowUpRight size={12} className="ml-auto" /></div><div className="music-content"><div className="album-cover">SLOW<br />GROOVES<span className="text-[8px] mt-1 font-normal">VOL. 01</span></div><div className="min-w-0"><h2 className="song-title truncate">The Less I Know The Better</h2><p className="artist-name">Tame Impala · Currents</p></div><div className="music-bars" aria-hidden="true"><i /><i /><i /><i /></div></div></a>
          <a className="tile tile-link notes-tile" href="#notas" onClick={e => { e.preventDefault(); open('notes'); }}><div className="social-top"><FileText size={22} strokeWidth={1.4} /><ArrowUpRight size={16} /></div><h2>Notas soltas</h2><p>Ideias fora do artboard.</p></a>
          <a className="tile tile-link map-tile" href="https://www.google.com/maps/place/S%C3%A3o+Paulo" target="_blank" rel="noreferrer" aria-label="Ver São Paulo no mapa"><svg viewBox="0 0 245 164" className="map-art" aria-hidden="true"><path d="M-20 42L265 120M35-10L110 180M177-10L90 175" /><path className="small-road" d="M-10 10L230 80M-10 76L240 147M66-10L150 175M110-10L200 175M225-10L135 175M15 110L230 10" /></svg><div className="map-pin"><span /></div><div className="map-caption">São Paulo <small>Criando daqui para o mundo.</small></div></a>
        </div>
      </main>
      <footer className="page-footer"><span className="footer-message">Feito com intenção. E um pouco de <Heart size={10} />.</span><span>Conectado por <span className="footer-mark">elo<span className="wordmark-dot">.</span></span></span></footer>
      <Dialog open={modal !== null} onOpenChange={value => { if (!value) setModal(null); }}>
        <DialogContent className="max-w-lg w-[calc(100%-32px)] rounded-lg bg-card">
          <DialogHeader><DialogTitle className="font-display text-2xl">{modal === 'about' ? 'Prazer, Lucas.' : modal === 'project' ? 'Forma® Studio' : modal === 'contact' ? 'Vamos criar algo juntos?' : modal === 'notes' ? 'Notas soltas' : 'Conexões merecem ser compartilhadas.'}</DialogTitle><DialogDescription>{modal === 'about' ? 'Design independente, curiosidade sem limites.' : modal === 'project' ? 'Identidade visual · Direção de arte · 2026' : modal === 'contact' ? 'Toda boa parceria começa com um oi.' : modal === 'notes' ? 'Um espaço para pensar além da tela.' : 'Leve este pequeno universo para alguém.'}</DialogDescription></DialogHeader>
          {modal === 'about' && <><img src={portrait} alt="Lucas Martins" width={96} height={96} className="h-24 w-24 rounded-full object-cover my-2" /><p className="dialog-copy">Sou um designer independente baseado em São Paulo. Gosto de conectar estratégia e sensibilidade para criar identidades e experiências digitais que fazem sentido.</p><p className="dialog-copy">Fora do trabalho, você me encontra descobrindo um álbum, fotografando a cidade ou anotando a próxima ideia.</p><p className="text-xs text-muted-foreground">Perfil fictício de demonstração. Fotografia gerada por IA.</p><Button onClick={() => open('contact')}>Vamos conversar <ArrowRight /></Button></>}
          {modal === 'project' && <><img src={project} className="dialog-image" alt="Objeto cromado do projeto Forma" width={1280} height={896} /><p className="dialog-copy">Uma identidade que explora o encontro entre a precisão das formas e a liberdade do movimento. Metal, cor e tipografia dão vida a um estúdio que está sempre se transformando.</p><div className="flex flex-wrap gap-2 text-xs text-muted-foreground"><span>Branding</span><span>·</span><span>3D & experimentação</span><span>·</span><span>Projeto conceitual</span></div><Button onClick={() => open('contact')}>Vamos criar o seu próximo projeto <ArrowUpRight /></Button></>}
          {modal === 'contact' && <><p className="dialog-copy">Conte um pouco sobre sua ideia, os desafios e o que você quer colocar no mundo.</p><div className="email-row"><span className="min-w-0 truncate">ola@exemplo.com</span><Button variant="ghost" size="icon" aria-label="Copiar e-mail" onClick={() => copy('ola@exemplo.com')}>{copied ? <Check /> : <Copy />}</Button></div><p className="text-xs text-muted-foreground">E-mail ilustrativo. Substitua pelo seu contato antes de compartilhar.</p><Button asChild><a href="mailto:ola@exemplo.com?subject=Vamos%20criar%20algo%20juntos">Escrever um e-mail <ArrowUpRight /></a></Button>{copied && <p role="status" className="text-sm text-primary">E-mail copiado!</p>}</>}
          {modal === 'notes' && <><article className="article-entry"><span className="text-xs text-muted-foreground">12 OUT 2026 · 2 MIN DE LEITURA</span><h3>Nem toda ideia precisa virar projeto.</h3><p className="dialog-copy">Algumas ideias só precisam de espaço. Um caderno, uma conversa, um passeio sem destino. Dar tempo para uma ideia respirar também faz parte do processo criativo.</p></article><article className="article-entry"><span className="text-xs text-muted-foreground">05 OUT 2026 · 1 MIN DE LEITURA</span><h3>Menos ruído, mais intenção.</h3><p className="dialog-copy">Antes de adicionar mais um elemento, pergunte: o que ele muda? O design que me interessa não é o que grita mais alto, mas o que encontra a forma certa de dizer.</p></article></>}
          {modal === 'share' && <><div className="flex justify-center py-5 text-primary"><Link2 size={42} strokeWidth={1.5} /></div><p className="dialog-copy">Compartilhe o perfil com quem também acredita no poder das boas conexões.</p><Button onClick={() => copy(window.location.href)}>{copied ? <Check /> : <Copy />}{copied ? 'Link copiado!' : 'Copiar link do perfil'}</Button>{copied && <span className="sr-only" role="status">Link do perfil copiado.</span>}</>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
