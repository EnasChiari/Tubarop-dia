/* ═══════════════════════════════════════════════
   TUBARÕES FÓSSEIS — BASE DE DADOS DA PÁGINA INICIAL
   Edite este arquivo para trocar famílias, gêneros,
   estatísticas, o fóssil em destaque, a linha do tempo
   e a curiosidade da seção "Você sabia?".

   Fotos: crie uma pasta "imagens" ao lado do fosseis.html
   e salve os arquivos com os nomes indicados abaixo. Sem
   a foto, aparece um ícone de fóssil (amonite) no lugar.
   ═══════════════════════════════════════════════ */

const FOSSEIS_ESTATISTICAS = {
  especiesExtintas: "+200",
  fosseisCatalogados: "+1000",
  primeirosRegistrosAnos: "450",
  primeirosRegistrosPeriodo: "Primeiros registros no período Ordoviciano",
};

const FAMILIAS_EXTINTAS = [
  { slug: "cladoselachidae", nome: "Cladoselachidae", periodo: "Ordoviciano – Devoniano", anos: "470 – 360 M.A.", imagem: "cladoselachidae.jpg" },
  { slug: "helicoprionidae", nome: "Helicoprionidae", periodo: "Permiano – Triássico", anos: "290 – 200 M.A.", imagem: "helicoprionidae.jpg" },
  { slug: "ptychodontidae", nome: "Ptychodontidae", periodo: "Carbonífero – Permiano", anos: "360 – 250 M.A.", imagem: "ptychodontidae.jpg" },
  { slug: "caseodontidae", nome: "Caseodontidae", periodo: "Devoniano – Permiano", anos: "410 – 250 M.A.", imagem: "caseodontidae.jpg" },
  { slug: "xenacanthidae", nome: "Xenacanthidae", periodo: "Carbonífero – Triássico", anos: "360 – 200 M.A.", imagem: "xenacanthidae.jpg" },
  { slug: "symmoriidae", nome: "Symmoriidae", periodo: "Triássico – Jurássico", anos: "250 – 145 M.A.", imagem: "symmoriidae.jpg" },
];

const GENEROS_EXTINTOS = [
  { slug: "cladoselache", nome: "Cladoselache", familia: "Cladoselachidae", imagem: "cladoselache.jpg" },
  { slug: "helicoprion", nome: "Helicoprion", familia: "Helicoprionidae", imagem: "helicoprion.jpg" },
  { slug: "ptychodus", nome: "Ptychodus", familia: "Ptychodontidae", imagem: "ptychodus.jpg" },
  { slug: "caseodus", nome: "Caseodus", familia: "Caseodontidae", imagem: "caseodus.jpg" },
  { slug: "xenacanthus", nome: "Xenacanthus", familia: "Xenacanthidae", imagem: "xenacanthus.jpg" },
  { slug: "edestus", nome: "Edestus", familia: "Xenacanthidae", imagem: "edestus.jpg" },
  { slug: "stethacanthus", nome: "Stethacanthus", familia: "Symmoriidae", imagem: "stethacanthus.jpg" },
];

const FOSSIL_DESTAQUE = {
  nome: "Helicoprion sp.",
  descricao: "Fóssil de dente espiral completo",
  idade: "~ 270 M.A.",
  local: "Utah, EUA",
  imagem: "helicoprion-destaque.jpg",
};

const LINHA_DO_TEMPO = [
  { era: "Ordoviciano", anos: "470 – 445 M.A." },
  { era: "Devoniano", anos: "419 – 359 M.A." },
  { era: "Carbonífero", anos: "359 – 299 M.A." },
  { era: "Permiano", anos: "299 – 252 M.A." },
  { era: "Triássico", anos: "252 – 201 M.A." },
  { era: "Jurássico", anos: "201 – 145 M.A." },
];

const VOCE_SABIA = {
  texto: "Muitos tubarões extintos tinham dentes e estruturas muito diferentes dos tubarões atuais, como dentes em espiral, lâminas ósseas na cabeça e mandíbulas extremamente fortes.",
  imagem: "curiosidade-dente-fossil.jpg",
};
