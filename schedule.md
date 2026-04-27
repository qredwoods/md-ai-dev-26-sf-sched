# AI Dev 26 x SF — Schedule

_Scraped from https://ai-dev.deeplearning.ai/ on 2026-04-27T04:37:24.600Z_


## April 28-29, 2026


## Day 1 — April 28

**7:00 AM - 9:00 AM**  
Door Open / Check-in / Breakfast


**9:00 AM - 9:10 AM**  
Opening Remarks
_Jonathan Heyne (DeepLearning.AI)_


**9:10 AM - 9:25 AM**  
Impact of AI on Software
_Anush Elangovan (AMD)_

When software becomes tokens, the advantage shifts to execution velocity. Anush Elangovan, VP of Software at AMD, makes the case that the engineer's role is shifting from writing code to steering intent — and shows what that looks like at the infrastructure layer. He introduces a suite of open-source ROCm agentic AI projects that help developers generate optimized GPU kernels, run code across hardware targets, and eliminate inference bottlenecks — showing how agentic AI compounds speed at the GPU level.


**9:25 AM - 9:40 AM**  
Keynote: The Sorcerer's Apprentice Problem: Why Agent Safety Lives Outside the Agent
_Marc Brooker (AWS)_

Agents are valuable precisely because they're creative, persistent, and adaptive. But that's also what makes them dangerous. The same flexibility that lets an agent handle unexpected edge cases lets it route around the guardrails we embed inside it. Prompt-based safety controls pit an agent's constraints against its core purpose, and the agent is designed to win. In this talk, Marc Brooker draws on two decades of building safety-critical systems at AWS to argue that agent safety is fundamentally an architecture problem, not an alignment problem. The solution isn't a smarter agent, it's a dumber box. By placing agents inside secure execution environments with a single, policy-controlled gateway to the outside world, we can enforce deterministic constraints that hold regardless of what the agent "thinks." Using policy languages like Cedar, teams can write rules — "a refund must not exceed the original purchase price" — that are mathematically verified, not probabilistically hoped for. As models grow more capable and agents take on longer-running, higher-stakes tasks, this matters more, not less. The answer isn't to stop summoning, it's to build a better box.


**10:35 AM - 10:50 AM**  
Engineering the Context Layer: Vector Databases Across Cloud, Edge, and On-Prem AI
_Emma McGrattan (Actian)_

Artificial intelligence is entering its production era, and a major architectural shift is underway. The first generation of AI assumed centralized cloud environments. But real-world deployments reveal a different reality: AI systems must increasingly operate across distributed environments. Data sovereignty regulations limit where data can move. Latency-sensitive applications require responses in milliseconds. And enterprise data already spans cloud platforms, on-prem systems, and operational environments at the edge. In this keynote, Emma McGrattan, CTO of Actian, explores how this shift toward distributed AI is changing the role of vector databases. Rather than operating as centralized services, vector databases are increasingly deployed across hybrid environments to support real-world AI applications. Through examples drawn from production AI systems, the session highlights how deployment topology — cloud, on-prem, or edge — is becoming a critical design decision for modern AI architectures.


**9:40 AM - 10:35 AM**  
Panel Discussion: Future of Software Engineering
_Michele Catasta (Replit), Dan Maloney (LandingAI), Richmond Alake (Oracle), Joe Reis (Practical Data Media), Marina Mogilko (Silicon Valley Girl, Moderator)_


**10:50 AM - 11:05 AM**  
Keynote (Google)


**11:05 AM - 11:25 AM**  
Keynote
_Andrew Ng (DeepLearning.AI)_


**11:25 AM - 11:30 AM**  
Game 🎲


**11:30 AM - 12:00 PM**  
Fireside Chat
_Marc Manara (OpenAI)_


**12:00 PM - 1:00 PM**  
Lunch



### Breakout Sessions (1:00 PM - 3:15 PM)

**1:00 PM - 2:05 PM** · 65 min · _Stage 1_  
Building Personal AI Agents with Open-Source Models
_Eda Zhou (AMD), Mahdi Ghodsi (AMD)_

Build your own personal AI agent, reduce API costs, and gain full control by hosting your own open-weight models on AMD GPUs. In this workshop, you'll discover the core concepts behind modern agentic frameworks like OpenClaw and learn how to assemble a tool-using agent that's customizable, private, and ready for real workflows.

