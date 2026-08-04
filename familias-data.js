

const FAMILIAS = [
 
  { slug: "carcharhinidae", nome: "Carcharhinidae", especies: 53,
    descricao: "A maior e mais diversa família de tubarões, inclui espécies costeiras e oceânicas.",
    imagem: "carcharhinidae.jpg" },
 {
  slug: "lamnidae",
  nome: "Lamnidae",
  especies: 5,
  descricao: "Família de tubarões oceânicos de grande porte, conhecidos pela alta velocidade, corpo hidrodinâmico e capacidade de manter parte da temperatura corporal acima da da água. Inclui o tubarão-branco, os makos e o tubarão-salmão.",
  imagem: "lamnidae.jpg"
},
];

/* Estatísticas gerais mostradas no painel lateral */
const ESTATISTICAS_FAMILIAS = {
  totalFamilias: FAMILIAS.length,
  totalGeneros: "~80",
  totalEspecies: "500+",
  especiesAmeacadas: "~30%",
};

/* Ranking fixo de "famílias mais diversas" (top 5 em destaque) */
const FAMILIAS_MAIS_DIVERSAS = [
  { slug: "carcharhinidae", nome: "Carcharhinidae", texto: "53 espécies" },
  { slug: "sphyrnidae", nome: "Sphyrnidae", texto: "10 espécies" },
  { slug: "lamnidae", nome: "Lamnidae", texto: "8 espécies" },
  { slug: "orectolobidae", nome: "Orectolobidae", texto: "12 espécies" },
  { slug: "scyliorhinidae", nome: "Scyliorhinidae", texto: "40+ espécies" },
];

