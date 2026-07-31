/*
 * Campos de imagem por seção (opcionais, um por espécie), a serem
 * preenchidos quando o BancoDadosTubaroes.java passar a exportá-los
 * no JSON — mesmo padrão do campo "imagens": só o nome do arquivo,
 * salvo na pasta "imagens" ao lado de especie.html.
 *
 *   imagemDistribuicao:   "arquivo.jpg",   // mapa/foto de Distribuição
 *   imagemAlimentacao:    "arquivo.jpg",   // foto de Alimentação
 *   imagemComportamento:  "arquivo.jpg",   // foto de Comportamento
 *   imagemRelacaoHumanos: "arquivo.jpg",   // foto de Relação com humanos
 *
 * Sem esses campos, especie.html mostra um placeholder no lugar da foto.
 */
const ESPECIES = [
  {
    slug: "tubarao-de-nariz-preto",
    nomePopular: "Tubarão-de-nariz-preto", nomeCientifico: "Carcharhinus acronotus", nomeIngles: "Blacknose",
    familia: "Carcharhinidae", ordem: "Carcharhiniformes", classe: "Chondrichthyes",
    descricao: "O Carcharhinus acronotus, conhecido em português como tubarão-de-nariz-preto, é uma espécie de tubarão da família Carcharhinidae. Carcharhinus acronotus É um tubarão de pequeno porte, comum em águas costeiras quentes do Oceano Atlântico.",
    comprimento: "1,2–1,5 m (podendo ter até 2 m)", peso: "18–20 kg",
    profundidade: "10-75 m", expectativaVida: "19-20 anos", denticao: "Os dentes da mandíbula superior são triangulares, levemente inclinados e serrilhados, enquanto os da mandíbula inferior são mais estreitos e retos.",
    caracteristicasTexto: "Corpo esguio e hidrodinâmico. Focinho relativamente longo e pontudo. Possui uma mancha preta característica na ponta do focinho, mais evidente em indivíduos jovens, que deu origem ao seu nome comum. Coloração cinza a cinza-amarronzada no dorso e branca na região ventral.",
    distribuicao: "É encontrado no Oceano Atlântico Ocidental, desde o nordeste dos Estados Unidos até o sul do Brasil, incluindo: Golfo do México, Mar do Caribe, Bahamas, Costa da América Central, Costa norte da América do Sul, Litoral brasileiro",
    habitat: "Águas costeiras tropicais e subtropicais. Recifes de coral. Fundos arenosos. Baías e estuários. Geralmente entre 10 e 75 metros de profundidade, podendo ocorrer em águas mais profundas.",
    alimentacao: "É um predador oportunista que se alimenta principalmente de:",
    presas: ["Peixes ósseos", "Lulas", "Polvos", "Camarões", "Caranguejos"],
    reproducao: "Vivíparo placentário. Os embriões recebem nutrientes através de uma placenta semelhante à dos mamíferos. Gestação de aproximadamente 10 a 11 meses. Cada ninhada possui normalmente 3 a 6 filhotes, embora esse número possa variar.",
    comportamento: "Geralmente solitário ou em pequenos grupos. Nada próximo ao fundo, mas também utiliza águas abertas rasas.É relativamente tímido e evita contato com humanos.",
    tracosComportamento: ["Ágil", "Sólitario"],
    relacaoHumanos: " não é considerado perigoso para seres humanos. Ataques são extremamente raros e, quando ocorrem, costumam envolver confusão durante atividades de pesca ou mergulho.",
    tracosRelacaoHumanos: ["Tímido", "Raro ataque a humanos", "Evita contato"],
    statusIUCN: "VU", statusTexto: "Classificado como Vulnerável (VU) pela IUCN, com populações em declínio.",
    curiosidades: [
      "A mancha preta no focinho tende a ficar menos evidente em adultos.",
      "É uma espécie importante para o equilíbrio dos ecossistemas costeiros, ajudando a controlar populações de peixes e invertebrados.",
      "Apesar do nome, nem todos os indivíduos apresentam a mancha escura com a mesma intensidade, especialmente os mais velhos.",
    ],
    especiesRelacionadas: [
      { slug: "tubarao-mako", nomePopular: "Tubarão-mako", nomeCientifico: "Isurus oxyrinchus" }
    ],
    imagens: [
      "tubarão-de-nariz-preto.jpg",
    ],
    imagemDistribuicao: "",
    imagemAlimentacao: "",
    imagemComportamento: "",
    imagemRelacaoHumanos: "",
  },
  {
      slug: "tubarao-de-pontas-prateadas",
      nomePopular: "Tubarão-de-pontas-prateadas",
      nomeCientifico: "Carcharhinus albimarginatus",
      nomeIngles: "Silvertip Shark",
      familia: "Carcharhinidae",
      ordem: "Carcharhiniformes",
      classe: "Chondrichthyes",
    
      descricao: "Grande tubarão oceânico reconhecido pelas marcantes pontas brancas nas nadadeiras. É um predador poderoso encontrado em recifes de coral e ilhas oceânicas.",
    
      comprimento: "2,5 – 3 m (máximo registrado cerca de 3,5 m)",
      peso: "100 – 160 kg (podendo ultrapassar 200 kg)",
      profundidade: "0 – 800 m (mais comum entre 30 e 150 m)",
      expectativaVida: "25 – 35 anos",
      denticao: "Dentes triangulares serrilhados na mandíbula superior e dentes mais estreitos na inferior, adaptados para capturar peixes e rasgar carne.",
    
      caracteristicasTexto: "Corpo robusto, coloração cinza-escura no dorso e branca no ventre. Possui bordas brancas bem evidentes nas nadadeiras dorsal, peitorais, pélvicas e caudal, característica que lhe dá o nome.",
    
      distribuicao: "Oceanos Índico e Pacífico, incluindo Mar Vermelho, costa leste da África, Sudeste Asiático, Austrália, Japão e diversas ilhas do Pacífico.",
    
      habitat: "Habita recifes de coral, ilhas oceânicas, plataformas continentais e encostas submarinas, geralmente em águas tropicais e subtropicais.",
    
      alimentacao: "Predador oportunista que se alimenta principalmente de peixes ósseos, raias, pequenos tubarões, lulas, polvos e crustáceos.",
    
      presas: [
        "Peixes ósseos",
        "Raias",
        "Pequenos tubarões",
        "Lulas"
      ],
    
      reproducao: "Vivíparo. Os embriões são alimentados por uma placenta vitelínica. A gestação dura cerca de 12 meses e a ninhada possui normalmente de 1 a 11 filhotes.",
    
      comportamento: "É um predador ativo, geralmente solitário ou em pequenos grupos. Demonstra comportamento territorial em alguns recifes e pode tornar-se bastante agressivo quando há alimento disponível.",
    
      tracosComportamento: [
        "Predador ativo",
        "Territorial",
        "Solitário ou em pequenos grupos"
      ],
    
      relacaoHumanos: "Pode representar risco para mergulhadores quando provocado ou durante atividades de pesca. Ataques são raros, mas a espécie é considerada potencialmente perigosa devido ao seu porte e comportamento.",
    
      tracosRelacaoHumanos: [
        "Ataques raros",
        "Potencialmente perigoso",
        "Vulnerável à pesca comercial"
      ],
    
      statusIUCN: "VU",
      statusTexto: "Classificado como Vulnerável (VU) pela IUCN devido à sobrepesca, captura acidental e baixa taxa reprodutiva.",
    
      curiosidades: [
        "Recebe esse nome pelas bordas brancas brilhantes de suas nadadeiras.",
        "É um dos maiores representantes da família Carcharhinidae.",
        "Pode formar agregações temporárias em áreas com grande oferta de alimento.",
        "Desempenha papel importante no equilíbrio dos ecossistemas recifais."
      ],
    
      especiesRelacionadas: [
        {
          slug: "tubarao-de-nariz-preto",
          nomePopular: "Tubarão-de-nariz-preto",
          nomeCientifico: "Carcharhinus acronotus"
        },
        {
          slug: "tubarao-cinzento-dos-recifes",
          nomePopular: "Tubarão-cinzento-dos-recifes",
          nomeCientifico: "Carcharhinus amblyrhynchos"
        }
      ],
    
      imagens: [
        "tubarao-de-pontas-prateadas.jpg"
      ],
    },
{
  slug: "tubarao-de-nariz-grande",
  nomePopular: "Tubarão-de-nariz-grande",
  nomeCientifico: "Carcharhinus altimus",
  nomeIngles: "Bignose Shark",

  familia: "Carcharhinidae",
  ordem: "Carcharhiniformes",
  classe: "Chondrichthyes",

  descricao: "Grande tubarão de águas profundas e plataforma continental, identificado pelo focinho longo e arredondado. É um predador de peixes ósseos e cefalópodes, amplamente distribuído em mares tropicais e temperados quentes.",

  comprimento: "2,3 – 2,8 m (máximo cerca de 3 m)",
  peso: "100 – 170 kg",
  profundidade: "90 – 430 m",
  expectativaVida: "cerca de 20 a 30 anos",
  denticao: "Dentes superiores largos e serrilhados; dentes inferiores estreitos e pontiagudos, ideais para capturar peixes e lulas.",

  caracteristicasTexto: "Corpo robusto, coloração cinza a bronzeada no dorso e branca no ventre. Possui focinho longo e largo, olhos relativamente grandes e primeira nadadeira dorsal alta.",

  distribuicao: "Encontrado em oceanos Atlântico, Índico e Pacífico, em regiões tropicais e temperadas quentes.",

  habitat: "Habita a plataforma continental externa e o talude continental, geralmente próximo ao fundo em águas relativamente profundas.",

  alimentacao: "Alimenta-se principalmente de peixes ósseos, tubarões menores, raias, lulas, polvos e crustáceos.",

  presas: [
    "Peixes ósseos",
    "Lulas",
    "Polvos",
    "Pequenos tubarões"
  ],

  reproducao: "Vivíparo. Os embriões desenvolvem-se ligados à mãe por uma placenta vitelínica. As ninhadas costumam ter entre 3 e 15 filhotes.",

  comportamento: "Espécie geralmente solitária e discreta. Passa grande parte do tempo em águas profundas, realizando deslocamentos ao longo da plataforma continental em busca de alimento.",

  tracosComportamento: [
    "Solitário",
    "Predador de águas profundas",
    "Movimentos ao longo da plataforma continental"
  ],

  relacaoHumanos: "Raramente entra em contato com pessoas devido ao habitat profundo. Não há registros confirmados de ataques, mas é capturado frequentemente pela pesca comercial.",

  tracosRelacaoHumanos: [
    "Sem ataques confirmados",
    "Capturado pela pesca comercial",
    "Baixo contato com mergulhadores"
  ],

  statusIUCN: "DD",
  statusTexto: "Classificado como Dados Insuficientes (DD) pela IUCN, embora populações possam estar em declínio devido à pesca excessiva.",

  curiosidades: [
    "Seu focinho proporcionalmente grande originou seu nome comum.",
    "É uma espécie pouco observada por viver em águas profundas.",
    "Pode realizar migrações verticais em busca de alimento.",
    "É frequentemente confundido com outros tubarões do gênero Carcharhinus."
  ],

  especiesRelacionadas: [
    {
      slug: "tubarao-de-pontas-prateadas",
      nomePopular: "Tubarão-de-pontas-prateadas",
      nomeCientifico: "Carcharhinus albimarginatus"
    },
    {
      slug: "tubarao-de-nariz-preto",
      nomePopular: "Tubarão-de-nariz-preto",
      nomeCientifico: "Carcharhinus acronotus"
    }
  ],

  imagens: [
    "tubarao-de-nariz-grande.jpg"
  ],
},
{
  slug: "tubarao-gracioso",
  nomePopular: "Tubarão-gracioso",
  nomeCientifico: "Carcharhinus amblyrhynchoides",
  nomeIngles: "Graceful Shark",

  familia: "Carcharhinidae",
  ordem: "Carcharhiniformes",
  classe: "Chondrichthyes",

  descricao: "Tubarão costeiro de porte médio encontrado nas águas tropicais do Indo-Pacífico. Recebe esse nome pelo corpo esguio e pelos movimentos elegantes durante a natação.",

  comprimento: "1,5 – 1,8 m (máximo cerca de 2 m)",
  peso: "20 – 40 kg",
  profundidade: "20 – 150 m",
  expectativaVida: "cerca de 20 anos",
  denticao: "Dentes superiores triangulares e serrilhados e dentes inferiores estreitos e pontiagudos, adaptados para capturar peixes e cefalópodes.",

  caracteristicasTexto: "Corpo fino e hidrodinâmico, focinho longo e arredondado, dorso cinza-azulado e ventre branco. As pontas das nadadeiras apresentam discretas marcas escuras, principalmente em indivíduos jovens.",

  distribuicao: "Distribuído pelo Indo-Pacífico, do Golfo Pérsico e costa leste da África até o Sudeste Asiático, Papua-Nova Guiné e norte da Austrália.",

  habitat: "Habita águas costeiras, plataformas continentais, recifes e áreas de fundo arenoso ou lodoso.",

  alimentacao: "Alimenta-se principalmente de peixes ósseos, lulas, polvos, camarões e outros crustáceos.",

  presas: [
    "Peixes ósseos",
    "Lulas",
    "Polvos",
    "Crustáceos"
  ],

  reproducao: "Vivíparo. Os embriões desenvolvem-se ligados à mãe por uma placenta vitelínica. As ninhadas normalmente possuem entre 3 e 9 filhotes.",

  comportamento: "Espécie ativa, geralmente solitária ou encontrada em pequenos grupos. Nada continuamente em busca de alimento e realiza deslocamentos ao longo da costa.",

  tracosComportamento: [
    "Nadador ágil",
    "Solitário ou em pequenos grupos",
    "Predador costeiro"
  ],

  relacaoHumanos: "É tímido e normalmente evita mergulhadores. Não há registros confirmados de ataques fatais, mas pode ser capturado pela pesca comercial e artesanal.",

  tracosRelacaoHumanos: [
    "Inofensivo na maioria dos encontros",
    "Capturado pela pesca comercial",
    "Baixo risco de ataques"
  ],

  statusIUCN: "NT",
  statusTexto: "Classificado como Quase Ameaçado (NT) pela IUCN devido à pressão da pesca em parte de sua distribuição.",

  curiosidades: [
    "Recebeu o nome comum 'gracioso' por seu corpo delgado e nado elegante.",
    "É frequentemente confundido com o tubarão-cinzento-dos-recifes.",
    "Passa a maior parte do tempo em águas costeiras tropicais.",
    "É uma espécie relativamente pouco estudada em comparação com outros Carcharhinus."
  ],

  especiesRelacionadas: [
    {
      slug: "tubarao-cinzento-dos-recifes",
      nomePopular: "Tubarão-cinzento-dos-recifes",
      nomeCientifico: "Carcharhinus amblyrhynchos"
    },
    {
      slug: "tubarao-galha-preta",
      nomePopular: "Tubarão-galha-preta",
      nomeCientifico: "Carcharhinus limbatus"
    }
  ],

  imagens: [
    "tubarao-gracioso.jpg"
  ],
},
  {
  slug: "tubarao-cinzento-dos-recifes",
  nomePopular: "Tubarão-cinzento-dos-recifes",
  nomeCientifico: "Carcharhinus amblyrhynchos",
  nomeIngles: "Grey Reef Shark",

  familia: "Carcharhinidae",
  ordem: "Carcharhiniformes",
  classe: "Chondrichthyes",

  descricao: "Predador ágil e comum em recifes de coral do Indo-Pacífico. É uma das espécies mais características dos recifes tropicais e desempenha importante papel no equilíbrio desses ecossistemas.",

  comprimento: "1,5 – 2 m (máximo cerca de 2,6 m)",
  peso: "20 – 35 kg",
  profundidade: "0 – 280 m",
  expectativaVida: "cerca de 25 anos",
  denticao: "Dentes superiores triangulares e serrilhados; dentes inferiores mais estreitos e pontiagudos, próprios para capturar peixes e cefalópodes.",

  caracteristicasTexto: "Corpo esguio e cinza, ventre branco e margens escuras na nadadeira caudal. A extremidade posterior da cauda apresenta uma mancha preta bem evidente, característica da espécie.",

  distribuicao: "Encontrado em recifes tropicais do Oceano Índico e do Oceano Pacífico, desde o Mar Vermelho até a Polinésia Francesa.",

  habitat: "Habita recifes de coral, encostas recifais, lagoas e canais, geralmente em águas claras e próximas de ilhas oceânicas.",

  alimentacao: "Preda principalmente peixes ósseos, lulas, polvos, crustáceos e pequenos tubarões.",

  presas: [
    "Peixes ósseos",
    "Lulas",
    "Polvos",
    "Crustáceos"
  ],

  reproducao: "Vivíparo. Os embriões são alimentados por uma placenta vitelínica. As ninhadas geralmente possuem de 1 a 6 filhotes após cerca de um ano de gestação.",

  comportamento: "Espécie ativa durante o dia e a noite. Pode formar grupos, mas também é frequentemente observada sozinha. Demonstra comportamento territorial e realiza a famosa 'postura de ameaça' quando se sente acuada.",

  tracosComportamento: [
    "Territorial",
    "Predador ativo",
    "Postura de ameaça característica"
  ],

  relacaoHumanos: "Normalmente evita mergulhadores, mas pode aproximar-se quando há alimento. Ataques são raros e geralmente associados à pesca ou provocação.",

  tracosRelacaoHumanos: [
    "Popular no mergulho",
    "Ataques raros",
    "Sensível à pesca excessiva"
  ],

  statusIUCN: "EN",
  statusTexto: "Classificado como Em Perigo (EN) pela IUCN devido à sobrepesca, captura incidental e degradação dos recifes de coral.",

  curiosidades: [
    "É uma das espécies de tubarão mais comuns em recifes do Indo-Pacífico.",
    "Sua postura de ameaça inclui arquear o corpo, abaixar as nadadeiras peitorais e nadar em movimentos exagerados.",
    "Pode retornar repetidamente ao mesmo território durante anos.",
    "É considerado um dos principais predadores dos recifes de coral."
  ],

  especiesRelacionadas: [
    {
      slug: "tubarao-de-pontas-prateadas",
      nomePopular: "Tubarão-de-pontas-prateadas",
      nomeCientifico: "Carcharhinus albimarginatus"
    },
    {
      slug: "tubarao-de-pontas-negras-dos-recifes",
      nomePopular: "Tubarão-de-pontas-negras-dos-recifes",
      nomeCientifico: "Carcharhinus melanopterus"
    }
  ],

  imagens: [
    "tubarao-cinzento-dos-recifes.jpg"
  ],
  },
  {
  slug: "tubarao-de-borneu",
  nomePopular: "Tubarão-de-Bornéu",
  nomeCientifico: "Carcharhinus borneensis",
  nomeIngles: "Borneo Shark",

  familia: "Carcharhinidae",
  ordem: "Carcharhiniformes",
  classe: "Chondrichthyes",

  descricao: "Pequeno tubarão costeiro extremamente raro e pouco conhecido, endêmico da ilha de Bornéu. É uma das espécies de tubarão mais misteriosas do mundo, com poucos registros científicos.",

  comprimento: "60 – 70 cm (máximo cerca de 78 cm)",
  peso: "2 – 4 kg",
  profundidade: "10 – 100 m",
  expectativaVida: "desconhecida (estimada em 15 a 20 anos)",
  denticao: "Dentes pequenos, estreitos e levemente serrilhados, adaptados para capturar pequenos peixes e invertebrados.",

  caracteristicasTexto: "Corpo pequeno e esguio, coloração cinza-acastanhada no dorso e branca no ventre. Possui focinho relativamente curto e olhos grandes em relação ao tamanho do corpo.",

  distribuicao: "Restrito às águas costeiras do norte de Bornéu, especialmente na região de Sabah (Malásia) e possivelmente Brunei.",

  habitat: "Habita plataformas continentais rasas, estuários e áreas costeiras de fundo lodoso ou arenoso.",

  alimentacao: "Alimenta-se principalmente de pequenos peixes, camarões, lulas, caranguejos e outros invertebrados marinhos.",

  presas: [
    "Pequenos peixes",
    "Camarões",
    "Caranguejos",
    "Lulas"
  ],

  reproducao: "Vivíparo, com desenvolvimento dos embriões por placenta vitelínica. Pouco se sabe sobre seu ciclo reprodutivo devido à escassez de registros.",

  comportamento: "Provavelmente solitário e discreto, vivendo próximo ao fundo. Seus hábitos permanecem pouco conhecidos por causa da raridade da espécie.",

  tracosComportamento: [
    "Muito raro",
    "Solitário",
    "Hábitos pouco conhecidos"
  ],

  relacaoHumanos: "É completamente inofensivo para seres humanos. Pode ser capturado incidentalmente em redes de pesca artesanal.",

  tracosRelacaoHumanos: [
    "Inofensivo",
    "Captura incidental",
    "Extremamente raro"
  ],

  statusIUCN: "EN",
  statusTexto: "Classificado como Em Perigo (EN) pela IUCN devido à distribuição extremamente restrita, degradação do habitat e pressão da pesca costeira.",

  curiosidades: [
    "É uma das espécies de tubarão mais raramente observadas no mundo.",
    "Durante décadas foi conhecido por pouquíssimos exemplares em coleções científicas.",
    "É endêmico da ilha de Bornéu.",
    "Grande parte de sua biologia ainda permanece desconhecida."
  ],

  especiesRelacionadas: [
    {
      slug: "tubarao-de-nariz-preto",
      nomePopular: "Tubarão-de-nariz-preto",
      nomeCientifico: "Carcharhinus acronotus"
    },
    {
      slug: "tubarao-de-recife",
      nomePopular: "Tubarão-cinzento-dos-recifes",
      nomeCientifico: "Carcharhinus amblyrhynchos"
    }
  ],

  imagens: [
    "tubarao-de-borneu.jpg"
  ],
  },
  {
  slug: "tubarao-cobre",
  nomePopular: "Tubarão-cobre",
  nomeCientifico: "Carcharhinus brachyurus",
  nomeIngles: "Copper Shark",

  familia: "Carcharhinidae",
  ordem: "Carcharhiniformes",
  classe: "Chondrichthyes",

  descricao: "Grande tubarão costeiro conhecido pela coloração bronzeada do corpo. É um predador rápido que habita águas temperadas e subtropicais, alimentando-se principalmente de peixes e cefalópodes.",

  comprimento: "2,4 – 3 m (máximo cerca de 3,3 m)",
  peso: "150 – 300 kg",
  profundidade: "0 – 350 m",
  expectativaVida: "cerca de 25 a 30 anos",
  denticao: "Dentes superiores largos e serrilhados e dentes inferiores mais estreitos, adaptados para capturar peixes e mamíferos marinhos de pequeno porte.",

  caracteristicasTexto: "Corpo esguio e hidrodinâmico, coloração bronzeada ou cobre no dorso e ventre branco. Possui focinho longo e estreito, olhos relativamente grandes e nadadeiras sem marcas evidentes.",

  distribuicao: "Distribuído de forma descontínua em águas temperadas e subtropicais do Atlântico, Índico e Pacífico, incluindo África do Sul, Austrália, Nova Zelândia, Japão, Argentina e sul do Brasil.",

  habitat: "Habita águas costeiras, baías, plataformas continentais e estuários, podendo aproximar-se de praias e recifes.",

  alimentacao: "Predador ativo que caça peixes ósseos, raias, lulas, polvos, pequenos tubarões e ocasionalmente mamíferos marinhos.",

  presas: [
    "Peixes ósseos",
    "Raias",
    "Lulas",
    "Pequenos tubarões"
  ],

  reproducao: "Vivíparo. Os embriões desenvolvem-se ligados à mãe por uma placenta vitelínica. A gestação dura cerca de 12 meses e as ninhadas variam entre 7 e 24 filhotes.",

  comportamento: "Espécie geralmente solitária ou encontrada em pequenos grupos. É um nadador rápido e pode formar grandes agregações sazonais durante migrações e reprodução.",

  tracosComportamento: [
    "Nadador rápido",
    "Migrações sazonais",
    "Forma agregações temporárias"
  ],

  relacaoHumanos: "Normalmente evita seres humanos, mas devido ao seu tamanho é considerado potencialmente perigoso. Ataques são raros. É muito visado pela pesca esportiva e comercial.",

  tracosRelacaoHumanos: [
    "Ataques raros",
    "Pesca esportiva",
    "Potencialmente perigoso"
  ],

  statusIUCN: "VU",
  statusTexto: "Classificado como Vulnerável (VU) pela IUCN devido à sobrepesca, captura incidental e ao crescimento lento da espécie.",

  curiosidades: [
    "Recebe esse nome pela coloração bronzeada característica do corpo.",
    "Realiza longas migrações entre áreas de alimentação e reprodução.",
    "É uma das poucas espécies de Carcharhinus comuns em águas temperadas.",
    "Jovens frequentemente utilizam baías e estuários como áreas de crescimento."
  ],

  especiesRelacionadas: [
    {
      slug: "tubarao-touro",
      nomePopular: "Tubarão-touro",
      nomeCientifico: "Carcharhinus leucas"
    },
    {
      slug: "tubarao-de-pontas-prateadas",
      nomePopular: "Tubarão-de-pontas-prateadas",
      nomeCientifico: "Carcharhinus albimarginatus"
    }
  ],

  imagens: [
    "tubarao-cobre.jpg"
  ],
  },
  {
  slug: "tubarao-galha-preta",
  nomePopular: "Tubarão-galha-preta",
  nomeCientifico: "Carcharhinus limbatus",
  nomeIngles: "Blacktip Shark",

  familia: "Carcharhinidae",
  ordem: "Carcharhiniformes",
  classe: "Chondrichthyes",

  descricao: "Tubarão costeiro ágil e amplamente distribuído em mares tropicais e subtropicais. É facilmente reconhecido pelas pontas pretas das nadadeiras e pelos saltos espetaculares durante a caça.",

  comprimento: "1,5 – 2,2 m (máximo cerca de 2,8 m)",
  peso: "30 – 120 kg",
  profundidade: "0 – 150 m",
  expectativaVida: "cerca de 12 a 20 anos",
  denticao: "Dentes triangulares, afiados e serrilhados na mandíbula superior, adaptados para capturar peixes rápidos.",

  caracteristicasTexto: "Corpo esguio e hidrodinâmico, dorso cinza-azulado e ventre branco. As pontas da primeira nadadeira dorsal, peitorais, pélvicas e lobo inferior da cauda apresentam manchas pretas características.",

  distribuicao: "Distribuído em águas tropicais e subtropicais dos oceanos Atlântico, Índico e Pacífico, incluindo a costa brasileira.",

  habitat: "Habita águas costeiras, praias, estuários, baías, recifes e plataformas continentais rasas.",

  alimentacao: "Alimenta-se principalmente de peixes ósseos, lulas, polvos, camarões e outros crustáceos.",

  presas: [
    "Peixes ósseos",
    "Lulas",
    "Polvos",
    "Camarões"
  ],

  reproducao: "Vivíparo. Os embriões desenvolvem-se ligados à mãe por uma placenta vitelínica. A gestação dura cerca de 10 a 12 meses e as ninhadas possuem entre 1 e 10 filhotes.",

  comportamento: "Espécie ativa e veloz, frequentemente formando pequenos grupos. Durante a caça pode saltar completamente para fora da água enquanto captura cardumes.",

  tracosComportamento: [
    "Nadador muito rápido",
    "Realiza saltos durante a caça",
    "Forma pequenos grupos"
  ],

  relacaoHumanos: "Geralmente evita pessoas. Ataques são raros e normalmente relacionados à confusão durante a alimentação ou à pesca. É bastante capturado pela pesca comercial e esportiva.",

  tracosRelacaoHumanos: [
    "Ataques raros",
    "Importante para a pesca esportiva",
    "Frequente na pesca comercial"
  ],

  statusIUCN: "VU",
  statusTexto: "Classificado como Vulnerável (VU) pela IUCN devido à sobrepesca, captura incidental e degradação de habitats costeiros.",

  curiosidades: [
    "É famoso pelos impressionantes saltos para fora da água durante a caça.",
    "As pontas pretas das nadadeiras facilitam sua identificação.",
    "Jovens utilizam estuários e baías como áreas de crescimento.",
    "É uma das espécies de tubarão costeiro mais comuns em águas tropicais."
  ],

  especiesRelacionadas: [
    {
      slug: "tubarao-de-pontas-negras-dos-recifes",
      nomePopular: "Tubarão-de-pontas-negras-dos-recifes",
      nomeCientifico: "Carcharhinus melanopterus"
    },
    {
      slug: "tubarao-de-nariz-preto",
      nomePopular: "Tubarão-de-nariz-preto",
      nomeCientifico: "Carcharhinus acronotus"
    }
  ],

  imagens: [
    "tubarao-galha-preta.jpg"
  ],
  },
];
