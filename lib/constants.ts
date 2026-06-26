import {
  SearchCheck,
  Workflow,
  ScanSearch,
  Map,
  LayoutDashboard,
  Layers,
  Wrench,
  ClipboardList,
  GraduationCap,
} from 'lucide-react'

export const SERVICES = [
  {
    id: 'ai-audit',
    title: 'AI Opportunity Audit',
    description:
      'A deeper review for organizations that want to understand where AI best fits before investing in implementation.',
    icon: ClipboardList,
    longDescription:
      'We evaluate workflows, systems, data readiness, business priorities, and operational constraints to identify practical AI, automation, reporting, and process improvement opportunities.',
    highlights: [
      'Workflow, systems, and data readiness evaluation',
      'Practical AI, automation, reporting, and process improvement opportunities',
      'Grounded roadmap before implementation investment',
    ],
    bestFor: [
      'Organizations unsure where to start',
      'Teams considering AI investment',
      'Leaders comparing multiple possible use cases',
      'Businesses that want a grounded roadmap before implementation',
    ],
  },
  {
    id: 'ai-education',
    title: 'AI Education & Enablement',
    description: 'Practical AI education for business leaders and teams.',
    icon: GraduationCap,
    longDescription:
      'We help organizations understand what AI can do, where it applies, how to identify useful opportunities, and how to avoid common mistakes.',
    highlights: [
      'What AI can and cannot do in your context',
      'How to identify practical use cases without overcomplicating the process',
      'How teams can safely and effectively use AI tools',
    ],
    bestFor: [
      'Leadership teams exploring AI',
      'Businesses wanting to train employees',
      'Teams unsure how to apply AI to daily work',
      'Organizations that need practical, non-technical AI education',
    ],
  },
  {
    id: 'assessment',
    title: 'Business & Workflow Assessment',
    description:
      'Evaluate operations, workflows, tools, and data to identify inefficiencies.',
    icon: SearchCheck,
    longDescription:
      'We map how work actually happens — systems, handoffs, approvals, and information flows — so recommendations are grounded in reality rather than slides.',
    highlights: [
      'Workflow and stakeholder interviews with operational metrics',
      'Systems inventory, integration points, and constraint analysis',
      'Prioritized inefficiencies with effort–impact framing',
    ],
  },
  {
    id: 'improvement',
    title: 'Process Improvement & Operational Design',
    description:
      'Fix broken or inefficient processes before recommending technology.',
    icon: Workflow,
    longDescription:
      'Technology amplifies process quality: strong processes get stronger; weak processes fail faster. We redesign workflows for clarity, accountability, and throughput.',
    highlights: [
      'Standard operating models with measurable cycle-time targets',
      'Controls and exception paths that reduce rework',
      'Change readiness checkpoints before any automation spend',
    ],
  },
  {
    id: 'discovery',
    title: 'AI Opportunity Discovery',
    description:
      'Identify where AI creates value — and where it should not be used.',
    icon: ScanSearch,
    longDescription:
      'We separate viable AI use cases from organizational theater: fit to data, risk, maintenance burden, and expected ROI — including explicit “do not automate” recommendations.',
    highlights: [
      'Use-case scoring tied to business KPIs and governance constraints',
      'Explicit trade-offs between rules-based automation and ML approaches',
      'Executive-ready findings your leadership team can defend',
    ],
  },
  {
    id: 'roadmap',
    title: 'AI Readiness Roadmap',
    description:
      'Prepare the business, data, and team for successful AI adoption.',
    icon: Map,
    longDescription:
      'A phased plan covering data foundations, roles, operating cadence, and evaluation metrics — sized to your capacity so adoption is sustainable.',
    highlights: [
      'Phased milestones with owners, dependencies, and decision gates',
      'Data quality and access prerequisites spelled out plainly',
      'Training and operating model changes embedded in the plan',
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Systems Implementation',
    description:
      'Build workflows, dashboards, and systems that reduce manual work.',
    icon: LayoutDashboard,
    longDescription:
      'We implement practical orchestration, integrations, and reporting so teams spend less time reconciling and more time deciding — without unnecessary complexity.',
    highlights: [
      'Integration patterns chosen for maintainability and observability',
      'Dashboards aligned to leadership decisions — not vanity charts',
      'Runbooks, monitoring, and handover so teams can operate confidently',
    ],
  },
  {
    id: 'implementation',
    title: 'AI Implementation',
    description:
      'Implement AI solutions only where they create measurable value.',
    icon: Layers,
    longDescription:
      'When AI is the right tool, we deliver models and applications with clear evaluation, guardrails, and ownership — focused on measured outcomes, not demos.',
    highlights: [
      'Evaluation harnesses and production monitoring suited to the risk profile',
      'Human-in-the-loop designs where judgment still matters',
      'Documentation that auditors, IT, and operators can actually use',
    ],
  },
  {
    id: 'rescue',
    title: 'AI Rescue & Rework',
    description:
      'Fix AI solutions that were poorly implemented or not delivering results.',
    icon: Wrench,
    longDescription:
      'We diagnose failure modes — misaligned objectives, data gaps, brittle integrations, or adoption issues — and rework delivery plans so investments produce business impact.',
    highlights: [
      'Honest assessment of what should be retired versus rebuilt',
      'Recovery roadmap with near-term stabilization and longer-term correction',
      'Governance and ownership changes that prevent repeat failures',
    ],
  },
]

export const POSITIONING = {
  headline: 'Business First. AI Second.',
  paragraphs: [
    'We do not force AI into every problem.',
    'Some business problems need AI.',
    'Some need automation.',
    'Some need better reporting.',
    'Some need process improvement.',
    'Some need education before implementation.',
    'Acadine helps organizations determine the right path before investing in the wrong solution.',
  ],
}

export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Diagnose',
    description: 'Understand workflows, data, and problems',
  },
  {
    number: 2,
    title: 'Design',
    description: 'Define the right solutions',
  },
  {
    number: 3,
    title: 'Implement',
    description: 'Build and deploy what works',
  },
]

