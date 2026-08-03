/* ═══════════════════════════════════════════════
   TUBAROPÉDIA — CONEXÕES ENTRE AS BASES DE DADOS
   Este arquivo NÃO substitui familias-data.js,
   generos-data.js e especies-data.js — ele os conecta,
   ligando cada espécie ao seu gênero e à sua família,
   cada gênero à sua família, e vice-versa.

   ORDEM DE CARREGAMENTO NO HTML (importante!):
     <script src="familias-data.js"></script>
     <script src="generos-data.js"></script>
     <script src="especies-data.js"></script>
     <script src="conexoes-data.js"></script>   <!-- sempre por último -->
   ═══════════════════════════════════════════════ */

(function () {
  if (typeof FAMILIAS === "undefined" || typeof GENEROS === "undefined" || typeof ESPECIES === "undefined") {
    console.warn("conexoes-data.js: carregue familias-data.js, generos-data.js e especies-data.js ANTES deste arquivo.");
    return;
  }

  // --- Índices rápidos por slug e por nome ---
  const FAMILIA_POR_SLUG = {};
  FAMILIAS.forEach(f => FAMILIA_POR_SLUG[f.slug] = f);

  const GENERO_POR_SLUG = {};
  GENEROS.forEach(g => GENERO_POR_SLUG[g.slug] = g);

  const ESPECIE_POR_SLUG = {};
  ESPECIES.forEach(e => ESPECIE_POR_SLUG[e.slug] = e);

  const FAMILIA_POR_NOME = {};
  FAMILIAS.forEach(f => FAMILIA_POR_NOME[f.nome.toLowerCase()] = f);

  const GENERO_POR_NOME = {};
  GENEROS.forEach(g => GENERO_POR_NOME[g.nome.toLowerCase()] = g);

  function generoDoNomeCientifico(nomeCientifico) {
    if (!nomeCientifico) return null;
    return nomeCientifico.trim().split(/\s+/)[0];
  }

  // --- Liga cada espécie ao seu gênero e à sua família ---
  ESPECIES.forEach(especie => {
    const nomeGenero = generoDoNomeCientifico(especie.nomeCientifico);
    const genero = nomeGenero ? GENERO_POR_NOME[nomeGenero.toLowerCase()] : null;
    especie.generoSlug = genero ? genero.slug : null;
    especie.generoNome = nomeGenero || null;

    const familia = especie.familia ? FAMILIA_POR_NOME[especie.familia.toLowerCase()] : null;
    especie.familiaSlug = familia ? familia.slug : null;
  });

  // --- Liga cada gênero à sua família e às espécies já cadastradas ---
  GENEROS.forEach(genero => {
    const familia = genero.familia ? FAMILIA_POR_NOME[genero.familia.toLowerCase()] : null;
    genero.familiaSlug = familia ? familia.slug : null;
    genero.especiesCadastradas = ESPECIES.filter(e => e.generoSlug === genero.slug);
  });

  // --- Liga cada família aos seus gêneros e espécies já cadastradas ---
  FAMILIAS.forEach(familia => {
    familia.generosCadastrados = GENEROS.filter(g => g.familiaSlug === familia.slug);
    familia.especiesCadastradas = ESPECIES.filter(e => e.familiaSlug === familia.slug);
  });

  // --- API pública de consulta, usável em qualquer página ---
  window.Tubaropedia = {
    // Busca direta por slug
    getFamilia: slug => FAMILIA_POR_SLUG[slug] || null,
    getGenero: slug => GENERO_POR_SLUG[slug] || null,
    getEspecie: slug => ESPECIE_POR_SLUG[slug] || null,
    getFichaFamilia: slug => (typeof FICHAS_FAMILIA !== "undefined" ? FICHAS_FAMILIA[slug] : null) || null,

    // Navegação entre os três níveis
    getGenerosDaFamilia: slug => GENEROS.filter(g => g.familiaSlug === slug),
    getEspeciesDoGenero: slug => ESPECIES.filter(e => e.generoSlug === slug),
    getEspeciesDaFamilia: slug => ESPECIES.filter(e => e.familiaSlug === slug),
    getFamiliaDoGenero: slug => {
      const g = GENERO_POR_SLUG[slug];
      return g && g.familiaSlug ? FAMILIA_POR_SLUG[g.familiaSlug] : null;
    },
    getGeneroDaEspecie: slug => {
      const e = ESPECIE_POR_SLUG[slug];
      return e && e.generoSlug ? GENERO_POR_SLUG[e.generoSlug] : null;
    },
    getFamiliaDaEspecie: slug => {
      const e = ESPECIE_POR_SLUG[slug];
      return e && e.familiaSlug ? FAMILIA_POR_SLUG[e.familiaSlug] : null;
    },

    // Busca livre, útil para uma barra de pesquisa única no site
    buscar: termo => {
      const t = (termo || "").toLowerCase().trim();
      if (!t) return { familias: [], generos: [], especies: [] };
      return {
        familias: FAMILIAS.filter(f => f.nome.toLowerCase().includes(t)),
        generos: GENEROS.filter(g => g.nome.toLowerCase().includes(t)),
        especies: ESPECIES.filter(e =>
          e.nomePopular.toLowerCase().includes(t) ||
          e.nomeCientifico.toLowerCase().includes(t)
        ),
      };
    },
  };

  console.log(
    `Tubaropédia conectada: ${FAMILIAS.length} famílias, ${GENEROS.length} gêneros, ${ESPECIES.length} espécies cadastradas.`
  );
})();
