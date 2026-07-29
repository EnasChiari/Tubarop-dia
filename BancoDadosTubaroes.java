import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Banco de dados de tubarões da TubaroPédia.
 *
 * Estrutura simples em memória (sem dependências externas), pronta para
 * ser usada como camada de dados de uma aplicação Java, ou adaptada
 * futuramente para um banco relacional (MySQL/PostgreSQL) via JDBC.
 *
 * Como usar:
 *   javac BancoDadosTubaroes.java
 *   java BancoDadosTubaroes
 */
public class BancoDadosTubaroes {

    // ===================== MODELO =====================
    public static class Tubarao {
        private int id;
        private String nomePopular;
        private String nomeCientifico;
        private String familia;
        private String habitat;
        private double tamanhoMedioMetros;
        private String statusConservacao; // ex: "Vulnerável", "Ameaçado", "Pouco preocupante"
        private String descricao;

        public Tubarao(int id, String nomePopular, String nomeCientifico, String familia,
                        String habitat, double tamanhoMedioMetros, String statusConservacao,
                        String descricao) {
            this.id = id;
            this.nomePopular = nomePopular;
            this.nomeCientifico = nomeCientifico;
            this.familia = familia;
            this.habitat = habitat;
            this.tamanhoMedioMetros = tamanhoMedioMetros;
            this.statusConservacao = statusConservacao;
            this.descricao = descricao;
        }

        public int getId() { return id; }
        public String getNomePopular() { return nomePopular; }
        public String getNomeCientifico() { return nomeCientifico; }
        public String getFamilia() { return familia; }
        public String getHabitat() { return habitat; }
        public double getTamanhoMedioMetros() { return tamanhoMedioMetros; }
        public String getStatusConservacao() { return statusConservacao; }
        public String getDescricao() { return descricao; }


        public String toJson() {
            return String.format(
                "{\"id\":%d,\"nomePopular\":\"%s\",\"nomeCientifico\":\"%s\",\"familia\":\"%s\"," +
                "\"habitat\":\"%s\",\"tamanhoMedioMetros\":%.1f,\"statusConservacao\":\"%s\",\"descricao\":\"%s\"}",
                id, nomePopular, nomeCientifico, familia, habitat, tamanhoMedioMetros,
                statusConservacao, descricao.replace("\"", "\\\"")
            );
        }

        @Override
        public String toString() {
            return String.format("#%d %s (%s) — Família %s, %s, ~%.1fm, status: %s",
                id, nomePopular, nomeCientifico, familia, habitat, tamanhoMedioMetros, statusConservacao);
        }
    }

    public static class FichaCompleta {
        private Tubarao base;
        private String nomeIngles;
        private String ordem;
        private String classe;
        private String comprimentoFaixa;
        private String pesoFaixa;
        private String profundidade;
        private String expectativaVida;
        private String denticao;
        private String distribuicaoTexto;
        private String habitatTexto;
        private String alimentacaoTexto;
        private List<String> presas = new ArrayList<>();
        private String reproducaoTexto;
        private String comportamentoTexto;
        private List<String> tracosComportamento = new ArrayList<>();
        private String relacaoHumanosTexto;
        private List<String> tracosRelacaoHumanos = new ArrayList<>();
        private String statusIUCN; // sigla: EX, EW, CR, EN, VU, NT, LC
        private String statusTexto;
        private List<String> curiosidades = new ArrayList<>();
        private List<String[]> especiesRelacionadas = new ArrayList<>(); // {nomePopular, nomeCientifico}

        public FichaCompleta(Tubarao base) { this.base = base; }

