const usuarios = {
    "admin": "1234",
    "operador1": "1234",
    "operador2": "1234",
    "operador3": "1234",
    "carregador1": "1234",
    "carregador2": "1234",
    "carregador3": "1234",
    "joao": "1234",
    "gestor": "1234" 
};

let pedidos = [
    { id: 10532, cliente: "Metalúrgica Central", status: "Aguardando separação", endereco: "Rua teste, 123 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA 1/8", "CHAPA GALVANIZADA", "CHAPA INOX 304"], Tubo: ["TUBO RETANGULAR 40x20", "TUBO REDONDO 1 1/2", "TUBO QUADRADO 20x20"], Viga: ["VIGA U 1/4", "VIGA I 200"] } },   
    { id: 10533, cliente: "Construtora Brasil", status: "Aguardando separação", endereco: "Av. Exemplo, 456 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Chapa: ["CHAPA 3/16", "CHAPA XADREZ 1/4"], Tubo: ["TUBO REDONDO 2", "TUBO SCHEDULE 40"] } },
    { id: 10534, cliente: "Ferro e Aço LTDA", status: "Aguardando separação", endereco: "Rua das Indústrias, 1010 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Viga: ["VIGA W 2", "VIGA H 150"], Chapa: ["CHAPA XADREZ 5/16", "CHAPA LISA 1/2"], Tubo: ["TUBO QUADRADO 50x50", "TUBO REDONDO 3"] } },
    { id: 10535, cliente: "ConstruAço", status: "Aguardando separação", endereco: "Rodovia Norte-Sul, 999 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 50x50", "TUBO RETANGULAR 60x40", "TUBO CONDUITE 3/4"], Viga: ["VIGA H 200", "VIGA U 5", "VIGA LAMINADA 150"] } },
    { id: 10536, cliente: "Montagens Gerais", status: "Aguardando separação", endereco: "Rua Projetada, 789 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA PRETA 1/4", "CHAPA FINO QUENTE 1/8", "CHAPA DE PISO ALUMÍNIO"], Tubo: ["TUBO INDUSTRIAL 3", "TUBO INOX SANITÁRIO"], Viga: ["VIGA I 300", "VIGA SOLDADA 250", "VIGA LAMINADA 200"] } },
    { id: 10537, cliente: "Aço Forte", status: "Aguardando separação", endereco: "Av. Atlântica, 321 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Chapa: ["CHAPA ALUMÍNIO 2mm", "CHAPA GALVANIZADA TRAPEZOIDAL"], Viga: ["VIGA SOLDADA 600", "VIGA WIDE FLANGE 800"] } },
    { id: 10538, cliente: "Metal Capixaba", status: "Aguardando separação", endereco: "Rua dos Ferroviários, 12 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Tubo: ["TUBO ZINCADO 1", "TUBO ESTRUTURAL 100x100"], Viga: ["VIGA SOLDADA 200", "VIGA I 150"] } },
    { id: 10539, cliente: "Engemetal", status: "Aguardando separação", endereco: "Rua Industrial, 88 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA LISA 1/2", "CHAPA CORTEN 3mm"], Tubo: ["TUBO REDONDO 3", "TUBO ELETRODUTO 1"] } },
    { id: 10540, cliente: "Ferroleste", status: "Aguardando separação", endereco: "Avenida Norte, 999 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Viga: ["VIGA U 5", "VIGA METÁLICA TRELIÇADA"], Chapa: ["CHAPA ANTIDERRAPANTE", "CHAPA EXPANDIDA ALUMÍNIO"] } },
    { id: 10541, cliente: "Metalúrgica União", status: "Aguardando separação", endereco: "Rod. do Contorno, 400 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 40x40", "TUBO RETANGULAR 80x40", "TUBO DE CONDUÇÃO 2"], Chapa: ["CHAPA GALVANIZADA", "CHAPA PERFURADA 3mm"] } },
    { id: 10542, cliente: "Construmetais", status: "Aguardando separação", endereco: "Rua das Oficinas, 77 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Viga: ["VIGA I 250", "VIGA U 6"], Chapa: ["CHAPA LISA 3/8", "CHAPA DE AÇO CARBONO", "CHAPA DE LIGA LEVE"] } },
    { id: 10543, cliente: "Alfa Engenharia", status: "Aguardando separação", endereco: "Rua das Palmeiras, 10 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Tubo: ["TUBO REDONDO 1 1/2", "TUBO DE PRECISÃO", "TUBO OVAL"], Chapa: ["CHAPA EXPANDIDA", "CHAPA DE LATÃO"] } },
    { id: 10544, cliente: "Beta Construções", status: "Aguardando separação", endereco: "Av. Beira Mar, 2000 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Viga: ["VIGA U 3", "VIGA DE ALUMÍNIO"], Chapa: ["CHAPA LISA 1/4", "CHAPA DE CHUMBO"] } },
    { id: 10545, cliente: "Gama Ferragens", status: "Aguardando separação", endereco: "Rua do Comércio, 50 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA GALVANIZADA", "CHAPA FRISADA"], Tubo: ["TUBO RETANGULAR 20x10", "TUBO INDUSTRIAL 4", "TUBO COM COSTURA"] } },
    { id: 10546, cliente: "Delta Estruturas", status: "Aguardando separação", endereco: "BR-101 Sul, KM 25 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Viga: ["VIGA H 150", "VIGA I 100"], Chapa: ["CHAPA PRETA 3/16", "CHAPA GROSSA 1/2"] } },
    { id: 10547, cliente: "Épsilon Indústria", status: "Aguardando separação", endereco: "Av. Central, 300 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Tubo: ["TUBO REDONDO 3/4", "TUBO DE COBRE 1/2"], Chapa: ["CHAPA INOX 1mm", "CHAPA ESCOVADA"] } },
    { id: 10548, cliente: "Zeta Metalúrgica", status: "Aguardando separação", endereco: "Rua Norte, 15 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Viga: ["VIGA I 100", "VIGA W 3"], Tubo: ["TUBO QUADRADO 30x30", "TUBO RETANGULAR 50x25"] } },
    { id: 10549, cliente: "Ômega Comércio", status: "Aguardando separação", endereco: "Praça da Matriz, 7 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA PERFURADA", "CHAPA DE ZINCO"], Viga: ["VIGA SOLDADA 400", "VIGA DE TRELIÇA"] } },
    { id: 10550, cliente: "Ícaro Soldas", status: "Aguardando separação", endereco: "Rua da Paz, 123 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Tubo: ["TUBO INDUSTRIAL 2", "TUBO REDONDO 5"], Chapa: ["CHAPA FINA FRIA", "CHAPA CROMADA"] } },
    { id: 10551, cliente: "Fênix Construções", status: "Aguardando separação", endereco: "Av. da República, 500 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Viga: ["VIGA W 4", "VIGA PRÉ-MOLDADA"], Tubo: ["TUBO PVC 100mm", "TUBO ESGOTO 150mm"] } },
    { id: 10552, cliente: "Grifo Metais", status: "Aguardando separação", endereco: "Rua do Sol, 888 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA POLICARBONATO", "CHAPA ACRÍLICA"], Viga: ["VIGA LAMINADA 200", "VIGA DE CONCRETO PRÉ-FABRICADO"] } },
    { id: 10553, cliente: "Draco Montagens", status: "Aguardando separação", endereco: "Rodovia do Café, KM 5 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Tubo: ["TUBO OBLONGO", "TUBO DE VENTILAÇÃO"], Chapa: ["CHAPA GALVANIZADA", "CHAPA DE COBRE"] } },
    { id: 10554, cliente: "Pegasus Engenharia", status: "Aguardando separação", endereco: "Rua das Rosas, 77 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Viga: ["VIGA CAIXÃO", "VIGA DE MADEIRA LAMINADA"], Tubo: ["TUBO DE AÇO INOX", "TUBO DE ALUMÍNIO"] } },
    { id: 10555, cliente: "Centauro Indústria", status: "Aguardando separação", endereco: "Av. Brasil, 1100 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Chapa: ["CHAPA DE COBRE", "CHAPA DE BRONZE"], Viga: ["VIGA U 8", "VIGA H 250"] } },
    { id: 10556, cliente: "Harpia Estruturas", status: "Aguardando separação", endereco: "Rua da Serra, 45 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Tubo: ["TUBO SCH 40", "TUBO DE FERRO FUNDIDO"], Chapa: ["CHAPA GROSSA", "CHAPA DE TITÂNIO"] } },
    { id: 10557, cliente: "Minotauro Construções", status: "Aguardando separação", endereco: "Estrada Velha, 22 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Viga: ["VIGA I 400", "VIGA WIDE FLANGE 600"], Tubo: ["TUBO SEM COSTURA", "TUBO COM FLANGE"] } },
    { id: 10558, cliente: "Sereia Naval", status: "Aguardando separação", endereco: "Rua do Porto, 33 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Chapa: ["CHAPA NAVAL", "CHAPA DE AÇO MARÍTIMO"], Viga: ["VIGA CAIXÃO GRANDE", "VIGA GERAL"] } },
    { id: 10559, cliente: "Tritão Ferro e Aço", status: "Aguardando separação", endereco: "Av. dos Navegantes, 150 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 100x100", "TUBO RETANGULAR 120x60"], Chapa: ["CHAPA DE PISO", "CHAPA ANTI-ABRASIVA"] } },
    { id: 10560, cliente: "Atlas Construções", status: "Aguardando separação", endereco: "Rua Principal, 55 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Viga: ["VIGA H 300", "VIGA DE PONTE"], Chapa: ["CHAPA CORTEN", "CHAPA DE PAREDE"] } },
    { id: 10561, cliente: "Titã Fundições", status: "Aguardando separação", endereco: "Rodovia das Árvores, 99 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Chapa: ["CHAPA DE BRONZE", "CHAPA DE LIGA METÁLICA"], Tubo: ["TUBO FUNDIDO", "TUBO DE CONCRETO"] } },
    { id: 10562, cliente: "Olimpo Metais", status: "Aguardando separação", endereco: "Av. do Contorno, 1001 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Viga: ["VIGA LAMINADA 300", "VIGA ARMADA"], Chapa: ["CHAPA DE CHUMBO", "CHAPA DE ALUMÍNIO COMPOSTO"] } },
    { id: 10563, cliente: "União Metálica", status: "Aguardando separação", endereco: "Rua das Flores, 45 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA PRETA 1/2", "CHAPA GALVANIZADA 2mm"], Tubo: ["TUBO REDONDO 4", "TUBO QUADRADO 70x70"], Viga: ["VIGA I 350", "VIGA U 10"] } },
    { id: 10564, cliente: "Expresso Cargas", status: "Aguardando separação", endereco: "BR-101 Norte, KM 50 - Aracruz, ES", embarque: "Aracruz", motorista: null, produtos: { Tubo: ["TUBO RETANGULAR 50x30", "TUBO ZINCADO 2"], Viga: ["VIGA H 220", "VIGA LAMINADA 250"] } },
    { id: 10565, cliente: "Soluções em Aço", status: "Aguardando separação", endereco: "Rua do Progresso, 200 - Guarapari, ES", embarque: "Guarapari", motorista: null, produtos: { Chapa: ["CHAPA INOX 430", "CHAPA XADREZ 3/8"], Viga: ["VIGA CAIXÃO PEQUENA"] } },
    { id: 10566, cliente: "Estrutura Forte", status: "Aguardando separação", endereco: "Av. das Américas, 100 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Tubo: ["TUBO REDONDO 1", "TUBO INDUSTRIAL 5"], Chapa: ["CHAPA PRETA 1/8"] } },
    { id: 10567, cliente: "Cia. do Metal", status: "Aguardando separação", endereco: "Rua das Acácias, 10 - São Mateus, ES", embarque: "São Mateus", motorista: null, produtos: { Viga: ["VIGA U 4", "VIGA I 120"], Chapa: ["CHAPA GALVANIZADA 1mm"] } },
    { id: 10568, cliente: "Norte Aço", status: "Aguardando separação", endereco: "Rodovia ES-010, KM 5 - Fundão, ES", embarque: "Fundão", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 60x60"], Chapa: ["CHAPA FINA FRIA 0.5mm", "CHAPA DE BRONZE"] } },
    { id: 10569, cliente: "Leste Ferro", status: "Aguardando separação", endereco: "Rua Central, 30 - Cachoeiro de Itapemirim, ES", embarque: "Cachoeiro de Itapemirim", motorista: null, produtos: { Viga: ["VIGA H 100"], Chapa: ["CHAPA ANTIDERRAPANTE 3mm"] } },
    { id: 10570, cliente: "Centro Metal", status: "Aguardando separação", endereco: "Av. Getúlio Vargas, 15 - Castelo, ES", embarque: "Castelo", motorista: null, produtos: { Tubo: ["TUBO REDONDO 2 1/2", "TUBO ESTRUTURAL 80x80"], Chapa: ["CHAPA LISA 1/8", "CHAPA PERFURADA 5mm"] } },
    { id: 10571, cliente: "Metalúrgica do Aço", status: "Aguardando separação", endereco: "Rua do Sol, 10 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA 1/4", "CHAPA INOX 316"], Viga: ["VIGA I 100"] } },
    { id: 10572, cliente: "Construções Modernas", status: "Aguardando separação", endereco: "Av. da Praia, 50 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Tubo: ["TUBO REDONDO 1", "TUBO INDUSTRIAL 2"], Chapa: ["CHAPA GALVANIZADA 3mm"] } },
    { id: 10573, cliente: "Estruturas Metálicas", status: "Aguardando separação", endereco: "Rua da Paz, 200 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Viga: ["VIGA U 6", "VIGA H 200"], Tubo: ["TUBO QUADRADO 30x30"] } },
    { id: 10574, cliente: "Galvanização Brasil", status: "Aguardando separação", endereco: "Rodovia do Ferro, 700 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA GALVANIZADA 1/2"], Tubo: ["TUBO RETANGULAR 40x20"] } },
    { id: 10575, cliente: "Tubos e Conexões", status: "Aguardando separação", endereco: "Rua do Comércio, 120 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Tubo: ["TUBO REDONDO 2", "TUBO SCHEDULE 80"], Viga: ["VIGA I 200"] } }
];

function produtosParaTexto(produtos) {
    let arr = [];
    for (let categoria in produtos) {
        let itens = produtos[categoria].join(", ");
        arr.push(`${categoria}: ${itens}`);
    }
    return arr.join(" | ");
}

let usuarioLogado = null;
let isMotoristaLogado = false;

function handleEnterSeparador(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      fazerLogin();
    }
  }

function handleEnterCarregamento(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      fazerLoginMotorista();
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if(username && password){
        username.addEventListener('keydown', handleEnterSeparador);
        password.addEventListener('keydown', handleEnterSeparador);
    }

    const driverUsername = document.getElementById('driverUsername');
    const driverPassword = document.getElementById('driverPassword');
    if(driverUsername && driverPassword){
        driverUsername.addEventListener('keydown', handleEnterCarregamento);
        driverPassword.addEventListener('keydown', handleEnterCarregamento);
    }
});

const localStorageDadosPesoKey = "dadosPesagemGlobal";
const localStorageCertificadoKey = "dadosCertificadoGlobal";
const localStorageSetorEnviadoKey = "pedidoEnviadoPorSetor";
const localStoragePedidoStatusKey = "pedidoStatus";
const localStoragePedidoCarregadoKey = "pedidoCarregadoStatus";
const localStorageObservacaoCarregamentoKey = "observacaoCarregamento";
const localStoragePedidoMotoristaKey = "pedidoMotoristaDestino";
const localStorageItemCarregadoKey = "itemCarregadoStatus";
const localStoragePedidoParcialKey = "pedidoCarregamentoParcial";

const localStorageNotaFiscalKey = "pedidoNotaFiscalNumero";

function getNotaFiscal(pedidoId) {
    const pedido = pedidos.find(p => p.id === pedidoId);
    const stored = localStorage.getItem(`${localStorageNotaFiscalKey}_${pedidoId}`);
    if (stored) {
        if (pedido) pedido.notaFiscal = parseInt(stored, 10);
        return parseInt(stored, 10);
    }
    return pedido && pedido.notaFiscal ? pedido.notaFiscal : null;
}

function setNotaFiscal(pedidoId, numero) {
    localStorage.setItem(`${localStorageNotaFiscalKey}_${pedidoId}`, String(numero));
    const pedidoIndex = pedidos.findIndex(p => p.id === pedidoId);
    if (pedidoIndex !== -1) {
        pedidos[pedidoIndex].notaFiscal = numero;
    }
}

function inicializarNotasFiscais() {
    let current = NF_RANGE_START;
    for (let i = 0; i < pedidos.length; i++) {
        const pid = pedidos[i].id;
        if (getNotaFiscal(pid) == null) {
            if (current > NF_RANGE_END) {
                console.warn("Intervalo de NF esgotado: alguns pedidos ficarão sem NF.");
                break;
            }
            setNotaFiscal(pid, current);
            current++;
        } else {
            const existing = getNotaFiscal(pid);
            if (existing >= NF_RANGE_START && existing <= NF_RANGE_END) {
                if (existing >= current) {
                    current = existing + 1;
            }
        }
    }
}
}

const NF_RANGE_START = 222000;
const NF_RANGE_END = 223000; 

let globalFiltroPedido = "";
let globalFiltroRota = "todas";
let globalFiltroStatus = "todas";
let pedidoUnicoVisualizado = null;

let previousGlobalFiltroRota = "todas";
let previousGlobalFiltroStatus = "todas";

let globalFiltroMaterial = "Todos";

let currentLoaderView = 'meus';
let globalFiltroCarregamentoStatus = 'aguardando';
let globalFiltroMotoristaDestino = null;

function getPedidoStatus(id) {
    const storedStatus = localStorage.getItem(`${localStoragePedidoStatusKey}_${id}`);
    if (storedStatus) return storedStatus;
    const pedido = pedidos.find(p => p.id === id);
    return pedido ? pedido.status : "Aguardando separação";
}

function setPedidoStatus(id, status) {
    localStorage.setItem(`${localStoragePedidoStatusKey}_${id}`, status);

    const pedidoIndex = pedidos.findIndex(p => p.id === id);
    if (pedidoIndex !== -1) {
        pedidos[pedidoIndex].status = status;
    }

    if (document.getElementById("filterScreen") && document.getElementById("filterScreen").style.display === "flex") {
        exibirResumoEmbarques();
    }
    if (document.getElementById("mainApp") && document.getElementById("mainApp").style.display === "block") {
        renderizarPedidosPorSetor(pedidoUnicoVisualizado);
        exibirCotasPorEmbarque(pedidoUnicoVisualizado);
    }
    if (document.getElementById("loaderDashboardWrapper") && document.getElementById("loaderDashboardWrapper").style.display === "flex") {
        renderizarPedidosCarregamento();
    }
}

function getPedidoCarregadoStatus(id) {
    const storedStatus = localStorage.getItem(`${localStoragePedidoCarregadoKey}_${id}`);
    if(storedStatus) return storedStatus;
    const pedido = pedidos.find(p => p.id === id);
    if(pedido && pedido.status === 'Carregado') {
        return 'carregado';
    }
    return "pendente";
}

function setPedidoCarregadoStatus(id, status) {
    localStorage.setItem(`${localStoragePedidoCarregadoKey}_${id}`, status);
    if (document.getElementById("loaderDashboardWrapper") && document.getElementById("loaderDashboardWrapper").style.display === "flex") {
        renderizarPedidosCarregamento();
    }
}

function getObservacaoCarregamento(id) {
    return localStorage.getItem(`${localStorageObservacaoCarregamentoKey}_${id}`) || "";
}

function setObservacaoCarregamento(id, observacao) {
    localStorage.setItem(`${localStorageObservacaoCarregamentoKey}_${id}`, observacao);
}

function getPedidoMotoristaDestino(id) {
    const pedido = pedidos.find(p => p.id === id);
    return localStorage.getItem(`${localStoragePedidoMotoristaKey}_${id}`) || (pedido ? pedido.motorista : null);
}

function setPedidoMotoristaDestino(id, motorista, rerender = true) {
    localStorage.setItem(`${localStoragePedidoMotoristaKey}_${id}`, motorista);
    const pedidoIndex = pedidos.findIndex(p => p.id === id);
    if (pedidoIndex !== -1) {
        pedidos[pedidoIndex].motorista = motorista;
    }
    if (rerender) {
        renderizarPedidosCarregamento();
    }
}

function getDadosPesoPedido(id) {
    return JSON.parse(localStorage.getItem(`${localStorageDadosPesoKey}_${id}`)) || {};
}

function setDadosPesoPedido(id, dados) {
    localStorage.setItem(`${localStorageDadosPesoKey}_${id}`, JSON.stringify(dados));
}

function gerarProximaNotaFiscal() {
    let maxNF = NF_RANGE_START - 1;
    for (let i = 0; i < pedidos.length; i++) {
        const nf = getNotaFiscal(pedidos[i].id);
        if (nf !== null && nf >= NF_RANGE_START && nf <= NF_RANGE_END) {
            if (nf > maxNF) maxNF = nf;
        }
    }
    const proxima = maxNF + 1;
    return (proxima <= NF_RANGE_END) ? proxima : null;
}

const _setDadosPesoPedidoOriginal = setDadosPesoPedido;
setDadosPesoPedido = function(id, dados) {
    _setDadosPesoPedidoOriginal(id, dados);
    const novaNF = gerarProximaNotaFiscal();
    if (novaNF !== null) {
        setNotaFiscal(id, novaNF);
    } else {
        console.warn("Faixa de NF esgotada ao redefinir pesos.");
    }
};

function getDadosCertificadoPedido(id) {
    return JSON.parse(localStorage.getItem(`${localStorageCertificadoKey}_${id}`)) || {};
}

function setDadosCertificadoPedido(id, dados) {
    localStorage.setItem(`${localStorageCertificadoKey}_${id}`, JSON.stringify(dados));
}

function isSetorEnviado(id, setor) {
    return localStorage.getItem(`${localStorageSetorEnviadoKey}_${id}_${setor.toLowerCase()}`) === "true";
}

function setSetorEnviado(id, setor) {
    localStorage.setItem(`${localStorageSetorEnviadoKey}_${id}_${setor.toLowerCase()}`, "true");
}

function verificarTodosSetoresEnviados(pedidoId) {
    const pedido = pedidos.find(p => p.id === pedidoId);
    if (!pedido) {
        return false;
    }

    for (const setor in pedido.produtos) {
        if (Object.prototype.hasOwnProperty.call(pedido.produtos, setor)) {
            if (!isSetorEnviado(pedidoId, setor)) {
                return false;
            }
        }
    }
    return true;
}

let selectedUserType = null;
let selectedMaterialType = null;

function selectUserType(type) {
    selectedUserType = type;
    document.querySelectorAll('.user-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`.user-option[data-user-type="${type}"]`).classList.add('selected');
}

function continueToNextScreen() {
    if (selectedUserType === 'operador') {
        hideAllScreens();
        document.getElementById("operatorRoleSelectionPage").style.display = "flex";
    } else if (selectedUserType === 'gestor') {
        hideAllScreens();
        document.getElementById("gestorLoginPage").style.display = "flex";
    } else {
        showModal("Atenção", "Por favor, selecione seu tipo de serviço para continuar.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
    }
}

function continueToLoginScreen() {
    if (selectedUserType === 'separador') {
        showOperatorLoginPage();
    } else if (selectedUserType === 'motorista') {
        showDriverLoginPage();
    } else {
        showModal("Atenção", "Por favor, selecione sua função para continuar.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
    }
}


function showUserSelectionPage() {
    hideAllScreens();
    document.getElementById("userSelectionPage").style.display = "flex";
}

function showOperatorLoginPage() {
    hideAllScreens();
    document.getElementById("loginPage").style.display = "flex";
}

function showDriverLoginPage() {
    hideAllScreens();
    document.getElementById("driverLoginPage").style.display = "flex";
}

function showMaterialSelectionPage() {
    hideAllScreens();
    document.getElementById("materialSelectionPage").style.display = "flex";
    selectedMaterialType = null;
    document.querySelectorAll('#materialSelectionPage .user-option').forEach(option => {
        option.classList.remove('selected');
    });
}

function showFilterScreen() {
    hideAllScreens();
    document.getElementById("filterScreen").style.display = "flex";
}

function showMainApp() {
    hideAllScreens();
    document.getElementById("mainApp").style.display = "block";
}

function hideAllScreens() {
    const screenIds = [
        "userSelectionPage", "loginPage", "driverLoginPage", "gestorLoginPage",
        "filterScreen", "mainApp", "materialSelectionPage", "loaderDashboardWrapper",
        "dashboardWrapper", "operatorRoleSelectionPage"
    ];
    screenIds.forEach(id => {
        const screen = document.getElementById(id);
        if (screen) screen.style.display = "none";
    });
}

function fazerLogin() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const erro = document.getElementById("loginErro");

    const userIsOperator = ["admin", "operador1", "operador2", "operador3", "joao"].includes(user);

    if (usuarios[user] && usuarios[user] === pass && userIsOperator) {
        usuarioLogado = user;
        isMotoristaLogado = false;
        document.getElementById("loginPage").style.display = "none";

        if (usuarioLogado === "admin") {
            document.getElementById("resetDataButton").style.display = "block";
        } else {
            document.getElementById("resetDataButton").style.display = "none";
        }

        exibirResumoEmbarques();
        showMaterialSelectionPage();
    } else {
        erro.textContent = "Usuário ou senha incorretos ou não é um operador.";
    }
}

function fazerLoginMotorista() {
    const user = document.getElementById("driverUsername").value.trim();
    const pass = document.getElementById("driverPassword").value.trim();
    const erro = document.getElementById("driverLoginErro");

    const userIsDriver = ["carregador1", "carregador2", "carregador3"].includes(user);

    if (usuarios[user] && usuarios[user] === pass && userIsDriver) {
        usuarioLogado = user;
        isMotoristaLogado = true;
        document.getElementById("driverLoginPage").style.display = "none";
        showLoaderDashboard();
    } else {
        erro.textContent = "Usuário ou senha incorretos ou não é um Operador de Carregamento.";
    }
}

function fazerLoginGestor() {
    const user = document.getElementById("gestorUsername").value.trim();
    const pass = document.getElementById("gestorPassword").value.trim();
    const erro = document.getElementById("gestorLoginErro");

    if (usuarios[user] && usuarios[user] === pass && user === "gestor") {
        usuarioLogado = user;
        showDashboardScreen();
    } else {
        erro.textContent = "Usuário ou senha de gestor incorretos.";
    }
}

function selectMaterialType(type) {
    selectedMaterialType = type;
    document.querySelectorAll('#materialSelectionPage .user-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`#materialSelectionPage .user-option[data-material-type="${type}"]`).classList.add('selected');
}

function continueToFilterScreen() {
    if (!selectedMaterialType) {
        showModal("Atenção", "Por favor, selecione um tipo de material para continuar.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }
    globalFiltroMaterial = selectedMaterialType;
    document.getElementById("materialSelectionPage").style.display = "none";
    showFilterScreen();
}

window.onload = showUserSelectionPage;

function showMainAppScreen() {
    document.getElementById("filterScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    document.getElementById("welcomeMessage").textContent = `Bem-vindo, ${usuarioLogado}!`;
    document.getElementById("mainAppStatusFilters").style.display = isMotoristaLogado ? "none" : "flex";
    document.getElementById("backToAllOrdersButton").style.display = (pedidoUnicoVisualizado !== null) ? "block" : "none";

    renderizarPedidosPorSetor(pedidoUnicoVisualizado);

    const statusButtons = document.querySelectorAll('#mainAppStatusFilters button');
    statusButtons.forEach(button => {
        if (button.dataset.statusFilter === globalFiltroStatus) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

}

function showFilterScreen() {
    document.getElementById("mainApp").style.display = "none";
    document.getElementById("filterScreen").style.display = "flex";
    exibirResumoEmbarques();
    document.getElementById("backToAllOrdersButton").style.display = "none";
    document.getElementById("quotationsByEmbarque").style.display = "none";

    const summaryTitle = document.querySelector("#filterScreen h2");
    summaryTitle.textContent = isMotoristaLogado ? `Olá, ${usuarioLogado.toUpperCase()}!` : "Visualizar Pedidos";
}

function logout() {
    usuarioLogado = null;
    selectedUserType = null;
    isMotoristaLogado = false;
    globalFiltroPedido = "";
    globalFiltroRota = "todas";
    globalFiltroStatus = "todas";
    globalFiltroMaterial = "Todos";
    selectedMaterialType = null;
    pedidoUnicoVisualizado = null;
    currentLoaderView = 'meus';
    globalFiltroCarregamentoStatus = 'aguardando';
    globalFiltroMotoristaDestino = null;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginErro").textContent = "";
    document.getElementById("driverUsername").value = "";
    document.getElementById("driverPassword").value = "";
    document.getElementById("driverLoginErro").textContent = "";
    showUserSelectionPage();
}

function renderizarPedidosPorSetor(idPedidoEspecifico = null) {
    const pedidosPorSetorDiv = document.getElementById("pedidosPorSetor");
    pedidosPorSetorDiv.innerHTML = "";

    const isVisualizacaoGeralDeRota = globalFiltroRota === 'todas';
    const isVisualizacaoGeralDeMaterial = globalFiltroMaterial === 'Todos';
    
    const esconderBotaoImpressaoSetor = isVisualizacaoGeralDeRota && isVisualizacaoGeralDeMaterial;

    let pedidosFiltrados = pedidos.filter(pedido => {
        const statusCorresponde = globalFiltroStatus === "todas" || getPedidoStatus(pedido.id) === globalFiltroStatus;
        const rotaCorresponde = globalFiltroRota === "todas" || pedido.embarque === globalFiltroRota;
        const pedidoCorresponde = !idPedidoEspecifico || pedido.id === idPedidoEspecifico;
        const pertenceAoOperador = ["admin", "operador1", "operador2", "operador3", "joao"].includes(usuarioLogado.toLowerCase());
        const materialCorresponde = globalFiltroMaterial === "Todos" || Object.keys(pedido.produtos).includes(globalFiltroMaterial);
        return statusCorresponde && rotaCorresponde && pedidoCorresponde && pertenceAoOperador && materialCorresponde;
    });

    if (pedidosFiltrados.length === 0) {
        pedidosPorSetorDiv.innerHTML = "<p style='text-align: center; color: var(--text-secondary); padding: 20px;'>Nenhum pedido encontrado com os filtros aplicados.</p>";
        return;
    }

    pedidosFiltrados.forEach(pedido => {
        const statusAtual = getPedidoStatus(pedido.id);
        const isPedidoSeparado = statusAtual === "Pedido separado";

        const pedidoCard = document.createElement("div");
        pedidoCard.className = "card";
        pedidoCard.setAttribute("data-pedido-id", pedido.id);
        pedidoCard.innerHTML = `
            <div class="pedido-header">
                <h3>COT_${pedido.id} - ${pedido.cliente}</h3>
                <p>Endereço: ${pedido.endereco}</p>
                <p>NF-e: ${getNotaFiscal(pedido.id) ?? "—"}</p>
                <p>Embarque: ${pedido.embarque}</p>
                <p class="status-pedido">Status: ${statusAtual}</p>
            </div>`;

        Object.keys(pedido.produtos).sort().forEach(setor => {
            if (globalFiltroMaterial !== "Todos" && setor !== globalFiltroMaterial) return;

            const isSetorAlreadySent = isSetorEnviado(pedido.id, setor);
            const setorDiv = document.createElement("div");
            let itensHTML = `<h4>Setor: ${setor}</h4>`;

            pedido.produtos[setor].forEach(produto => {
                const peso = getDadosPesoPedido(pedido.id)[produto] !== undefined ? getDadosPesoPedido(pedido.id)[produto] : '';
                const certificado = getDadosCertificadoPedido(pedido.id)[produto] !== undefined ? getDadosCertificadoPedido(pedido.id)[produto] : '';
                const botoesDesabilitados = statusAtual !== "Em separação" || isSetorAlreadySent;
                const fardosExistem = (localStorage.getItem(`fardos_${pedido.id}_${setor}_${produto}`) || "[]") !== "[]";

                itensHTML += `
                    <div class="item">
                        <span>${produto}:</span>
                        <div>
                            <input type="number" step="5" placeholder="Peso (kg)*" value="${peso}" id="peso-${pedido.id}-${setor}-${produto.replace(/\s/g, '-')}" ${botoesDesabilitados ? 'disabled' : ''} />
                            <input type="text" placeholder="Certificado*" value="${certificado}" id="certificado-${pedido.id}-${setor}-${produto.replace(/\s/g, '-')}" ${botoesDesabilitados ? 'disabled' : ''} style="margin-left: 10px; width: 220px;" />
                            <button class="btn-fatiar-fardos" onclick="abrirTelaFatiarFardos(${pedido.id}, '${setor}', '${produto}')" ${botoesDesabilitados ? 'disabled' : ''}>Fatiar Fardos</button>
                            <button class="btn-imprimir-fardos" onclick="imprimirEtiquetasFardos(${pedido.id}, '${setor}', '${produto}')" ${botoesDesabilitados || !fardosExistem ? 'disabled' : ''}>Imprimir Fardos</button>
                        </div>
                    </div>`;
            });
            setorDiv.innerHTML = itensHTML;

            const buttonRow = document.createElement("div");
            buttonRow.className = "buttons-row";

            if (!isSetorAlreadySent) {
                buttonRow.innerHTML = `
                    <button class="btn-iniciar-separacao" onclick="iniciarSeparacaoSetor(${pedido.id}, '${setor}')" ${statusAtual !== "Aguardando separação" ? 'disabled' : ''}>Iniciar Separação (${setor})</button>
                    <button class="btn-salvar-peso" onclick="salvarTodosPesosDoSetor(${pedido.id}, '${setor}')" ${statusAtual !== "Em separação" ? 'disabled' : ''}>Salvar Pesos (${setor})</button>
                    <button class="btn-enviar" onclick="enviarSetor(${pedido.id}, '${setor}')" ${statusAtual !== "Em separação" ? 'disabled' : ''}>Enviar (${setor})</button>`;
            } else {

                if (!esconderBotaoImpressaoSetor) {
                    buttonRow.innerHTML = `<button class="btn-imprimir-setor" onclick="imprimirEtiquetasPorSetor(${pedido.id}, '${setor}')">Imprimir Etiquetas do Setor (${setor})</button>`;
                }
            }
            
            setorDiv.appendChild(buttonRow);
            pedidoCard.appendChild(setorDiv);
        });

        if (isPedidoSeparado) {
            const btnImprimirEtiquetas = document.createElement("button");
            btnImprimirEtiquetas.textContent = "Imprimir Todas as Etiquetas";
            btnImprimirEtiquetas.className = "btn-print-etiqueta";
            btnImprimirEtiquetas.onclick = () => imprimirEtiquetas(pedido.id);
            pedidoCard.appendChild(btnImprimirEtiquetas);
        }

        pedidosPorSetorDiv.appendChild(pedidoCard);
    });
}

function iniciarSeparacaoSetor(pedidoId, setor) {
    confirmarAcao(
        `Iniciar Separação para ${setor}?`,
        `O status do pedido será atualizado para "Em separação". Confirma?`,
        () => {
            setPedidoStatus(pedidoId, "Em separação");
            renderizarPedidosPorSetor(pedidoUnicoVisualizado);
        }
    );
}
function enviarSetor(pedidoId, setor) {
    let allWeightsEntered = true;
    const pedido = getPedidoById(pedidoId);
    if (!pedido) return;

    pedido.produtos[setor].forEach(produto => {
        const pesoInput = document.getElementById(`peso-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);
        const certificadoInput = document.getElementById(`certificado-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);
        if (!pesoInput || pesoInput.value === '' || parseFloat(pesoInput.value) <= 0) allWeightsEntered = false;
        if (!certificadoInput || certificadoInput.value.trim() === '') allWeightsEntered = false;
    });

    if (!allWeightsEntered) {
        showModal("Erro", "Preencha o peso e o certificado para todos os produtos antes de enviar.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }
    confirmarAcao(
        `Confirmar Envio para ${setor}?`,
        `Você está prestes a finalizar o envio do setor ${setor}. Confirma?`,
        () => {
            setSetorEnviado(pedidoId, setor);
            if (verificarTodosSetoresEnviados(pedidoId)) {
                setPedidoStatus(pedidoId, "Pedido separado");
            }
            renderizarPedidosPorSetor(pedidoUnicoVisualizado);
        }
    );
}

function salvarTodosPesosDoSetor(pedidoId, setor) {
    const pedido = getPedidoById(pedidoId);
    if (!pedido || !pedido.produtos[setor]) {
        showModal("Erro", `Não foi possível encontrar produtos para o setor ${setor}.`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }
    const produtosDoSetor = pedido.produtos[setor];

    let dadosPeso = getDadosPesoPedido(pedidoId);
    let dadosCertificado = getDadosCertificadoPedido(pedidoId);
    let inputsAtualizados = 0;
    let validationError = false;

    produtosDoSetor.forEach(produto => {
        const pesoInput = document.getElementById(`peso-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);
        const certificadoInput = document.getElementById(`certificado-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);

        if (pesoInput && !pesoInput.disabled) {
            const peso = parseFloat(pesoInput.value);
            if (isNaN(peso) || peso <= 0) {
                validationError = true;
            } else {
                dadosPeso[produto] = peso;
                inputsAtualizados++;
            }
        }

        if (certificadoInput && !certificadoInput.disabled) {
            const certificado = certificadoInput.value.trim();
            if (certificado === '') {
                validationError = true;
            } else {
                dadosCertificado[produto] = certificado;
                inputsAtualizados++;
            }
        }
    });

    if (validationError) {
        showModal(
            "Erro de Validação",
            "Por favor, insira um peso válido (número maior que zero) e um certificado para todos os produtos antes de salvar.",
            `<button class="modal-button ok" onclick="closeModal()">OK</button>`
        );
        return;
    }

    if (inputsAtualizados > 0) {
        setDadosPesoPedido(pedidoId, dadosPeso);
        setDadosCertificadoPedido(pedidoId, dadosCertificado);
        showModal(
            "Pesos Salvos!",
            `Os pesos e certificados para o setor ${setor} da COT_${pedidoId} foram salvos com sucesso.`,
            `<button class="modal-button ok" onclick="closeModal()">OK</button>`
        );
    } else {
        showModal(
            "Nenhuma Alteração!",
            "Nenhum peso ou certificado foi alterado.",
            `<button class="modal-button ok" onclick="closeModal()">OK</button>`
        );
    }
    renderizarPedidosPorSetor(pedidoUnicoVisualizado);
}

function exibirResumoEmbarques() {
    const embarqueSummaryDiv = document.getElementById("embarqueSummary");
    embarqueSummaryDiv.innerHTML = "";
    const resumo = {};

    let pedidosFiltrados;
    pedidosFiltrados = pedidos.filter(p => true);

    const regionColors = {
        'Cariacica, ES': 'red',
        'Fundão, ES': 'red',
        'Guarapari, ES': 'red',
        'Serra, ES': 'red',
        'Vitória, ES': 'red',
        'Vila Velha, ES': 'red',
        'Viana, ES': 'red',
        'Linhares, ES': 'blue',
        'Colatina, ES': 'green',
        'Aracruz, ES': 'yellow',
        'São Mateus, ES': 'teal',
        'Cachoeiro de Itapemirim, ES': 'cyan',
        'Castelo, ES': 'indigo'
    };

    pedidosFiltrados.forEach(pedido => {
        const status = getPedidoStatus(pedido.id);
        const materialCorresponde = globalFiltroMaterial === "Todos" || Object.keys(pedido.produtos).includes(globalFiltroMaterial);

        if (status !== "Pedido separado" && materialCorresponde) {
            const embarque = pedido.embarque;
            if (!resumo[embarque]) {
                resumo[embarque] = { count: 0, color: '' };

                for (const [region, color] of Object.entries(regionColors)) {
                    if (pedido.endereco.includes(region)) {
                        resumo[embarque].color = color;
                        break;
                    }
                }

                if (!resumo[embarque].color) {
                    const defaultColors = ['blue', 'green', 'yellow', 'teal', 'pink', 'purple', 'orange', 'cyan'];
                    resumo[embarque].color = defaultColors[Object.keys(resumo).length % defaultColors.length];
                }
            }
            resumo[embarque].count++;
        }
    });

    const embarquesOrdenados = Object.keys(resumo).sort();

    if (embarquesOrdenados.length === 0) {
        embarqueSummaryDiv.innerHTML = "<p style='text-align: center; color: var(--text-secondary);'>Nenhum pedido pendente por localidade.</p>";
        document.querySelector('.summary-section .filter-box-button-bottom').style.display = 'none';
        return;
    } else {
        document.querySelector('.summary-section .filter-box-button-bottom').style.display = 'block';
    }

    embarquesOrdenados.forEach(embarque => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("summary-item");

        const colorClass = `embarque-${resumo[embarque].color}`;
        itemDiv.classList.add(colorClass);

        itemDiv.innerHTML = `
            <span>Rota ${embarque}: ${resumo[embarque].count} pedidos</span>
            <button onclick="viewPedidosFromSummary('${embarque}')"
                    style="padding: 8px 16px; border-radius: 4px; border: none;
                          font-weight: 500; cursor: pointer; transition: all 0.3s ease;">
                Ver Pedidos
            </button>
        `;
        embarqueSummaryDiv.appendChild(itemDiv);
    });
}

function viewPedidosFromSummary(embarque) {
    globalFiltroRota = (embarque === '') ? "todas" : embarque;
    globalFiltroStatus = "todas";
    pedidoUnicoVisualizado = null;

    showMainAppScreen();
}

function goBackToFilterScreen() {
    showFilterScreen();
}

function viewSingleOrder(pedidoId) {
    pedidoUnicoVisualizado = pedidoId;
    globalFiltroRota = "todas";
    globalFiltroStatus = "todas";
    showMainAppScreen();
}

function goBackToAllOrders() {
    pedidoUnicoVisualizado = null;
    globalFiltroRota = previousGlobalFiltroRota;
    globalFiltroStatus = previousGlobalFiltroStatus;
    showMainAppScreen();
}

function showModal(title, message, buttonsHtml) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalMessage").innerHTML = message;
    document.getElementById("modalButtons").innerHTML = buttonsHtml;
    document.getElementById("modalOverlay").classList.add("active");
}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
}

function confirmarAcao(title, message, onConfirm) {
    window._onConfirmAction = onConfirm;
    showModal(
        title,
        message,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="closeModal(); window._onConfirmAction();">Confirmar</button>
        `
    );
}

function aplicarFiltroStatusPrincipal(status, clickedButton) {
    globalFiltroStatus = status;
    const buttons = document.querySelectorAll('#mainAppStatusFilters button');
    buttons.forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');
    renderizarPedidosPorSetor(pedidoUnicoVisualizado);
}

function exibirCotasPorEmbarque(pedidoId = null) {
    const quotationsSection = document.getElementById("quotationsByEmbarque");
    const quotationListDiv = document.getElementById("quotationList");
    quotationListDiv.innerHTML = "";

    if (!pedidoId || pedidoId === null) {
        quotationsSection.style.display = "none";
        return;
    }

    const pedido = pedidos.find(p => p.id === pedidoId);
    if (!pedido) {
        quotationsSection.style.display = "none";
        return;
    }

    quotationsSection.style.display = "none";
}

function confirmResetAllData() {
    showModal(
        "Zerar Todos os Dados?",
        "Esta ação irá reiniciar todos os pesos lançados, status de separação e envio por setor para TODOS os pedidos. Deseja realmente prosseguir?",
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" style="background-color: var(--red-error);" onclick="resetAllOrderData()">Sim, Zerar Tudo</button>
        `
    );
}

function resetAllOrderData() {
    closeModal();

    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(localStorageDadosPesoKey) ||
            key.startsWith(localStorageCertificadoKey) ||
            key.startsWith(localStorageSetorEnviadoKey) ||
            key.startsWith(localStoragePedidoStatusKey) ||
            key.startsWith(localStoragePedidoCarregadoKey) ||
            key.startsWith(localStorageObservacaoCarregamentoKey) ||
            key.startsWith(localStoragePedidoMotoristaKey) ||
            key.startsWith(localStorageItemCarregadoKey) ||
            key.startsWith(localStoragePedidoParcialKey) ||
            key.startsWith("fardos_")) {
            keysToRemove.push(key);
        }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));

    pedidos.forEach(p => {
        p.status = "Aguardando separação";
        const originalPedido = pedidos.find(op => op.id === p.id);
        if (originalPedido) {
            p.motorista = originalPedido.motorista;
        }
    });

    showModal(
        "Dados Zerados!",
        "Todos os dados de peso, envio por setor e status de separação foram reiniciados.",
        `<button class="modal-button ok" onclick="closeModal(); showUserSelectionPage();">Ok</button>`
    );
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarNotasFiscais();
    showUserSelectionPage();
});

function showLoaderDashboard() {
    hideAllScreens();
    document.getElementById("loaderDashboardWrapper").style.display = "flex";
    showLoaderView('meus');
}

function showLoaderView(viewName) {
    currentLoaderView = viewName;
    const loaderStatusFilters = document.getElementById('loaderStatusFilters');
    const navMeus = document.getElementById('navMeusCarregamentos');
    const navTodos = document.getElementById('navTodosPedidos');
    const viewTitle = document.getElementById('loaderViewTitle');

    if (viewName === 'meus') {
        loaderStatusFilters.style.display = 'flex';
        viewTitle.textContent = 'Meus Carregamentos';
        navMeus.classList.add('active');
        navTodos.classList.remove('active');
    } else { 
        loaderStatusFilters.style.display = 'none';
        viewTitle.textContent = 'Todos os Pedidos';
        navMeus.classList.remove('active');
        navTodos.classList.add('active');
    }
    renderizarPedidosCarregamento();
}


function aplicarFiltroStatusCarregamento(status, clickedButton) {
    globalFiltroCarregamentoStatus = status;
    const buttons = document.querySelectorAll('#loaderStatusFilters button');
    buttons.forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');
    renderizarPedidosCarregamento();
}

function getStatusItemCarregado(pedidoId, produtoSlug) {
    return localStorage.getItem(`${localStorageItemCarregadoKey}_${pedidoId}_${produtoSlug}`) === 'true';
}

function salvarStatusItemCarregado(pedidoId, produtoSlug, isChecked) {
    localStorage.setItem(`${localStorageItemCarregadoKey}_${pedidoId}_${produtoSlug}`, isChecked);
}


function renderizarPedidosCarregamento() {
    const listDiv = document.getElementById("loadingOrdersList");
    listDiv.innerHTML = "";

    let pedidosFiltrados = pedidos.filter(p => {
        const motoristaDestino = getPedidoMotoristaDestino(p.id);
        if (currentLoaderView === 'todos') {
            return true;
        } else {
            if (usuarioLogado === 'carregador1') {
                return motoristaDestino === usuarioLogado || !motoristaDestino || motoristaDestino === '';
            }
            return motoristaDestino === usuarioLogado;
        }
    });
    
    if (currentLoaderView === 'meus') {
        pedidosFiltrados = pedidosFiltrados.filter(p => {
            const pedidoStatus = getPedidoStatus(p.id);
            const carregadoStatus = getPedidoCarregadoStatus(p.id);

            if (globalFiltroCarregamentoStatus === 'aguardando') {
                return pedidoStatus === "Pedido separado" && carregadoStatus === 'pendente';
            }
            if (globalFiltroCarregamentoStatus === 'em_carregamento') {
                return carregadoStatus === 'em_carregamento';
            }
            if (globalFiltroCarregamentoStatus === 'carregado') {
                return carregadoStatus === 'carregado';
            }
            return false;
        });
    }

    if (pedidosFiltrados.length === 0) {
        listDiv.innerHTML = "<p style='text-align:center; color:var(--text-secondary); padding-top: 20px;'>Nenhum pedido encontrado com os filtros aplicados.</p>";
        return;
    }

    const pedidosPorEmbarque = pedidosFiltrados.reduce((acc, pedido) => {
        if (!acc[pedido.embarque]) {
            acc[pedido.embarque] = [];
        }
        acc[pedido.embarque].push(pedido);
        return acc;
    }, {});

    const embarquesOrdenados = Object.keys(pedidosPorEmbarque).sort();

    embarquesOrdenados.forEach(embarque => {
        const embarqueGroupDiv = document.createElement("div");
        embarqueGroupDiv.classList.add("embarque-group");
        
        const headerDiv = document.createElement('div');
        headerDiv.className = 'embarque-group-header';
        
        const titleH3 = document.createElement('h3');
        titleH3.textContent = `Embarque: ${embarque}`;
        headerDiv.appendChild(titleH3);

        const embarqueProntoParaDestinar = pedidosPorEmbarque[embarque].every(p => getPedidoStatus(p.id) === 'Pedido separado');

        if (usuarioLogado === 'carregador1' && embarqueProntoParaDestinar && (currentLoaderView === 'todos' || globalFiltroCarregamentoStatus === 'aguardando')) {
            const btnDestinarEmbarque = document.createElement('button');
            btnDestinarEmbarque.textContent = 'Destinar Embarque Completo';
            btnDestinarEmbarque.className = 'btn-destinar-embarque';
            btnDestinarEmbarque.onclick = () => showDestinarEmbarqueModal(embarque);
            headerDiv.appendChild(btnDestinarEmbarque);
        }
        
        embarqueGroupDiv.appendChild(headerDiv);

        pedidosPorEmbarque[embarque].forEach(pedido => {
            const pedidoCarregadoStatus = getPedidoCarregadoStatus(pedido.id);
            const observacaoCarregamento = getObservacaoCarregamento(pedido.id);
            const pedidoStatus = getPedidoStatus(pedido.id);
            const motoristaDestino = getPedidoMotoristaDestino(pedido.id);

            let statusClass = '';
            let statusText = '';

            if (pedidoCarregadoStatus === 'carregado') {
                statusClass = 'status-carregado';
                statusText = 'Embarque Carregado';
            } else if (pedidoCarregadoStatus === 'em_carregamento') {
                statusClass = 'status-em-carregamento';
                statusText = 'Em Carregamento';
            } else if (pedidoCarregadoStatus === 'nao-carregado') {
                statusClass = 'status-nao-carregado';
                statusText = 'Não Carregado';
            } else if (pedidoStatus === "Pedido separado" && pedidoCarregadoStatus === 'pendente') {
                statusClass = 'status-pedido-separado';
                statusText = 'Aguardando Carregamento';
            } else {
                statusClass = "status-aguardando-separacao";
                statusText = pedidoStatus;
            }

            const card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("data-pedido-id", pedido.id);
            card.innerHTML = `
                <div class="pedido-header">
                    <h3>COT_${pedido.id} - ${pedido.cliente}</h3>
                    <p>Endereço: ${pedido.endereco} <a href="http://googleusercontent.com/maps.google.com/3{encodeURIComponent(pedido.endereco)}" target="_blank" class="map-link">ver no mapa</a></p>
                    <p>NF-e: ${getNotaFiscal(pedido.id) ?? "—"}</p>
                    <p>Destinado a: ${motoristaDestino ? motoristaDestino.toUpperCase() : 'Não Destinado'}</p>
                    <p class="status-pedido ${statusClass}">Status: ${statusText}</p>
                </div>
            `;
            
            if (pedidoStatus === "Pedido separado" || pedidoCarregadoStatus !== 'pendente') {
                const itemListDiv = document.createElement("div");
                itemListDiv.classList.add("item-list-container");
                
                Object.keys(pedido.produtos).forEach(setor => {
                    pedido.produtos[setor].forEach(produto => {
                        const produtoSlug = produto.replace(/\s/g, '-');
                        const isChecked = getStatusItemCarregado(pedido.id, produtoSlug);
                        const isDisabled = pedidoCarregadoStatus === 'carregado' || pedidoCarregadoStatus === 'nao-carregado';

                        const itemDiv = document.createElement('div');
                        itemDiv.className = 'item-carregamento';
                        itemDiv.innerHTML = `
                            <span>${produto}</span>
                            <input type="checkbox" id="item-check-${pedido.id}-${produtoSlug}" 
                                   onchange="salvarStatusItemCarregado(${pedido.id}, '${produtoSlug}', this.checked)"
                                   ${isChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
                        `;
                        itemListDiv.appendChild(itemDiv);
                    });
                });
                card.appendChild(itemListDiv);
            }


            const loaderButtonsDiv = document.createElement("div");
            loaderButtonsDiv.classList.add("loader-buttons");

            if (usuarioLogado === "carregador1" && pedidoStatus === 'Pedido separado') {
                const btnDestinar = document.createElement("button");
                btnDestinar.textContent = "Destinar Cotação";
                btnDestinar.classList.add("btn-destinar");
                btnDestinar.onclick = () => showDestinarCarregamentoModal(pedido.id);
                loaderButtonsDiv.appendChild(btnDestinar);
            }
            
            if (motoristaDestino === usuarioLogado) {
                if (pedidoStatus === "Pedido separado" && pedidoCarregadoStatus === 'pendente') {
                    const btnIniciar = document.createElement("button");
                    btnIniciar.textContent = "Iniciar Carregamento";
                    btnIniciar.classList.add("btn-iniciar-carregamento");
                    btnIniciar.onclick = () => iniciarCarregamento(pedido.id);
                    loaderButtonsDiv.appendChild(btnIniciar);
                }

                if (pedidoCarregadoStatus === 'em_carregamento') {
                    const btnCarregado = document.createElement("button");
                    btnCarregado.textContent = "Marcar como Carregado";
                    btnCarregado.classList.add("btn-carregado");
                    btnCarregado.onclick = () => marcarPedidoCarregado(pedido.id);
                    loaderButtonsDiv.appendChild(btnCarregado);

                    const btnNaoCarregado = document.createElement("button");
                    btnNaoCarregado.textContent = "Marcar como Não Carregado";
                    btnNaoCarregado.classList.add("btn-nao-carregado");
                    btnNaoCarregado.onclick = () => showObservacaoModal(pedido.id);
                    loaderButtonsDiv.appendChild(btnNaoCarregado);
                }
            }

            if (pedidoCarregadoStatus === 'carregado') {
                const btnImprimir = document.createElement("button");
                btnImprimir.textContent = "Imprimir Controle de Transporte";
                btnImprimir.classList.add("btn-print");
                btnImprimir.onclick = () => gerarPDF(pedido.id);
                loaderButtonsDiv.appendChild(btnImprimir);
            }

            card.appendChild(loaderButtonsDiv);
            
            const partialData = JSON.parse(localStorage.getItem(`${localStoragePedidoParcialKey}_${pedido.id}`));
            if (partialData && partialData.items) {
                const obsDiv = document.createElement("div");
                obsDiv.classList.add("observacao-parcial");
                obsDiv.innerHTML = `<p><strong>Carregamento Parcial:</strong> ${partialData.motivo}</p>
                                    <p><strong>Itens não carregados:</strong> ${partialData.items.join(', ')}</p>`;
                card.appendChild(obsDiv);
            }
            
            if (pedidoCarregadoStatus === 'nao-carregado' && observacaoCarregamento) {
                const obsDiv = document.createElement("div");
                obsDiv.classList.add("observacao-nao-carregado");
                obsDiv.innerHTML = `<p><strong>Observação:</strong> ${observacaoCarregamento}</p>`;
                card.appendChild(obsDiv);
            }

            embarqueGroupDiv.appendChild(card);
        });
        listDiv.appendChild(embarqueGroupDiv);
    });
}

function iniciarCarregamento(pedidoId) {
    confirmarAcao(
        `Iniciar Carregamento?`,
        `O status do pedido COT_${pedidoId} será atualizado para "Em Carregamento". Confirma?`,
        () => {
            setPedidoCarregadoStatus(pedidoId, "em_carregamento");
            showModal("Sucesso", `Carregamento do pedido COT_${pedidoId} iniciado.`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        }
    );
}

function marcarPedidoCarregado(pedidoId) {
    const pedido = getPedidoById(pedidoId);
    if (!pedido) return;

    const unCheckedItems = [];
    for (const setor in pedido.produtos) {
        pedido.produtos[setor].forEach(produto => {
            const produtoSlug = produto.replace(/\s/g, '-');
            if (!getStatusItemCarregado(pedidoId, produtoSlug)) {
                unCheckedItems.push(produto);
            }
        });
    }

    if (unCheckedItems.length > 0) {
        showMotivoParcialModal(pedidoId, unCheckedItems);
    } else {
        confirmarAcao(
            "Confirmar Carregamento Completo?",
            `Todos os itens da COT_${pedidoId} foram marcados. Deseja finalizar o carregamento?`,
            () => {
                setPedidoCarregadoStatus(pedidoId, "carregado");
                localStorage.removeItem(`${localStoragePedidoParcialKey}_${pedidoId}`);
                showModal("Sucesso", `Pedido COT_${pedidoId} marcado como "Embarque Carregado".`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
            }
        );
    }
}

function showMotivoParcialModal(pedidoId, unCheckedItems) {
    const itemsList = unCheckedItems.map(item => `<li>${item}</li>`).join('');
    showModal(
        "Carregamento Parcial",
        `
        <p>Os seguintes itens não foram marcados como carregados:</p>
        <ul style="text-align: left; margin: 0 0 15px 30px;">${itemsList}</ul>
        <p>Por favor, informe o motivo do carregamento parcial:</p>
        <textarea id="motivoParcial" placeholder="Ex: Peça avariada, falta de estoque..." rows="4"></textarea>
        `,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="salvarCarregamentoParcial(${pedidoId}, ['${unCheckedItems.join("','")}'])">Salvar Parcial</button>
        `
    );
}

function salvarCarregamentoParcial(pedidoId, unCheckedItems) {
    const motivo = document.getElementById("motivoParcial").value.trim();
    if (motivo === "") {
        showModal("Atenção", "O motivo do carregamento parcial é obrigatório.", `<button class="modal-button ok" onclick="showMotivoParcialModal(${pedidoId}, ['${unCheckedItems.join("','")}'])">OK</button>`);
        return;
    }

    const partialData = {
        items: unCheckedItems,
        motivo: motivo
    };
    localStorage.setItem(`${localStoragePedidoParcialKey}_${pedidoId}`, JSON.stringify(partialData));

    setPedidoCarregadoStatus(pedidoId, "carregado");
    closeModal();
    showModal("Sucesso", `Pedido COT_${pedidoId} marcado como "Embarque Carregado" (Parcial).`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
}


function showObservacaoModal(pedidoId) {
    const currentObs = getObservacaoCarregamento(pedidoId);
    showModal(
        "Motivo Não Carregado",
        `
        <p>Por favor, informe o motivo pelo qual a COT_${pedidoId} não foi carregada:</p>
        <textarea id="observacaoNaoCarregado" placeholder="Descreva o motivo..." rows="4">${currentObs}</textarea>
        `,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="salvarObservacaoNaoCarregado(${pedidoId})">Salvar</button>
        `
    );
}

function salvarObservacaoNaoCarregado(pedidoId) {
    const observacao = document.getElementById("observacaoNaoCarregado").value.trim();
    if (observacao === "") {
        showModal("Atenção", "Por favor, preencha o motivo para não carregamento.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }
    setObservacaoCarregamento(pedidoId, observacao);
    setPedidoCarregadoStatus(pedidoId, "nao-carregado");
    closeModal();
    showModal("Sucesso", `Pedido COT_${pedidoId} marcado como "Não Carregado" com observação.`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
}

function showDestinarCarregamentoModal(pedidoId) {
    const motoristasCarregamento = Object.keys(usuarios).filter(user => user.startsWith('carregador'));
    let optionsHtml = motoristasCarregamento.map(motorista => `<option value="${motorista}">${motorista.toUpperCase()}</option>`).join('');

    const currentMotorista = getPedidoMotoristaDestino(pedidoId);

    showModal(
        "Destinar Carregamento",
        `
        <p>Selecione o Carregador para destinar o carregamento da COT_${pedidoId}:</p>
        <select id="selectMotoristaDestino" style="width: 100%; padding: 10px; margin-top: 15px; border-radius: 5px; border: 1px solid var(--medium-gray);">
            <option value="">Não Destinado</option>
            ${optionsHtml}
        </select>
        `,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="destinarCarregamento(${pedidoId})">Destinar</button>
        `
    );

    if (currentMotorista) {
        document.getElementById('selectMotoristaDestino').value = currentMotorista;
    }
}

function showDestinarEmbarqueModal(embarqueNome) {
    const motoristasCarregamento = Object.keys(usuarios).filter(user => user.startsWith('carregador'));
    let optionsHtml = motoristasCarregamento.map(motorista => `<option value="${motorista}">${motorista.toUpperCase()}</option>`).join('');

    showModal(
        "Destinar Embarque Completo",
        `
        <p>Selecione o Carregador para destinar TODO o embarque <strong>${embarqueNome}</strong>:</p>
        <select id="selectMotoristaDestino" style="width: 100%; padding: 10px; margin-top: 15px; border-radius: 5px; border: 1px solid var(--medium-gray);">
            <option value="" selected>Selecione um carregador</option>
            ${optionsHtml}
        </select>
        `,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="destinarEmbarqueCompleto('${embarqueNome}')">Destinar Embarque</button>
        `
    );
}

function destinarEmbarqueCompleto(embarqueNome) {
    const selectElement = document.getElementById('selectMotoristaDestino');
    const motoristaSelecionado = selectElement.value;

    if (!motoristaSelecionado) {
        showModal("Atenção", "Por favor, selecione um carregador.", `<button class="modal-button ok" onclick="showDestinarEmbarqueModal('${embarqueNome}')">OK</button>`);
        return;
    }

    const pedidosDoEmbarque = pedidos.filter(p => p.embarque === embarqueNome && getPedidoStatus(p.id) === 'Pedido separado');

    pedidosDoEmbarque.forEach(pedido => {
        setPedidoMotoristaDestino(pedido.id, motoristaSelecionado, false); 
    });

    renderizarPedidosCarregamento();
    closeModal();
    showModal("Sucesso", `Embarque ${embarqueNome} destinado para ${motoristaSelecionado.toUpperCase()}.`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
}


function destinarCarregamento(pedidoId) {
    const selectElement = document.getElementById('selectMotoristaDestino');
    const motoristaSelecionado = selectElement.value;

    setPedidoMotoristaDestino(pedidoId, motoristaSelecionado);
    closeModal();
    showModal("Sucesso", `Carregamento da COT_${pedidoId} destinado a ${motoristaSelecionado ? motoristaSelecionado.toUpperCase() : 'Ninguém'}.`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
}

function gerarPDF(pedidoId) {
    const pedido = getPedidoById(pedidoId);
    if (!pedido) {
        showModal("Erro", "Pedido não encontrado.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }

    const agora = new Date();
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    const hora = String(agora.getHours()).padStart(2, '0');
    const minuto = String(agora.getMinutes()).padStart(2, '0');
    const segundo = String(agora.getSeconds()).padStart(2, '0');

    const dataAtualFormatada = `${dia}/${mes}/${ano}`;
    const horaAtualFormatada = `${hora}:${minuto}`;
    const dataHoraImpressao = `${dataAtualFormatada} ${hora}:${minuto}:${segundo}`;

    const usuarioImpressao = usuarioLogado ? usuarioLogado.toUpperCase() : 'N/A';
    const notaFiscal = getNotaFiscal(pedido.id) ?? "N/A";
    const dadosPeso = getDadosPesoPedido(pedidoId);
    let pesoTotal = 0;

    for (const setor in pedido.produtos) {
        pedido.produtos[setor].forEach(produto => {
            const peso = parseFloat(dadosPeso[produto]) || 0;
            pesoTotal += peso;
        });
    }

    let content = `
        <div class="header">
            <div class="logo">
                <img alt="Logo Cedisa" src="" style="width: 150px;"/>
            </div>
            <div class="title">
                <h1>Controle de Transporte</h1>
            </div>
        </div>

        <p><strong>Cliente:</strong> ${pedido.cliente}</p>
        <p><strong>NF-e:</strong> ${notaFiscal}</p>
        <p><strong>Endereço:</strong> ${pedido.endereco}</p>
        <hr>

        <table class="info-table">
            <tr>
                <td><strong>Data</strong></td>
                <td><strong>Hora</strong></td>
                <td><strong>km</strong></td>
                <td><strong>Visto</strong></td>
            </tr>
            <tr>
                <td>${dataAtualFormatada}</td>
                <td>${horaAtualFormatada}</td>
                <td> </td>
                <td> </td>
            </tr>
        </table>

        <table class="details-table">
            <tr>
                <td><strong>Embarque</strong> ${pedido.embarque || 'N/A'}</td>
                <td><strong>Motorista</strong> ${getPedidoMotoristaDestino(pedido.id) || 'Não atribuído'}</td>
                <td><strong>Transportadora</strong> ${pedido.transportadora || 'Transportadora Fictícia LTDA'}</td>
                <td><strong>Placa</strong> ${pedido.placa || 'AAA-0123'}</td>
            </tr>
        </table>

        <table class="items-table">
            <thead>
                <tr>
                    <th>Ordem Entrega</th>
                    <th>Nota Fiscal</th>
                    <th>Emissão</th>
                    <th>Peso</th>
                    <th>Cliente</th>
                    <th>Endereço e Observação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>${notaFiscal}</td>
                    <td>${dataAtualFormatada}</td>
                    <td>${pesoTotal.toFixed(3).replace('.',',')}</td>
                    <td>${pedido.cliente}</td>
                    <td>${pedido.endereco}</td>
                </tr>
            </tbody>
        </table>

        <div class="footer">
            <p><strong>Peso total: ${pesoTotal.toFixed(3).replace('.',',')}</strong></p>
            <p>MATERIAIS RETIRADOS NA Empresa NO DIA ${dataAtualFormatada}, CONFORME NOTAS FISCAIS RELACIONADAS.</p>
            <div class="signature">
                <p>Assinatura: __________________________________________________</p>
            </div>
            <p class="print-info">Impresso por "${usuarioImpressao}" em ${dataHoraImpressao}</p>
        </div>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Controle de Transporte - COT_${pedido.id}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; font-size: 10pt; }
                    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 15px; }
                    .header .title h1 { margin: 0; font-size: 16pt; }
                    .header .logo h2 { margin: 0; font-size: 12pt; color: #555; }
                    .header .logo img { vertical-align: middle; margin-right: 10px; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
                    th, td { border: 1px solid #ccc; padding: 6px; text-align: left; }
                    th { background-color: #f2f2f2; font-size: 9pt; }
                    .info-table td, .details-table td { text-align: center; }
                    .items-table { table-layout: fixed; }
                    .items-table th, .items-table td { word-wrap: break-word; }
                    .footer { margin-top: 30px; border-top: 1px solid #ccc; padding-top: 10px; }
                    .footer .signature { margin-top: 40px; }
                    .footer .print-info { font-size: 8pt; color: #777; text-align: right; margin-top: 20px; }

                    #printButton {
                        position: fixed; top: 20px; right: 20px; background-color: #007bff;
                        color: white; border: none; border-radius: 50%; width: 60px;
                        height: 60px; cursor: pointer; display: flex; align-items: center;
                        justify-content: center; z-index: 1000; box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                    }

                    @media print {
                        body { margin: 10mm; }
                        #printButton { display: none; }
                    }
                </style>
            </head>
            <body>
                <button id="printButton" onclick="window.print()" title="Imprimir Relatório">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                    </svg>
                </button>
                
                ${content}
            </body>
        </html>
    `);
    printWindow.document.close();
}

function getPedidoById(pedidoId) {
    return pedidos.find(p => p.id === pedidoId);
}

function salvarDadosPesoCertificado(pedidoId, produto, peso, certificado) {
    const pesos = JSON.parse(localStorage.getItem('pesosPedidos')) || {};
    const certificados = JSON.parse(localStorage.getItem('certificadosPedidos')) || {};

    if (!pesos[pedidoId]) pesos[pedidoId] = {};
    if (!certificados[pedidoId]) certificados[pedidoId] = {};

    pesos[pedidoId][produto] = peso;
    certificados[pedidoId][produto] = certificado;

    localStorage.setItem('pesosPedidos', JSON.stringify(pesos));
    localStorage.setItem('certificadosPedidos', JSON.stringify(certificados));
}

function imprimirEtiquetas(pedidoId) {
    const baseUrl = "https://arthurbritol.github.io/etiquetas//visualizador.html";
    const nomeUsuario = usuarioLogado ? usuarioLogado.toUpperCase() : 'N/A';
    const pedido = getPedidoById(pedidoId);
    if (!pedido) {
        showModal("Erro", "Pedido não encontrado.", '<button class="modal-button ok" onclick="closeModal()">OK</button>');
        return;
    }

    const dadosPeso = getDadosPesoPedido(pedidoId);
    const dadosCertificado = getDadosCertificadoPedido(pedidoId);
    const notaFiscalNumero = getNotaFiscal(pedido.id) ?? "—";
    let totalItens = 0;
    for (const setor in pedido.produtos) {
        totalItens += pedido.produtos[setor].length;
    }
    const qrCodeData = [];

    let etiquetaHTML = `
        <html>
        <head>
            <title>Etiquetas COT_${pedido.id}</title>
            <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"><\/script>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f0f2f5; }
                .etiqueta {
                    width: 100.90mm; height: 80.mm; border: 1.5px solid black; padding: 2mm; box-sizing: border-box;
                    page-break-inside: avoid; display: grid;
                    grid-template-columns: 1.3fr 1.2fr 0.8fr;
                    grid-template-rows: auto auto auto 1fr auto;
                    gap: 1.2mm; font-size: 9pt; background-color: white; margin: 10mm auto;
                }
                .box { border: 1px solid black; padding: 1mm; text-align: left; }
                .label { font-weight: bold; }

                .cliente { grid-column: 1 / 3; grid-row: 1; font-size: 24pt; font-weight: bold; align-self: center; text-align: left; border: none; padding: 0; }
                .itens { grid-column: 3 / 4; grid-row: 1; font-size: 9pt; height: min-content; align-self: center;}
                .local-entrega { grid-column: 1 / 4; grid-row: 2; font-size: 12pt; text-align: left; border: none; padding: 0;}
                .tipo-material { grid-column: 1 / 4; grid-row: 3; font-size: 13pt; border: 0px solid black; font-weight: bold; }

                .left-stack { grid-column: 1 / 2; grid-row: 4; display: flex; flex-direction: column; justify-content: space-between; gap: 1.5mm; }
                .nf-box { font-size: 11pt; font-weight: bold; flex-shrink: 0; }
                .cotacao-box { text-align: left; font-size: 9pt; font-weight: bold; }
                .qr-code { display: flex; justify-content: center; align-items: flex-end; }
                
                .details-stack { grid-column: 2 / 3; grid-row: 4; display: flex; flex-direction: column; justify-content: flex-start; gap: 1.2mm; font-size: 8pt; }
                .details-stack .box { font-size: 11pt; font-weight: bold;}
                .details-stack .box-small { font-size: 8pt; font-weight: normal; text-align: left; }
                
                .logo { grid-column: 3 / 4; grid-row: 4; display: flex; align-items: center; justify-content: center; }
                .logo img { width: 200%; object-fit: contain; transform: rotate(90deg); }

                .slogan { grid-column: 1 / 4; grid-row: 5; text-align: center; font-weight: bold; font-size: 8pt; font-style: italic; align-self: end; border: none; padding: 0;}

                #printButton { position: fixed; top: 20px; right: 20px; background-color: #007bff; color: white; border: none; border-radius: 50%; width: 60px; height: 60px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 1000; }
                #pageFooter { display: none; }
                @media print {
                    body { background-color: white; } #printButton { display: none; }
                    #pageFooter { display: block; position: fixed; bottom: 10mm; width: 100%; text-align: center; font-size: 10pt; color: #666; }
                }
            </style>
        </head>
        <body>
            <button id="printButton" onclick="window.print()" title="Imprimir Etiquetas"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg></button>
    `;

    let contadorItens = 0;
    for (const setor in pedido.produtos) {
        pedido.produtos[setor].forEach(produto => {
            contadorItens++;
            const volumeString = `${String(contadorItens).padStart(3, '0')}/${String(totalItens).padStart(3, '0')}`;
            const peso = dadosPeso[produto] !== undefined ? dadosPeso[produto] : 'N/A';
            const certificado = dadosCertificado[produto] !== undefined ? dadosCertificado[produto] : 'N/A';

            const params = new URLSearchParams();
            params.append('cotacao', pedido.id);
            params.append('cliente', pedido.cliente);
            params.append('nf', notaFiscalNumero);
            params.append('volume', volumeString);
            params.append('produto', produto);
            params.append('peso', `${peso} kg`);
            params.append('certificado', certificado);

            const qrUrl = `${baseUrl}?${params.toString()}`;
            const qrCodeId = `qrcode-${contadorItens}`;
            qrCodeData.push({ id: qrCodeId, text: qrUrl });

            etiquetaHTML += `
                <div class="etiqueta">
                    <div class="cliente">${pedido.cliente}</div>
                    <div class="itens box"><span class="label">Itens</span><br>${volumeString}</div>
                    <div class="local-entrega"><span class="label">Local de entrega:</span> ${pedido.endereco}</div>
                    <div class="tipo-material box"><span class="label"></span> ${produto}</div>
                    
                    <div class="left-stack">
                        <div class="nf-box box">NF = ${notaFiscalNumero}</div>
                        <div class="cotacao-box box">Cotação: COT_${pedido.id}</div>
                        <div class="qr-code" id="${qrCodeId}"></div>
                    </div>

                    <div class="details-stack">
                        <div class="box">Peso: ${peso} kg</div>
                        <div class="box box-small"><span class="label">Ordem de compra:</span><br></div>
                        <div class="box box-small"><span class="label">Descarga:</span><br>DOCA 45, GALPÃO 14</div>
                        <div class="box box-small"><span class="label">CNPJ:</span><br>00.000.000/0000-00<br><span class="label">Unidade:</span> Matriz</div>
                    </div>

                    <div class="logo">
                        <img alt="" src="" />
                    </div>

                    <div class="slogan">O BRASIL TODO COMPRA NA CEDISA</div>
                </div>
            `;
        });
    }

    etiquetaHTML += `
            <footer id="pageFooter">Separado por: ${nomeUsuario}</footer>
        </body>
        <script>
            try {
                const dataForQR = ${JSON.stringify(qrCodeData)};
                dataForQR.forEach(function(data) {
                    const el = document.getElementById(data.id);
                    if (el) {
                        new QRCode(el, {
                            text: data.text,
                            width: 100, 
                            height: 100,
                            correctLevel : QRCode.CorrectLevel.L
                        });
                    }
                });
            } catch (e) { console.error('Erro ao gerar QR Code:', e); }
        <\/script>
    </html>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(etiquetaHTML);
    printWindow.document.close();
}

const agora = new Date();

const dia = agora.getDate();
const mes = agora.getMonth() + 1;
const ano = agora.getFullYear();
const hora = agora.getHours();
const minuto = agora.getMinutes();
const segundo = agora.getSeconds();

const adicionaZero = numero => numero < 10 ? '0' + numero : numero;

const diaFormatado = adicionaZero(dia);
const mesFormatado = adicionaZero(mes);
const horaFormatada = adicionaZero(hora);
const minutoFormatado = adicionaZero(minuto);
const segundoFormatado = adicionaZero(segundo);

function abrirTelaFatiarFardos(pedidoId, setor, produto) {
    const pesoTotalEl = document.getElementById(`peso-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);
    const pesoTotal = parseFloat(pesoTotalEl.value);

    if (isNaN(pesoTotal) || pesoTotal <= 0) {
        showModal("Erro", "Defina primeiro o peso total do produto antes de fatiar.", '<button class="modal-button ok" onclick="closeModal()">OK</button>');
        return;
    }

    const modalTitle = "Fatiar Fardos";
    const modalMessage = `
        <p>Informe a quantidade de fardos para o produto <strong>${produto}</strong>.</p>
        <p>Peso Total: <strong>${pesoTotal.toFixed(2)} kg</strong></p>
        <input type="number" id="fatiarQtdFardos" class="modal-input" value="1" min="1" placeholder="Quantidade de fardos">
    `;
    const modalButtons = `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="abrirModalPesosFardos(${pedidoId}, '${setor}', '${produto}', ${pesoTotal})">Avançar</button>
    `;

    showModal(modalTitle, modalMessage, modalButtons);
}

function abrirModalPesosFardos(pedidoId, setor, produto, pesoTotal) {
    const qtdFardosInput = document.getElementById('fatiarQtdFardos');
    const qtdFardos = parseInt(qtdFardosInput.value, 10);
    const limiteInferior = pesoTotal * 0.90;
    const limiteSuperior = pesoTotal * 1.10;

    if (isNaN(qtdFardos) || qtdFardos <= 0) {
        qtdFardosInput.style.border = '1px solid red';
        return;
    }

let inputsHTML = '';
    const pesoDistribuido = (pesoTotal / qtdFardos).toFixed(2);

    for (let i = 0; i < qtdFardos; i++) {
        inputsHTML += `
            <div class="fardo-input-group">
                <label for="pesoFardo_${i}">Peso Fardo ${i + 1}:</label>
                <input type="number" id="pesoFardo_${i}" class="modal-input peso-fardo" value="${pesoDistribuido}" step="0.01" oninput="atualizarSomaPesosFatiados(${qtdFardos}, ${pesoTotal}, ${limiteInferior}, ${limiteSuperior})">
            </div>
        `;
    }

    const modalTitle = "Distribuição de Pesos";
    const modalMessage = `
        <p>Distribua o peso total (<strong>${pesoTotal.toFixed(2)} kg</strong>) entre os <strong>${qtdFardos}</strong> fardos.</p>
        <p style="font-size: 0.9em; color: var(--text-secondary);">Tolerância permitida: de <strong>${limiteInferior.toFixed(2)} kg</strong> a <strong>${limiteSuperior.toFixed(2)} kg</strong>.</p>
        <div id="fatiarInputsContainer">${inputsHTML}</div>
        <div id="somaPesosContainer" style="margin-top: 15px; font-weight: bold;">
            Soma dos Fardos: <span id="somaPesosFatiados">${pesoTotal.toFixed(2)}</span> kg
        </div>
        <div id="fatiarErro" class="modal-error"></div>
    `;

    const modalButtons = `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="salvarPesosFatiados(${pedidoId}, '${setor}', '${produto}', ${qtdFardos}, ${pesoTotal}, ${limiteInferior}, ${limiteSuperior})">Salvar Fardos</button>
    `;

    showModal(modalTitle, modalMessage, modalButtons);

    atualizarSomaPesosFatiados(qtdFardos, pesoTotal, limiteInferior, limiteSuperior);
}

function atualizarSomaPesosFatiados(qtdFardos, pesoTotal, limiteInferior, limiteSuperior) {
    let somaAtual = 0;
    for (let i = 0; i < qtdFardos; i++) {
        const pesoFardo = parseFloat(document.getElementById(`pesoFardo_${i}`).value) || 0;
        somaAtual += pesoFardo;
    }

    const somaSpan = document.getElementById('somaPesosFatiados');
    somaSpan.textContent = somaAtual.toFixed(2);

    if (somaAtual >= limiteInferior && somaAtual <= limiteSuperior) {
        somaSpan.style.color = 'var(--green-success)';
        document.getElementById('fatiarErro').textContent = '';
    } else {
        somaSpan.style.color = 'var(--red-error)';
        document.getElementById('fatiarErro').textContent = `A soma dos fardos deve estar entre ${limiteInferior.toFixed(2)} kg e ${limiteSuperior.toFixed(2)} kg.`;
    }
}

function salvarPesosFatiados(pedidoId, setor, produto, qtdFardos, pesoTotal, limiteInferior, limiteSuperior) {
    const fardosPesos = [];
    let somaFinal = 0;

    for (let i = 0; i < qtdFardos; i++) {
        const pesoFardo = parseFloat(document.getElementById(`pesoFardo_${i}`).value);
        if (isNaN(pesoFardo) || pesoFardo <= 0) {
            document.getElementById('fatiarErro').textContent = `Peso inválido para o fardo ${i + 1}.`;
            return;
        }
        fardosPesos.push(pesoFardo);
        somaFinal += pesoFardo;
    }

    if (somaFinal < limiteInferior || somaFinal > limiteSuperior) {
        document.getElementById('fatiarErro').textContent = `A soma dos fardos (${somaFinal.toFixed(2)} kg) está fora da tolerância permitida.`;
        return;
    }

    const key = `fardos_${pedidoId}_${setor}_${produto}`;
    localStorage.setItem(key, JSON.stringify(fardosPesos));
    
    renderizarPedidosPorSetor(pedidoUnicoVisualizado);

    closeModal();
    showModal("Sucesso", `${qtdFardos} fardos foram salvos com sucesso!`, '<button class="modal-button ok" onclick="closeModal()">OK</button>');
}

function imprimirEtiquetasFardos(pedidoId, setor, produto) {
    const fardos = JSON.parse(localStorage.getItem(`fardos_${pedidoId}_${setor}_${produto}`) || "[]");
    if (!fardos.length) {
        showModal("Erro", "Nenhum fardo registrado para este produto.", '<button class="modal-button ok" onclick="closeModal()">OK</button>');
        return;
    }

    const baseUrl = "https://arthurbritol.github.io/etiquetas/visualizadorfardo.html";
    const nomeUsuario = usuarioLogado ? usuarioLogado.toUpperCase() : 'N/A';
    const pedido = getPedidoById(pedidoId);
    const dadosCertificado = getDadosCertificadoPedido(pedidoId);
    const notaFiscalNumero = getNotaFiscal(pedido.id) ?? "—";
    const certificado = dadosCertificado[produto] !== undefined ? dadosCertificado[produto] : 'N/A';
    const qrCodeData = [];

    let etiquetaHTML = `
        <html>
        <head>
            <title>Etiquetas Fardos COT_${pedido.id} - ${produto}</title>
            <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"><\/script>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f0f2f5; }
                .etiqueta {
                    width: 100.90mm; height: 80.mm; border: 1.5px solid black; padding: 2mm; box-sizing: border-box;
                    page-break-inside: avoid; display: grid;
                    grid-template-columns: 1.3fr 1.2fr 0.8fr;
                    grid-template-rows: auto auto auto 1fr auto;
                    gap: 1.2mm; font-size: 9pt; background-color: white; margin: 10mm auto;
                }
                .box { border: 1px solid black; padding: 1mm; text-align: left; }
                .label { font-weight: bold; }
                .cliente { grid-column: 1 / 3; grid-row: 1; font-size: 24pt; font-weight: bold; align-self: center; text-align: left; border: none; padding: 0; }
                .itens { grid-column: 3 / 4; grid-row: 1; font-size: 9pt; height: min-content; align-self: center;}
                .local-entrega { grid-column: 1 / 4; grid-row: 2; font-size: 12pt; text-align: left; border: none; padding: 0;}
                .tipo-material { grid-column: 1 / 4; grid-row: 3; font-size: 12pt; border: 0px solid black; font-weight: bold; }
                .left-stack { grid-column: 1 / 2; grid-row: 4; display: flex; flex-direction: column; justify-content: space-between; gap: 1.5mm; }
                .nf-box { font-size: 11pt; font-weight: bold; flex-shrink: 0; }
                .cotacao-box { text-align: left; font-size: 9pt; font-weight: bold; }
                .qr-code { display: flex; justify-content: center; align-items: flex-end; }
                .details-stack { grid-column: 2 / 3; grid-row: 4; display: flex; flex-direction: column; justify-content: flex-start; gap: 1.2mm; font-size: 8pt; }
                .details-stack .box { font-size: 10pt; font-weight: bold;}
                .details-stack .box-small { font-size: 8pt; font-weight: normal; text-align: left; }
                .logo { grid-column: 3 / 4; grid-row: 4; display: flex; align-items: center; justify-content: center; }
                .logo img { width: 200%; object-fit: contain; transform: rotate(90deg); }
                .slogan { grid-column: 1 / 4; grid-row: 5; text-align: center; font-weight: bold; font-size: 8pt; font-style: italic; align-self: end; border: none; padding: 0;}
                #printButton { position: fixed; top: 20px; right: 20px; background-color: #007bff; color: white; border: none; border-radius: 50%; width: 60px; height: 60px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 1000; }
                #pageFooter { display: none; }
                @media print {
                    body { background-color: white; } #printButton { display: none; }
                    #pageFooter { display: block; position: fixed; bottom: 10mm; width: 100%; text-align: center; font-size: 10pt; color: #666; }
                }
            </style>
        </head>
        <body>
            <button id="printButton" onclick="window.print()" title="Imprimir Etiquetas"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg></button>
    `;

    fardos.forEach((peso, i) => {
        const volumeString = `Fardo ${String(i + 1).padStart(3, '0')}/${String(fardos.length).padStart(3, '0')}`;
        
        const params = new URLSearchParams();
        params.append('cotacao', pedido.id);
        params.append('cliente', pedido.cliente);
        params.append('nf', notaFiscalNumero);
        params.append('volume', volumeString);
        params.append('produto', produto);
        params.append('peso', `${peso.toFixed(2)} kg`);
        params.append('certificado', certificado);

        const qrUrl = `${baseUrl}?${params.toString()}`;
        const qrCodeId = `qrcode-fardo-${i}`;
        qrCodeData.push({ id: qrCodeId, text: qrUrl });

        etiquetaHTML += `
            <div class="etiqueta">
                <div class="cliente">${pedido.cliente}</div>
                <div class="itens box"><span class="label"></span><br>${volumeString}</div>
                <div class="local-entrega"><span class="label">Local de entrega:</span> ${pedido.endereco}</div>
                <div class="tipo-material box"><span class="label"></span> ${produto}</div>
                
                <div class="left-stack">
                    <div class="nf-box box">NF = ${notaFiscalNumero}</div>
                    <div class="cotacao-box box">Cotação: COT_${pedido.id}</div>
                    <div class="qr-code" id="${qrCodeId}"></div>
                </div>

                <div class="details-stack">
                    <div class="box">Peso: ${peso.toFixed(2)} kg</div>
                    <div class="box box-small"><span class="label">Ordem de compra:</span><br>COT_${pedido.id}</div>
                    <div class="box box-small"><span class="label">Descarga:</span><br>DOCA 45, GALPÃO 14</div>
                    <div class="box box-small"><span class="label">CNPJ:</span><br>00.000.000/0000-00<br><span class="label">Unidade:</span> Matriz</div>
                </div>

                <div class="logo">
                    <img alt="" src="" />
                </div>

                <div class="slogan">O BRASIL TODO COMPRA NA CEDISA</div>
            </div>
        `;
    });

    etiquetaHTML += `
            <footer id="pageFooter">Separado por: ${nomeUsuario}</footer>
        </body>
        <script>
            try {
                const dataForQR = ${JSON.stringify(qrCodeData)};
                dataForQR.forEach(function(data) {
                    const el = document.getElementById(data.id);
                    if (el) {
                        new QRCode(el, { text: data.text, width: 100, height: 100, correctLevel: QRCode.CorrectLevel.L });
                    }
                });
            } catch (e) { console.error('Erro ao gerar QR Code:', e); }
        <\/script>
    </html>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(etiquetaHTML);
    printWindow.document.close();
}

function imprimirEtiquetasPorSetor(pedidoId, setor) {
    const baseUrl = "https://arthurbritol.github.io/etiquetas/visualizador.html";
    const nomeUsuario = usuarioLogado ? usuarioLogado.toUpperCase() : 'N/A';
    const pedido = getPedidoById(pedidoId);
    if (!pedido || !pedido.produtos[setor]) {
        showModal("Erro", "Pedido ou setor não encontrado.", '<button class="modal-button ok" onclick="closeModal()">OK</button>');
        return;
    }

    const dadosPeso = getDadosPesoPedido(pedidoId);
    const dadosCertificado = getDadosCertificadoPedido(pedidoId);
    const notaFiscalNumero = getNotaFiscal(pedido.id) ?? "—";
    
    let totalGeralItens = 0;
    for (const s in pedido.produtos) {
        totalGeralItens += pedido.produtos[s].length;
    }

    let indiceInicialSetor = 0;
    const setoresOrdenados = Object.keys(pedido.produtos).sort();
    for (const s of setoresOrdenados) {
        if (s === setor) break; 
        indiceInicialSetor += pedido.produtos[s].length; 
    }

    const itensDoSetor = pedido.produtos[setor];
    const qrCodeData = [];

    let etiquetaHTML = `
        <html>
        <head>
            <title>Etiquetas Setor ${setor} - COT_${pedido.id}</title>
            <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"><\/script>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f0f2f5; }
                .etiqueta {
                    width: 100.90mm; height: 80.mm; border: 1.5px solid black; padding: 2mm; box-sizing: border-box;
                    page-break-inside: avoid; display: grid;
                    grid-template-columns: 1.3fr 1.2fr 0.8fr;
                    grid-template-rows: auto auto auto 1fr auto;
                    gap: 1.2mm; font-size: 9pt; background-color: white; margin: 10mm auto;
                }
                .box { border: 1px solid black; padding: 1mm; text-align: left; }
                .label { font-weight: bold; }
                .cliente { grid-column: 1 / 3; grid-row: 1; font-size: 24pt; font-weight: bold; align-self: center; text-align: left; border: none; padding: 0; }
                .itens { grid-column: 3 / 4; grid-row: 1; font-size: 9pt; height: min-content; align-self: center;}
                .local-entrega { grid-column: 1 / 4; grid-row: 2; font-size: 12pt; text-align: left; border: none; padding: 0;}
                .tipo-material { grid-column: 1 / 4; grid-row: 3; font-size: 12pt; border: 0px solid black; font-weight: bold; }
                .left-stack { grid-column: 1 / 2; grid-row: 4; display: flex; flex-direction: column; justify-content: space-between; gap: 1.5mm; }
                .nf-box { font-size: 11pt; font-weight: bold; flex-shrink: 0; }
                .cotacao-box { text-align: left; font-size: 9pt; font-weight: bold; }
                .qr-code { display: flex; justify-content: center; align-items: flex-end; }
                .details-stack { grid-column: 2 / 3; grid-row: 4; display: flex; flex-direction: column; justify-content: flex-start; gap: 1.2mm; font-size: 8pt; }
                .details-stack .box { font-size: 10pt; font-weight: bold;}
                .details-stack .box-small { font-size: 8pt; font-weight: normal; text-align: left; }
                .logo { grid-column: 3 / 4; grid-row: 4; display: flex; align-items: center; justify-content: center; }
                .logo img { width: 200%; object-fit: contain; transform: rotate(90deg); }
                .slogan { grid-column: 1 / 4; grid-row: 5; text-align: center; font-weight: bold; font-size: 8pt; font-style: italic; align-self: end; border: none; padding: 0;}
                #printButton { position: fixed; top: 20px; right: 20px; background-color: #007bff; color: white; border: none; border-radius: 50%; width: 60px; height: 60px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 1000; }
                #pageFooter { display: none; }
                @media print {
                    body { background-color: white; } #printButton { display: none; }
                    #pageFooter { display: block; position: fixed; bottom: 10mm; width: 100%; text-align: center; font-size: 10pt; color: #666; }
                }
            </style>
        </head>
        <body>
            <button id="printButton" onclick="window.print()" title="Imprimir Etiquetas"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg></button>
    `;

    itensDoSetor.forEach((produto, index) => {
        const contadorGlobalItens = indiceInicialSetor + index + 1;
        const volumeString = `${String(contadorGlobalItens).padStart(3, '0')}/${String(totalGeralItens).padStart(3, '0')}`;
        const peso = dadosPeso[produto] !== undefined ? dadosPeso[produto] : 'N/A';
        const certificado = dadosCertificado[produto] !== undefined ? dadosCertificado[produto] : 'N/A';

        const params = new URLSearchParams();
        params.append('cotacao', pedido.id);
        params.append('cliente', pedido.cliente);
        params.append('nf', notaFiscalNumero);
        params.append('volume', volumeString);
        params.append('produto', produto);
        params.append('peso', `${peso} kg`);
        params.append('certificado', certificado);

        const qrUrl = `${baseUrl}?${params.toString()}`;
        const qrCodeId = `qrcode-setor-${contadorGlobalItens}`;
        qrCodeData.push({ id: qrCodeId, text: qrUrl });

        etiquetaHTML += `
            <div class="etiqueta">
                <div class="cliente">${pedido.cliente}</div>
                <div class="itens box"><span class="label">Itens</span><br>${volumeString}</div>
                <div class="local-entrega"><span class="label">Local de entrega:</span> ${pedido.endereco}</div>
                <div class="tipo-material box"><span class="label"></span> ${produto}</div>
                
                <div class="left-stack">
                    <div class="nf-box box">NF = ${notaFiscalNumero}</div>
                    <div class="cotacao-box box">Cotação: COT_${pedido.id}</div>
                    <div class="qr-code" id="${qrCodeId}"></div>
                </div>

                <div class="details-stack">
                    <div class="box">Peso: ${peso} kg</div>
                    <div class="box box-small"><span class="label">Ordem de compra:</span><br>COT_${pedido.id}</div>
                    <div class="box box-small"><span class="label">Descarga:</span><br>DOCA 45, GALPÃO 14</div>
                    <div class="box box-small"><span class="label">CNPJ:</span><br>00.000.000/0000-00<br><span class="label">Unidade:</span> Matriz</div>
                </div>

                <div class="logo">
                    <img alt="" src="" />
                </div>

                <div class="slogan">O BRASIL TODO COMPRA NA CEDISA</div>
            </div>
        `;
    });

    etiquetaHTML += `
            <footer id="pageFooter">Separado por: ${nomeUsuario}</footer>
        </body>
        <script>
            try {
                const dataForQR = ${JSON.stringify(qrCodeData)};
                dataForQR.forEach(function(data) {
                    const el = document.getElementById(data.id);
                    if (el) {
                        new QRCode(el, { text: data.text, width: 100, height: 100, correctLevel: QRCode.CorrectLevel.L });
                    }
                });
            } catch (e) { console.error('Erro ao gerar QR Code:', e); }
        <\/script>
    </html>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(etiquetaHTML);
    printWindow.document.close();
}

function iniciarSeparacaoSetor(pedidoId, setor) {
    confirmarAcao(
        `Iniciar Separação para ${setor}?`,
        `O status do pedido COT_${pedidoId} será atualizado para "Em separação". Confirma?`,
        () => {
            setPedidoStatus(pedidoId, "Em separação");
            renderizarPedidosPorSetor(pedidoUnicoVisualizado);
        }
    );
}

function enviarSetor(pedidoId, setor) {
    const pedido = getPedidoById(pedidoId);
    if (!pedido) return;
    
    let allWeightsEntered = true;
    pedido.produtos[setor].forEach(produto => {
        const pesoInput = document.getElementById(`peso-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);
        const certificadoInput = document.getElementById(`certificado-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);
        if (!pesoInput || pesoInput.value === '' || parseFloat(pesoInput.value) <= 0) {
            allWeightsEntered = false;
        }
        if (!certificadoInput || certificadoInput.value.trim() === '') {
            allWeightsEntered = false;
        }
    });

    if (!allWeightsEntered) {
        showModal("Erro de Validação", "Por favor, preencha o peso e o certificado para todos os produtos antes de enviar o setor.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }

    confirmarAcao(
        `Confirmar Envio para ${setor}?`,
        `Você está prestes a finalizar o envio do setor de ${setor} para a COT_${pedidoId}. Confirma?`,
        () => {
            setSetorEnviado(pedidoId, setor);
            if (verificarTodosSetoresEnviados(pedidoId)) {
                setPedidoStatus(pedidoId, "Pedido separado");
                showModal("Pedido Completo!", `Todos os setores da COT_${pedidoId} foram enviados. Status: "Pedido Separado".`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
            } else {
                showModal("Setor Enviado!", `O setor de ${setor} da COT_${pedidoId} foi enviado.`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
            }
            renderizarPedidosPorSetor(pedidoUnicoVisualizado);
        }
    );
}

function showDashboardScreen() {
    hideAllScreens();
    document.getElementById("dashboardWrapper").style.display = "flex";
    renderDashboard();
}

function renderDashboard() {
    const dashboardContainer = document.getElementById('dashboardContainer');
    dashboardContainer.innerHTML = `
        <div class="shipment-details-view" id="shipmentDetailsView" style="display:none;">
        </div>
        <div class="dashboard-main-content" id="dashboardMainContent">
        </div>
    `;
    renderStatusColumns();
}

function renderStatusColumns() {
    const dashboardContent = document.getElementById('dashboardMainContent');
    dashboardContent.innerHTML = '';
    dashboardContent.style.display = 'grid';

    const pedidosPorStatus = {
        'Aguardando Separação': [],
        'Em separação': [],
        'Separação Concluída': [],
        'Carregamento Concluído': []
    };

    const embarques = pedidos.reduce((acc, pedido) => {
        const embarque = pedido.embarque;
        if (!acc[embarque]) {
            acc[embarque] = [];
        }
        acc[embarque].push(pedido);
        return acc;
    }, {});

    for (const embarqueNome in embarques) {
        const cotacoesDoEmbarque = embarques[embarqueNome];
        let todosSeparados = true;
        let algumEmSeparacao = false;
        let todosCarregados = true;
        let todosAguardando = true;

        cotacoesDoEmbarque.forEach(pedido => {
            const status = getPedidoStatus(pedido.id);
            const carregadoStatus = getPedidoCarregadoStatus(pedido.id);

            if (status !== 'Aguardando separação') {
                todosAguardando = false;
            }
            if (status === 'Em separação') {
                algumEmSeparacao = true;
            }
            if (status !== 'Pedido separado' && carregadoStatus !== 'carregado') {
                todosSeparados = false;
            }
            if (carregadoStatus !== 'carregado') {
                todosCarregados = false;
            }
        });

        let targetStatus = '';
        if (todosCarregados) {
            targetStatus = 'Carregamento Concluído';
        } else if (todosSeparados) {
            targetStatus = 'Separação Concluída';
        } else if (algumEmSeparacao || !todosAguardando) {
            targetStatus = 'Em separação';
        } else {
            targetStatus = 'Aguardando Separação';
        }

        if (pedidosPorStatus[targetStatus]) {
            pedidosPorStatus[targetStatus].push({
                nome: embarqueNome,
                cotacoes: cotacoesDoEmbarque
            });
        }
    }


    for (const status in pedidosPorStatus) {
        const column = document.createElement('div');
        column.className = 'status-column';

        const statusClass = 'status-' + status.toLowerCase().replace(/ /g, '-').replace('çã', 'ca').replace('ú', 'u');
        
        let totalPeso = 0;
        let totalCaminhoes = pedidosPorStatus[status].length;
        
        pedidosPorStatus[status].forEach(embarque => {
            embarque.cotacoes.forEach(p => {
                const pesos = getDadosPesoPedido(p.id);
                totalPeso += Object.values(pesos).reduce((sum, peso) => sum + peso, 0);
            });
        });

        let headerHTML = `
            <div class="status-header ${statusClass}">
                ${status}
            </div>
            <div class="status-summary">
                <div class="summary-item">
                    <div class="value">${(totalPeso / 1000).toFixed(2)}</div>
                    <div class="label">Peso (Ton)</div>
                </div>
                <div class="summary-item">
                    <div class="value">${totalCaminhoes}</div>
                    <div class="label">Caminhões</div>
                </div>
            </div>
            <div class="cards-container">
        `;

        let cardsHTML = '';
        pedidosPorStatus[status].forEach(embarque => {
            cardsHTML += `
                <div class="order-card" onclick="showEmbarqueDetails('${embarque.nome}')">
                    <button class="toggle-btn">></button>
                    <div class="order-info">
                        <h5>${embarque.nome}</h5>
                        <p>${embarque.cotacoes.length} cotaç${embarque.cotacoes.length > 1 ? 'ões' : 'ão'}</p>
                    </div>
                </div>
            `;
        });
        
        column.innerHTML = headerHTML + cardsHTML + '</div>';
        dashboardContent.appendChild(column);
    }
}

function showEmbarqueDetails(embarqueNome) {
    document.getElementById('dashboardMainContent').style.display = 'none';
    const detailsView = document.getElementById('shipmentDetailsView');
    detailsView.style.display = 'block';
    detailsView.innerHTML = '';

    const pedidosDoEmbarque = pedidos.filter(p => p.embarque === embarqueNome);
    
    let cotacoesHTML = '';
    pedidosDoEmbarque.forEach(pedido => {
        const status = getPedidoStatus(pedido.id);
        const carregadoStatus = getPedidoCarregadoStatus(pedido.id);
        let finalStatus = 'Pendente';
        let statusClass = 'pendente';

        if (carregadoStatus === 'carregado' || status === 'Pedido separado') {
            finalStatus = 'Concluído';
            statusClass = 'concluido';
        } else if (status === 'Em separação') {
            finalStatus = 'Em Separação';
            statusClass = 'em-separacao';
        }

        let itensHTML = '';
        const dadosPeso = getDadosPesoPedido(pedido.id);
        const dadosCertificado = getDadosCertificadoPedido(pedido.id);

        for (const setor in pedido.produtos) {
            itensHTML += `<h6>Setor: ${setor}</h6>`;
            pedido.produtos[setor].forEach(produto => {
                const peso = dadosPeso[produto];
                const cert = dadosCertificado[produto];
                const itemConcluido = peso && cert;

                itensHTML += `
                    <div class="item-detail-card">
                        <div class="item-detail-header" onclick="toggleDropdown(this.parentElement, '.item-detail-content')">
                            <button class="toggle-btn">▼</button>
                            <div class="item-info">
                                <h6>${produto}</h6>
                            </div>
                        </div>
                        <div class="item-detail-content">
                            <div class="item-detail-fields">
                                <div class="field">
                                    <label>Peso (Kg)</label>
                                    <input type="text" value="${peso || ''}" readonly>
                                </div>
                                <div class="field">
                                    <label>Certificado</label>
                                    <input type="text" value="${cert || ''}" readonly>
                                </div>
                            </div>
                            <p class="item-detail-status ${itemConcluido ? 'concluido' : 'pendente'}">${itemConcluido ? 'Concluído' : 'Pendente'}</p>
                        </div>
                    </div>
                `;
            });
        }

        cotacoesHTML += `
            <div class="cotacao-list-item">
                <button class="toggle-btn" onclick="toggleDropdown(this.parentElement, '.item-details-dropdown')">></button>
                <img src="IMAGES/pacote.png" alt="ícone" class="item-icon">
                <div class="cotacao-info">
                    <h5>COT_${pedido.id}</h5>
                    <p>${pedido.embarque}: 00/00/0000</p>
                </div>
                <span class="cotacao-status-tag ${statusClass}">${finalStatus}</span>
            </div>
            <div class="item-details-dropdown">
                ${itensHTML}
            </div>
        `;
    });

    detailsView.innerHTML = `
        <div class="shipment-details-header">
            <button class="back-btn" onclick="renderDashboard()"><</button>
            <img src="IMAGES/pacote.png" alt="ícone" class="header-icon">
            <div>
                <h2>${embarqueNome}</h2>
                <p class="embarque-id">#${pedidosDoEmbarque[0].id}</p>
            </div>
        </div>
        <div class="shipment-location-bar">
            <span>${embarqueNome}</span>
            <button class="map-btn">Map ▼</button>
        </div>
        <div class="cotacoes-container">
            ${cotacoesHTML}
        </div>
    `;
}

function toggleDropdown(element, contentSelector) {
    element.classList.toggle('expanded');
    let content;

    if (element.classList.contains('cotacao-list-item')) {
        content = element.nextElementSibling;
    } else if (element.classList.contains('item-detail-header')) {
        content = element.nextElementSibling;
    } else {
        content = element.querySelector(contentSelector);
    }
    
    if (content) {
        content.style.display = element.classList.contains('expanded') ? 'block' : 'none';
    }
}
