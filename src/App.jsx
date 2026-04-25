import { useState } from "react";

const AULAS = [
  {
    id: 1,
    titulo: "Treino Saco de Pancada",
    descricao: "Técnica correta no saco para desenvolver potência e condicionamento.",
    duracao: "18 min",
    nivel: "Iniciante",
    gratis: true,
    thumb: "https://i.imgur.com/Vwd7fC1.jpg",
    videoUrl: "https://www.youtube.com/embed/GHeadpvInAM?autoplay=1&rel=0",
  },
  {
    id: 2,
    titulo: "Treino Sparring",
    descricao: "Técnicas avançadas de sparring em situação real de luta.",
    duracao: "24 min",
    nivel: "Avançado",
    gratis: false,
    thumb: "https://i.imgur.com/XRRQ2oE.jpg",
    videoUrl: "https://www.youtube.com/embed/WiQzwD1IAwg?autoplay=1&rel=0",
  },
  {
    id: 3,
    titulo: "Treino Chute Alto",
    descricao: "Domine o chute alto com precisão, flexibilidade e potência máxima.",
    duracao: "21 min",
    nivel: "Intermediário",
    gratis: false,
    thumb: "https://i.imgur.com/CAmPOUv.jpg",
    videoUrl: "https://www.youtube.com/embed/jOn7LMTiwkU?autoplay=1&rel=0",
  },
];

const USER = { email: "teste@gmail.com", senha: "teste123" };

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const entrar = () => {
    if (email === USER.email && senha === USER.senha) onLogin();
    else setErro("Email ou senha incorretos.");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#080808", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder { color: #444; }
        input:focus { border-color: #e63946 !important; outline: none; }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <div style={{ fontSize: 11, color: "#e63946", letterSpacing: 8, fontFamily: "Barlow, sans-serif", fontWeight: 700, marginBottom: 8 }}>✦ ✦ ✦</div>
        <div style={{ fontSize: 52, letterSpacing: 6, color: "#fff", lineHeight: 1, fontFamily: "'Bebas Neue', sans-serif" }}>CLUBE DA</div>
        <div style={{ fontSize: 80, letterSpacing: 8, color: "#e63946", lineHeight: 0.9, fontFamily: "'Bebas Neue', sans-serif", textShadow: "0 0 40px rgba(230,57,70,0.4)" }}>LUTA</div>
        <div style={{ width: 60, height: 2, background: "#e63946", margin: "14px auto 10px" }} />
        <div style={{ fontSize: 11, color: "#555", letterSpacing: 5, fontFamily: "Barlow, sans-serif", fontWeight: 600 }}>FUNDAMENTOS DO MUAY THAI</div>
      </div>

      <div style={{ width: "100%", maxWidth: 380, display: "flex", flexDirection: "column", gap: 12 }}>
        <input type="email" placeholder="Seu email" value={email} onChange={e => { setEmail(e.target.value); setErro(""); }}
          style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: "15px 18px", color: "#fff", fontSize: 15, fontFamily: "Barlow, sans-serif", width: "100%" }} />
        <input type="password" placeholder="Senha" value={senha} onChange={e => { setSenha(e.target.value); setErro(""); }} onKeyDown={e => e.key === "Enter" && entrar()}
          style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: "15px 18px", color: "#fff", fontSize: 15, fontFamily: "Barlow, sans-serif", width: "100%" }} />
        {erro && <div style={{ fontFamily: "Barlow, sans-serif", fontSize: 13, color: "#e63946", textAlign: "center" }}>{erro}</div>}
        <button onClick={entrar} style={{ background: "#e63946", border: "none", borderRadius: 10, padding: "16px", color: "#fff", fontSize: 22, letterSpacing: 4, fontFamily: "'Bebas Neue', sans-serif", cursor: "pointer", marginTop: 4 }}>
          ENTRAR
        </button>
      </div>
      <div style={{ fontFamily: "Barlow, sans-serif", fontSize: 11, color: "#222", marginTop: 48, letterSpacing: 2 }}>CLUBE DA LUTA © 2025</div>
    </div>
  );
}

function Player({ aula, onFechar }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "#000", zIndex: 200, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: "#000" }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 2, color: "#fff" }}>{aula.titulo.toUpperCase()}</div>
        <button onClick={onFechar} style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: 8, padding: "8px 16px", color: "#fff", fontFamily: "Barlow, sans-serif", fontSize: 13, cursor: "pointer" }}>
          ✕ FECHAR
        </button>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "#000" }}>
        <iframe
          src={aula.videoUrl}
          title={aula.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: "100%", height: "100%", minHeight: 300 }}
        />
      </div>
    </div>
  );
}