export const INDUSTRIES = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'Operational clarity where accuracy, compliance, and patient throughput intersect.',
    painPoints: [
      'Administrative burden competing with clinical priorities',
      'Fragmented patient, device, operational, or reporting data',
      'Manual reporting and documentation workflows',
      'Scheduling inefficiencies',
      'Compliance and audit preparation demands',
    ],
    engagementAreas: [
      'Operational workflow review',
      'Reporting and dashboard improvement',
      'AI-readiness review',
      'Compliance documentation support',
      'Process automation',
      'Internal knowledge management',
      'Scheduling and throughput optimization',
    ],
    startingPoints: [
      'Executive dashboards',
      'Scheduling optimization',
      'Documentation workflow improvement',
      'Compliance support',
      'Operational reporting automation',
    ],
    cta: 'Explore Healthcare Opportunities',
  },
  {
    id: 'finance',
    title: 'Finance',
    description:
      'Controls-first modernization for reporting speed, accuracy, and operational resilience.',
    painPoints: [
      'Manual reconciliation',
      'Exception handling',
      'Heavy compliance reporting cycles',
      'Spreadsheet-driven reporting',
      'Limited visibility across financial data',
    ],
    engagementAreas: [
      'Financial reporting automation',
      'AI audit for finance workflows',
      'Exception tracking',
      'Forecasting support',
      'Compliance documentation',
      'Contract or document review support',
      'Executive financial dashboards',
    ],
    startingPoints: [
      'Budget forecasting',
      'Invoice review workflows',
      'Financial reporting automation',
      'Cash-flow visibility',
      'Contract analysis support',
    ],
    cta: 'Explore Finance Opportunities',
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description:
      'End-to-end visibility and disciplined execution across the network.',
    painPoints: [
      'Planning delays',
      'Exception-driven firefighting',
      'Incomplete shipment or inventory signals',
      'Manual coordination',
      'Limited real-time operational visibility',
    ],
    engagementAreas: [
      'Workflow automation',
      'Shipment visibility',
      'Inventory forecasting',
      'Exception reporting',
      'Route or schedule support',
      'Operational dashboarding',
      'Process improvement',
    ],
    startingPoints: [
      'Exception tracking dashboard',
      'Inventory forecasting',
      'Operational reporting',
      'Route planning support',
      'Workflow automation',
    ],
    cta: 'Explore Logistics Opportunities',
  },
  {
    id: 'operations',
    title: 'Operations',
    description:
      'Productivity, quality, and throughput improvements that scale.',
    painPoints: [
      'Manual coordination across teams, shifts, or sites',
      'Inconsistent quality checks',
      'Rework',
      'Process variation',
      'Limited visibility into performance',
    ],
    engagementAreas: [
      'Business process improvement',
      'Workflow automation',
      'SOP development',
      'Quality reporting',
      'Resource planning',
      'Operational dashboards',
      'AI education for operational leaders',
    ],
    startingPoints: [
      'Process mapping',
      'KPI dashboards',
      'Workflow automation',
      'Quality reporting',
      'SOP and training support',
    ],
    cta: 'Explore Operations Opportunities',
  },
  {
    id: 'support',
    title: 'Customer Support',
    description:
      'Faster resolution with consistent quality and sustainable staffing models.',
    painPoints: [
      'Ticket volume exceeding capacity',
      'Inconsistent responses across channels',
      'Slow response times',
      'Knowledge gaps',
      'Difficulty identifying recurring issues',
    ],
    engagementAreas: [
      'Customer support automation',
      'FAQ automation',
      'Knowledge base development',
      'Ticket routing',
      'Customer service AI assistants',
      'Service trend reporting',
      'Response drafting support',
    ],
    startingPoints: [
      'AI support assistant',
      'FAQ automation',
      'Ticket classification',
      'Knowledge base search',
      'Customer feedback analysis',
    ],
    cta: 'Explore Customer Support Opportunities',
  },
  {
    id: 'professional',
    title: 'Professional Services',
    description:
      'Delivery discipline where utilization, margin, and client outcomes stay aligned.',
    painPoints: [
      'Forecasting gaps across pipeline and staffing',
      'Project leakage',
      'Scope management issues',
      'Manual client reporting',
      'Knowledge trapped across documents and teams',
    ],
    engagementAreas: [
      'Proposal development',
      'Client reporting',
      'Knowledge management',
      'Forecasting support',
      'Project tracking',
      'Internal AI assistants',
      'AI education for teams',
    ],
    startingPoints: [
      'Proposal generation',
      'Project reporting automation',
      'Client update summaries',
      'Internal knowledge assistant',
      'Resource planning dashboards',
    ],
    cta: 'Explore Professional Services Opportunities',
  },
]