**1:00 PM - 1:40 PM** · 40 min · _Stage 2_  
The Observability Flywheel: From Traces to Continuously Improving Agents
_Harrison Chase (LangChain)_

Every agent improvement cycle starts with tracing: until you can see what your agent is doing, you can't improve it. This talk walks through a practical flywheel for enriching traces with automated signals and human feedback, then using that data to build offline eval sets that become your permanent regression baseline. Make a change, run the suite, confirm improvement, and repeat.

**1:00 PM - 1:40 PM** · 40 min · _Stage 3_  
"The AI Said So?" How to Build Auditable AI Agents Using Context Graphs
_Nyah Macklin (Neo4j)_

In production, AI agents are making real decisions that impact real people's lives, and when those decisions get challenged by customers, compliance teams, auditors, or courts, you need answers. This session will teach the best techniques to build AI agents that will pass an audit, using context graphs. Instead of black-box reasoning, you get complete decision traceability showing what information the agent considered, which factors influenced its choice, what alternatives it evaluated, and exactly how it reached its conclusion.


**2:10 PM - 3:15 PM** · 65 min · _Stage 1_  
Hands-On Agent Context and Memory Engineering with Oracle AI Database
_Eli Schilling (Oracle)_

AI agents that adapt and perform reliably over time depend on two critical disciplines: Memory Engineering and Context Engineering. This session explores both from the ground up, covering the most common memory types in AI agents today (Conversational, Knowledge Base, Workflow, Entity, and Summary) as well as the context techniques that keep agents effective over long-horizon tasks. Attendees leave with a working mental model of both disciplines and hands-on exposure to building a memory-first agent harness using Oracle AI Database, LangChain, and Tavily.

**1:45 PM - 2:25 PM** · 40 min · _Stage 2_  
Optimize Your Agent's GPA with Coding Agents
_Anupam Datta (Snowflake)_

In this talk, we will share how coding agents help developers build high quality agents faster. A key insight from building agents in production is that high quality agents operate with their goals, plans and actions aligned. We introduce the Agent Goal-Plan-Action (Agent GPA) framework to capture this insight, which achieved state-of-the-art benchmarks on TRAIL/GAIA with 95% error coverage and 86% error localization. This framework goes beyond examining the agent's final results to assessing the agent's process: Was the goal achieved efficiently? Did the plan make sense? Were the right tools used? Did the agent follow through? Without visibility into these steps, teams risk deploying agents that look reliable but create hidden costs in production. Inaccuracies can waste compute, inflate latency and lead to the wrong business decisions, all of which erode trust at scale. This approach to agent evaluation enables effective and fast optimization with coding agents. We will also show how to use coding agents to automate the process of measuring and improving an Agent's GPA by using agent optimization skills that take advantage of the GPA evaluation framework. By the end, attendees will be able to use Cortex Code and the GPA framework to identify common agent failures, improve their agent and prepare it for production.

**1:45 PM - 2:25 PM** · 40 min · _Stage 3_  
Agentic Search: Everything You Need to Know
_Jeff Huber (Chroma)_

Agentic search is (probably) the solution to all of your context problems and agent reliability issues. Get a crash-course in agentic search in a high-speed, information-packed session.


**2:30 PM - 2:50 PM** · 20 min · _Stage 2_  
Red Teaming LLM Applications: Systematically Finding Failures in Agents, RAG, and Chatbots
_Jean-Marie John-Mathews (Giskard)_

As LLM applications move into production, traditional evaluation approaches — benchmarks, manual testing, and static datasets — fail to capture real-world failure modes. In practice, AI engineers must deal with prompt injections, data exfiltration, unsafe outputs, hallucinations, and agent misbehavior. In this talk, we present a practical framework for red teaming LLM applications. We will show how to automatically generate adversarial prompts, use LLM-as-a-judge to detect failures, and evaluate complex systems and multi-step agents. The session will include concrete examples, evaluation pipelines, and lessons learned from testing production AI systems deployed in regulated industries. Attendees will leave with practical methods and tooling patterns to systematically uncover vulnerabilities before deploying their AI systems.

**2:30 PM - 3:10 PM** · 40 min · _Stage 3_  
Building SRE Agents with the Redis Context Engine
_Aditi Gupta (Redis)_