function Home({ onLogout }) {
  const [player, setPlayer] = useState(null);
  const [aviso, setAviso] = useState(false);

  const clicar = (aula) => {
    if (!aula.gratis) { setAviso(true); setTimeout(() => setAviso(false), 3000); return; }
    setPlayer(aula);
  };

  const destaque = AULAS[0];

  return (
    <div style={{ minHeight: "100vh", background: "#080808", color: "#fff", fontFamily: "'Bebas Neue', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { display: none; }
        .card { transition: transform 0.2s; }
        .card:hover { transform: scale(1.04); }
        .row { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 8px; scroll-snap-type: x mandatory; }
        .row::-webkit-scrollbar { display: none; }
      `}</style>

      {player && <Player aula={player} onFechar={() => setPlayer(null)} />}

      {aviso && (
        <div style={{ position: "fixed", top: 70, left: "50%", transform: "translateX(-50%)", background: "#e63946", color: "#fff", padding: "12px 24px", borderRadius: 10, fontFamily: "Barlow, sans-serif", fontSize: 14, fontWeight: 700, zIndex: 99, letterSpacing: 1, whiteSpace: "nowrap" }}>
          🔒 Conteúdo exclusivo Premium
        </div>
      )}

      {/* Navbar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "linear-gradient(to bottom, rgba(8,8,8,0.98) 70%, transparent)", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 20, letterSpacing: 4, color: "#e63946" }}>CLUBE DA LUTA</div>
        <button onClick={onLogout} style={{ background: "transparent", border: "1px solid #333", borderRadius: 6, padding: "6px 12px", color: "#888", fontFamily: "Barlow, sans-serif", fontSize: 11, cursor: "pointer", letterSpacing: 1 }}>SAIR</button>
      </div>

      {/* Hero */}
      <div style={{ position: "relative", height: "55vh", minHeight: 320, overflow: "hidden" }}>
        <img src={destaque.thumb} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }}
          onError={e => { e.target.style.display = "none"; }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 25%, transparent 65%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.7) 40%, transparent)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, padding: "0 20px 28px", maxWidth: 340 }}>
          <div style={{ fontSize: 10, color: "#e63946", letterSpacing: 4, fontFamily: "Barlow, sans-serif", fontWeight: 700, marginBottom: 6 }}>🆓 AULA GRATUITA</div>
          <div style={{ fontSize: 32, letterSpacing: 2, lineHeight: 1, marginBottom: 8 }}>{destaque.titulo.toUpperCase()}</div>
          <div style={{ fontFamily: "Barlow, sans-serif", fontSize: 13, color: "#aaa", marginBottom: 18, lineHeight: 1.5 }}>{destaque.descricao}</div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => clicar(destaque)} style={{ background: "#fff", border: "none", borderRadius: 6, padding: "10px 22px", color: "#000", fontSize: 17, letterSpacing: 2, fontFamily: "'Bebas Neue', sans-serif", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              ▶ ASSISTIR
            </button>
            <button style={{ background: "rgba(100,100,100,0.4)", border: "none", borderRadius: 6, padding: "10px 22px", color: "#fff", fontSize: 17, letterSpacing: 2, fontFamily: "'Bebas Neue', sans-serif", cursor: "pointer" }}>
              + MINHA LISTA
            </button>
          </div>
        </div>
      </div>

      {/* Seção — Aulas gratuitas */}
      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ fontSize: 18, letterSpacing: 3, color: "#fff", marginBottom: 12 }}>🆓 AULAS GRATUITAS</div>
        <div className="row">
          {AULAS.filter(a => a.gratis).map(aula => (
            <div key={aula.id} className="card" onClick={() => clicar(aula)} style={{ flex: "0 0 160px", cursor: "pointer", scrollSnapAlign: "start" }}>
              <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", aspectRatio: "2/3" }}>
                <img src={aula.thumb} alt={aula.titulo} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={e => { e.target.parentElement.style.background = "#1a1a1a"; e.target.style.display = "none"; }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 30%, transparent 70%)" }} />
                <div style={{ position: "absolute", bottom: 8, left: 8, right: 8 }}>
                  <div style={{ fontFamily: "Barlow, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{aula.titulo}</div>
                </div>
                <div style={{ position: "absolute", top: 6, left: 6 }}>
                  <span style={{ background: "#e63946", color: "#fff", fontFamily: "Barlow, sans-serif", fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 3 }}>GRÁTIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção — Premium */}
      <div style={{ padding: "24px 20px 0" }}>
        <div style={{ fontSize: 18, letterSpacing: 3, color: "#fff", marginBottom: 12 }}>🔒 CONTEÚDO PREMIUM</div>
        <div className="row">
          {AULAS.filter(a => !a.gratis).map(aula => (
            <div key={aula.id} className="card" onClick={() => clicar(aula)} style={{ flex: "0 0 160px", cursor: "pointer", scrollSnapAlign: "start" }}>
              <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", aspectRatio: "2/3" }}>
                <img src={aula.thumb} alt={aula.titulo} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.5)" }}
                  onError={e => { e.target.parentElement.style.background = "#1a1a1a"; e.target.style.display = "none"; }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 30%, transparent 70%)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: 28 }}>🔒</div>
                </div>
                <div style={{ position: "absolute", bottom: 8, left: 8, right: 8 }}>
                  <div style={{ fontFamily: "Barlow, sans-serif", fontSize: 11, fontWeight: 700, color: "#888", lineHeight: 1.2 }}>{aula.titulo}</div>
                </div>
                <div style={{ position: "absolute", top: 6, left: 6 }}>
                  <span style={{ background: "rgba(0,0,0,0.8)", color: "#666", fontFamily: "Barlow, sans-serif", fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 3, border: "1px solid #333" }}>PREMIUM</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Todas as aulas */}
      <div style={{ padding: "24px 20px 0" }}>
        <div style={{ fontSize: 18, letterSpacing: 3, color: "#fff", marginBottom: 12 }}>TODAS AS AULAS</div>
        <div className="row">
          {AULAS.map(aula => (
            <div key={aula.id} className="card" onClick={() => clicar(aula)} style={{ flex: "0 0 160px", cursor: "pointer", scrollSnapAlign: "start" }}>
              <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", aspectRatio: "2/3" }}>
                <img src={aula.thumb} alt={aula.titulo} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: aula.gratis ? "none" : "brightness(0.5)" }}
                  onError={e => { e.target.parentElement.style.background = "#1a1a1a"; e.target.style.display = "none"; }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 30%, transparent 70%)" }} />
                {!aula.gratis && (
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ fontSize: 24 }}>🔒</div>
                  </div>
                )}
                <div style={{ position: "absolute", bottom: 8, left: 8, right: 8 }}>
                  <div style={{ fontFamily: "Barlow, sans-serif", fontSize: 11, fontWeight: 700, color: aula.gratis ? "#fff" : "#777", lineHeight: 1.2 }}>{aula.titulo}</div>
                  <div style={{ fontFamily: "Barlow, sans-serif", fontSize: 10, color: "#555", marginTop: 2 }}>{aula.duracao}</div>
                </div>
                <div style={{ position: "absolute", top: 6, left: 6 }}>
                  {aula.gratis
                    ? <span style={{ background: "#e63946", color: "#fff", fontFamily: "Barlow, sans-serif", fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 3 }}>GRÁTIS</span>
                    : <span style={{ background: "rgba(0,0,0,0.8)", color: "#666", fontFamily: "Barlow, sans-serif", fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 3, border: "1px solid #333" }}>PREMIUM</span>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Premium */}
      <div style={{ margin: "32px 20px 40px", background: "linear-gradient(135deg, #1a0808, #2a0a0a)", border: "1px solid #3a1515", borderRadius: 16, padding: "28px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 10, color: "#e63946", letterSpacing: 5, fontFamily: "Barlow, sans-serif", fontWeight: 700, marginBottom: 8 }}>DESBLOQUEIE TUDO</div>
        <div style={{ fontSize: 28, letterSpacing: 2, marginBottom: 10 }}>SEJA PREMIUM</div>
        <div style={{ fontFamily: "Barlow, sans-serif", fontSize: 13, color: "#777", marginBottom: 20, lineHeight: 1.6 }}>
          Acesse todas as aulas e treinamentos exclusivos
        </div>
        <button style={{ background: "#e63946", border: "none", borderRadius: 10, padding: "13px 32px", color: "#fff", fontSize: 20, letterSpacing: 3, fontFamily: "'Bebas Neue', sans-serif", cursor: "pointer" }}>
          QUERO SER PREMIUM
        </button>
      </div>

    </div>
  );
}

export default function App() {
  const [logado, setLogado] = useState(false);
  return logado ? <Home onLogout={() => setLogado(false)} /> : <Login onLogin={() => setLogado(true)} />;
}
