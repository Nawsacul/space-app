### npm vs. npx

- **npm (Node Package Manager)** é o gerenciador de pacotes para JavaScript, utilizado para gerenciar dependências de projetos e compartilhar pacotes de código com outros desenvolvedores. Quando você executa um comando como `npm install <pacote>`, você está adicionando uma dependência ao seu projeto localmente, ou seja, dentro da pasta do projeto.
- **npx** é uma ferramenta que vem com npm (versão 5.2.0 e acima) e serve para executar pacotes que foram instalados com npm sem precisar adicionar globalmente no seu sistema. É especialmente útil para executar pacotes que são frequentemente utilizados em linha de comando para iniciar novos projetos, como `create-react-app` ou `create-vite`, sem a necessidade de instalá-los globalmente.

### Criando uma Aplicação React com Vite

Vite é uma ferramenta de construção front-end moderna que proporciona uma experiência de desenvolvimento mais rápida graças ao uso eficiente de módulos ES nativos. Diferente do `create-react-app`, que configura um ambiente de desenvolvimento com várias otimizações de build, o Vite foca em uma inicialização rápida e recarregamento de módulo quente (HMR).

- **Por que Vite?** O Vite oferece vantagens como inicialização mais rápida do projeto e recarregamentos de página instantâneos durante o desenvolvimento. Isso é possível porque o Vite serve os módulos via ES import durante o desenvolvimento, evitando a necessidade de reempacotar o aplicativo a cada mudança.

### Styled Components: CSS-in-JS

**Styled Components** permite escrever códigos CSS dentro dos componentes JavaScript, o que facilita a manutenção de estilos, evita conflitos de classe CSS e permite uma melhor modularização do código.

- **Exemplo de componente estilizado:**

  ```jsx
  import styled from "styled-components";

  const Botao = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  `;
  ```

### Normalização do CSS com `createGlobalStyle`

A normalização do CSS é uma prática comum para garantir que seu aplicativo se pareça consistentemente entre diferentes navegadores. `createGlobalStyle` é uma funcionalidade do Styled Components que permite definir estilos globais.

- **Exemplo de uso:**

  ```jsx
  import { createGlobalStyle } from "styled-components";

  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `;
  ```

### Propriedades Dinâmicas e Styled Components

Você pode passar propriedades para seus componentes estilizados para alterar seus estilos de maneira dinâmica com base nessas propriedades.

- **Exemplo:**
  ```jsx
  const Botao = styled.button`
    background-color: ${(props) => (props.primary ? "navy" : "white")};
    color: ${(props) => (props.primary ? "white" : "navy")};
  `;
  ```

### Importação de Fontes

Para usar fontes personalizadas em sua aplicação, você pode definir `@font-face` no seu estilo global ou diretamente dentro de componentes estilizados.

