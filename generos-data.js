/* ═══════════════════════════════════════════════
   TUBAROPÉDIA — BASE DE DADOS DOS GÊNEROS
   Edite este arquivo para gerenciar os gêneros.
   A página generos.html lê daqui automaticamente.

   Para colocar uma foto: salve a imagem numa pasta
   "imagens/generos" ao lado do generos.html, com o
   nome indicado no campo "imagem" de cada gênero.
   ═══════════════════════════════════════════════ */

/* Ordem científica de cada família (usado como padrão quando o gênero
   não define "ordem" explicitamente). */
const ORDEM_POR_FAMILIA = {
  "Carcharhinidae": "Carcharhiniformes",
  "Sphyrnidae": "Carcharhiniformes",
  "Scyliorhinidae": "Carcharhiniformes",
  "Rhincodontidae": "Orectolobiformes",
  "Lamnidae": "Lamniformes",
  "Alopiidae": "Lamniformes",
  "Hexanchidae": "Hexanchiformes",
  "Etmopteridae": "Squaliformes",
  "Squalidae": "Squaliformes",
};

const GENEROS = [
  { slug: "carcharhinus", nome: "Carcharhinus", familia: "Carcharhinidae", especies: 36,
    descricao: "Inclui tubarões costeiros e oceânicos extremamente diversos, encontrados em praticamente todos os mares tropicais.",
    imagem: "carcharhinus.jpg",
    subtitulo: "Gênero de tubarões-requiem",
    descricaoLonga: "Carcharhinus é um dos maiores gêneros da família Carcharhinidae, reunindo tubarões de médio a grande porte encontrados principalmente em águas tropicais e subtropicais de todos os oceanos.",
    habitatTexto: "Espécies do gênero Carcharhinus habitam principalmente zonas costeiras, recifes, plataformas continentais e águas oceânicas. Estão presentes em todos os oceanos, especialmente em águas tropicais e subtropicais.",
    caracteristicas: [
      "Corpo fusiforme e hidrodinâmico",
      "Focinho moderadamente longo e arredondado",
      "Duas nadadeiras dorsais praticamente do mesmo tamanho",
      "Nadadeira anal presente",
      "Dentição serrilhada, adaptada para capturar presas diversas",
      "Vivíparos, com ninhadas que variam conforme a espécie",
    ],
    distribuicaoHabitat: [
      { nome: "Costeiro e recifes", pct: 60 },
      { nome: "Oceânico", pct: 25 },
      { nome: "Plataforma continental", pct: 10 },
      { nome: "Estuários", pct: 5 },
    ],
    conservacaoTexto: "O estado de conservação varia entre as espécies do gênero. Algumas estão ameaçadas devido à pesca excessiva, perda de habitat e captura acidental.",
    nomesComuns: ["Tubarões-requiem", "Tubarões-cinzentos", "Cação (em algumas regiões)"],
    importanciaEcologica: "Os tubarões do gênero Carcharhinus desempenham um papel fundamental no equilíbrio dos ecossistemas marinhos, ajudando a controlar populações de peixes e outros organismos.",
    especiesLista: [
      { nome: "Tubarão-seda", cientifico: "Carcharhinus falciformis", imagem: "tubarao-seda.jpg" },
      { nome: "Tubarão-touro", cientifico: "Carcharhinus leucas", imagem: "tubarao-touro.jpg" },
      { nome: "Tubarão-de-pontas-pretas", cientifico: "Carcharhinus melanopterus", imagem: "tubarao-de-pontas-pretas.jpg" },
      { nome: "Tubarão-oceânico", cientifico: "Carcharhinus longimanus", imagem: "tubarao-oceanico.jpg" },
      { nome: "Tubarão-de-galápagos", cientifico: "Carcharhinus galapagensis", imagem: "tubarao-de-galapagos.jpg" },
    ],
    generosRelacionados: ["sphyrna", "galeocerdo", "prionace", "negaprion"] },
   {
  slug: "carcharodon",
  nome: "Carcharodon",
  familia: "Lamnidae",
  especies: 1,
  descricao: "Gênero que reúne o icônico tubarão-branco, um dos maiores predadores marinhos da atualidade.",
  imagem: "carcharodon.jpg",
  subtitulo: "Gênero do tubarão-branco",
  descricaoLonga: "Carcharodon é um pequeno gênero da família Lamnidae. Atualmente, apenas uma espécie viva é reconhecida: o tubarão-branco (Carcharodon carcharias). É um dos predadores mais estudados do mundo, conhecido por seu grande porte, velocidade e importante papel ecológico nos oceanos.",

  habitatTexto: "Os representantes do gênero Carcharodon habitam águas costeiras e oceânicas temperadas e subtropicais de todos os grandes oceanos. São frequentemente encontrados próximos a ilhas, plataformas continentais, colônias de pinípedes e áreas ricas em presas.",

  caracteristicas: [
    "Corpo robusto e hidrodinâmico",
    "Focinho cônico e relativamente curto",
    "Grande primeira nadadeira dorsal",
    "Cauda em formato de meia-lua, adaptada para alta velocidade",
    "Dentição triangular, larga e fortemente serrilhada",
    "Ovovivíparo com oofagia durante o desenvolvimento embrionário"
  ],

  distribuicaoHabitat: [
    { nome: "Costeiro", pct: 45 },
    { nome: "Oceânico", pct: 30 },
    { nome: "Plataforma continental", pct: 20 },
    { nome: "Ilhas oceânicas", pct: 5 }
  ],

  conservacaoTexto: "O único representante vivo do gênero está classificado como Vulnerável (VU), sendo ameaçado principalmente pela pesca, captura acidental, degradação dos habitats e baixa taxa reprodutiva.",

  nomesComuns: [
    "Tubarão-branco",
    "Grande tubarão-branco",
    "Grande branco"
  ],

  importanciaEcologica: "Como predador de topo, Carcharodon exerce um papel essencial na manutenção do equilíbrio dos ecossistemas marinhos, regulando populações de mamíferos marinhos, peixes e outros grandes vertebrados.",

  especiesLista: [
    {
      nome: "Tubarão-branco",
      cientifico: "Carcharodon carcharias",
      imagem: "tubarao-branco.jpg"
    }
  ],

  generosRelacionados: [
    "isurus",
    "lamna",
    "cetorhinus",
    "alopias"
  ]
},

  
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