This talk shows how Redis powers the context engine behind intelligent SRE agents, unifying memory, semantic caching, and real-time decision-making. We'll demonstrate how context-aware systems leverage Redis for ultra-fast retrieval, semantic routing, and adaptive learning to cut through noise and accelerate incident response. Attendees will leave with practical patterns for turning operational data into actionable intelligence with AI-driven automation.


**2:55 PM - 3:15 PM** · 20 min  
Observability Agent to Find & Fix Issues in AI Agents
_Pratik Verma (Okahu AI)_

AI agents fail in prod due to brittle workflows, lack of contextual learning, and inability to improve over time. Pratik will show how to use trace-based testing with coding agents as part of agentic engineering to find and fix issues in AI agents. You'll learn to debug, evaluate and observe AI agents using open source monocle2ai made easy with an observability agent.


**3:15 PM - 3:30 PM**  
Coffee Break



### Breakout Sessions (3:30 PM - 4:55 PM)

**3:30 PM - 4:10 PM** · 40 min · _Stage 1_  
Closing the Care Gap: Building an Agentic Healthcare Copilot with VectorAI DB
_William Imoh (Hackmamba), Charlie Wood (Actian)_

AI agents are emerging as a powerful interface for clinical workflows, but building systems that reliably operate on sensitive patient data requires careful design around privacy, retrieval accuracy, and deployment flexibility. In this workshop, we will build a Care Transition Copilot using IdeaBoxAI and Actian VectorAI DB to demonstrate how agentic AI can assemble patient context, detect risk signals, and generate actionable insights for clinicians supporting patients at home. Attendees will learn how to design Retrieval-Augmented Generation (RAG) architectures and agent workflows that move beyond prototypes to support real-world healthcare decision making.

**3:30 PM - 4:10 PM** · 40 min · _Stage 2_  
Better Agents with Better Data: How Leading AI Teams Ingest Unstructured Data at Scale
_Adit Abraham (Reducto)_

As AI agents become more capable, their performance is increasingly bottlenecked not by model quality but by the quality of data they consume. This talk explores how leading AI teams across startups and Fortune 10 enterprises tackle the challenge of ingesting unstructured data at scale — from complex PDFs and scanned documents to messy real-world files — and shares practical patterns for building more reliable agents through better data pipelines.

**3:30 PM - 4:10 PM** · 40 min · _Stage 3_  
Your Agents Should Be Durable
_Melissa Herrera (Temporal Technologies, Inc)_

Building AI agents is easy — but making them production-ready is hard. AI agents in production face infrastructure failures, API timeouts, and rate limits that demos never show. This talk demonstrates how durable execution transforms fragile agent prototypes into production-ready systems. Through live demos and real-world examples, you'll learn how Temporal's Workflow orchestration handles crash recovery, automatic retries, long-running tasks, and state management — letting you write simple code while getting enterprise-grade reliability for your AI agents.


**4:15 PM - 4:55 PM** · 40 min · _Stage 1_  
What's New and What's Next in AI
_Paige Bailey (Google DeepMind)_

An overview of the latest model releases from Google DeepMind, especially in the multimodal space — everything from generative media to robotics to agent-first IDEs like Antigravity. This demo-heavy session will give every attendee the tools to begin incorporating AI into their daily work.

**4:15 PM - 4:55 PM** · 40 min · _Stage 2_  
File Systems Are the New Primitive for AI Agents
_Carter Rabasa (Box)_

Developers will learn why LLMs are already highly effective at working with file systems — thanks to decades of training on code, operating systems, and file-based workflows — and how to leverage that intuition in agent design. The talk explores how file systems provide a powerful foundation for long-term memory and state, enabling agents to persist, organize, and revisit work far more reliably than prompt-based approaches. It also shows how file systems act as a universal interface for data interoperability and human-in-the-loop collaboration, making them a natural layer for multi-agent and human-agent workflows.

**4:15 PM - 4:55 PM** · 40 min · _Stage 3_  
Herding Cats: The Hidden Challenges of Multi-Agent Autonomy
_Vlad Luzin (Thenvoi)_