- **Exemplo com `createGlobalStyle`:**

  ```jsx
  import { createGlobalStyle } from "styled-components";
  import GandhiSansRegular from "./fontes/GandhiSans-Regular.otf";
  import GandhiSansBold from "./fontes/GandhiSans-Bold.otf";

  const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GandhiSansRegular';
        src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), url(${GandhiSansRegular});
    }
  
    @font-face {
        font-family: 'GandhiSansBold';
        src: local('Gandhi Sans Bold'), local('GandhiSansBold'), url(${GandhiSansBold});
    }
  
    body {
      font-family: GandhiSansRegular, sans-serif;
    }
  `;
  ```

### Uso de Modais com `<dialog>`

O elemento `<dialog>` permite criar diálogos modais ou não modais (caixas de diálogo), que podem ser mostrados ou escondidos conforme necessário. A visibilidade pode ser controlada via JavaScript.

- **Exemplo de um componente Modal:**
  ```jsx
  const Modal = ({ isOpen, onClose, children }) => {
    return (
      <dialog open={isOpen}>
        {children}
        <button onClick={onClose}>Fechar</button>
      </dialog>
    );
  };
  ```

### Prop Drilling

"Prop drilling" refere-se à prática de passar dados de um componente para outro através da árvore de componentes por meio de props. Isso pode se tornar complicado em aplicações maiores, e soluções como Context API ou bibliotecas de gerenciamento de estado podem ajudar a evitar esse problema.

### Tópicos extras:

### Dupla Negação (!!): Conversão para Booleano

No JavaScript, a dupla negação `!!` é uma técnica comum para converter um valor para um booleano. Isso é especialmente útil em cenários onde você precisa garantir um valor verdadeiro (`true`) ou falso (`false`) baseado na presença ou ausência de um valor (por exemplo, para decidir se um componente deve ser exibido).

- **Como funciona:**
  - A primeira negação (`!`) converte o valor para booleano e inverte seu valor lógico. Por exemplo, um objeto (que é considerado "truthy" ou verdadeiro em contextos booleanos) é convertido para `false`, e `null` (considerado "falsy" ou falso) é convertido para `true`.
  - A segunda negação inverte novamente o valor lógico, retornando ao estado booleano original do valor, mas agora explicitamente como `true` ou `false`.
- **Exemplo prático:**
  Se você tem um componente Modal que deve ser aberto com base na presença de uma imagem (um objeto), você pode usar a dupla negação para controlar a propriedade `open` do modal.

  ```jsx
  const ModalZoom = ({ foto }) => {
    return (
      <dialog open={!!foto}>
        <img src={foto} alt="Ampliação da imagem" />
        {/* Outros elementos do modal */}
      </dialog>
    );
  };
  ```

Neste caso, se `foto` for um objeto (indicando a presença de uma imagem), `!!foto` será `true`, abrindo o modal. Se `foto` for `null` ou `undefined`, `!!foto` será `false`, mantendo o modal fechado.

### React Fragment: Importância e Utilização

O `React.Fragment` é um recurso do React para agrupar uma lista de filhos sem adicionar nós extras ao DOM. Isso é particularmente útil para envolver múltiplos elementos que precisam ser retornados por um componente sem introduzir um elemento pai adicional, como uma `<div>`, o que pode afetar a estilização e o layout.

- **Por que é importante:**

  - **Semântica e Estrutura do DOM:** Em muitos casos, envolver elementos em uma `<div>` adicional apenas para satisfazer as regras do React pode ser semanticamente incorreto e afetar negativamente a estrutura do DOM, especialmente em layouts delicados.
  - **Performance:** Embora o impacto seja geralmente mínimo, evitar elementos extras no DOM pode contribuir para uma árvore DOM mais enxuta e uma melhor performance.

- **Exemplo de uso:**
  Quando você retorna múltiplos elementos de um componente sem querer adicionar um elemento pai ao DOM:

  ```jsx
  function MeuComponente() {
    return (
      <React.Fragment>
        <ComponenteA />
        <ComponenteB />
        <ComponenteC />
      </React.Fragment>
    );
  }
  ```

Você também pode usar a sintaxe curta para `React.Fragment`, que são apenas tags vazias `<>` e `</>`:

```jsx
function MeuComponente() {
  return (
    <>
      <ComponenteA />
      <ComponenteB />
      <ComponenteC />
    </>
  );
}
```

A escolha entre `React.Fragment` e a sintaxe curta depende da necessidade de adicionar chaves (`key`) aos elementos dentro do fragmento (o que só é possível com `React.Fragment`) e da preferência pessoal ou convenções do projeto.

### Resumo das Aulas

1. **Aula 1:** Início com Vite, styled-components, gradiente de fundo, normalização do CSS.
2. **Aula 2:** Cabeçalho, barra lateral, listas com imagens e textos, importação de fontes.
3. **Aula 3:** Layout desktop, galeria de fotos com Flexbox, trabalho com tags dinâmicas, importação de fotos.
4. **Aula 4:** Criação de modal, eventos de seleção, posicionamento e opacidade, estado para elemento selecionado.
5. **Aula 5:** Correção de bugs, implementação de funcionalidades de zoom e favoritos.
