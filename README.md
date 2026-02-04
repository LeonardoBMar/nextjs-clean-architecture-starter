# Next.js Clean Architecture Starter

Este é um template básico focado em **boas práticas**, organização de código e escalabilidade, utilizando as tecnologias mais recentes do ecossistema React.

## 🚀 Tecnologias

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Architecture:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 📂 Estrutura do Projeto

A estrutura foi pensada para separar responsabilidades e facilitar a manutenção:

```bash
├── app/          # Rotas e Páginas (App Router)
├── components/   # Componentes reutilizáveis de UI
├── services/     # Lógica de negócios e chamadas à API
├── types/        # Definições de Tipos TypeScript compartilhadas
├── lib/          # Utilitários e configurações globais
└── public/       # Arquivos estáticos
```

### Principais Conceitos

1.  **Services Pattern:** Toda a comunicação externa (APIs) é centralizada na pasta `services`, evitando chamadas `fetch` soltas dentro dos componentes.
2.  **Server Components:** Prioridade para renderização no servidor para melhor performance e SEO.
3.  **Strict Typing:** Uso intensivo de interfaces e tipos para garantir segurança no código.
4.  **UI Components:** Biblioteca de componentes reutilizáveis em `components/ui`, seguindo padrões acessíveis e consistentes (inspirado em Radix/Shadcn).

### Componentes Disponíveis

- **Button:** Com variantes (primary, destructive, outline, ghost) e suporte a loading.
- **Input:** Input estilizado com estados de erro.
- **Card:** Primitivos para construção de cards (Header, Title, Content, Footer).
- **Skeleton:** Loading placeholders animados.
- **Utils (lib/utils.ts):** Função `cn` para merge seguro de classes Tailwind.

## 🛠️ Como Rodar

1.  Clone o repositório:
    ```bash
    git clone https://github.com/LeonardoBMar/nextjs-clean-architecture-starter.git
    ```

2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn
    # ou
    pnpm install
    ```

3.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador.