This session introduces multi-agent systems (MAS) and traces their evolution — from standalone LLMs handling single tasks, through orchestrated agentic workflows, to fully autonomous distributed networks where agents independently reason, delegate, and collaborate across organizational boundaries. Along this progression, a new class of engineering challenges emerges: reasoning loop control, message ordering, error recovery, and observability when agents communicate faster than humans can follow. We advance a core thesis: the future of communication is AI-to-AI, with natural language as the universal API.



## Day 2 — April 29


### Breakout Sessions (9:00 AM - 11:30 AM)

**9:00 AM - 9:40 AM** · 40 min · _Stage 1_  
3rd Era of Software Development: From Tab Completion to Cloud-Native Agent Factories
_Amrita Venkatraman (Cursor)_

As AI coding tools evolve from autocomplete to autonomous agents, software development itself is being redefined. This talk explores the "third era" of AI software development, where fleets of cloud-based agents collaborate as persistent teammates instead of one-off assistants. We'll trace the shift from keystroke-level Tab completion to synchronous, in-editor agents, and finally to cloud agents that run on dedicated VMs, work in parallel, and return rich artifacts rather than just diffs.

**9:00 AM - 9:40 AM** · 40 min · _Stage 2_  
Autonomous AI Agent in the Wild: What Mission-Critical Deployment Actually Looks Like
_Sanjin Bicanic (Bain & Company), Xun Yang (Bain & Company)_

Deploying autonomous AI into a mission-critical workflow takes far more than a capable model. In this talk, we share how we built and launched a fully autonomous payroll agent in six months, from solution design through shadow testing to live production across 1M+ annual interactions in a system that processes 1 in 10 private US payrolls. Most importantly, we show why lab accuracy is often a false signal, how shadow testing produced far more meaningful real-world learning, and what enterprise deployment actually requires: deep production integrations, robust testing, real-time monitoring, intelligent guardrails, and serious change management.

**9:00 AM - 9:40 AM** · 40 min · _Stage 3_  
The Loop Was Never the Hard Part
_Mike Chambers (AWS)_

Every agent is a while loop. The model takes strings in and produces strings out. We've all written it, debugged it, shipped it. And yet every team building agents is still re-inventing the same session management, truncation logic, tool wiring, and memory plumbing from scratch. The hard part is the harness: session isolation, context management, memory persistence, sandboxed execution, observability. The machinery that makes a model dependable in production. Most of the failures we see in deployed agents (context rot, premature completion, tool bloat) trace back to harness problems, not model problems. This talk covers what a harness actually does, why "harness engineering" suddenly showed up in engineering posts from everyone, and what changes when you stop building harnesses by hand. In live demos, we'll build the same agent three ways: hand-rolled Python, framework-generated, and fully managed through a single API call. Each level shifts the failure modes from infrastructure plumbing to engineering judgment, where the real questions are what context to preserve, when to verify, and how to keep an agent from finishing half the job and calling it done. The harness handles the machinery. You still have to engineer the behavior.


**9:45 AM - 10:25 AM** · 40 min · _Stage 1_  
The Coding Agent Multiverse of Madness
_Ankit Mathur (Databricks)_

In this talk, we'll talk about the governance and security challenges of rolling out coding tools at enterprises and how Databricks rolled out coding tools to its 10,000+ employees, all while balancing governance and security with velocity to enable rapid innovation. We'll talk about our Coding Tool Gateway product, which lets enterprises roll out all coding tools, enabling developers to choose which coding tools they want while offering centralized governance to admins to enable the rollout. Finally, we'll walk through how Databricks used this solution to roll out Claude Code, Codex, and several other coding tools.

**9:45 AM - 10:25 AM** · 40 min · _Stage 2_  
The Hidden Cost of AI Velocity and AI Agents: When More Results in Less
_Barun Singh (Andela), Kennith Jackson (KJ) (Andela)_

AI coding agents have improved productivity while simultaneously putting engineers under pressure to do more, faster. But what's the cost that no one is talking about? Technical debt, 1000 lines of AI-produced code when 200 would do, and teams losing the ability to learn, to make the right call, and to reason as fast as the new systems that AI is creating. Shipping worse code with agents is a choice. We can instead choose to ship code that is better. How can developers evolve to make agentic work for them? Discipline. Self awareness. Don't ship what you don't understand and implement processes and systems to keep a human in the loop in ways that create not just more, but the most optimal product. In this session, Barun Singh, Chief Product and Technology Officer at Andela, home of a 150,000-strong tech talent marketplace, and Kennith Jackson, Andela's SVP, AI Solutions & Operations, will speak to challenges and opportunities facing developers and how they can become agentic engineers to deliver best in class products at pace.

