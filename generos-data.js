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

  { slug: "sphyrna", nome: "Sphyrna", familia: "Sphyrnidae", especies: 10,
    descricao: "Conhecidos pelo formato em martelo da cabeça, vivem principalmente em águas costeiras e oceânicas.",
    imagem: "sphyrna.jpg",
    subtitulo: "Gênero dos tubarões-martelo",
    habitatTexto: "Espécies do gênero Sphyrna habitam águas costeiras, recifes e zonas oceânicas de regiões tropicais e temperadas, muitas vezes formando grandes cardumes.",
    caracteristicas: [
      "Cabeça achatada e expandida lateralmente (cefalofólio)",
      "Olhos posicionados nas extremidades da cabeça",
      "Corpo esguio e hidrodinâmico",
      "Hábito de formar grandes cardumes em algumas espécies",
      "Vivíparos, com ninhadas numerosas",
    ],
    conservacaoTexto: "Várias espécies de Sphyrna estão ameaçadas pela pesca voltada ao comércio de barbatanas.",
    nomesComuns: ["Tubarões-martelo", "Cornuda"],
    importanciaEcologica: "Como predadores de topo, os tubarões-martelo ajudam a manter o equilíbrio das cadeias alimentares em recifes e águas costeiras.",
    generosRelacionados: ["carcharhinus", "galeocerdo", "prionace"] },

  { slug: "galeocerdo", nome: "Galeocerdo", familia: "Carcharhinidae", especies: 1,
    representante: { nome: "Tubarão-tigre", cientifico: "Galeocerdo cuvier" },
    imagem: "galeocerdo.jpg",
    subtitulo: "Gênero do tubarão-tigre",
    habitatTexto: "O tubarão-tigre habita águas costeiras e oceânicas tropicais e subtropicais, sendo um dos predadores mais oportunistas dos mares.",
    caracteristicas: [
      "Padrão de listras escuras no corpo, mais visíveis em jovens",
      "Focinho curto e largo",
      "Dentição serrilhada em formato de foice, adaptada a dietas variadas",
      "Dieta extremamente generalista",
    ],
    conservacaoTexto: "Classificado como quase ameaçado devido à pesca comercial e esportiva.",
    nomesComuns: ["Tubarão-tigre"],
    importanciaEcologica: "Considerado uma espécie-chave em ecossistemas de recifes e pastagens marinhas, regulando populações de tartarugas e outras presas.",
    generosRelacionados: ["carcharhinus", "sphyrna", "negaprion"] },

  { slug: "rhincodon", nome: "Rhincodon", familia: "Rhincodontidae", especies: 1,
    representante: { nome: "Tubarão-baleia", cientifico: "Rhincodon typus" },
    imagem: "rhincodon.jpg",
    subtitulo: "Gênero do tubarão-baleia",
    habitatTexto: "O tubarão-baleia vive em águas tropicais e subtropicais de todos os oceanos, geralmente próximo à superfície em áreas ricas em plâncton.",
    caracteristicas: [
      "Maior peixe vivo do planeta",
      "Alimentação por filtragem de plâncton",
      "Padrão único de manchas claras sobre pele escura",
      "Comportamento migratório de longa distância",
    ],
    conservacaoTexto: "Classificado como em perigo, ameaçado por colisões com embarcações e captura acidental.",
    nomesComuns: ["Tubarão-baleia"],
    importanciaEcologica: "Por se alimentar de plâncton, ajuda a indicar a saúde de ecossistemas produtivos onde vive.",
    generosRelacionados: ["carcharhinus", "isurus", "alopias"] },

  { slug: "isurus", nome: "Isurus", familia: "Lamnidae", especies: 2,
    representanteHtml: "Mako (<em>Isurus oxyrinchus</em> e <em>I. paucus</em>)",
    imagem: "isurus.jpg",
    subtitulo: "Gênero dos tubarões-mako",
    habitatTexto: "Os makos vivem em águas oceânicas temperadas e tropicais, sendo encontrados desde a superfície até águas mais profundas.",
    caracteristicas: [
      "Considerados os tubarões mais rápidos do oceano",
      "Corpo fusiforme e musculoso",
      "Capacidade de regular a temperatura corporal (endotermia regional)",
      "Grandes predadores de peixes rápidos, como atuns",
    ],
    conservacaoTexto: "O mako-de-nadadeira-curta é classificado como em perigo devido à sobrepesca.",
    nomesComuns: ["Mako", "Tubarão-mako"],
    importanciaEcologica: "Predadores ágeis que ajudam a controlar populações de peixes pelágicos de rápida movimentação.",
    generosRelacionados: ["rhincodon", "alopias", "hexanchus"] },

  { slug: "hexanchus", nome: "Hexanchus", familia: "Hexanchidae", especies: 4,
    descricao: "Tubarões de seis brânquias, vivem em águas profundas ao redor do mundo.",
    imagem: "hexanchus.jpg",
    subtitulo: "Gênero dos tubarões-de-seis-guelras",
    habitatTexto: "Vivem majoritariamente em águas profundas, próximos ao talude continental, podendo subir a águas mais rasas à noite.",
    caracteristicas: [
      "Seis pares de fendas branquiais, ao invés das cinco usuais",
      "Uma única nadadeira dorsal, posicionada próxima à cauda",
      "Considerados um dos grupos mais primitivos de tubarões",
    ],
    conservacaoTexto: "Algumas populações vulneráveis à pesca de profundidade.",
    nomesComuns: ["Tubarões-de-seis-guelras"],
    importanciaEcologica: "Como predadores de águas profundas, ajudam a regular comunidades de peixes e invertebrados do talude continental.",
    generosRelacionados: ["isurus", "etmopterus", "apristurus"] },

  { slug: "etmopterus", nome: "Etmopterus", familia: "Etmopteridae", especies: 45,
    descricao: "O maior gênero de tubarões-lanterna, conhecidos pela bioluminescência.",
    imagem: "etmopterus.jpg",
    subtitulo: "Gênero dos tubarões-lanterna",
    habitatTexto: "Vivem em águas profundas de todos os oceanos, muitas vezes realizando migrações verticais diárias em busca de alimento.",
    caracteristicas: [
      "Corpo pequeno, raramente ultrapassando 90 cm",
      "Fotóforos que produzem bioluminescência no ventre",
      "Espinhos na frente das nadadeiras dorsais",
    ],
    conservacaoTexto: "Pouco estudados; algumas espécies são vulneráveis à pesca de profundidade como captura acidental.",
    nomesComuns: ["Tubarões-lanterna"],
    importanciaEcologica: "A bioluminescência auxilia na camuflagem e comunicação, sendo peças-chave em cadeias alimentares de águas profundas.",
    generosRelacionados: ["hexanchus", "apristurus", "squalus"] },

  { slug: "apristurus", nome: "Apristurus", familia: "Scyliorhinidae", especies: 39,
    descricao: "Um dos maiores gêneros de tubarões-gato, habitam águas profundas ao redor do mundo.",
    imagem: "apristurus.jpg",
    subtitulo: "Gênero dos tubarões-gato-de-profundidade",
    habitatTexto: "Distribuídos por águas profundas de talude continental em todos os oceanos, muitas vezes em áreas ainda pouco exploradas.",
    caracteristicas: [
      "Corpo alongado e mole",
      "Focinho achatado e alongado",
      "Olhos grandes adaptados à baixa luminosidade",
    ],
    conservacaoTexto: "Muitas espécies têm dados insuficientes sobre seu estado de conservação.",
    nomesComuns: ["Tubarões-gato-de-profundidade"],
    importanciaEcologica: "Fazem parte da fauna de profundidade que recicla matéria orgânica no fundo do oceano.",
    generosRelacionados: ["etmopterus", "hexanchus", "squalus"] },

  { slug: "squalus", nome: "Squalus", familia: "Squalidae", especies: 2,
    descricao: "Cações-lixa-espinhosos, com espinhos na frente das nadadeiras dorsais.",
    imagem: "squalus.jpg",
    subtitulo: "Gênero dos cações-lixa",
    habitatTexto: "Habitam águas costeiras e de plataforma continental em regiões temperadas e subtropicais.",
    caracteristicas: [
      "Espinhos rígidos na frente de cada nadadeira dorsal",
      "Ausência de nadadeira anal",
      "Corpo cinza-acastanhado, geralmente com pequenas manchas claras",
    ],
    conservacaoTexto: "Historicamente alvo de pesca comercial intensa, com populações reduzidas em algumas regiões.",
    nomesComuns: ["Cações-lixa", "Galhudos"],
    importanciaEcologica: "Predadores de pequenos peixes e invertebrados, importantes em pescarias tradicionais.",
    generosRelacionados: ["etmopterus", "apristurus", "hexanchus"] },

  { slug: "alopias", nome: "Alopias", familia: "Alopiidae", especies: 3,
    descricao: "Tubarões-raposa, reconhecidos pela cauda extremamente longa usada para atordoar presas.",
    imagem: "alopias.jpg",
    subtitulo: "Gênero dos tubarões-raposa",
    habitatTexto: "Vivem em águas costeiras e oceânicas tropicais e temperadas, geralmente próximos à superfície ou em profundidades moderadas.",
    caracteristicas: [
      "Lobo superior da cauda extremamente alongado",
      "Usam a cauda como um chicote para atordoar cardumes de peixes",
      "Olhos grandes, adaptados para caça em baixa luminosidade",
    ],
    conservacaoTexto: "Classificados como vulneráveis ou em perigo devido à sobrepesca voltada às nadadeiras.",
    nomesComuns: ["Tubarões-raposa"],
    importanciaEcologica: "Sua técnica de caça ajuda a controlar cardumes de peixes pelágicos.",
    generosRelacionados: ["isurus", "rhincodon", "sphyrna"] },

  { slug: "prionace", nome: "Prionace", familia: "Carcharhinidae", especies: 1,
    representante: { nome: "Tubarão-azul", cientifico: "Prionace glauca" },
    imagem: "prionace.jpg",
    subtitulo: "Gênero do tubarão-azul",
    habitatTexto: "Espécie oceânica e altamente migratória, encontrada em águas temperadas e tropicais de todo o mundo.",
    caracteristicas: [
      "Coloração azul vibrante no dorso e branca no ventre",
      "Corpo esguio e nadadeiras peitorais longas",
      "Um dos tubarões mais migratórios, percorrendo milhares de quilômetros",
    ],
    conservacaoTexto: "Classificado como quase ameaçado, é uma das espécies mais capturadas na pesca de espinhel.",
    nomesComuns: ["Tubarão-azul"],
    importanciaEcologica: "Como grande migrador oceânico, conecta ecossistemas distantes na cadeia alimentar pelágica.",
    generosRelacionados: ["carcharhinus", "sphyrna", "negaprion"] },

  { slug: "negaprion", nome: "Negaprion", familia: "Carcharhinidae", especies: 2,
    descricao: "Tubarões-limão, conhecidos pela coloração amarelada e hábitos costeiros.",
    imagem: "negaprion.jpg",
    subtitulo: "Gênero dos tubarões-limão",
    habitatTexto: "Habitam águas costeiras rasas, mangues e recifes, sendo comuns em berçários próximos à costa.",
    caracteristicas: [
      "Coloração amarelo-acastanhada, que ajuda na camuflagem em fundos arenosos",
      "Duas nadadeiras dorsais de tamanho semelhante",
      "Usam mangues e baías rasas como áreas de berçário",
    ],
    conservacaoTexto: "Vulnerável devido à degradação de mangues e áreas costeiras usadas como berçário.",
    nomesComuns: ["Tubarões-limão"],
    importanciaEcologica: "Espécie amplamente estudada em pesquisas sobre comportamento e uso de berçários costeiros.",
    generosRelacionados: ["carcharhinus", "galeocerdo", "prionace"] },
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