        public Tubarao getBase() { return base; }
        public FichaCompleta nomeIngles(String v) { this.nomeIngles = v; return this; }
        public FichaCompleta ordem(String v) { this.ordem = v; return this; }
        public FichaCompleta classe(String v) { this.classe = v; return this; }
        public FichaCompleta comprimentoFaixa(String v) { this.comprimentoFaixa = v; return this; }
        public FichaCompleta pesoFaixa(String v) { this.pesoFaixa = v; return this; }
        public FichaCompleta profundidade(String v) { this.profundidade = v; return this; }
        public FichaCompleta expectativaVida(String v) { this.expectativaVida = v; return this; }
        public FichaCompleta denticao(String v) { this.denticao = v; return this; }
        public FichaCompleta distribuicaoTexto(String v) { this.distribuicaoTexto = v; return this; }
        public FichaCompleta habitatTexto(String v) { this.habitatTexto = v; return this; }
        public FichaCompleta alimentacaoTexto(String v) { this.alimentacaoTexto = v; return this; }
        public FichaCompleta presas(String... v) { this.presas = List.of(v); return this; }
        public FichaCompleta reproducaoTexto(String v) { this.reproducaoTexto = v; return this; }
        public FichaCompleta comportamentoTexto(String v) { this.comportamentoTexto = v; return this; }
        public FichaCompleta tracosComportamento(String... v) { this.tracosComportamento = List.of(v); return this; }
        public FichaCompleta relacaoHumanosTexto(String v) { this.relacaoHumanosTexto = v; return this; }
        public FichaCompleta tracosRelacaoHumanos(String... v) { this.tracosRelacaoHumanos = List.of(v); return this; }
        public FichaCompleta statusIUCN(String v) { this.statusIUCN = v; return this; }
        public FichaCompleta statusTexto(String v) { this.statusTexto = v; return this; }
        public FichaCompleta curiosidades(String... v) { this.curiosidades = List.of(v); return this; }
        public FichaCompleta especieRelacionada(String nomePopular, String nomeCientifico) {
            this.especiesRelacionadas.add(new String[]{nomePopular, nomeCientifico});
            return this;
        }

        public String toJson() {
            StringBuilder sb = new StringBuilder();
            sb.append("{\n");
            sb.append("  \"nomePopular\": \"").append(base.getNomePopular()).append("\",\n");
            sb.append("  \"nomeCientifico\": \"").append(base.getNomeCientifico()).append("\",\n");
            sb.append("  \"nomeIngles\": \"").append(nomeIngles).append("\",\n");
            sb.append("  \"familia\": \"").append(base.getFamilia()).append("\",\n");
            sb.append("  \"ordem\": \"").append(ordem).append("\",\n");
            sb.append("  \"classe\": \"").append(classe).append("\",\n");
            sb.append("  \"descricao\": \"").append(base.getDescricao()).append("\",\n");
            sb.append("  \"comprimento\": \"").append(comprimentoFaixa).append("\",\n");
            sb.append("  \"peso\": \"").append(pesoFaixa).append("\",\n");
            sb.append("  \"profundidade\": \"").append(profundidade).append("\",\n");
            sb.append("  \"expectativaVida\": \"").append(expectativaVida).append("\",\n");
            sb.append("  \"denticao\": \"").append(denticao).append("\",\n");
            sb.append("  \"distribuicao\": \"").append(distribuicaoTexto).append("\",\n");
            sb.append("  \"habitat\": \"").append(habitatTexto).append("\",\n");
            sb.append("  \"alimentacao\": \"").append(alimentacaoTexto).append("\",\n");
            sb.append("  \"presas\": ").append(listaParaJson(presas)).append(",\n");
            sb.append("  \"reproducao\": \"").append(reproducaoTexto).append("\",\n");
            sb.append("  \"comportamento\": \"").append(comportamentoTexto).append("\",\n");
            sb.append("  \"tracosComportamento\": ").append(listaParaJson(tracosComportamento)).append(",\n");
            sb.append("  \"relacaoHumanos\": \"").append(relacaoHumanosTexto).append("\",\n");
            sb.append("  \"tracosRelacaoHumanos\": ").append(listaParaJson(tracosRelacaoHumanos)).append(",\n");
            sb.append("  \"statusIUCN\": \"").append(statusIUCN).append("\",\n");
            sb.append("  \"statusTexto\": \"").append(statusTexto).append("\",\n");
            sb.append("  \"curiosidades\": ").append(listaParaJson(curiosidades)).append(",\n");
            sb.append("  \"especiesRelacionadas\": [\n");
            for (int i = 0; i < especiesRelacionadas.size(); i++) {
                String[] esp = especiesRelacionadas.get(i);
                sb.append("    {\"nomePopular\": \"").append(esp[0])
                  .append("\", \"nomeCientifico\": \"").append(esp[1]).append("\"}");
                if (i < especiesRelacionadas.size() - 1) sb.append(",");
                sb.append("\n");
            }
            sb.append("  ]\n");
            sb.append("}");
            return sb.toString();
        }