**9:45 AM - 10:05 AM** · 20 min · _Stage 3_  
The "4-Legged" Identity Challenge
_Matthew Xu (Agentic Fabriq)_

As MCP systems scale from local setups to shared infrastructure, developers face new challenges around security, identity, and access control that aren't solved by standard patterns. This talk breaks down common failure modes (like over-permissioned tools and weak auditing) and shows how to implement practical fixes such as least-privilege access, guardrails, and privacy-aware logging. It also covers the "4-legged" identity problem and developer-friendly approaches like token exchange and structured auth flows for production MCP deployments.


**10:30 AM - 11:10 AM** · 40 min · _Stage 1_  
Shipping Agents Safely: Boundaries That Actually Work
_Tushar Jain (Docker)_

Agents can write code, call APIs, install packages, and modify files. If you've built with them, you've already encountered the core challenge: they take real actions on real systems, and the surface area for failure grows with every capability you give them. Prompt guardrails shape intent but they don't enforce it. Once an agent has write access to production infrastructure, you need runtime controls, not just good instructions. In this talk, Tushar Jain draws on production experience to walk through practical patterns for scoping what an agent can touch and for how long, isolating execution so a failure stays contained, managing credentials without over-provisioning access, and building recovery into the loop rather than treating it as an afterthought. You'll leave with a concrete mental model for agent permissions and isolation, and patterns you can apply regardless of which framework or model you're building on.

**10:30 AM - 11:10 AM** · 40 min · _Stage 2_  
From Documents to Agents: Building Production-Grade Agentic Systems with ADE
_David Park (LandingAI)_

Documents are often the true starting point for real-world AI systems. In this talk, we'll explore how Agentic Document Extraction (ADE) serves as a foundational layer within larger agentic architectures — powering context engineering, multimodal pipelines, and orchestration across industries. We'll move beyond demos to share practical lessons from deploying agentic workflows in production.

**10:10 AM - 10:30 AM** · 20 min · _Stage 3_  
The Integration Graph: Context Aware Intelligence
_Jugal Anchalia (Refold AI)_

We replace the fragile human supply chain of enterprise integration (consultants, spreadsheets, tribal connector knowledge) with a closed-loop system where design-time schema intelligence and runtime error resolution compound across every deployment. We present the Integration Graph, a persistent three-layer context architecture (Refold Context, Procedural Context, and Episodic Context) that gives autonomous integration agents stateful memory across 1,000+ enterprise schema environments, achieving 60–70% field mapping reusability, sublinear marginal delivery cost, and timeline compression from months to days across SAP, Oracle, NetSuite, and Dynamics environments.


**10:35 AM - 10:55 AM** · 20 min  
MarcoPolo - Easy, Secure Workspace for AI to Work with Your Data
_Aman Singla (Immersa), Aseem Chandra (Immersa)_

AI assistants like Claude, ChatGPT, and Cursor are transforming how we work, but working with real data remains a challenge. Secure Access: How does AI safely reach your databases, APIs, S3, CRMs, and other systems? Capability: How can it query, transform, and analyze — not just read? Context: Which data matters and how should it be used? MarcoPolo solves this with secure, persistent workspaces where AI can work with your actual data across 50+ systems — without exposing credentials to the model. Build reports, debug issues, or analyze metrics right in conversation.


**11:00 AM - 11:20 AM** · 20 min  
Agents with wallets? Putting 25,000 tools on x402
_Ondra Urban (Apify)_

Every serious agent will eventually need to buy tools, data or resources. Today that means hardcoded API keys, shared credit cards, or looping in a human. x402, Coinbase's open protocol built on HTTP 402, claims to be one of the strongest candidates to fix this. This talk covers what we learned shipping x402 to Apify's 25,000 Actors: why the "exact" payment scheme breaks on usage-based pricing, the refund-based workaround we run in production, why handing an agent your private key is a terrible idea, and how mcpc, the open-source MCP CLI we built, keeps wallets out of LLM context.


**11:30 AM - 1:00 PM**  
Lunch



### Breakout Sessions (1:00 PM - 3:15 PM)