/* ---------------------------------------------------------------
   Fichas completas das famílias (antes em familias-detalhe-data.js)
   Nem toda família precisa ter uma entrada aqui — as que não têm
   usam só os dados básicos acima (nome, descrição, contagem).
--------------------------------------------------------------- */
const FICHAS_FAMILIA = {

  "carcharhinidae": {
    slug: "carcharhinidae",
    nome: "Carcharhinidae",
    nomePopular: "tubarões-requiem",
    reino: "Animalia", filo: "Chordata", classe: "Chondrichthyes", ordem: "Carcharhiniformes",
    autoridade: "(Gray, 1851)",
    especiesDescritas: 53,
    generos: 13,


    habitatResumo: "Marinho (costeiro e oceânico)",
    distribuicaoResumo: "Global (águas tropicais, subtropicais e temperadas)",
    tamanhoResumo: "De 30 cm a mais de 6 m",
    descricaoHero: "Carcharhinidae é uma das maiores e mais diversas famílias de tubarões, incluindo espécies costeiras e oceânicas, de águas tropicais a temperadas. São conhecidos popularmente como tubarões-requiem.",
    heroImagem: "carcharhinidae-hero.jpg",

    descricaoGeral: [
      "Os tubarões da família Carcharhinidae são caracterizados por um corpo fusiforme, focinho moderadamente longo e achatado, cinco fendas branquiais e duas principais nadadeiras dorsais de tamanho semelhante. A maioria das espécies possui coloração que varia entre tons de cinza, marrom e azul, com ventre claro.",
      "São conhecidos como tubarões-requiem devido ao formato da nadadeira caudal, onde o lobo superior é maior que o inferior, característica distinta dentro da ordem Carcharhiniformes."
    ],

    caracteristicas: [
      "Corpo fusiforme e aerodinâmico.",
      "Duas nadadeiras dorsais de tamanho semelhante.",
      "Fendas branquiais moderadamente longas.",
      "Nadadeira caudal heterocerca, com lobo superior mais desenvolvido.",
      "Dentição geralmente serrilhada, adaptada para capturar presas ativas.",
      "Vivíparos (a maioria), com desenvolvimento interno dos filhotes."
    ],

    distribuicaoTexto: "Os Carcharhinidae estão amplamente distribuídos em todos os oceanos, principalmente em águas tropicais e subtropicais, mas também presentes em regiões temperadas.",

    habitatTexto: "Habitam desde águas costeiras rasas, recifes de coral, estuários e baías até o oceano aberto e plataformas continentais. Algumas espécies toleram águas salobras e podem entrar em rios.",
    habitatFoto: "carcharhinidae-habitat.jpg",

    alimentacaoTexto: "São carnívoros. Alimentam-se principalmente de peixes ósseos, peixes cartilaginosos, lulas, polvos, crustáceos e, ocasionalmente, de mamíferos marinhos e aves marinhas.",
    presas: ["Peixes", "Lulas", "Polvos", "Crustáceos", "Outros tubarões"],

    reproducaoTexto: "A maioria das espécies é vivípara, com gestação interna através de placenta. O número de filhotes varia bastante entre as espécies, de 1 a mais de 20. O período de gestação geralmente varia de 6 a 18 meses.",
    reproducaoStats: [
      { label: "Vivíparos" },
      { label: "6 – 18 meses de gestação" },
      { label: "1 – 20+ filhotes" },
      { label: "Nascem totalmente formados" }
    ],

    comportamentoTexto: "Muitos são solitários, mas algumas espécies podem se reunir em grandes grupos, principalmente em áreas de alimentação ou durante a migração. Ativos principalmente durante o dia, mas algumas espécies são mais ativas à noite ou ao crepúsculo.",
    comportamentoTracos: ["Geralmente solitários", "Podem formar grupos", "Migratórios", "Ativos de dia ou crepúsculo"],

    relacaoHumanosTexto: "Algumas espécies são importantes para a pesca comercial e esportiva. A maioria não é agressiva com humanos, mas podem representar risco em situações específicas, principalmente espécies de maior porte.",
    relacaoTracos: ["Importância econômica", "Turismo e mergulho", "Risco potencial", "Ecologicamente importantes"],

    statusTexto: "O estado de conservação varia entre as espécies. Muitas estão ameaçadas devido à pesca predatória, destruição de habitat e comércio de nadadeiras.",
    iucnDestaque: "CR",

    maiorEspecie: { nome: "Tubarão-branco", cientifico: "Carcharodon carcharias", tamanho: "~6,4 m" },
    menorEspecie: { nome: "Tubarão-anão", cientifico: "Etmopterus pusillus", tamanho: "~30 cm" },

    especiesDestaque: [
      { nomePopular: "Tubarão-branco", cientifico: "Carcharodon carcharias", imagem: "tubarao-branco.jpg", slug: "tubarao-branco" },
      { nomePopular: "Tubarão-tigre", cientifico: "Galeocerdo cuvier", imagem: "tubarao-tigre.jpg", slug: "tubarao-tigre" },
      { nomePopular: "Tubarão-azul", cientifico: "Prionace glauca", imagem: "tubarao-azul.jpg", slug: "tubarao-azul" },
      { nomePopular: "Tubarão-mako", cientifico: "Isurus oxyrinchus", imagem: "tubarao-mako.jpg", slug: "tubarao-mako" },
      { nomePopular: "Tubarão-galha-preta", cientifico: "Carcharhinus limbatus", imagem: "tubarao-galha-preta.jpg", slug: "tubarao-galha-preta" },
      { nomePopular: "Tubarão-de-recife", cientifico: "Carcharhinus melanopterus", imagem: "tubarao-de-recife.jpg", slug: "tubarao-pontas-negras" }
    ],

    artigosRelacionados: [
      { titulo: "Ordem Carcharhiniformes", href: "#" },
      { titulo: "Tubarões-requiem", href: "#" },
      { titulo: "Anatomia de tubarões", href: "#" },
      { titulo: "Conservação dos tubarões", href: "#" }
    ],

    galeria: ["carcharhinidae-galeria-1.jpg", "carcharhinidae-galeria-2.jpg", "carcharhinidae-galeria-3.jpg", "carcharhinidae-galeria-4.jpg"]
  }

};