        private String listaParaJson(List<String> lista) {
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < lista.size(); i++) {
                sb.append("\"").append(lista.get(i)).append("\"");
                if (i < lista.size() - 1) sb.append(", ");
            }
            sb.append("]");
            return sb.toString();
        }
    }

    // ===================== BANCO DE DADOS =====================
    private final List<Tubarao> tubaroes = new ArrayList<>();

    public BancoDadosTubaroes() {
        carregarDadosIniciais();
    }

    private void carregarDadosIniciais() {
        tubaroes.add(new Tubarao(1, "tubarão-de-nariz-preto", "Carcharhinus acronotus", "Carcharhinidae",
            "águas tropicais e subtropicais do Oceano Atlântico ocidental", 1.3, "Vulnerável",
            ""));

        tubaroes.add(new Tubarao(2, "Tubarão-baleia", "Rhincodon typus", "Rhincodontidae",
            "Águas tropicais abertas", 12.0, "Ameaçado",
            "O maior peixe do mundo, filtrador e inofensivo ao ser humano, alimenta-se de plâncton."));

        tubaroes.add(new Tubarao(3, "Tubarão-martelo-comum", "Sphyrna lewini", "Sphyrnidae",
            "Águas costeiras e recifes tropicais", 3.5, "Criticamente ameaçado",
            "Reconhecido pelo formato único da cabeça, que amplia seu campo de visão e sensibilidade elétrica."));

        tubaroes.add(new Tubarao(4, "Tubarão-touro", "Carcharhinus leucas", "Carcharhinidae",
            "Águas costeiras, estuários e rios", 2.4, "Quase ameaçado",
            "Uma das poucas espécies capazes de tolerar água doce, sendo encontrada em rios como o Amazonas."));

        tubaroes.add(new Tubarao(5, "Tubarão-lixa", "Ginglymostoma cirratum", "Ginglymostomatidae",
            "Fundo de recifes e águas rasas tropicais", 2.5, "Vulnerável",
            "Espécie de hábitos noturnos e comportamento dócil, geralmente encontrada repousando no fundo do mar."));

        tubaroes.add(new Tubarao(6, "Cação-gato", "Scyliorhinus canicula", "Scyliorhinidae",
            "Fundo arenoso e rochoso do Atlântico", 0.7, "Pouco preocupante",
            "Pequeno tubarão de hábitos bentônicos, com padrão de manchas escuras pelo corpo."));

        tubaroes.add(new Tubarao(7, "Tubarão-mako", "Isurus oxyrinchus", "Lamnidae",
            "Águas oceânicas temperadas e tropicais", 3.2, "Ameaçado",
            "Considerado o tubarão mais rápido do oceano, capaz de atingir grandes velocidades em curtas distâncias."));

        tubaroes.add(new Tubarao(8, "Tubarão-anequim-sardo", "Lamna nasus", "Lamnidae",
            "Águas frias e temperadas do Atlântico Norte", 3.0, "Criticamente ameaçado",
            "Também chamado de tubarão-sardo, é próximo parente do mako e possui regulação parcial da temperatura corporal."));

        tubaroes.add(new Tubarao(9, "Tubarão-de-pontas-negras", "Carcharhinus melanopterus", "Carcharhinidae",
            "Recifes de coral rasos do Indo-Pacífico", 1.6, "Quase ameaçado",
            "Facilmente identificado pelas pontas escuras nas nadadeiras, é comum em águas rasas de recifes."));

        tubaroes.add(new Tubarao(10, "Tubarão-duende", "Mitsukurina owstoni", "Mitsukurinidae",
            "Águas profundas oceânicas", 3.8, "Pouco preocupante",
            "Espécie rara de águas profundas, com focinho alongado e mandíbulas projetáveis."));
    }

    // ===================== OPERAÇÕES =====================
    public List<Tubarao> listarTodos() {
        return new ArrayList<>(tubaroes);
    }

    public Tubarao buscarPorId(int id) {
        return tubaroes.stream().filter(t -> t.getId() == id).findFirst().orElse(null);
    }

    public List<Tubarao> buscarPorNome(String termo) {
        String termoLower = termo.toLowerCase();
        return tubaroes.stream()
            .filter(t -> t.getNomePopular().toLowerCase().contains(termoLower)
                      || t.getNomeCientifico().toLowerCase().contains(termoLower))
            .collect(Collectors.toList());
    }

    public List<Tubarao> filtrarPorFamilia(String familia) {
        return tubaroes.stream()
            .filter(t -> t.getFamilia().equalsIgnoreCase(familia))
            .collect(Collectors.toList());
    }

    public List<Tubarao> filtrarPorStatusConservacao(String status) {
        return tubaroes.stream()
            .filter(t -> t.getStatusConservacao().equalsIgnoreCase(status))
            .collect(Collectors.toList());
    }

    public void adicionar(Tubarao tubarao) {
        tubaroes.add(tubarao);
    }

    public boolean removerPorId(int id) {
        return tubaroes.removeIf(t -> t.getId() == id);
    }

    /**
     * Monta a ficha completa de uma espécie (dados usados na página individual do site).
     * Atualmente implementada para o Grande Tubarão Branco (id 1); novas fichas podem
     * ser adicionadas seguindo o mesmo padrão.
     */
    public FichaCompleta montarFichaCompleta(int id) {
        Tubarao base = buscarPorId(id);
        if (base == null) return null;

        if (id == 1) {
            return new FichaCompleta(base)
                .nomeIngles("blacknose shark")
                .ordem("Carcharhiniformes")
                .classe("Chondrichthyes")
                .comprimentoFaixa("1,2 – 1,5 m (podendo chegar no máximo 2 m)")
                .pesoFaixa("18–20 kg")
                .profundidade("10 - 75 m")
                .expectativaVida("cerca de 16 á 19 anos")
                .denticao("")
                .distribuicaoTexto("É encontrado no Oceano Atlântico Ocidental, desde o nordeste dos Estados Unidos até o sul do Brasil, incluindo:" "Golfo do México" "Mar do Caribe" "Bahamas" "Costa da América Central" "Costa norte da América do Sul" "Litoral brasileiro")
                .habitatTexto("Águas costeiras tropicais e subtropicais." "Recifes de coral." "Fundos arenosos." "Baías e estuários.""Geralmente entre 10 e 75 metros de profundidade, podendo ocorrer em águas mais profundas.")
                .alimentacaoTexto("Carnívoro oportunista. Alimenta-se principalmente de peixes, focas, leões-marinhos, pequenos cetáceos e carcaças. Seus sensores altamente desenvolvidos permitem detectar presas à distância.")
                .presas("Focas", "Peixes", "Leões-marinhos", "Cetáceos")
                .reproducaoTexto("Vivíparo placentário. O período de gestação dura cerca de 12 a 16 meses. As fêmeas dão à luz de 2 a 10 filhotes por ninhada, com cerca de 1,2 a 1,5 m de comprimento ao nascer.")
                .comportamentoTexto("Solitário e territorial, mas pode se reunir em áreas ricas em alimento. Conhecido por sua curiosidade e por saltos espetaculares fora d'água. Possui excelente visão, olfato e eletrorrecepção.")
                .tracosComportamento("Visão aguçada", "Olfato apurado", "Eletrorrecepção")
                .relacaoHumanosTexto("Apesar de sua fama, ataques a humanos são raros. É frequentemente alvo de pesca esportiva e de captura acidental. Desempenha papel importante no ecoturismo.")
                .tracosRelacaoHumanos("Importante para o ecoturismo", "Raro ataque a humanos", "Vítima de capturas")
                .statusIUCN("VU")
                .statusTexto("Classificado como Vulnerável (VU) pela IUCN. Suas populações vêm diminuindo devido à pesca predatória, perda de habitat e captura acidental.")
                .curiosidades(
                    "O tubarão-branco pode detectar uma gota de sangue em até 3,7 milhões de litros de água.",
                    "Possui uma das mordidas mais fortes do reino animal.",
                    "O nome \"branco\" vem da coloração clara de seu ventre, que o camufla quando visto por baixo.",
                    "Já apareceu em diversos filmes, como \"Tubarão\" (1975)."
                )
                .especieRelacionada("Tubarão-tigre", "Galeocerdo cuvier")
                .especieRelacionada("Tubarão-mako", "Isurus oxyrinchus")
                .especieRelacionada("Tubarão-azul", "Prionace glauca");
        }

        if (id == 2) {
            return new FichaCompleta(base)
                .nomeIngles("Whale Shark")
                .ordem("Orectolobiformes")
                .classe("Chondrichthyes")
                .comprimentoFaixa("9,7 – 12 m (podendo ultrapassar 18 m)")
                .pesoFaixa("9.000 – 20.000 kg")
                .profundidade("0 – 1.900 m")
                .expectativaVida("cerca de 100 a 130 anos")
                .denticao("centenas de dentes minúsculos, não usados na alimentação")
                .distribuicaoTexto("Distribuído em águas tropicais e subtropicais de todo o mundo, entre as latitudes 30°N e 35°S.")
                .habitatTexto("Vive principalmente em mar aberto, mas se aproxima da costa em épocas de alta concentração de plâncton, como no litoral do México e da Austrália.")
                .alimentacaoTexto("Filtrador: nada de boca aberta ou realiza sucção para capturar plâncton, ovos de peixe e pequenos peixes e lulas.")
                .presas("Plâncton", "Krill", "Ovos de peixe", "Pequenos peixes")
                .reproducaoTexto("Ovovivíparo. Uma única fêmea pode carregar centenas de embriões em diferentes estágios de desenvolvimento.")
                .comportamentoTexto("Dócil e solitário, mas forma agregações temporárias em áreas ricas em alimento. Realiza longas migrações através dos oceanos.")
                .tracosComportamento("Comportamento dócil", "Migrações longas", "Filtração passiva")
                .relacaoHumanosTexto("Inofensivo ao ser humano, é uma das principais atrações do turismo de mergulho com tubarões no mundo todo.")
                .tracosRelacaoHumanos("Base do turismo de mergulho", "Sem registros de ataques", "Vulnerável a colisões com embarcações")
                .statusIUCN("EN")
                .statusTexto("Classificado como Em Perigo (EN) pela IUCN, principalmente devido à pesca e colisões com navios.")
                .curiosidades(
                    "É o maior peixe vivo do planeta.",
                    "Cada tubarão-baleia tem um padrão de manchas único, como uma impressão digital.",
                    "Apesar do tamanho, se alimenta de organismos microscópicos.",
                    "Pode viver mais de um século."
                )
                .especieRelacionada("Tubarão-branco", "Carcharodon carcharias")
                .especieRelacionada("Tubarão-lixa", "Ginglymostoma cirratum");
        }

        if (id == 3) {
            return new FichaCompleta(base)
                .nomeIngles("Scalloped Hammerhead")
                .ordem("Carcharhiniformes")
                .classe("Chondrichthyes")
                .comprimentoFaixa("2,5 – 3,5 m (podendo ultrapassar 4 m)")
                .pesoFaixa("80 – 150 kg")
                .profundidade("0 – 500 m")
                .expectativaVida("cerca de 30 a 35 anos")
                .denticao("dentes triangulares e serrilhados, menores que os do tubarão-branco")
                .distribuicaoTexto("Presente em águas costeiras e oceânicas tropicais e subtropicais de todo o mundo.")
                .habitatTexto("Frequenta plataformas continentais, ilhas oceânicas e recifes. Forma grandes cardumes durante o dia perto de montes submarinos.")
                .alimentacaoTexto("Alimenta-se de peixes, polvos, lulas e outros tubarões e raias, usando a cabeça em formato de martelo para imobilizar presas.")
                .presas("Peixes", "Lulas", "Polvos", "Raias")
                .reproducaoTexto("Vivíparo placentário. Período de gestação de cerca de 9 a 10 meses, com ninhadas de 15 a 30 filhotes.")
                .comportamentoTexto("Forma grandes cardumes durante o dia, dispersando-se à noite para caçar sozinho. A cabeça alargada amplia o campo de visão e a sensibilidade elétrica.")
                .tracosComportamento("Forma cardumes", "Caça noturna solitária", "Alta sensibilidade elétrica")
                .relacaoHumanosTexto("Não é considerado perigoso para humanos. É muito visado pela pesca, principalmente pelo comércio de barbatanas.")
                .tracosRelacaoHumanos("Baixo risco a humanos", "Alvo do comércio de barbatanas", "Atração para mergulho")
                .statusIUCN("CR")
                .statusTexto("Classificado como Criticamente em Perigo (CR) pela IUCN, com forte declínio populacional devido à sobrepesca.")
                .curiosidades(
                    "O formato da cabeça é chamado de \"cefalofólio\".",
                    "Amplia o campo de visão para quase 360 graus.",
                    "Forma cardumes de até centenas de indivíduos.",
                    "É uma das espécies de martelo mais ameaçadas do mundo."
                )
                .especieRelacionada("Tubarão-touro", "Carcharhinus leucas")
                .especieRelacionada("Tubarão-de-pontas-negras", "Carcharhinus melanopterus");
        }

        if (id == 4) {
            return new FichaCompleta(base)
                .nomeIngles("Bull Shark")
                .ordem("Carcharhiniformes")
                .classe("Chondrichthyes")
                .comprimentoFaixa("2,3 – 2,4 m (podendo ultrapassar 3,3 m)")
                .pesoFaixa("90 – 230 kg")
                .profundidade("0 – 150 m")
                .expectativaVida("cerca de 16 a 25 anos")
                .denticao("dentes largos, triangulares e serrilhados, adaptados a presas variadas")
                .distribuicaoTexto("Encontrado em águas costeiras tropicais e subtropicais de todo o mundo, incluindo rios e estuários.")
                .habitatTexto("Uma das poucas espécies capazes de viver tanto em água salgada quanto em água doce, sendo registrada em rios como o Amazonas, o Mississippi e o Zambeze.")
                .alimentacaoTexto("Predador oportunista, alimenta-se de peixes, outros tubarões, raias, tartarugas e até mamíferos terrestres que entram na água.")
                .presas("Peixes", "Tartarugas", "Outros tubarões", "Aves marinhas")
                .reproducaoTexto("Vivíparo placentário. Gestação de cerca de 10 a 11 meses, com ninhadas de 1 a 13 filhotes, frequentemente em águas doces ou estuarinas.")
                .comportamentoTexto("Territorial e agressivo quando se sente ameaçado. Tolera grandes variações de salinidade graças a adaptações fisiológicas únicas.")
                .tracosComportamento("Tolera água doce", "Territorial", "Adaptável a ambientes variados")
                .relacaoHumanosTexto("Considerado uma das três espécies mais associadas a ataques a humanos, devido à sua presença em águas rasas e costeiras habitadas.")
                .tracosRelacaoHumanos("Maior interação com áreas costeiras", "Envolvido em ataques ocasionais", "Sensível à poluição de rios")
                .statusIUCN("VU")
                .statusTexto("Classificado como Vulnerável (VU) pela IUCN, com populações em declínio devido à pesca e degradação de rios e estuários.")
                .curiosidades(
                    "É um dos poucos tubarões que sobrevive bem em água doce.",
                    "Já foi registrado a mais de 4.000 km rio acima, no rio Amazonas.",
                    "Possui uma das maiores concentrações de testosterona entre os animais.",
                    "Seu nome vem do comportamento agressivo e do focinho curto e largo."
                )
                .especieRelacionada("Tubarão-martelo-comum", "Sphyrna lewini")
                .especieRelacionada("Tubarão-de-pontas-negras", "Carcharhinus melanopterus");
        }

        if (id == 7) {
            return new FichaCompleta(base)
                .nomeIngles("Shortfin Mako")
                .ordem("Lamniformes")
                .classe("Chondrichthyes")
                .comprimentoFaixa("2,5 – 3,2 m (podendo ultrapassar 4 m)")
                .pesoFaixa("60 – 135 kg")
                .profundidade("0 – 700 m")
                .expectativaVida("cerca de 28 a 32 anos")
                .denticao("dentes longos, finos e curvados, ideais para prender presas escorregadias")
                .distribuicaoTexto("Distribuído em águas oceânicas temperadas e tropicais de todo o mundo, raramente próximo à costa.")
                .habitatTexto("Espécie pelágica, prefere águas abertas e profundas, migrando por longas distâncias em busca de alimento.")
                .alimentacaoTexto("Alimenta-se principalmente de peixes rápidos, como atuns e espadartes, além de outros tubarões e cefalópodes.")
                .presas("Atuns", "Espadartes", "Lulas", "Outros tubarões")
                .reproducaoTexto("Vivíparo placentário. Gestação de cerca de 15 a 18 meses, com ninhadas de 4 a 25 filhotes.")
                .comportamentoTexto("Considerado o tubarão mais rápido do oceano, capaz de atingir grandes velocidades em curtas distâncias e realizar saltos fora d'água.")
                .tracosComportamento("Nadador muito veloz", "Regula parcialmente a temperatura", "Salta fora d'água")
                .relacaoHumanosTexto("Muito visado pela pesca esportiva e comercial devido à carne apreciada; interações com humanos são raras, mas pode reagir de forma defensiva quando fisgado.")
                .tracosRelacaoHumanos("Alvo de pesca esportiva", "Carne comercialmente valorizada", "Raro em águas rasas")
                .statusIUCN("EN")
                .statusTexto("Classificado como Em Perigo (EN) pela IUCN, com forte declínio populacional devido à sobrepesca em escala global.")
                .curiosidades(
                    "Pode atingir velocidades de até 74 km/h em curtas distâncias.",
                    "É parente próximo do tubarão-branco.",
                    "Consegue manter parte do corpo mais aquecido que a água ao redor.",
                    "É conhecido por saltar vários metros fora da água quando fisgado."
                )
                .especieRelacionada("Tubarão-branco", "Carcharodon carcharias")
                .especieRelacionada("Tubarão-anequim-sardo", "Lamna nasus");
        }

        // Para as demais espécies, retorna uma ficha básica a partir dos dados do banco.
        return new FichaCompleta(base);
    }

    /**
     * Exporta as fichas completas de todas as espécies que já possuem dados
     * detalhados cadastrados, no formato de array JSON, para alimentar a
     * página de espécie do site (que permite trocar entre vários tubarões).
     */
    public String exportarTodasFichasJson() {
        int[] idsComFicha = {1, 2, 3, 4, 7};
        StringBuilder sb = new StringBuilder("[\n");
        for (int i = 0; i < idsComFicha.length; i++) {
            sb.append(montarFichaCompleta(idsComFicha[i]).toJson().replace("\n", "\n  "));
            if (i < idsComFicha.length - 1) sb.append(",");
            sb.append("\n");
        }
        sb.append("]");
        return sb.toString();
    }

    /** Exporta todos os registros em formato JSON (array), pronto para consumir no site HTML/JS. */
    public String exportarParaJson() {
        StringBuilder sb = new StringBuilder("[\n");
        for (int i = 0; i < tubaroes.size(); i++) {
            sb.append("  ").append(tubaroes.get(i).toJson());
            if (i < tubaroes.size() - 1) sb.append(",");
            sb.append("\n");
        }
        sb.append("]");
        return sb.toString();
    }

    // ===================== DEMONSTRAÇÃO =====================
    public static void main(String[] args) {
        BancoDadosTubaroes banco = new BancoDadosTubaroes();

        System.out.println("=== Todos os tubarões cadastrados ===");
        banco.listarTodos().forEach(System.out::println);

        System.out.println("\n=== Busca por nome: 'martelo' ===");
        banco.buscarPorNome("martelo").forEach(System.out::println);

        System.out.println("\n=== Filtro por família: 'Carcharhinidae' ===");
        banco.filtrarPorFamilia("Carcharhinidae").forEach(System.out::println);

        System.out.println("\n=== Filtro por status: 'Criticamente ameaçado' ===");
        banco.filtrarPorStatusConservacao("Criticamente ameaçado").forEach(System.out::println);

        System.out.println("\n=== Exportação em JSON (para usar no site) ===");
        System.out.println(banco.exportarParaJson());

        System.out.println("\n=== Ficha completa: Tubarão-branco (página da espécie) ===");
        FichaCompleta ficha = banco.montarFichaCompleta(1);
        System.out.println(ficha.toJson());

        System.out.println("\n=== Todas as fichas completas (para a página alternar entre espécies) ===");
        System.out.println(banco.exportarTodasFichasJson());
    }
}