**1:00 PM - 1:40 PM** · 40 min · _Stage 1_  
Vibe Coding Master Class
_Brandon Middleton (Replit)_

This session explores how Replit is enabling users to create apps and businesses without traditional technical training using Agent 4. Accelerate your app creation by working with Agent 4 to code, debug, and deploy. Build web and mobile apps, data tools, or websites, simply by prompting in natural language.

**1:00 PM - 1:20 PM** · 20 min · _Stage 2_  
The Identity Crisis of Browser Agents - Securing Human Identities for Agent Use
_Idan Raman (Anchor Browser)_

As computer-use models become smarter, the bottleneck for their adoption is becoming clear: 20 years of web identity tech must be securely adapted for AI agents. We'll explore how enterprises and builders are solving this challenge.

**1:00 PM - 1:40 PM** · 40 min · _Stage 3_  
Building the Context Engine AI Agents Need
_Brandon Waselnuk (Unblocked)_

Every AI coding tool can generate code. Very few can generate the right code for your organization, because they're missing context. They don't know why your team chose Redis over DynamoDB, what the team decided in a Slack thread from two months ago about the auth migration, or which architectural patterns your principal engineers actually enforce in review. This talk is a practitioner's guide to building a context engine: the reasoning layer that continuously synthesizes organizational knowledge across disparate sources into unified, queryable understanding. I'll walk through the problems you actually have to solve — reasoning across systems that don't agree with each other, searching globally before you can reason, maintaining identity-scoped permissions so every user and agent only sees what they should, and personalizing results based on who's asking and what they're working on. These are the engineering challenges that make naive RAG fall short, drawn from real lessons building this at scale.


**1:45 PM - 2:25 PM** · 40 min · _Stage 1_  
Deploying AI Code Review at Scale: Turning AI Velocity into a Reliable Quality Gate
_David Loker (CodeRabbit)_

AI coding tools have dramatically increased developer velocity, but they haven't eliminated the need for code review. In fact, they've made it more critical than ever. In this session, David Loker, VP of AI at CodeRabbit, shares how engineering organizations can operationalize AI-driven code review as a scalable, production-grade quality gate. Drawing from real-world deployments across thousands of teams, he will walk through the systems and practices required to manage AI-generated code safely and effectively. Attendees will learn how to move beyond prompt engineering into context-rich review systems, implement secure and isolated verification workflows, and build feedback loops that continuously improve model performance. The session will also cover model lifecycle management, observability, and how to measure ROI through meaningful engineering outcomes. Designed for engineering leaders, AI operators, and senior developers, this talk provides a practical blueprint for deploying AI code review in environments where reliability, security, and scale are non-negotiable.

**1:25 PM - 1:45 PM** · 20 min · _Stage 2_  
Fullstack Agents & Generative UI with AG-UI
_Atai Barkai (CopilotKit)_

All UI will be AI. In this talk we will dive into the emerging space of Generative UI, and go over the practical building blocks emerging in the space. Learn about AG-UI, A2UI, MCP Apps and more!

**1:45 PM - 2:25 PM** · 40 min · _Stage 3_  
Edge to Cloud Video Anomaly Detection
_Thierry Damiba (Qdrant)_

This talk shows how to build a real-time video anomaly detection system that works in open-world settings, where the most important events are often the ones you did not explicitly train for. It walks through an edge-to-cloud architecture using Qdrant Edge, Twelve Labs, and NVIDIA Metropolis to detect unusual behavior, search video semantically, and support grounded investigation workflows.


**2:30 PM - 3:10 PM** · 40 min · _Stage 1_  
Can LLMs Generate Enterprise Quality Code?
_Tom Howlett (Sonar)_

We all know how fast it is to create an app with modern AI agents but how do we ensure the code is reliable, maintainable and secure enough to be used by enterprises? In this talk we'll share a benchmark from our testing of 35 (and growing) of the latest and highest performing large language models and show how they compare not just on task completion but on the quality of the code they create. You'll see that models are not the same and that some produce more than 2x the issues of others. Once you understand your model how do you protect yourself from its weaknesses? We'll show how you can integrate AI Agents with deterministic static analysis to ensure enterprise level quality without killing the AI productivity gains.

