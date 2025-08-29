# Sistema de Gestão de Pedidos Logísticos

## 📖 Descrição

Este projeto é uma aplicação web front-end desenvolvida para otimizar o processo de gestão e acompanhamento de pedidos numa operação logística. A plataforma permite a separação de materiais, registo de pesagem, atribuição de motoristas, e visualização do estado dos pedidos em tempo real, tudo através de uma interface intuitiva e responsiva.

A aplicação foi desenhada com diferentes perfis de utilizador, cada um com as suas próprias permissões e funcionalidades, garantindo que cada membro da equipa tenha acesso apenas às ferramentas necessárias para a sua função. As mais recentes atualizações incluem um módulo de **roteirização inteligente** para gestores e uma funcionalidade de **geração de pedidos** para consultores.

## ✨ Funcionalidades Principais

- **Múltiplos Perfis de Utilizador**: Acesso diferenciado para Gestores, Consultores, Operadores (Separadores e Carregamento).
- **Dashboard de Gestão**: Visualização geral do estado dos pedidos em formato Kanban, com resumos por rota de embarque e filtros avançados.
- **Roteirização Inteligente (Gestor)**:
    - Interface com mapa interativo para visualização de pedidos sem rota.
    - Geração de rotas otimizadas ou manuais, utilizando a API do OpenRouteService para calcular o melhor trajeto.
    - Visualização da rota no mapa, com resumo de distância, paradas e tempo estimado.
- **Geração de Pedidos (Consultor)**:
    - Formulário para criação de novos pedidos, com busca de endereço automática via CEP.
    - Adição dinâmica de produtos ao pedido.
- **Interface de Operador (Separador)**:
    - Seleção de pedidos por tipo de material (Chapa, Tubo, Viga, etc.).
    - Início do processo de separação, alterando o estado do pedido.
    - Registo de peso e número de certificado para cada item.
    - Funcionalidade para "Fatiar Fardos", permitindo dividir o peso de um item em múltiplos volumes.
    - Impressão de etiquetas de identificação para produtos e fardos.
- **Interface de Operador (Carregamento)**:
    - Visualização de carregamentos atribuídos.
    - Possibilidade de destinar um embarque completo a um motorista específico.
    - Check-list de itens para carregar.
    - Início e finalização do processo de carregamento.
    - Registo de carregamento parcial ou não carregamento com justificação.
    - Geração de PDF para controlo de transporte individual e por embarque.
- **Persistência de Dados**: Utilização do `localStorage` do navegador para guardar o estado dos pedidos, pesos, certificados e outras informações, permitindo que os dados não se percam ao recarregar a página.
- **Responsividade**: Interface adaptada para uma boa experiência de utilização em diferentes dispositivos.

## 👥 Perfis de Utilizador

O sistema contempla os seguintes perfis:

1.  **Acesso Gerencial (Gestor)**:
    - Acesso a um dashboard com resumo geral de todos os pedidos.
    - Ferramenta de **Roteirização Inteligente** para criar e otimizar rotas de entrega.
    - Consulta o estado de qualquer pedido, utilizando filtros avançados.

2.  **Acesso Gerencial (Consultor)**:
    - Acesso ao dashboard de resumo e à ferramenta de consulta de pedidos.
    - Funcionalidade para **Gerar Novos Pedidos** diretamente no sistema.

3.  **Operador (Separador)**:
    - Responsável pela separação dos materiais.
    - Visualiza os pedidos pendentes e pode filtrar por material e rota de embarque.
    - Inicia a separação, insere os pesos e certificados, e finaliza a sua etapa, mudando o estado do pedido para "Pedido Separado".

4.  **Operador (Carregamento)**:
    - Visualiza os pedidos que já foram separados e estão prontos para carregar.
    - Pode ver os seus carregamentos ou todos os pedidos disponíveis.
    - Realiza o check-list de carregamento e finaliza o processo, gerando o documento de transporte.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Para a estrutura da aplicação.
- **CSS3**: Para a estilização e responsividade da interface.
- **JavaScript (Vanilla)**: Para toda a lógica da aplicação, manipulação de dados e interatividade.
- **html2pdf.js**: Biblioteca externa para a geração de documentos PDF.
- **Leaflet.js**: Para a integração e visualização de mapas interativos.
- **OpenRouteService API**: Utilizada para geocodificação de endereços e otimização de rotas.
- **ViaCEP API**: Para busca automática de endereços a partir do CEP no formulário de geração de pedidos.

## ⚙️ Como Executar

Por ser um projeto puramente front-end, não é necessário um servidor ou processo de compilação. Para o executar:

1.  Certifique-se de que todos os ficheiros (`index.html`, `script.js`, `style.css`) e a pasta `IMAGES` estão no mesmo diretório.
2.  Abra o ficheiro `index.html` diretamente no seu navegador de internet (ex: Google Chrome, Firefox).

A aplicação estará pronta a ser utilizada.

## 📋 Como Utilizar

1.  Na página inicial, selecione o seu tipo de serviço (Operador ou Acesso Gerencial).
2.  Se for Operador, escolha a sua função (Separador ou Carregamento).
3.  Faça o login com um dos utilizadores predefinidos no ficheiro `script.js`.
4.  Navegue pela interface correspondente ao seu perfil para gerir os pedidos.
