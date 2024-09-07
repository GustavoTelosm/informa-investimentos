let dado_categorias = [
    {
        titulo: "Rendas Fixas",
        descricao: "Renda fixa é como emprestar seu dinheiro para instituições como o governo ou bancos e receber de volta, além do valor que você emprestou, um juro extra, ou seja um valor a mais do que o que você emprestou, de forma segura e com o valor garantido.",
        descricao_sim: "Simplificando: é como alugar seu dinheiro e ganhar um dinheirinho extra por isso.",
        link: "https://www.gov.br/investidor/pt-br/investir/antes-de-investir/entenda-as-caracteristicas-dos-investimentos#:~:text=Renda%20Fixa,-Diz-se%20que&text=Essa%20remuneração%20pode%20ser%20pré,DI%20ou%20a%20taxa%20Selic.",
        tags:"Garantido seguro risco0 risco 0 "
    },
    {
        titulo: "CDB",
        descricao: "Certificados de Depósito Bancário (CDB) são investimentos onde você empresta dinheiro para o banco, que utiliza esse valor e devolve com juros após um período. Diferente da poupança, o CDB rende mais e é protegido pelo FGC, garantindo o valor investido até R$ 250.000 por banco. Alguns bancos, como o Nubank, oferecem a opção de resgate imediato, como na sua primeira caixinha, enquanto outros têm prazos de resgate diários ou em períodos maiores.",
        descricao_sim: "Simplificando: é como emprestar dinheiro ao banco, com mais rendimento que a poupança, e você pode retirar a qualquer momento em alguns casos como na Primeira caixinha do Nubank. nos outros pode retirar quase qualquer dia porém até certos horarios mas isso depende de cada banco, informe sobre o seu.",
        link: "https://www.gov.br/investidor/pt-br/investir/tipos-de-investimentos/titulos-bancarios/certificado-de-deposito-bancario-cdb", 
        tags: "CDB banco seguro FGC risco baixo "
    },
    {
        titulo: "LCI",
        descricao: "Letra de Crédito Imobiliário (LCI) é um investimento onde você empresta dinheiro para o setor imobiliário, e em troca, recebe juros ao final de um período. Ele rende mais que a poupança e é isento de imposto de renda, o que aumenta ainda mais o rendimento. No entanto, o dinheiro fica 'travado' por um prazo mínimo de 3 meses (90 dias), e só após esse período você pode resgatar. Também é garantido pelo FGC até R$ 250.000.",
        descricao_sim: "Simplificando: você empresta para o setor imobiliário, rende mais que a poupança, mas só pode tirar depois de 3 meses.",
        link: "https://www.gov.br/investidor/pt-br/investir/tipos-de-investimentos/titulos-bancarios/letra-de-credito-imobiliario-lci-e-letra-de-credito-do-agronegocio-lca", 
        tags: "LCI imobiliario isento imposto seguro FGC 3 meses"
    },
    {
        titulo: "LCA",
        descricao: "Letra de Crédito do Agronegócio (LCA) funciona de forma semelhante à LCI, mas o dinheiro é emprestado ao setor agrícola. Também rende mais que a poupança, é isento de imposto de renda e protegido pelo FGC. Assim como a LCI, o investimento fica 'travado' por no mínimo 3 meses, sendo possível resgatar apenas após esse período.",
        descricao_sim: "Simplificando: você empresta para o setor agrícola, rende mais que a poupança, mas só pode resgatar depois de 3 meses.",
        link: "https://www.gov.br/investidor/pt-br/investir/tipos-de-investimentos/titulos-bancarios/letra-de-credito-imobiliario-lci-e-letra-de-credito-do-agronegocio-lca", 
        tags: "LCA agricola isento imposto seguro FGC 3 meses"
    },
    {
        titulo: "Tesouro Direto",
        descricao: "O Tesouro Direto é um investimento onde você empresta dinheiro ao governo brasileiro. Existem diversos tipos de títulos, como o Tesouro Selic (mais seguro e com resgate rápido), Tesouro IPCA+ (protegido contra a inflação), e Tesouro Prefixado (com uma taxa de juros fixa). Todos os títulos rendem mais que a poupança e possuem diferentes prazos e rendimentos, mas não são protegidos pelo FGC, pois o 'garantidor' é o próprio governo e ele tem literalmente uma maquina de imprimir dinheiro.",
        descricao_sim: "Simplificando: você empresta para o governo, tem vários tipos de títulos com mais rendimento que a poupança.",
        link: "https://www.tesourodireto.com.br/conheca/conheca-o-tesouro-direto.htm#:~:text=O%20QUE%20É%3F,de%20R%24%2030%2C00.", 
        tags: "Tesouro Direto governo seguro vários títulos risco baixo"
    },
    {
        titulo: "Poupança",
        descricao: "A Poupança é o investimento mais conhecido e simples. Ela oferece liquidez imediata, ou seja, você pode sacar seu dinheiro a qualquer momento. No entanto, o rendimento é muito baixo em comparação com outros investimentos como o CDB, LCI, LCA e Tesouro Direto, mas não é a melhor opção em termos de rentabilidade.",
        descricao_sim: "Simplificando: você guarda dinheiro no banco e ele rende pouco, mas você pode sacar a qualquer momento.",
        link: "https://www.bcb.gov.br/cidadaniafinanceira/poupar_investir", 
        tags: "Poupança liquidez imediata baixo rendimento segurança"
    },


    {
        titulo: "Rendas Variáveis",
        descricao: "Renda variável é como investir em empresas, comprando partes delas onde chamamos de ações e/ou Cotas. O valor dessas partes pode aumentar ou diminuir, dependendo do desempenho da empresa e do mercado.",
        descricao_sim: "Simplificando: é como ser sócio de uma empresa e ter seus lucros (ou prejuízos)...",
        link: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/pagamento/renda-variavel#:~:text=São%20conhecidas%20como%20renda%20variável,Brazilian%20Depositary%20Receipts%20-%20BDR)%3B",
        tags:"variavel risco medio risco alto alto risco riscomedio"
    },
    {
        titulo: "Criptomoedas",
        descricao: "Criptomoedas são moedas digitais, como Bitcoin, Ethereum, Tether, Binance Coin e Solana. Elas não são controladas por nenhum governo ou banco, e seu valor pode mudar muito rapidamente, aumentando ou diminuindo conforme a oferta e demanda no mercado. As criptomoedas são uma forma moderna e volátil de investimento. É importante lembrar que todos os ganhos com criptomoedas devem ser declarados no Imposto de Renda, independentemente do valor.",
        descricao_sim: "Simplificando: você compra moedas digitais e o valor delas pode variar bastante. Ganhos precisam ser declarados no imposto.",
        link: "https://www.bcb.gov.br/meubc/faqs/p/moedas-virtuais-criptomoedas-ou-criptograficas", 
        tags: "variável variavel S"
    },
    {
        titulo: "Ações",
        descricao: "Ações são pequenas partes de empresas que você pode comprar. Quando você compra uma ação, se torna sócio daquela empresa e pode ou não ganhar dinheiro e há riscos de você ter menos do que investiu, conforme o valor da empresa sobe ou desce você pode ter lucro ou prejuízo. Ações têm um risco maior, mas também podem oferecer retornos maiores. Qualquer pessoa que investe em ações precisa declarar no Imposto de Renda, e se houver lucro na venda das ações, pode haver tributação específica.",
        descricao_sim: "Simplificando: você compra uma parte de uma empresa e pode ganhar ou perder dependendo do sucesso dela. Precisa declarar no Imposto de Renda.",
        link: "https://www.gov.br/investidor/pt-br/investir/tipos-de-investimentos/acoes", 
        tags: "variável variavel"
    },
    {
        titulo: "FII (Fundos Imobiliários)",
        descricao: "Fundos Imobiliários (FII) são investimentos em que você compra partes de grandes imóveis, como shopping centers, prédios comerciais e outros. Ao investir em FIIs, você recebe uma parte dos aluguéis que esses imóveis geram. Os FIIs costumam ser uma opção de investimento para quem quer renda passiva, mas também têm riscos de variação no mercado. Como qualquer outro investimento de renda variável, os ganhos com FIIs precisam ser declarados no Imposto de Renda.",
        descricao_sim: "Simplificando: você investe em imóveis grandes e recebe uma parte dos aluguéis, mas também precisa declarar no imposto.",
        link: "https://www.gov.br/investidor/pt-br/investir/tipos-de-investimentos/fundos-de-investimentos-imobiliarios-fii", 
        tags: "variável variavel"
    },
    {
        titulo: "Investimento Coletivo pela INCO",
        descricao: "O investimento coletivo pela INCO é uma forma de investir em projetos imobiliários junto com outras pessoas. A INCO organiza esses projetos, e você coloca seu dinheiro junto com outros investidores para financiar grandes construções. Em troca, você recebe uma parte dos lucros quando o projeto for concluído. Como todos os investimentos em renda variável, os ganhos com investimentos pela INCO também devem ser declarados no Imposto de Renda.",
        descricao_sim: "Simplificando: você junta dinheiro com outras pessoas para investir em construções e recebe uma parte dos lucros, mas precisa declarar no imposto.",
        link: "https://inco.vc", 
        tags: "variável variavel"
    },
    {
        titulo: "Aprenda Mais",
        descricao: "O 'Aprenda Mais' é uma plataforma de educação oferecida pelo Ministério da Educação do Brasil. O objetivo do 'Aprenda Mais' é proporcionar cursos e capacitações em diversas áreas, com foco na melhoria contínua e desenvolvimento pessoal. A plataforma oferece acesso a uma ampla gama de cursos online gratuitos, voltados para educação básica e profissional, investir em conhecimento é o melhor investimento que tem.",
        descricao_sim: "Simplificando: é um site onde você pode fazer cursos gratuitos para aprender mais e se desenvolver. Certificados podem ser obtidos mediante algumas condições específicas e, em geral, há cursos gratuitos e pagos.",
        link: "https://aprendamais.mec.gov.br",
        tags: "Esforço esforco"
    },
    {
        titulo: "Celular Seguro",
        descricao: "O 'Celular Seguro' é uSma plataforma do governo brasileiro destinada a ajudar os usuários a protegerem seus smartphones contra roubo, perda e vazamento de dados. Com essa ferramenta, você pode registrar o seu aparelho e, em caso de perda ou roubo, bloqueá-lo para impedir o acesso não autorizado aos seus dados pessoais.",
        descricao_sim: "Simplificando: é um serviço que ajuda a manter seu celular seguro, bloqueando-o se for perdido ou roubado para proteger suas informações.",
        link: "https://www.gov.br/pt-br/apps/celular-seguro-br",
        tags: "Segurança e Proteção"
    },
    {
        "titulo": "Calculadora de Investimentos",
        "descricao": "A Calculadora de Investimentos é uma ferramenta que ajuda você a prever quanto dinheiro você pode ganhar com seus investimentos. Ao inserir o valor inicial, a taxa de juros e os depósitos mensais, você pode ver quanto seu investimento pode render ao longo do tempo.",
        "descricao_sim": "Simplificando: é uma ferramenta que mostra quanto seu dinheiro pode crescer se você investir uma certa quantia e fizer contribuições regulares.",
        "link": "https://investidorsardinha.r7.com/calculadoras/calculadora-de-juros-compostos/", 
        "tags": "Investimento, Rendimento, Calculadora"
    },
    {
        titulo: "Cassino",
        descricao: "Cassinos são estabelecimentos onde você pode apostar dinheiro em jogos de azar, como roleta, blackjack e máquinas caça-níqueis. A probabilidade de ganhar é sempre menor do que a de perder, pois a 'casa' tem uma vantagem incorporada. Mesmo que ocasionalmente você ganhe, a longo prazo, a casa sempre acaba ganhando mais.",
        descricao_sim: "Simplificando: é como jogar jogos onde as chances são muito maiores de você perder dinheiro do que ganhar.",
        link: "https://www.oddsshark.com/br/casino/borda-da-casa#:~:text=Devido%20ao%20direito%20legal%20de,mecanismo%20de%20lucro%20dos%20cassinos.", 
        tags: "Perder"
    },
    {
        titulo: "Cassino Online",
        descricao: "Cassinos online funcionam da mesma maneira que os físicos, mas na internet. Embora ofereçam conveniência e uma grande variedade de jogos, a probabilidade de ganhar ainda é baixa e a vantagem da casa continua existindo. Muitas dessas plataformas não são regulamentadas, o que aumenta o risco de fraudes e perdas.",
        descricao_sim: "Simplificando: é jogar os mesmos jogos de cassino pela internet, com as mesmas chances baixas de ganhar e risco de perder dinheiro.",
        link: "https://www.oddsshark.com/br/casino/borda-da-casa#:~:text=Devido%20ao%20direito%20legal%20de,mecanismo%20de%20lucro%20dos%20cassinos.", 
        tags: "Perder"
    },
    {
        titulo: "Apostas",
        descricao: "Apostas envolvem colocar dinheiro em eventos futuros, como resultados de jogos ou competições. A maioria das apostas não é regulamentada e tem uma alta probabilidade de perda. A casa (ou site de apostas) sempre tem uma vantagem, e não há garantia de que você ganhará dinheiro a médio ou longo prazo.",
        descricao_sim: "Simplificando: é apostar dinheiro em eventos e torcer para que o resultado seja favorável, com grandes chances de perder dinheiro.",
        link: "https://www.oddsshark.com/br/casino/borda-da-casa#:~:text=Devido%20ao%20direito%20legal%20de,mecanismo%20de%20lucro%20dos%20cassinos.", 
        tags: "Perder"
    },
    {
        titulo: "Apostas Esportivas",
        descricao: "Apostas esportivas são um tipo de aposta onde você coloca dinheiro em jogos ou eventos esportivos. A maioria das plataformas é regulamentada, mas as chances de ganhar são sempre menores do que a de perder. A longo prazo, a casa tem sempre uma vantagem, tornando essa prática mais uma forma de entretenimento do que um investimento real.",
        descricao_sim: "Simplificando: é apostar dinheiro em esportes e, na maioria das vezes, você vai perder mais do que ganhar.",
        link: "https://www.oddsshark.com/br/casino/borda-da-casa#:~:text=Devido%20ao%20direito%20legal%20de,mecanismo%20de%20lucro%20dos%20cassinos.", 
        tags: "Perder"
    },
    {
        titulo: "Jogos de Azar Não Regulamentados",
        descricao: "Jogos de azar que não são regulamentados por autoridades competentes apresentam riscos elevados, incluindo a perda total do dinheiro apostado. Esses jogos muitas vezes não oferecem garantias e podem ser fraudulentos. A ausência de regulamentação significa que você não tem proteção e as chances de ganhar são muito baixas.",
        descricao_sim: "Simplificando: é participar de jogos onde você pode perder todo o seu dinheiro sem garantias ou proteção, e é muito difícil ganhar.",
        link: "https://www.oddsshark.com/br/casino/borda-da-casa#:~:text=Devido%20ao%20direito%20legal%20de,mecanismo%20de%20lucro%20dos%20cassinos.", 
        tags: "Perder"
    }
    
];
