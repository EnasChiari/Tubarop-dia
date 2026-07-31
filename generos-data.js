/* ═══════════════════════════════════════════════
   TUBAROPÉDIA — BASE DE DADOS DOS GÊNEROS
   Edite este arquivo para gerenciar os gêneros.
   A página generos.html lê daqui automaticamente.

   Para colocar uma foto: salve a imagem numa pasta
   "imagens/generos" ao lado do generos.html, com o
   nome indicado no campo "imagem" de cada gênero.
   ═══════════════════════════════════════════════ */

const GENEROS = [
  { slug: "carcharhinus", nome: "Carcharhinus", familia: "Carcharhinidae", especies: 36,
    descricao: "Inclui tubarões costeiros e oceânicos extremamente diversos, encontrados em praticamente todos os mares tropicais.",
    imagem: "carcharhinus.jpg" },

  { slug: "sphyrna", nome: "Sphyrna", familia: "Sphyrnidae", especies: 10,
    descricao: "Conhecidos pelo formato em martelo da cabeça, vivem principalmente em águas costeiras e oceânicas.",
    imagem: "sphyrna.jpg" },

  { slug: "galeocerdo", nome: "Galeocerdo", familia: "Carcharhinidae", especies: 1,
    representante: { nome: "Tubarão-tigre", cientifico: "Galeocerdo cuvier" },
    imagem: "galeocerdo.jpg" },

  { slug: "rhincodon", nome: "Rhincodon", familia: "Rhincodontidae", especies: 1,
    representante: { nome: "Tubarão-baleia", cientifico: "Rhincodon typus" },
    imagem: "rhincodon.jpg" },

  { slug: "isurus", nome: "Isurus", familia: "Lamnidae", especies: 2,
    representanteHtml: "Mako (<em>Isurus oxyrinchus</em> e <em>I. paucus</em>)",
    imagem: "isurus.jpg" },

  { slug: "hexanchus", nome: "Hexanchus", familia: "Hexanchidae", especies: 4,
    descricao: "Tubarões de seis brânquias, vivem em águas profundas ao redor do mundo.",
    imagem: "hexanchus.jpg" },

  { slug: "etmopterus", nome: "Etmopterus", familia: "Etmopteridae", especies: 45,
    descricao: "O maior gênero de tubarões-lanterna, conhecidos pela bioluminescência.",
    imagem: "etmopterus.jpg" },

  { slug: "apristurus", nome: "Apristurus", familia: "Scyliorhinidae", especies: 39,
    descricao: "Um dos maiores gêneros de tubarões-gato, habitam águas profundas ao redor do mundo.",
    imagem: "apristurus.jpg" },

  { slug: "squalus", nome: "Squalus", familia: "Squalidae", especies: 2,
    descricao: "Cações-lixa-espinhosos, com espinhos na frente das nadadeiras dorsais.",
    imagem: "squalus.jpg" },

  { slug: "alopias", nome: "Alopias", familia: "Alopiidae", especies: 3,
    descricao: "Tubarões-raposa, reconhecidos pela cauda extremamente longa usada para atordoar presas.",
    imagem: "alopias.jpg" },

  { slug: "prionace", nome: "Prionace", familia: "Carcharhinidae", especies: 1,
    representante: { nome: "Tubarão-azul", cientifico: "Prionace glauca" },
    imagem: "prionace.jpg" },

  { slug: "negaprion", nome: "Negaprion", familia: "Carcharhinidae", especies: 2,
    descricao: "Tubarões-limão, conhecidos pela coloração amarelada e hábitos costeiros.",
    imagem: "negaprion.jpg" },
];

const ESTATISTICAS_GENEROS = {
  generos: "40+", generosTexto: "Organizados conforme a classificação científica.",
  especies: "540+", especiesTexto: "Distribuídas em dezenas de gêneros.",
  oceanos: "Todos os oceanos", oceanosTexto: "Desde águas rasas até o oceano profundo.",
};

/* fatias do gráfico de distribuição (devem somar 100) */
const DISTRIBUICAO_GENEROS = [
  { nome: "Carcharhinidae", pct: 48, cor: "#3f5dd9" },
  { nome: "Lamnidae", pct: 15, cor: "#0d1424" },
  { nome: "Scyliorhinidae", pct: 12, cor: "#c25b7a" },
  { nome: "Sphyrnidae", pct: 8, cor: "#3fa87a" },
  { nome: "Outras famílias", pct: 17, cor: "#a9b3cc" },
];

const GENEROS_MAIS_ESTUDADOS = [
  { slug: "carcharhinus", nome: "Carcharhinus", especies: 36 },
  { slug: "sphyrna", nome: "Sphyrna", especies: 10 },
  { slug: "galeocerdo", nome: "Galeocerdo", especies: 1 },
  { slug: "rhincodon", nome: "Rhincodon", especies: 1 },
  { slug: "isurus", nome: "Isurus", especies: 2 },
];

const CURIOSIDADE_GENERO = {
  texto: "O gênero Carcharhinus é o mais diverso entre os tubarões-requiem, reunindo dezenas de espécies distribuídas por mares tropicais e subtropicais.",
};

const LINHA_TEMPO_EVOLUTIVA = [
  { nome: "Hexanchiformes", tempo: "~ 400 milhões de anos" },
  { nome: "Orectolobiformes", tempo: "~ 350 milhões de anos" },
  { nome: "Lamniformes", tempo: "~ 200 milhões de anos" },
  { nome: "Carcharhiniformes", tempo: "~ 100 milhões de anos" },
  { nome: "Gêneros modernos", tempo: "Diversificação recente" },
];

/* chips de atalho "Explorar por família" (o botão "Todas as famílias" é fixo) */
const FAMILIAS_FILTRO = [
  { nome: "Carcharhinidae", count: 36 },
  { nome: "Lamnidae", count: 5 },
  { nome: "Sphyrnidae", count: 2 },
  { nome: "Scyliorhinidae", count: 17 },
];

const GENEROS_DESTAQUE = [
  { slug: "carcharhinus", nome: "Carcharhinus", texto: "O maior gênero de tubarões-requiem.", imagem: "carcharhinus.jpg" },
  { slug: "sphyrna", nome: "Sphyrna", texto: "Cabeça em formato de martelo.", imagem: "sphyrna.jpg" },
  { slug: "etmopterus", nome: "Etmopterus", texto: "Tubarões-lanterna bioluminescentes.", imagem: "etmopterus.jpg" },
  { slug: "apristurus", nome: "Apristurus", texto: "Um dos maiores gêneros de tubarões-gato.", imagem: "apristurus.jpg" },
];