export const COMMON_PROBLEMS = [
  {
    id: 'misalignment',
    title: 'Business–Technology Misalignment',
    description:
      'Initiatives launched without a crisp operational problem statement or measurable owner.',
    solution:
      'Re-anchor scope to workflows and KPIs; retire features that do not map to outcomes.',
  },
  {
    id: 'data-quality',
    title: 'Data Readiness Gaps',
    description:
      'Fragmented sources, weak definitions, and unclear ownership undermine reliability.',
    solution:
      'Establish definitions, access patterns, and quality checks before scaling automation.',
  },
  {
    id: 'adoption',
    title: 'Adoption and Change Risk',
    description:
      'Teams bypass tools when workflows are harder than the old way.',
    solution:
      'Redesign incentives, training, and support so new operating habits stick.',
  },
  {
    id: 'scalability',
    title: 'Operational Fragility',
    description:
      'Pilot success that breaks under production volume, exceptions, or audits.',
    solution:
      'Harden integrations, monitoring, and governance for steady-state operations.',
  },
]

export type UseCasePreview = 'reporting' | 'workflow' | 'customer' | 'data'

export const USE_CASES: {
  title: string
  description: string
  preview: UseCasePreview
}[] = [
  {
    title: 'Reporting automation',
    description:
      'Close cycles accelerate when recurring packs reconcile automatically and exceptions surface early.',
    preview: 'reporting',
  },
  {
    title: 'Workflow improvement',
    description:
      'Approvals, routing, and handoffs become traceable — reducing cycle time and rework.',
    preview: 'workflow',
  },
  {
    title: 'Customer processes',
    description:
      'Front-office journeys tighten with consistent policies and measurable service standards.',
    preview: 'customer',
  },
  {
    title: 'Data insights',
    description:
      'Leaders move from static spreadsheets to governed metrics that teams trust enough to act on.',
    preview: 'data',
  },
]