**1:50 PM - 2:10 PM** · 20 min · _Stage 2_  
Every App Needs a Voice UI. Here's How to Build It.
_Ashwyn Sharma (Vocal Bridge)_

Voice AI today is mostly customer service bots. That's about to change — and the developers in this room will build what comes next. This talk introduces Voice UI as an emerging interface category, explains the technical architecture that makes truly multimodal voice experiences possible, and shows you exactly how to build one live on stage.

**2:30 PM - 2:50 PM** · 20 min · _Stage 3_  
Deterministic Memory: How to Build an AI That Cannot Lie

Andrew K. Davies Harmony8 What if your AI's memory was mathematically verifiable? What if every retrieval was provenance-backed, every result bit-exact and cryptographically reproducible? OnMemory.ai introduces deterministic semantic memory built on E8 lattice quantization, replacing probabilistic vector search with a multi-lane retrieval engine where every answer can be traced to its source. In this session, we'll demonstrate how deterministic memory transforms AI from systems that approximate recall into systems you can trust — because an AI that remembers with mathematical precision is an AI that cannot lie.


**2:15 PM - 2:55 PM** · 40 min · _Stage 2_  
My agent can't read a PDF?
_Jerry Liu (LlamaIndex)_

The future of automating knowledge work depends on AI agents that can reliably read and understand documents — but today's agents struggle with complex layouts, tables, and visual elements. This talk explores why document parsing remains a critical bottleneck for agentic workflows and introduces new open-source innovations to address it, including ParseBench, a benchmark for evaluating document OCR quality for AI agents, and LiteParse, a fast VLM-free parser. It also covers LlamaParse, purpose-built to deliver the best agentic understanding of complex documents at scale.

**2:55 PM - 3:15 PM** · 20 min · _Stage 3_  
Context is the New Insight: Building Agents with Evolving Context for Enterprise Data
_Humayun Irshad (Vectara)_

Data platforms have solved storage and analytics, but they haven't solved context. And context is where agent intelligence actually lives. The difference between an AI agent that reasons well and one that hallucinates or stalls isn't the model — it's the context architecture behind it. Today's agents don't just need access to data; they need structured, permission-scoped context that evolves as workflows progress and reflects how your organization actually thinks and operates. In this session, Rima Al-Sheikh (ML Engineer, Vectara) will walk through a practical approach to context engineering — how to design systems that give agents the right knowledge, at the right scope, for the right role, at the right moment in a workflow. Enterprise data is rarely clean or unified: it lives in siloed systems across teams, locked behind access controls, spread across cloud and on-prem environments, and in some cases governed by compliance requirements that make even internal sharing non-trivial. Getting agents to reason coherently across that landscape isn't a retrieval problem — it's a context design problem. We'll go beyond RAG pipelines and static retrieval to explore what it actually takes to build agents whose context evolves meaningfully across long-running workflows — operating over highly secure datasets without collapsing trust boundaries, leaking information across permission scopes, or losing coherence as tasks grow in complexity. If you're building AI-powered applications and hitting the wall of fragmented, stateless context, this talk will give you a concrete blueprint for turning your existing data landscape — however messy, siloed, or locked down — into something agents can reason over and grow with.


**3:15 PM - 3:30 PM**  
Coffee Break



### Breakout Sessions (3:30 PM - 5:30 PM)

**3:30 PM - 4:10 PM** · 40 min · _Stage 1_  
Code vs. Staff vs. Quality: The Shift to Agentic Engineering
_Paul Everitt (JetBrains)_

More code, fewer staff — the industry is on a bender. But what about quality? Let's discuss the rise of agentic engineering and how old lessons can be adapted to build new professional practices. Join us for an open conversation with humility and humor.

**3:30 PM - 4:10 PM** · 40 min · _Stage 2_  
Flower SuperGrid Agents
_Daniel Beutel (Flower Labs)_

Flower SuperGrid is the industry standard for Federated AI. With SuperGrid Agents, you can now build and run context-rich agents that learn from interactions, access sensitive data and (soon) collaborate with other SuperGrid Agents.

**3:30 PM - 4:00 PM** · 30 min · _Stage 3_  
The Agent Data Stack: Why Every AI Agent Needs Its Own Data Stack
_Luke Kim (Spice AI)_

