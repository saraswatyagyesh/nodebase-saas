# Nodebase SaaS

Nodebase is a powerful, visual node-based workflow automation platform (similar to n8n, Make, or Zapier). It allows users to build, manage, and execute automated workflows by connecting triggers, AI models, and external APIs on an intuitive drag-and-drop canvas.

## System Architecture

The architecture and core execution data flows have been mapped out to ensure a highly scalable and decoupled backend. 

### Overall System Design
![Overall System Design](/public/backend/Overall_system_design.png)

### Core Execution Data Flow
![Core Execution Data Flow](/public/backend/Core_execution_data_flow.png)

## Third-Party Services & Integrations

Nodebase leverages a modern and robust tech stack relying on the following key services:
- **Better Auth:** For secure user authentication, session management, and OAuth integrations.
- **Inngest:** The event-driven background job runner that powers our workflow execution engine. It handles retries, step functions, and asynchronous processing.
- **tRPC:** Provides end-to-end type safety between our Next.js frontend and the backend API, eliminating the need for manual API typing.
- **Vercel AI SDK:** Abstracts and unifies interactions with multiple LLM providers (OpenAI, Gemini, Anthropic) within our specific node executors.
- **Polar:** Handles monetization, SaaS subscription tiers, and billing.
- **Prisma & PostgreSQL:** Our ORM and primary relational database for state persistence.
- **React Flow:** The interactive library powering the visual drag-and-drop node canvas.

<!-- ## Core Computer Science Concepts (Backend Engineering)

Building a node-based execution engine requires leveraging several core backend engineering and computer science concepts:

1. **Graph Theory (Directed Acyclic Graphs - DAGs):** Workflows are fundamentally directed graphs. We represent nodes and their dependencies (connections) as a graph structure to determine the flow of data.
2. **Topological Sorting:** Before executing a workflow, the engine performs a topological sort on the graph. This algorithm determines the exact sequential order in which nodes must be executed so that every node's inputs (dependencies) are resolved before it runs.
3. **Event-Driven Architecture:** The execution engine is heavily decoupled from the UI. User actions or webhooks emit events (via Inngest), which are processed asynchronously by background workers.
4. **Design Patterns (Strategy/Registry Pattern):** We utilize a Registry pattern (`executorRegistry`) to dynamically map node types to their specific executor functions. This decouples the core execution loop from the specific implementation details of each integration.
5. **Idempotency & Step Functions:** Workflow executions must be resilient. By using step-based execution (via Inngest), the engine ensures that if a network request fails midway, it can safely retry from that specific step without re-executing previous nodes. -->

## Local Development Setup

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nodebase-saas
   ```

2. **Install Dependencies:**
   Make sure you have Node.js and `npm` installed.
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Configure your `.env` file with the required keys (Database URL, Better Auth secret, AI API keys, Inngest Key).

4. **Database Setup:**
   Run Prisma migrations to set up your PostgreSQL database schema.
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start the Development Servers:**
   This project uses `mprocs` to run Next.js and the Inngest dev server concurrently.
   ```bash
   npm run dev:all
   ```
   *Alternatively, run them separately:*
   - Next.js: `npm run dev`
   - Inngest Server: `npm run inngest:dev`

6. **Open the Application:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.
