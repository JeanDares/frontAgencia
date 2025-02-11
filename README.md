## Getting Started

ao fazer o dowload do projeto, seguir os passos a baixo:

```bash
npm install


npm run dev


Open [http://localhost:3000](http://localhost:3000)

```

### Melhorias Propostas para o Projeto Jean Front:

#### Menu Inicial:

- Adicionar uma frase no menu inicial indicando as ações disponíveis para o usuário.

#### Manipulação de Dados:

- Apagar dados e tornar a massa mais realista ✔️

#### Layout:

- Ajustar a tabela para que tenha o mesmo tamanho das outras páginas, utilizando a mesma div de container de formulário como referência. ✔️

#### Estrutura de Dados:

- Refatorar os schemas do zod para evitar repetições de código.

#### Estilo:

- Melhorar o estilo do date-picker para que siga o padrão visual dos outros componentes.

#### Padrões de Valor:

- Definir um valor padrão para os radio buttons.

#### Arquivo de Layout:

- Alterar o arquivo layout.tsx, modificando o título e a descrição.

#### Componentes:

- Analisar os componentes `<Accordion>` de EditForm e RegistrationForm, que apresentam repetição de código.

#### Comportamento do Radio Button:

- Corrigir o problema onde o radio button não está populando ao abrir a página de edição.

#### Integração de Dados:

- Verificar possíveis discrepâncias entre o tipo de dado esperado pelo date picker e o tipo de dado enviado para a API. Pode ser necessário converter strings de datas para objetos Date.

#### Tipagem de Dados:

- Ajustar a tipagem para que, quando não houver valor no campo, ele aguarde uma string vazia ("") em vez de null.
