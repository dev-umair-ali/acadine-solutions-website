import { BarChart3, Zap, SearchCheck, Map, Cpu, Rocket } from 'lucide-react'

// Services offered by Acadine Solutions
export const SERVICES = [
  {
    id: 'assessment',
    title: 'Business & Workflow Assessment',
    description: 'We diagnose your current workflows, data flows, pain points, and opportunities for AI integration.',
    icon: SearchCheck,
    longDescription: 'A comprehensive analysis of your existing business processes, identifying inefficiencies and areas where AI can create value.',
  },
  {
    id: 'improvement',
    title: 'Process Improvement & Operational Design',
    description: 'Design optimized workflows and operational structures that support AI implementation and business growth.',
    icon: BarChart3,
    longDescription: 'Strategic redesign of your business processes to maximize efficiency and prepare for digital transformation.',
  },
  {
    id: 'discovery',
    title: 'AI Opportunity Discovery',
    description: 'Identify specific use cases where AI can deliver measurable business value and competitive advantage.',
    icon: Zap,
    longDescription: 'Deep analysis to uncover high-impact AI applications tailored to your industry and operational context.',
  },
  {
    id: 'roadmap',
    title: 'AI Readiness Roadmap',
    description: 'Create a phased implementation strategy aligned with your business goals, budget, and technical capacity.',
    icon: Map,
    longDescription: 'A structured plan for implementing AI solutions with clear milestones, resource requirements, and expected outcomes.',
  },
  {
    id: 'automation',
    title: 'Automation & Systems Implementation',
    description: 'Build and deploy AI-powered systems that automate workflows and improve decision-making.',
    icon: Cpu,
    longDescription: 'End-to-end implementation of AI solutions including system architecture, integration, and staff training.',
  },
  {
    id: 'implementation',
    title: 'AI Implementation & Optimization',
    description: 'Deploy AI solutions and continuously optimize performance to ensure sustained business value.',
    icon: Rocket,
    longDescription: 'From deployment through ongoing optimization, we ensure your AI systems deliver maximum impact.',
  },
]

// Three-step process
export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Diagnose',
    description: 'We deeply understand your workflows, data landscape, operational challenges, and current systems.',
  },
  {
    number: 2,
    title: 'Design',
    description: 'We design AI solutions and operational improvements specifically tailored to your business context.',
  },
  {
    number: 3,
    title: 'Implement',
    description: 'We build, deploy, and optimize AI systems that drive measurable business results.',
  },
]

// Industries we serve
export const INDUSTRIES = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Improve patient outcomes, optimize operations, and enhance care quality through intelligent systems.',
    painPoints: [
      'Administrative burden overwhelming clinical staff',
      'Fragmented patient data across systems',
      'Inefficient scheduling and resource allocation',
      'Manual documentation consuming provider time',
    ],
    improvements: [
      'AI-assisted diagnosis and clinical decision support',
      'Automated administrative workflows',
      'Predictive analytics for patient outcomes',
      'Optimized staff scheduling and resource planning',
    ],
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Strengthen risk management, automate compliance, and accelerate financial analysis.',
    painPoints: [
      'Manual reconciliation and data entry',
      'Regulatory compliance burden',
      'Slow financial reporting cycles',
      'Limited real-time visibility into operations',
    ],
    improvements: [
      'Automated transaction processing and reconciliation',
      'AI-powered risk detection and fraud prevention',
      'Real-time financial dashboards',
      'Intelligent forecasting and planning',
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description: 'Optimize supply chains, reduce costs, and improve delivery performance.',
    painPoints: [
      'Inefficient route planning and fleet management',
      'Supply chain visibility gaps',
      'Demand forecasting inaccuracy',
      'High operational costs',
    ],
    improvements: [
      'AI-optimized routing and fleet management',
      'End-to-end supply chain visibility',
      'Predictive demand forecasting',
      'Cost reduction through intelligent optimization',
    ],
  },
  {
    id: 'operations',
    title: 'Operations',
    description: 'Streamline processes, reduce waste, and improve productivity across all operations.',
    painPoints: [
      'Manual process management',
      'Quality control inconsistencies',
      'Production inefficiencies',
      'Poor inventory management',
    ],
    improvements: [
      'Automated workflow orchestration',
      'AI-powered quality assurance',
      'Predictive maintenance systems',
      'Intelligent inventory optimization',
    ],
  },
  {
    id: 'support',
    title: 'Customer Support',
    description: 'Deliver faster, more accurate support while reducing operational costs.',
    painPoints: [
      'High support ticket volume',
      'Inconsistent response quality',
      'Long resolution times',
      'Staff burnout and turnover',
    ],
    improvements: [
      'Intelligent ticket routing and prioritization',
      'AI-assisted response generation',
      'Predictive issue resolution',
      'Automated knowledge base management',
    ],
  },
  {
    id: 'professional',
    title: 'Professional Services',
    description: 'Improve project delivery, enhance resource allocation, and increase profitability.',
    painPoints: [
      'Resource allocation inefficiencies',
      'Project delays and cost overruns',
      'Knowledge silos across teams',
      'Time tracking and billing challenges',
    ],
    improvements: [
      'Intelligent project planning and resource optimization',
      'Predictive risk management',
      'Knowledge sharing and automation platforms',
      'AI-assisted time tracking and billing',
    ],
  },
]

// Common problems solved by AI Rescue
export const COMMON_PROBLEMS = [
  {
    id: 'misalignment',
    title: 'Strategy-Implementation Misalignment',
    description: 'AI projects started without clear business context or operational integration.',
    solution: 'Align AI initiatives with core business workflows and operational reality.',
  },
  {
    id: 'data-quality',
    title: 'Data Quality Issues',
    description: 'Poor data governance, fragmented systems, or unreliable training data.',
    solution: 'Build data infrastructure and governance frameworks to support AI deployment.',
  },
  {
    id: 'adoption',
    title: 'Poor AI Adoption',
    description: 'Staff resistance, unclear value proposition, or inadequate training.',
    solution: 'Create change management plans and train teams to maximize AI value.',
  },
  {
    id: 'scalability',
    title: 'Scalability & Maintenance',
    description: 'AI systems that work in pilots but fail at scale or require constant firefighting.',
    solution: 'Rebuild systems for production-grade reliability and continuous improvement.',
  },
]

// Use cases and example scenarios
export const USE_CASES = [
  {
    title: 'Document Processing Automation',
    description: 'Automate extraction and classification of documents at scale, reducing manual data entry by 80%.',
  },
  {
    title: 'Intelligent Workflow Routing',
    description: 'Route tasks to the right people based on skills, workload, and priority using AI insights.',
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast demand, identify risks, and optimize planning with machine learning models.',
  },
  {
    title: 'Customer Behavior Analysis',
    description: 'Understand customer patterns and predict behavior to improve engagement and retention.',
  },
  {
    title: 'Quality Assurance Automation',
    description: 'Detect defects and quality issues in real-time using computer vision and AI.',
  },
  {
    title: 'Chatbots & Virtual Agents',
    description: 'Deploy AI-powered assistants that handle routine inquiries and escalate appropriately.',
  },
]