From centralized to distributed: In the old world, organizations relied on one centralized data and AI platform. In the new world of AI agents, every agent needs its own sandboxed, secure, and modern data stack. In this 20-minute talk with live demo, we explore why this architectural shift is critical and the key patterns required to give agents reliable, real-time data.


**4:15 PM - 4:55 PM** · 40 min · _Stage 1_  
The Next 100 Agents: Building the Agent-Native Office
_Diamond Bishop (Datadog)_

Building your first agent is exciting. Building a platform that can evolve into an office where dozens of teams can safely deploy their own agents is a different beast entirely. This talk will share lessons learned building production agents then turning this into an agent office/platform made to power the next gen enterprise with diverse agent workloads.

**4:15 PM - 4:55 PM** · 40 min · _Stage 2_  
An End to Manual Tinkering: Optimizing Accuracy, Cost, and Latency in Real-World Agents
_Or Dagan (AI21 Labs)_

Most agentic systems rely on hardcoded heuristics to navigate execution decisions (e.g. which models, tools, and test-time compute scaling approaches to use) leading to efficiency leakage across cost, latency and accuracy. AI21 Maestro optimizes agents by learning to predict success, cost and latency probabilities across diverse actions and contexts, and driving runtime orchestration that intelligently navigates the full agentic action space. We will demonstrate how this approach yields state-of-the-art results and pareto frontier on challenging agentic benchmarks, as well as the process required to optimize production agents.

**4:05 PM - 4:35 PM** · 30 min · _Stage 3_  
Why Your AI Agent Forgets What It's Doing (and the 3 Systems That Fix It)
_Tony Loehr (Cline)_

AI coding agents degrade in performance as tasks get longer. If your model is 95% accurate on turn one, it's down to 70% by turn ten — this isn't because the model got dumber, but because the context got noisier. This talk breaks down the three interlocking systems we built at Cline (deep planning, persistent focus chains, and automatic context compression) which let agents maintain coherence across complex, long-horizon tasks, and shows you how to apply the same principles to any agentic system you're building.


**5:00 PM - 5:20 PM** · 20 min · _Stage 1_  
Multi-Model Pipelines: How to Get Better AI Results for Less
_Andrew Filev (Zencoder)_

Learn how decomposing tasks into pipelines and dynamically routing them across models improves quality, reduces cost, and makes AI systems more reliable.

**5:00 PM - 5:20 PM** · 20 min · _Stage 2_  
The Next Era of Local and Open-Source AI - Signals and Catalysts of the Major Shift Underway
_Manos Koukoumidis (Oumi), Stefan Webb (Oumi)_

Most organizations began their GenAI journey with off-the-shelf, black-box models like ChatGPT, but quickly realized that their solution was unreliable to productionize or just expensive and slow to scale up. To gain a strong edge, leading developers turned to building custom AI models — seeking better performance, lower latency, and tighter cost control — but found the process slow, expensive, and dependent on scarce AI expertise. That dynamic is now changing fast as new platforms are democratizing custom AI development, from model evaluation and data synthesis to training and deployment.

**4:40 PM - 5:10 PM** · 30 min · _Stage 3_  
Building Recurring, Governed, and Embedded Enterprise Workflows
_João Moura (CrewAI)_

Modern enterprises don't struggle to experiment with AI — they struggle to operationalize it reliably. In this talk, CrewAI's CEO will outline how leading organizations are moving beyond one-off automations to build recurring, governed, and deeply embedded workflows that drive real business outcomes. Drawing on lessons from production deployments, we'll explore how to design systems that are auditable, scalable, and aligned with enterprise controls — without sacrificing speed.


**5:10 PM - 5:30 PM** · 20 min  
Why Every Agent Needs a Simulation Sandbox?
_Andi Partovi (Veris AI)_

AI agents fail in unpredictable ways that traditional testing can't catch — hallucinations, wrong tool calls, policy violations, and more. Teams only discover these failures after users hit them in production. A simulation sandbox gives you a controlled environment with realistic users, tools, and workflows where you can run hundreds of scenarios against your agent before it ships, catching edge cases and adversarial inputs that would be impossible to test manually. This talk covers why simulation-driven development is becoming essential infrastructure for any team building production AI agents, and how it closes the gap between "works in demos" and "works at scale."


**5:30 PM - 6:30 PM**  
Happy Hour (Proud Sponsor: AMD)


