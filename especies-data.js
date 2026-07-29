/* ═══════════════════════════════════════════════
   TUBAROPÉDIA — BASE DE DADOS DAS ESPÉCIES
   Edite apenas este arquivo para gerenciar as espécies.
   A página especie.html lê daqui automaticamente.

   Para colocar uma foto: salve a imagem numa pasta "imagens"
   ao lado do especie.html e escreva o nome do arquivo aqui
   embaixo, no campo "imagens" de cada espécie (pode colocar
   mais de uma, a primeira é a foto principal).
   ═══════════════════════════════════════════════ */

const ESPECIES = [
  {
    slug: "tubarão-de-nariz-preto",
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
    slug: "tubarao-martelo",
    nomePopular: "Tubarão-martelo-comum", nomeCientifico: "Sphyrna lewini", nomeIngles: "Scalloped Hammerhead",
    familia: "Sphyrnidae", ordem: "Carcharhiniformes", classe: "Chondrichthyes",
    descricao: "Reconhecido pelo formato único da cabeça em forma de martelo, que amplia seu campo de visão e sensibilidade elétrica.",
    comprimento: "2,5 – 3,5 m (podendo ultrapassar 4 m)", peso: "80 – 150 kg",
    profundidade: "0 – 500 m", expectativaVida: "cerca de 30 a 35 anos", denticao: "dentes triangulares e serrilhados",
    caracteristicasTexto: "Cabeça alargada e achatada (cefalofólio), corpo esguio e coloração acinzentada com ventre claro.",
    distribuicao: "Presente em águas costeiras e oceânicas tropicais e subtropicais de todo o mundo.",
    habitat: "Frequenta plataformas continentais, ilhas oceânicas e recifes, formando cardumes perto de montes submarinos.",
    alimentacao: "Peixes, polvos, lulas e outros tubarões e raias, imobilizados com o auxílio da cabeça em formato de martelo.",
    presas: ["Peixes", "Lulas", "Polvos", "Raias"],
    reproducao: "Vivíparo placentário. Gestação de 9 a 10 meses, com 15 a 30 filhotes por ninhada.",
    comportamento: "Forma grandes cardumes durante o dia, dispersando-se à noite para caçar sozinho.",
    tracosComportamento: ["Forma cardumes", "Caça noturna solitária", "Alta sensibilidade elétrica"],
    relacaoHumanos: "Não é considerado perigoso para humanos. Muito visado pelo comércio de barbatanas.",
    tracosRelacaoHumanos: ["Baixo risco a humanos", "Alvo do comércio de barbatanas", "Atração para mergulho"],
    statusIUCN: "CR", statusTexto: "Classificado como Criticamente em Perigo (CR) pela IUCN, com forte declínio por sobrepesca.",
    curiosidades: [
      "O formato da cabeça é chamado de \"cefalofólio\".",
      "Amplia o campo de visão para quase 360 graus.",
      "Forma cardumes de até centenas de indivíduos.",
      "É uma das espécies de martelo mais ameaçadas do mundo."
    ],
    especiesRelacionadas: [
      { slug: "tubarao-touro", nomePopular: "Tubarão-touro", nomeCientifico: "Carcharhinus leucas" }
    ],
    imagens: [
      "tubarao-martelo.jpg",
    ],
  },
  {
    slug: "tubarao-touro",
    nomePopular: "Tubarão-touro", nomeCientifico: "Carcharhinus leucas", nomeIngles: "Bull Shark",
    familia: "Carcharhinidae", ordem: "Carcharhiniformes", classe: "Chondrichthyes",
    descricao: "Uma das poucas espécies capazes de tolerar água doce, sendo encontrada em rios como o Amazonas.",
    comprimento: "2,3 – 2,4 m (podendo ultrapassar 3,3 m)", peso: "90 – 230 kg",
    profundidade: "0 – 150 m", expectativaVida: "cerca de 16 a 25 anos", denticao: "dentes largos, triangulares e serrilhados",
    caracteristicasTexto: "Corpo robusto, focinho curto e largo, coloração acinzentada. Adaptado a grandes variações de salinidade.",
    distribuicao: "Encontrado em águas costeiras tropicais e subtropicais de todo o mundo, incluindo rios e estuários.",
    habitat: "Vive tanto em água salgada quanto em água doce, sendo registrado em rios como o Amazonas e o Mississippi.",
    alimentacao: "Predador oportunista: peixes, outros tubarões, raias, tartarugas e mamíferos que entram na água.",
    presas: ["Peixes", "Tartarugas", "Outros tubarões", "Aves marinhas"],
    reproducao: "Vivíparo placentário. Gestação de 10 a 11 meses, com 1 a 13 filhotes, geralmente em águas doces ou estuarinas.",
    comportamento: "Territorial e defensivo quando ameaçado. Tolera grandes variações de salinidade.",
    tracosComportamento: ["Tolera água doce", "Territorial", "Adaptável a ambientes variados"],
    relacaoHumanos: "Uma das espécies mais associadas a ataques a humanos, por sua presença em águas rasas habitadas.",
    tracosRelacaoHumanos: ["Maior interação com áreas costeiras", "Envolvido em ataques ocasionais", "Sensível à poluição de rios"],
    statusIUCN: "VU", statusTexto: "Classificado como Vulnerável (VU) pela IUCN, com declínio por pesca e degradação de rios.",
    curiosidades: [
      "É um dos poucos tubarões que sobrevive bem em água doce.",
      "Já foi registrado a milhares de quilômetros rio acima, no Amazonas.",
      "Possui uma das maiores concentrações de testosterona entre os animais.",
      "Seu nome vem do comportamento agressivo e do focinho curto e largo."
    ],
    especiesRelacionadas: [
      { slug: "tubarao-martelo", nomePopular: "Tubarão-martelo-comum", nomeCientifico: "Sphyrna lewini" }
    ],
    imagens: [
      "tubarao-touro.jpg",
    ],
  },
  {
    slug: "tubarao-mako",
    nomePopular: "Tubarão-mako", nomeCientifico: "Isurus oxyrinchus", nomeIngles: "Shortfin Mako",
    familia: "Lamnidae", ordem: "Lamniformes", classe: "Chondrichthyes",
    descricao: "Considerado o tubarão mais rápido do oceano, capaz de atingir grandes velocidades em curtas distâncias.",
    comprimento: "2,5 – 3,2 m (podendo ultrapassar 4 m)", peso: "60 – 135 kg",
    profundidade: "0 – 700 m", expectativaVida: "cerca de 28 a 32 anos", denticao: "dentes longos, finos e curvados",
    caracteristicasTexto: "Corpo hidrodinâmico e musculoso, coloração azul-metálica no dorso e ventre branco. Nadadeira caudal em formato de meia-lua.",
    distribuicao: "Distribuído em águas oceânicas temperadas e tropicais de todo o mundo, raramente próximo à costa.",
    habitat: "Espécie pelágica, prefere águas abertas e profundas, migrando por longas distâncias.",
    alimentacao: "Peixes rápidos como atuns e espadartes, além de outros tubarões e cefalópodes.",
    presas: ["Atuns", "Espadartes", "Lulas", "Outros tubarões"],
    reproducao: "Vivíparo placentário. Gestação de 15 a 18 meses, com 4 a 25 filhotes por ninhada.",
    comportamento: "Nadador extremamente veloz, capaz de saltos espetaculares fora d'água.",
    tracosComportamento: ["Nadador muito veloz", "Regula parcialmente a temperatura", "Salta fora d'água"],
    relacaoHumanos: "Muito visado pela pesca esportiva e comercial; interações com humanos são raras.",
    tracosRelacaoHumanos: ["Alvo de pesca esportiva", "Carne comercialmente valorizada", "Raro em águas rasas"],
    statusIUCN: "EN", statusTexto: "Classificado como Em Perigo (EN) pela IUCN, com forte declínio por sobrepesca global.",
    curiosidades: [
      "Pode atingir velocidades de até 74 km/h em curtas distâncias.",
      "É parente próximo do tubarão-branco.",
      "Consegue manter parte do corpo mais aquecido que a água ao redor.",
      "É conhecido por saltar vários metros fora da água quando fisgado."
    ],
    especiesRelacionadas: [
      { slug: "tubarao-branco", nomePopular: "Tubarão-branco", nomeCientifico: "Carcharodon carcharias" }
    ],
    imagens: [
      "tubarao-mako.jpg",
    ],
  },

];
