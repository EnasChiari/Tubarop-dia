/* ═══════════════════════════════════════════════
   TUBAROPÉDIA — BASE DE DADOS DAS FAMÍLIAS
   Edite apenas este arquivo para gerenciar as famílias.
   A página familias.html lê daqui automaticamente.

   Para colocar uma foto: salve a imagem numa pasta
   "imagens/familias" ao lado do familias.html, com o
   nome indicado no campo "imagem" de cada família.
   Sem a foto, aparece um ícone de tubarão no lugar.
   ═══════════════════════════════════════════════ */

const FAMILIAS = [
  { slug: "alopiidae", nome: "Alopiidae", especies: 3,
    descricao: "Tubarões conhecidos por suas longas nadadeiras peitorais e caudais. Inclui os tubarões-raposa.",
    imagem: "alopiidae.jpg" },

  { slug: "carcharhinidae", nome: "Carcharhinidae", especies: 53,
    descricao: "A maior e mais diversa família de tubarões, inclui espécies costeiras e oceânicas.",
    imagem: "carcharhinidae.jpg" },

  { slug: "cetorhinidae", nome: "Cetorhinidae", especies: 1,
    descricao: "Inclui o tubarão-frade, a segunda maior espécie de peixe do mundo.",
    imagem: "cetorhinidae.jpg" },

  { slug: "hexanchidae", nome: "Hexanchidae", especies: 1,
    descricao: "Conhecidos como tubarões-de-seis-fendas, possuem seis fendas branquiais.",
    imagem: "hexanchidae.jpg" },

  { slug: "lamnidae", nome: "Lamnidae", especies: 8,
    descricao: "Tubarões de grande porte, incluindo o tubarão-branco, tubarão-mako e tubarão-porco.",
    imagem: "lamnidae.jpg" },

  { slug: "sphyrnidae", nome: "Sphyrnidae", especies: 10,
    descricao: "Tubarões conhecidos por suas cabeças achatadas em forma de \"martelo\".",
    imagem: "sphyrnidae.jpg" },

  { slug: "orectolobidae", nome: "Orectolobidae", especies: 12,
    descricao: "Tubarões de fundo, geralmente possuem padrões de manchas e protuberâncias.",
    imagem: "orectolobidae.jpg" },

  { slug: "rajidae", nome: "Rajidae", especies: 5,
    descricao: "Inclui os tubarões-guitarra e outras espécies de raias e tubarões relacionados.",
    imagem: "rajidae.jpg" },

  { slug: "squalidae", nome: "Squalidae", especies: 2,
    descricao: "Pequenos tubarões de águas profundas, conhecidos como cações-lixa-espinhosos.",
    imagem: "squalidae.jpg" },

  { slug: "squatinidae", nome: "Squatinidae", especies: 23,
    descricao: "Tubarões-anjo, corpo achatado e hábitos de emboscada no fundo do mar.",
    imagem: "squatinidae.jpg" },

  { slug: "pristiophoridae", nome: "Pristiophoridae", especies: 9,
    descricao: "Tubarões-serra, com focinho longo e serrilhado usado para caçar.",
    imagem: "pristiophoridae.jpg" },

  { slug: "ginglymostomatidae", nome: "Ginglymostomatidae", especies: 3,
    descricao: "Inclui o tubarão-lixa, de hábitos noturnos e comportamento dócil.",
    imagem: "ginglymostomatidae.jpg" },

  { slug: "rhincodontidae", nome: "Rhincodontidae", especies: 1,
    descricao: "Família de um único membro: o gigante e filtrador tubarão-baleia.",
    imagem: "rhincodontidae.jpg" },

  { slug: "odontaspididae", nome: "Odontaspididae", especies: 3,
    descricao: "Tubarões-de-areia, com dentes longos e expressão de aparência feroz.",
    imagem: "odontaspididae.jpg" },

  { slug: "mitsukurinidae", nome: "Mitsukurinidae", especies: 1,
    descricao: "Família do raro tubarão-duende, de águas profundas e mandíbulas projetáveis.",
    imagem: "mitsukurinidae.jpg" },

  { slug: "megachasmidae", nome: "Megachasmidae", especies: 1,
    descricao: "Família do tubarão-boca-grande, espécie filtradora rara de águas profundas.",
    imagem: "megachasmidae.jpg" },

  { slug: "scyliorhinidae", nome: "Scyliorhinidae", especies: 40,
    descricao: "A maior família de tubarões-gato, pequenos e de hábitos bentônicos.",
    imagem: "scyliorhinidae.jpg" },

  { slug: "triakidae", nome: "Triakidae", especies: 46,
    descricao: "Tubarões-lisos, de porte pequeno a médio e amplamente distribuídos.",
    imagem: "triakidae.jpg" },

  { slug: "hemigaleidae", nome: "Hemigaleidae", especies: 8,
    descricao: "Tubarões-cinzentos-de-recife, encontrados em águas costeiras do Indo-Pacífico.",
    imagem: "hemigaleidae.jpg" },

  { slug: "pseudotriakidae", nome: "Pseudotriakidae", especies: 3,
    descricao: "Tubarões-falso-lisos, pouco conhecidos, habitam águas profundas.",
    imagem: "pseudotriakidae.jpg" },

  { slug: "dalatiidae", nome: "Dalatiidae", especies: 10,
    descricao: "Pequenos tubarões de águas profundas, incluindo o tubarão-charuto.",
    imagem: "dalatiidae.jpg" },

  { slug: "somniosidae", nome: "Somniosidae", especies: 17,
    descricao: "Tubarões-dorminhocos de águas frias e profundas, de metabolismo lento.",
    imagem: "somniosidae.jpg" },
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
