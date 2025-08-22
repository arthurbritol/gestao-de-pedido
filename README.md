# Sistema de Gestão de Pedidos Logísticos

## 📖 Descrição

Este projeto é uma aplicação web front-end desenvolvida para otimizar o processo de gestão e acompanhamento de pedidos numa operação logística. A plataforma permite a separação de materiais, registo de pesagem, atribuição de motoristas, e visualização do estado dos pedidos em tempo real, tudo através de uma interface intuitiva e responsiva.

A aplicação foi desenhada com diferentes perfis de utilizador, cada um com as suas próprias permissões e funcionalidades, garantindo que cada membro da equipa tenha acesso apenas às ferramentas necessárias para a sua função.

## ✨ Funcionalidades Principais

- **Múltiplos Perfis de Utilizador**: Acesso diferenciado para Gestores, Operadores (Separadores) e Motoristas (Carregamento).
- **Dashboard de Gestão**: Visualização geral do estado dos pedidos, com resumos por rota de embarque e filtros avançados.
- **Interface de Operador**:
    - Seleção de pedidos por tipo de material (Chapa, Tubo, Viga, etc.).
    - Início do processo de separação, alterando o estado do pedido.
    - Registo de peso e número de certificado para cada item.
    - Funcionalidade para "Fatiar Fardos", permitindo dividir o peso de um item em múltiplos volumes.
    - Impressão de etiquetas de identificação para produtos e fardos.
- **Interface de Carregamento (Motorista)**:
    - Visualização de carregamentos atribuídos.
    - Check-list de itens para carregar.
    - Início e finalização do processo de carregamento.
    - Registo de carregamento parcial ou não carregamento com justificação.
    - Geração de PDF para controlo de transporte.
- **Persistência de Dados**: Utilização do `localStorage` do navegador para guardar o estado dos pedidos, pesos, certificados e outras informações, permitindo que os dados não se percam ao recarregar a página.
- **Responsividade**: Interface adaptada para uma boa experiência de utilização em diferentes dispositivos.

## 👥 Perfis de Utilizador

O sistema contempla os seguintes perfis:

1.  **Acesso Gerencial (Gestor/Consultor)**:
    - Tem acesso a um dashboard com um resumo geral de todos os pedidos.
    - Pode consultar o estado de qualquer pedido, utilizando filtros por cotação, data, rota ou estado.

2.  **Operador (Separador)**:
    - Responsável pela separação dos materiais.
    - Visualiza os pedidos pendentes e pode filtrar por material e rota de embarque.
    - Inicia a separação, insere os pesos e certificados, e finaliza a sua etapa, mudando o estado do pedido para "Pedido Separado".

3.  **Carregamento (Motorista)**:
    - Visualiza os pedidos que já foram separados e estão prontos para carregar.
    - Pode ver os seus carregamentos ou todos os pedidos disponíveis.
    - Realiza o check-list de carregamento e finaliza o processo, gerando o documento de transporte.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Para a estrutura da aplicação.
- **CSS3**: Para a estilização e responsividade da interface.
- **JavaScript (Vanilla)**: Para toda a lógica da aplicação, manipulação de dados e interatividade.
- **html2pdf.js**: Biblioteca externa para a geração de documentos PDF.

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
