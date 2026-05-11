import {
  SearchCheck,
  Workflow,
  ScanSearch,
  Map,
  LayoutDashboard,
  Layers,
  Wrench,
} from 'lucide-react'

export const SERVICES = [
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
      'Administrative load competing with clinical time',
      'Fragmented patient and operational data',
      'Scheduling and capacity constraints',
      'Documentation overhead across care settings',
    ],
    improvements: [
      'Workflow automation for repeatable administrative tasks',
      'Operational dashboards with accountable metrics',
      'Triage and routing improvements grounded in policy',
      'Measured pilots before broad ML deployment',
    ],
  },
  {
    id: 'finance',
    title: 'Finance',
    description:
      'Controls-first modernization for reporting speed and operational resilience.',
    painPoints: [
      'Manual reconciliation and exception handling',
      'Heavy compliance reporting cycles',
      'Limited end-to-end visibility across systems',
      'Fragile spreadsheet-driven processes',
    ],
    improvements: [
      'Structured workflows with audit trails and approvals',
      'Automation where rules are stable; analytics where variance matters',
      'Executive reporting packs that reconcile to source systems',
      'Monitoring for operational and model risk where applicable',
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description:
      'End-to-end visibility and disciplined execution across the network.',
    painPoints: [
      'Planning latency and exception-driven firefighting',
      'Incomplete shipment or inventory signals',
      'Cost pressure without transparent trade-offs',
      'Tool sprawl across carriers and partners',
    ],
    improvements: [
      'Integrated operational dashboards and exception workflows',
      'Forecasting and planning improvements with clear assumptions',
      'Automation for repetitive coordination tasks',
      'Measurement frameworks tied to service levels and margin',
    ],
  },
  {
    id: 'operations',
    title: 'Operations',
    description:
      'Productivity, quality, and throughput improvements that scale.',
    painPoints: [
      'Manual coordination across shifts and sites',
      'Inconsistent quality checks and rework',
      'Inventory and production inefficiencies',
      'Limited standard work and training reinforcement',
    ],
    improvements: [
      'Standard work digitization with performance visibility',
      'Quality workflows with traceability and root-cause habits',
      'Automation for repetitive measurement and scheduling tasks',
      'Continuous improvement cadence leadership can run monthly',
    ],
  },
  {
    id: 'support',
    title: 'Customer Support',
    description:
      'Faster resolution with consistent quality and sustainable staffing models.',
    painPoints: [
      'Ticket volume exceeding capacity planning',
      'Inconsistent responses across channels',
      'Knowledge scattered across tools',
      'Agent burnout from repetitive inquiries',
    ],
    improvements: [
      'Routing and prioritization tied to customer outcomes',
      'Knowledge workflows that stay current',
      'Automation where policies are clear; assistance where judgment matters',
      'Metrics that reflect resolution quality — not just handle time',
    ],
  },
  {
    id: 'professional',
    title: 'Professional Services',
    description:
      'Delivery discipline: utilization, margin, and client outcomes aligned.',
    painPoints: [
      'Forecasting gaps across pipeline and staffing',
      'Project leakage from scope and change management',
      'Knowledge silos between teams',
      'Billing and time-entry friction',
    ],
    improvements: [
      'Operating cadence for staffing and delivery risk',
      'Structured templates for proposals and delivery artifacts',
      'Workflow automation for routine reporting and scheduling tasks',
      'Dashboards that tie delivery metrics to financial outcomes',
    ],
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
