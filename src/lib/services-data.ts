export interface Service {
  slug: string;
  title: string;
  headline: string;
  subtext: string;
  category: "cloud" | "devops" | "software";
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  problems: string[];
  solutions: string[];
  features: { title: string; desc: string; detail: string }[];
  benefits: { num: string; label: string }[];
  techs: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: Service[] = [
  {
    slug: "aws-cloud-managed-services",
    title: "AWS Cloud Managed Services",
    headline: "Secure, Auto-Scaling AWS Managed Environments",
    subtext: "We orchestrate and manage your AWS account resources following the AWS Well-Architected Framework, protecting your production uptime.",
    category: "cloud",
    seo: {
      title: "AWS Managed Services Company | OnEggy Technologies",
      description: "Scale secure AWS cloud deployments with OnEggy's managed services. We audit bills, rightsize instances, and manage multi-account control towers.",
      keywords: ["AWS Managed Services Company", "AWS Cloud Operations", "AWS Control Tower", "Managed Services Retainer"],
    },
    problems: [
      "Over-provisioned EC2 instances leaking monthly spend.",
      "Vague user permission layouts exposing root security accounts.",
      "Lack of real-time server downtime telemetry alarms.",
    ],
    solutions: [
      "Continuous AWS Cost waste rightsizing reviews.",
      "Configuring isolated multi-account landing zones.",
      "Deploying proactive CloudWatch metric alarm thresholds.",
    ],
    features: [
      { title: "Control Tower Sizing", desc: "Isolate prod, staging, and sandbox accounts.", detail: "Prevent drift across setups." },
      { title: "KMS Key Rotation", desc: "Automate cryptographic security standards.", detail: "Keep database tables locked." },
      { title: "CDN CloudFront Edge", desc: "Accelerate worldwide asset load times.", detail: "Reduce database query loads." },
      { title: "Serverless Deployments", desc: "Scale resources from zero dynamically.", detail: "Pay only for active runtime." },
    ],
    benefits: [
      { num: "-34%", label: "Cloud Cost Saved" },
      { num: "0", label: "Downtime Incidents" },
      { num: "ISO", label: "Security Compliant" },
    ],
    techs: ["AWS", "Control Tower", "CloudFront", "SSM", "CloudWatch", "Lambda"],
    faqs: [
      { question: "How do you secure access to our AWS billing credentials?", answer: "We enforce multi-account IAM configurations. Our team works inside standard scoped IAM roles, guaranteeing your core root account credentials remain completely isolated." },
      { question: "Do you supply ongoing monthly AWS cost reviews?", answer: "Yes. Our AWS Managed retainer includes weekly cost optimization charts to spot and scale down idle EC2, RDS, and S3 resources." },
    ],
  },
  {
    slug: "devops-consulting",
    title: "DevOps Consulting Services",
    headline: "Accelerate Developer Output with DevOps Consulting",
    subtext: "Eradicate manual configs. We build pipelines, automate deployments, and write standard Infrastructure as Code (IaC) templates.",
    category: "devops",
    seo: {
      title: "DevOps Consulting Services | OnEggy Technologies",
      description: "Accelerate release speeds and secure deployments with OnEggy's premium DevOps consulting services. Terraform, CI/CD, and EKS setups.",
      keywords: ["DevOps Consulting Services", "DevOps Automation Company", "IaC consulting", "CI/CD setup"],
    },
    problems: [
      "Slow, manual deployment restarts taking hours.",
      "Configuration differences between local and production tiers.",
      "Hardcoded database keys committed to git repositories.",
    ],
    solutions: [
      "Building fully automated CI/CD deployment channels.",
      "Writing uniform declarative Infrastructure as Code (IaC).",
      "Injecting credentials at runtime from AWS Secrets Manager.",
    ],
    features: [
      { title: "CI/CD Release Channels", desc: "Automate build, lint, and test stages.", detail: "Validate code reliability instantly." },
      { title: "Terraform Scaffolding", desc: "Provision environments from a single file.", detail: "Eliminate manual setup overhead." },
      { title: "GitOps Workflows", desc: "Synchronize cluster states from Git commits.", detail: "Ensure drift-free environments." },
      { title: "Dockerized Containers", desc: "Guarantee consistent code runtime settings.", detail: "Deploy pods safely on EKS." },
    ],
    benefits: [
      { num: "10x", label: "Faster Deployments" },
      { num: "Zero", label: "Configuration Drift" },
      { num: "99.9%", label: "Release Success Rate" },
    ],
    techs: ["Terraform", "GitHub Actions", "Docker", "Ansible", "Kubernetes", "GitLab"],
    faqs: [
      { question: "Who owns the DevOps codebase once delivered?", answer: "You do. We write all Terraform modules and CI/CD pipelines directly into your private repository organization under a 100% transfer model." },
      { question: "What is your target timeline for DevOps audits?", answer: "An initial audit and architecture roadmap takes 1-2 weeks. Implementation of full IaC and CI/CD workflows ranges between 4 to 6 weeks." },
    ],
  },
  {
    slug: "kubernetes",
    title: "Kubernetes Consulting & Management",
    headline: "Enterprise-Grade Kubernetes Orchestration",
    subtext: "We deploy and manage EKS and AKS container environments, configuring autoscaling and ingress controllers for production workloads.",
    category: "devops",
    seo: {
      title: "Kubernetes Consulting Company | OnEggy Technologies",
      description: "Orchestrate your containerized software with OnEggy's premium Kubernetes consulting. EKS, Helm, Ingress, and cluster autoscaling.",
      keywords: ["Kubernetes Consulting Company", "Managed Kubernetes Infrastructure", "AWS EKS setup", "Helm configs"],
    },
    problems: [
      "Crashing containers due to poor resource limits.",
      "Scale bottlenecks during traffic spikes.",
      "Manual configurations of ingress routers and certificates.",
    ],
    solutions: [
      "Custom pod resource limits and HPA configuration.",
      "Cluster autoscaling scaling node nodes dynamically.",
      "Automated Nginx/Traefik ingress routing controllers.",
    ],
    features: [
      { title: "Horizontal Autoscaling", desc: "Scale pod numbers matching live load.", detail: "Maintain performance during peaks." },
      { title: "Helm Templates", desc: "Standardize Kubernetes deployment packages.", detail: "Ensure easy release rollbacks." },
      { title: "Service Mesh isolation", desc: "Secure inner cluster communications.", detail: "Enforce network policies." },
      { title: "Cluster Telemetry", desc: "Full container logging and monitoring.", detail: "Spot pod failures instantly." },
    ],
    benefits: [
      { num: "10k+", label: "Concurrent Pods Scaled" },
      { num: "99.99%", label: "EKS Cluster Uptime" },
      { num: "Zero", label: "Downtime Releases" },
    ],
    techs: ["Kubernetes", "AWS EKS", "Helm", "Prometheus", "Docker", "Traefik"],
    faqs: [
      { question: "Do you support zero-downtime EKS cluster upgrades?", answer: "Yes. We execute upgrades using rolling node updates, ensuring workloads transition smoothly without impacting live user sessions." },
      { question: "Can you configure localized cluster test environments?", answer: "Yes, we use tools like Minikube or Kind to build matching sandbox setups for local development teams." },
    ],
  },
  {
    slug: "platform-engineering",
    title: "Platform Engineering",
    headline: "Build Custom Internal Developer Platforms (IDPs)",
    subtext: "We architect developer self-service portals, abstracting cloud operations to speed up local product releases.",
    category: "devops",
    seo: {
      title: "Platform Engineering Services | OnEggy Technologies",
      description: "Empower developers with self-service templates and internal developer portals. We streamline cloud operations and accelerate releases.",
      keywords: ["Platform Engineering Services", "Internal Developer Portals", "Self-service templates", "Developer Velocity"],
    },
    problems: [
      "Developers waiting days for ops to spin up sandboxes.",
      "Inconsistent resource naming and security configurations.",
      "Friction in local build pipelines.",
    ],
    solutions: [
      "Standardizing database and service templates.",
      "Integrating centralized developer portals (Backstage).",
      "Building one-click local setup scripts.",
    ],
    features: [
      { title: "Self-Service Sandboxes", desc: "Spin up databases in under 2 minutes.", detail: "Unlock developer autonomy." },
      { title: "Unified Catalog", desc: "Centralize documentation and service maps.", detail: "Eradicate duplicate codebase efforts." },
      { title: "Automated Lints", desc: "Block misconfigured resources before push.", detail: "Enforce company security rules." },
      { title: "Local Dev Toolkits", desc: "Ensure localized dockerized replicas match prod.", detail: "Eliminate runtime differences." },
    ],
    benefits: [
      { num: "<2m", label: "Sandbox Spin-up Time" },
      { num: "90%", label: "Developer Friction Cut" },
      { num: "100%", label: "IaC Consistency" },
    ],
    techs: ["Terraform", "Backstage", "Docker", "Kubernetes", "GitLab Actions", "Vault"],
    faqs: [
      { question: "What is the core benefit of building an IDP?", answer: "It abstracts cloud complexity. Frontend/backend developers can provision infrastructure and deploy code safely without waiting for DevOps approvals." },
      { question: "Do we need a large team to run a developer portal?", answer: "No. We build it to be highly automated, meaning a single senior engineer can maintain it with ease." },
    ],
  },
  {
    slug: "infrastructure-automation",
    title: "Infrastructure Automation",
    headline: "Declarative, Version-Controlled Infrastructure",
    subtext: "Eradicate manual console configuration mistakes. We automate multi-account clouds using Terraform and Ansible.",
    category: "cloud",
    seo: {
      title: "Infrastructure Automation Company | OnEggy Technologies",
      description: "Automate cloud resources with OnEggy's premium Terraform and Ansible consultants. Zero manual clicks, version-controlled IaC templates.",
      keywords: ["Infrastructure Automation Company", "Terraform consulting", "Ansible provisioning", "Automated Cloud Setup"],
    },
    problems: [
      "Clickops changes creating un-documented resources.",
      "Slow, manual provisioning of server networks.",
      "Difficulty reproducing configurations in new regions.",
    ],
    solutions: [
      "Writing modular Terraform infrastructure blocks.",
      "Ansible automation for configuration provisioning.",
      "Single-command region replication.",
    ],
    features: [
      { title: "Terraform Modules", desc: "Write clean, parameterized IaC modules.", detail: "Reuse structures across dev/prod environments." },
      { title: "Ansible Runbooks", desc: "Automate software installations and updates.", detail: "Hardon systems consistently." },
      { title: "Cloud State Storage", desc: "Secure state files inside remote encrypted S3 stores.", detail: "Enforce state lock policies." },
      { title: "VPC Peering Automations", desc: "Deploy secure inter-subnet pathways.", detail: "Prevent unauthorized internet access." },
    ],
    benefits: [
      { num: "0", label: "Manual console clicks" },
      { num: "100%", label: "Reproducible setups" },
      { num: "10x", label: "Faster Sandbox setup" },
    ],
    techs: ["Terraform", "Ansible", "AWS CloudFormation", "S3", "Git", "Packer"],
    faqs: [
      { question: "How do you prevent state-file conflicts in Terraform?", answer: "We configure remote state backend files using secure S3 buckets layered over DynamoDB tables to handle automated state-file locking." },
      { question: "Can you automate on-premise hardware environments?", answer: "Yes, we write Ansible automation books to harden, configure, and manage on-premise bare metal networks." },
    ],
  },
  {
    slug: "cicd-pipeline-automation",
    title: "CI/CD Pipeline Automation",
    headline: "Robust, Secure Automated Release Channels",
    subtext: "We configure build, test, scan, and deploy pipelines to deliver updates with zero system downtime.",
    category: "devops",
    seo: {
      title: "CI/CD Pipeline Automation Services | OnEggy Technologies",
      description: "Deliver software faster with automated CI/CD pipelines. GitHub Actions, GitLab pipelines, ArgoCD, and automated security scans.",
      keywords: ["CI/CD Pipeline Automation", "ArgoCD deployments", "GitHub Actions setups", "DevSecOps scans"],
    },
    problems: [
      "Slow, manual build scripts blocking developer output.",
      "Production crashes due to untested database migrations.",
      "Vulnerable dependency packages deployed to containers.",
    ],
    solutions: [
      "Centralizing build triggers via GitHub Actions or GitLab.",
      "Integrating automated validation lints and tests.",
      "Automating container scans during the build phase.",
    ],
    features: [
      { title: "ArgoCD GitOps Sync", desc: "Keep Kubernetes pods synced with Git commits.", detail: "Prevent cluster config drift." },
      { title: "Automated SAST Checks", desc: "Scan code files for credentials and flaws.", detail: "Enforce security standards." },
      { title: "Canary Releases", desc: "Route 5% traffic to test updates before full roll.", detail: "Eliminate downtime risks." },
      { title: "Docker Registry caching", desc: "Accelerate pipeline image build speeds.", detail: "Reduce release queues." },
    ],
    benefits: [
      { num: "<5m", label: "Pipeline execution speed" },
      { num: "0", label: "Manual deployment restarts" },
      { num: "100%", label: "Vulnerability scanned" },
    ],
    techs: ["GitHub Actions", "ArgoCD", "Docker", "Snyk", "Helm", "GitLab"],
    faqs: [
      { question: "What is GitOps and do we need it?", answer: "GitOps uses Git repositories as the single source of truth for cluster state. It ensures your Kubernetes cluster matches your code, making disaster recovery instant." },
      { question: "How do you protect database migrations?", answer: "We configure pre-deployment database sync checks inside the pipeline. If a migration test fails, the build halts before touching prod." },
    ],
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration Services",
    headline: "Zero-Downtime Cloud Migrations",
    subtext: "Migrate legacy applications from on-premise networks or outdated architectures into secure, scalable AWS setups.",
    category: "cloud",
    seo: {
      title: "Cloud Migration Experts | OnEggy Technologies",
      description: "Migrate database and code resources to AWS securely. OnEggy's migration experts ensure zero-downtime database replication.",
      keywords: ["Cloud Migration Experts", "AWS Database Migration Service", "On-premise to AWS", "Zero downtime migrations"],
    },
    problems: [
      "Risks of database corruption during migrations.",
      "Long hours of system downtime disrupting operations.",
      "Skyrocketing migration costs due to poor planning.",
    ],
    solutions: [
      "Executing live, continuous database replication (AWS DMS).",
      "Designing multi-region staging environments for validation.",
      "Rightsizing infrastructure sizes prior to execution.",
    ],
    features: [
      { title: "Continuous DB Sync", desc: "Replicate database rows live with zero write block.", detail: "Switch endpoints in seconds." },
      { title: "Multi-Account Control", desc: "Isolate migrated apps in clean sub-accounts.", detail: "Prevent legacy config transfer." },
      { title: "IaC Greenfield setups", desc: "Deploy new environments cleanly via Terraform.", detail: "Eradicate outdated configurations." },
      { title: "Post-Migration testing", desc: "Perform load and compatibility checks.", detail: "Verify performance increases." },
    ],
    benefits: [
      { num: "Zero", label: "Migration Downtime" },
      { num: "100%", label: "Data Integrity Verified" },
      { num: "30%+", label: "Post-migration cost saved" },
    ],
    techs: ["AWS DMS", "Terraform", "VPC Transit Gateway", "S3", "PostgreSQL", "CloudEndure"],
    faqs: [
      { question: "How do you prevent data loss during database migrations?", answer: "We use continuous replication engines like AWS DMS. Data is synchronized continuously, allowing a switchover in seconds." },
      { question: "Can you migrate workloads from Azure/GCP to AWS?", answer: "Yes. We execute multi-cloud migrations, mapping configurations to native AWS equivalents." },
    ],
  },
  {
    slug: "monitoring-observability",
    title: "Monitoring & Observability",
    headline: "Complete System Observability with Zero Blindspots",
    subtext: "We configure telemetry tracking pipelines to trace requests, monitor logs, and alert you before users notice issues.",
    category: "devops",
    seo: {
      title: "Monitoring & Observability Consulting | OnEggy Technologies",
      description: "Gain complete visibility into your cloud environment. We deploy Prometheus, Grafana, Loki, and Datadog alert boards.",
      keywords: ["Monitoring & Observability", "Grafana dashboards", "Prometheus alerts", "APM distributed tracing"],
    },
    problems: [
      "Un-detected memory leaks causing silent container crashes.",
      "Slow API endpoints with no database trace data.",
      "No notification alerts for system CPU thresholds.",
    ],
    solutions: [
      "Centralized Prometheus container metric collections.",
      "Grafana charts displaying API, memory, and query states.",
      "PagerDuty slack alarms for urgent thresholds alerts.",
    ],
    features: [
      { title: "APM Distributed Tracing", desc: "Follow queries from frontend to database tables.", detail: "Spot slow backend routes instantly." },
      { title: "Centralized Loki logging", desc: "Store, search, and aggregate container stdout logs.", detail: "Eradicate server ssh log mining." },
      { title: "Autoscaling triggers", desc: "Connect Prometheus metrics to EKS scaling pods.", detail: "Proactively scale resources." },
      { title: "Synthetic Web probes", desc: "Monitor ping and frontend availability hourly.", detail: "Alert on global DNS failures." },
    ],
    benefits: [
      { num: "<2m", label: "Alert Notification SLA" },
      { num: "100%", label: "Telemetry Visibility" },
      { num: "Zero", label: "Silent Container Crashes" },
    ],
    techs: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "Datadog", "PagerDuty"],
    faqs: [
      { question: "What is the difference between monitoring and observability?", answer: "Monitoring tells you *when* a system fails. Observability allows you to trace metrics, logs, and traces to understand *why* it failed." },
      { question: "Do you configure custom Slack/Email alerting systems?", answer: "Yes, we integrate alerting managers with Slack, email, PagerDuty, or Microsoft Teams." },
    ],
  },
  {
    slug: "site-reliability-engineering",
    title: "Site Reliability Engineering (SRE)",
    headline: "Engineer Resilient Systems for 99.99% Uptime SLA",
    subtext: "We design automatic database failovers, configure disaster recovery, and set up alert-led autoscaling.",
    category: "devops",
    seo: {
      title: "Site Reliability Engineering Services | OnEggy Technologies",
      description: "Scale resilient infrastructures with OnEggy's premium SRE consultants. Disaster recovery, SLAs, automated database failovers.",
      keywords: ["Site Reliability Engineering Services", "SRE Consulting", "Disaster Recovery setups", "Auto failover RDS"],
    },
    problems: [
      "System-wide failures due to single points of failure.",
      "Un-tested backup restoration procedures.",
      "Manual incident mitigation causing long outages.",
    ],
    solutions: [
      "Multi-AZ, redundant cluster configurations.",
      "Automated infrastructure disaster recovery testing.",
      "Automated self-healing scaling parameters.",
    ],
    features: [
      { title: "Multi-Region Redundancy", desc: "Duplicate EKS workspaces in active secondary zones.", detail: "Handle region-wide outages." },
      { title: "Aurora Global replica failovers", desc: "Sync databases across regions with automated swap.", detail: "Prevent transactional data loss." },
      { title: "SLO & SLI dashboarding", desc: "Track error rates and request limits.", detail: "Alert before service metrics degrade." },
      { title: "Automated Backups", desc: "Run daily snapshot checks to isolated cold S3 accounts.", detail: "Verify restoration paths monthly." },
    ],
    benefits: [
      { num: "99.99%", label: "Uptime SLA Engineered" },
      { num: "<5m", label: "Disaster Recovery RTO" },
      { num: "Zero", label: "Single points of failure" },
    ],
    techs: ["AWS", "Kubernetes", "Prometheus", "Aurora DB", "Terraform", "Route53 DNS"],
    faqs: [
      { question: "How do you define SLOs and SLIs?", answer: "SLIs (Indicators) measure latency and error rates. SLOs (Objectives) define the target (e.g. 99.9% success rate). We set up dashboards to track them." },
      { question: "How do you verify disaster recovery processes?", answer: "We perform scheduled simulation audits, verifying backup restoration times (RTO) in sandbox environments." },
    ],
  },
  {
    slug: "docker-containerization",
    title: "Docker & Containerization",
    headline: "Standardize Runtime Environments with Docker",
    subtext: "We containerize backend services and frontend applications, securing image layers and reducing footprint sizes.",
    category: "devops",
    seo: {
      title: "Docker & Containerization Consulting | OnEggy Technologies",
      description: "Improve deployment predictability. We containerize code, optimize Dockerfiles, and implement container security scans.",
      keywords: ["Docker Containerization", "Dockerfile optimization", "Multi-stage builds", "Container security scans"],
    },
    problems: [
      "Deployments failing due to local library differences.",
      "Heavy Docker images (1GB+) causing slow EKS pulls.",
      "Insecure base images containing root vulnerability exploits.",
    ],
    solutions: [
      "Designing multi-stage build optimization Dockerfiles.",
      "Restricting container execution to non-root users.",
      "Integrating automated image scanning (Trivy/Snyk).",
    ],
    features: [
      { title: "Multi-Stage Dockerfiles", desc: "Compile code in builder containers.", detail: "Deliver small production binaries (under 50MB)." },
      { title: "Non-Root Pod execution", desc: "Protect container boundaries from root exploits.", detail: "Enforce strict security standards." },
      { title: "Image Registry caching", desc: "Speed up container deploy times.", detail: "Minimize EKS container pull times." },
      { title: "Secure base distroless images", desc: "Remove unused shells and tools from production images.", detail: "Drastically reduce vulnerability surfaces." },
    ],
    benefits: [
      { num: "90%", label: "Image Size Reduction" },
      { num: "Zero", label: "Root vulnerability exploits" },
      { num: "3x", label: "Faster container launch times" },
    ],
    techs: ["Docker", "Kubernetes", "Trivy", "Snyk", "AWS ECR", "Alpine Linux"],
    faqs: [
      { question: "Why is Docker image size important?", answer: "Smaller images pull faster from AWS ECR during auto-scaling events, reducing resource startup times from minutes to seconds." },
      { question: "How do you scan Docker images for vulnerabilities?", answer: "We run Trivy and Snyk checks in the CI/CD pipeline, blocking builds that contain high-severity security vulnerabilities." },
    ],
  },
  {
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    headline: "High-Performance Full-Stack Web Applications",
    subtext: "We build fast, secure Next.js web applications backed by robust Python/Django and Node.js backend architectures.",
    category: "software",
    seo: {
      title: "Full Stack Web Development Services | OnEggy Technologies",
      description: "Design scalable Next.js and Django web applications. OnEggy's engineers deliver fast frontends and secure backend APIs.",
      keywords: ["Full Stack Web Development Services", "Next.js web apps", "Django backend developer", "API designs"],
    },
    problems: [
      "Slow frontend load times hurting Google SEO rankings.",
      "Monolithic backends that lock up under load.",
      "Lack of clean type safety between APIs and frontends.",
    ],
    solutions: [
      "Next.js server-side render strategies for instant load speeds.",
      "Decoupled backend API endpoints running in Docker containers.",
      "Full TypeScript integration across client-server boundaries.",
    ],
    features: [
      { title: "Next.js SSR Frontend", desc: "Server-render pages for instant web load speeds.", detail: "Secure maximum lighthouse SEO scores." },
      { title: "Django REST API Core", desc: "Highly secure backend with built-in admin panels.", detail: "Handle complex database relations." },
      { title: "TypeScript validation", desc: "Type safety from endpoint JSON payloads to React components.", detail: "Eliminate runtime syntax errors." },
      { title: "Tailwind UI elements", desc: "Responsive visual styling with optimized CSS files.", detail: "Provide premium transitions." },
    ],
    benefits: [
      { num: "100", label: "Lighthouse SEO Score" },
      { num: "TypeScript", label: "End-to-End Type Safe" },
      { num: "<1.2s", label: "Interactive load times" },
    ],
    techs: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    faqs: [
      { question: "Why do you recommend Next.js for web frontends?", answer: "Next.js offers hybrid static and server-side rendering, ensuring pages load instantly for search crawlers and users." },
      { question: "Do you build custom administrative panels?", answer: "Yes, we build secure, customizable admin panels to manage your application data tables." },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    headline: "Cross-Platform React Native Mobile Applications",
    subtext: "We build premium iOS and Android applications with offline synchronization and low-latency API connections.",
    category: "software",
    seo: {
      title: "Mobile App Development Services | OnEggy Technologies",
      description: "Build premium iOS and Android apps. OnEggy's React Native developers configure offline-first synchronization and secure APIs.",
      keywords: ["Mobile App Development Services", "React Native developers", "iOS and Android apps", "Offline sync mobile"],
    },
    problems: [
      "Hiring separate teams to write duplicate Swift and Kotlin codebases.",
      "Losing user modifications during network connection dropouts.",
      "Slow mobile interfaces causing app store uninstalls.",
    ],
    solutions: [
      "React Native single-codebase cross-platform deployment.",
      "Offline-first sync frameworks storing state locally.",
      "Native bridge components for optimized UI rendering.",
    ],
    features: [
      { title: "Single Codebase cross-platform", desc: "Deploy to App Store & Google Play simultaneously.", detail: "Reduce development budgets by 50%." },
      { title: "Offline SQL tables", desc: "Preserve inputs locally during cellular dropouts.", detail: "Synchronize modifications in background." },
      { title: "Native UI components", desc: "Maintain smooth 60fps scrolling and transition animations.", detail: "Position layouts with precision." },
      { title: "Secure OAuth logic", desc: "JWT session logs and fingerprint unlock tools.", detail: "Secure transactions on the device." },
    ],
    benefits: [
      { num: "50%", label: "Launch Costs Saved" },
      { num: "<2s", label: "Offline Sync Latency" },
      { num: "60fps", label: "Smooth Visual Speeds" },
    ],
    techs: ["React Native", "TypeScript", "Expo", "Redux Toolkit", "SQLite", "FastAPI"],
    faqs: [
      { question: "What is the benefit of React Native over native Swift/Kotlin?", answer: "It allows a single team to write one TypeScript codebase that renders natively on both iOS and Android, drastically reducing time-to-market." },
      { question: "Do you handle App Store submission processes?", answer: "Yes. We configure pipelines to compile, sign, and push binaries directly to TestFlight, Apple App Store, and Google Play Console." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design Services",
    headline: "Cinematic Visual Interfaces Designed to Convert",
    subtext: "We design premium interfaces, wireframes, and prototypes, ensuring your digital products stand out.",
    category: "software",
    seo: {
      title: "UI/UX Design Services | OnEggy Technologies",
      description: "Design world-class user interfaces. We conduct UX research and build interactive Figma prototypes with premium visual styles.",
      keywords: ["UI/UX Design Services", "Figma SaaS Design", "Visual prototypes", "User experience research"],
    },
    problems: [
      "Cluttered SaaS layouts causing user confusion and dropoffs.",
      "Outdated visual styling hurting startup brand value.",
      "Lack of design consistency between components.",
    ],
    solutions: [
      "Rigorous user journey mapping and wireframe scoping.",
      "World-class, modern design systems built in Figma.",
      "High-fidelity interactive prototype handovers.",
    ],
    features: [
      { title: "Figma Design Systems", desc: "Standardize colors, spacings, typography, and borders.", detail: "Ensure consistency across web/mobile." },
      { title: "User Journey Maps", desc: "Identify and resolve friction blocks in registration funnels.", detail: "Increase trial signups." },
      { title: "Dark & Light layouts", desc: "Design interfaces optimized for various device settings.", detail: "Incorporate Harmonious palettes." },
      { title: "Interactive Wireframes", desc: "Click-through prototypes to validate flows prior to coding.", detail: "Avoid costly engineering rework." },
    ],
    benefits: [
      { num: "Figma", label: "Design System Delivered" },
      { num: "+25%", label: "Conversion Lift" },
      { num: "0", label: "Styling discrepancies" },
    ],
    techs: ["Figma", "Adobe CC", "Tailwind Design System", "Miro", "Lottie Animations"],
    faqs: [
      { question: "How do you handle developer design handoffs?", answer: "We deliver complete Figma design systems with structural layouts, spacing components, and SVG assets, ensuring frontend developers have precise specifications." },
      { question: "What is your typical design revision policy?", answer: "We work iteratively, conducting weekly wireframe and layout feedback syncs before final prototype deliverables." },
    ],
  },
  {
    slug: "startup-mvp-development",
    title: "Startup MVP Development",
    headline: "Launch Your MVP in Weeks, Built for Enterprise Scale",
    subtext: "We build and deploy functional startup MVPs using stable SaaS code frameworks, avoiding throwaway code.",
    category: "software",
    seo: {
      title: "Startup Development Company | OnEggy Technologies",
      description: "Launch your MVP in under 8 weeks. OnEggy's startup MVP development services combine Next.js, FastAPI, and modular AWS architectures.",
      keywords: ["Startup Development Company", "MVP launch company", "Fast SaaS prototyping", "AWS startup architecture"],
    },
    problems: [
      "Spending six months and massive budgets before user testing.",
      "Low-quality, unstable code that must be completely rewritten to scale.",
      "Cluttered APIs and manually configured databases.",
    ],
    solutions: [
      "Targeted 6-to-8 week rapid product release cycles.",
      "Deploying scalable, structured Next.js/FastAPI boilerplate code.",
      "Automating infrastructure setup from day one via Terraform.",
    ],
    features: [
      { title: "Boilerplate SaaS modules", desc: "Plug-and-play user logins, secure JWT keys, and Stripe.", detail: "Save weeks of development time." },
      { title: "Terraform Startup setups", desc: "Provision basic AWS accounts and RDS databases.", detail: "Establish clean code-governed infrastructure." },
      { title: "CI/CD automated releases", desc: "Deliver updates to staging immediately on merge.", detail: "Unlock developer velocity." },
      { title: "Figma UI prototype integration", desc: "Map design layouts cleanly to Tailwind classes.", detail: "Render custom responsive pages." },
    ],
    benefits: [
      { num: "<8w", label: "Target MVP Launch Time" },
      { num: "0", label: "Throwaway code created" },
      { num: "Stripe", label: "Payment Systems Ready" },
    ],
    techs: ["Next.js", "FastAPI", "Stripe API", "PostgreSQL", "Terraform", "GitHub Actions"],
    faqs: [
      { question: "How fast can you deliver a functional MVP?", answer: "A typical scope takes 6 to 8 weeks. We focus on core features, logins, database security, and payment integrations." },
      { question: "What happens when our user base scales?", answer: "Because we build on modular Terraform frameworks and clean Next.js/FastAPI APIs, scaling your infrastructure is straightforward." },
    ],
  },
  {
    slug: "saas-product-engineering",
    title: "SaaS Product Engineering",
    headline: "Scale Multi-Tenant SaaS Product Architectures",
    subtext: "We engineer multi-tenant database partitions, secure user logins, stripe billing integrations, and telemetry metrics boards.",
    category: "software",
    seo: {
      title: "SaaS Product Engineering Services | OnEggy Technologies",
      description: "Design multi-tenant SaaS architectures. OnEggy's engineers build scalable databases, Stripe billing, and API telemetry portals.",
      keywords: ["SaaS Product Engineering Services", "Multi-tenant databases", "Stripe subscription API", "APM telemetry dashboards"],
    },
    problems: [
      "Complexity in database design for multi-tenant isolation.",
      "Integrating subscription pricing models and payment gateways.",
      "Lack of query-level application performance telemetry.",
    ],
    solutions: [
      "Designing clean tenant-isolation row schemas.",
      "Integrating Stripe Billing and Webhook events handling.",
      "Configuring distributed APM telemetry query alerts.",
    ],
    features: [
      { title: "Tenant row-level isolation", desc: "Secure multi-tenant data tables at database tier.", detail: "Ensure robust customer data isolation." },
      { title: "Stripe Webhook handlers", desc: "Automate user seats, subscription statuses, and invoice events.", detail: "Prevent billing glitches." },
      { title: "GraphQL API architecture", desc: "Fetch nested data structures in single network payloads.", detail: "Improve frontend render speeds." },
      { title: "Telemetry observability boards", desc: "Track query response times, API load, and error rates.", detail: "Proactively scale pods." },
    ],
    benefits: [
      { num: "Stripe", label: "Sub subscriptions active" },
      { num: "100%", label: "Tenant Data Isolated" },
      { num: "<150ms", label: "Average API Response" },
    ],
    techs: ["PostgreSQL", "Node.js", "Stripe Billing", "GraphQL", "Kubernetes", "Grafana"],
    faqs: [
      { question: "How do you enforce tenant isolation?", answer: "We use either schema-based separation or row-level security (RLS) policies within PostgreSQL, ensuring customers cannot read other tenant rows." },
      { question: "Do you integrate custom webhook integrations?", answer: "Yes. We write robust, transactional webhook handlers with retry logic to process payment and usage events." },
    ],
  },
  {
    slug: "api-development-integration",
    title: "API Development & Integration",
    headline: "Clean, Scalable, Self-Documenting REST & GraphQL APIs",
    subtext: "We design high-throughput backend APIs, configuring auto-generated OpenAPI Swagger docs and validation testing structures.",
    category: "software",
    seo: {
      title: "API Development & Integration Services | OnEggy",
      description: "Build clean, high-throughput APIs. OnEggy's developers write FastAPI REST and Node.js GraphQL endpoints with auto-documenting schemas.",
      keywords: ["API Development & Integration", "GraphQL endpoint designs", "OpenAPI Swagger docs", "API gateway routing"],
    },
    problems: [
      "API documentations that lag behind codebase modifications.",
      "Slow API endpoints causing application page freezes.",
      "Lack of validation checks leading to bad database entries.",
    ],
    solutions: [
      "FastAPI python backends with auto-documenting Swagger OpenAPI schemas.",
      "Database connection pooling and index caching.",
      "Pydantic input typing schemas.",
    ],
    features: [
      { title: "Auto-documenting Swagger APIs", desc: "Keep documentations synced with code changes automatically.", detail: "Streamline team developer coordination." },
      { title: "API Gateway routing configurations", desc: "Route endpoints cleanly to container services.", detail: "Balance internal network loads." },
      { title: "Pydantic validation schemas", desc: "Block malformed json objects at network layer.", detail: "Guarantee database schema cleanliness." },
      { title: "Redis Cache tables", desc: "Cache frequent static GET queries.", detail: "Reduce database query loads by 70%." },
    ],
    benefits: [
      { num: "Swagger", label: "Auto Documentation live" },
      { num: "100%", label: "Validated input schemas" },
      { num: "-70%", label: "Database Query Load" },
    ],
    techs: ["FastAPI", "Python", "GraphQL", "Redis", "Pydantic", "PostgreSQL"],
    faqs: [
      { question: "Why do you recommend OpenAPI/Swagger specifications?", answer: "It ensures your backend and frontend teams remain synchronized, providing interactive testing portals directly in the browser." },
      { question: "How do you secure API authentication?", answer: "We deploy secure OAuth2 flows with stateless JWT tokens signed with secure keys in AWS Secrets Manager." },
    ],
  },
  {
    slug: "fastapi-backend-development",
    title: "FastAPI Backend Development",
    headline: "High-Performance Python Backends with FastAPI",
    subtext: "We build async Python APIs with auto Swagger documentations, Pydantic type safety, and low-latency database queries.",
    category: "software",
    seo: {
      title: "FastAPI Backend Development Company | OnEggy",
      description: "Scale high-performance async Python backend APIs with OnEggy's FastAPI consultants. Pydantic validation, Swagger docs.",
      keywords: ["FastAPI Backend Development", "Async Python developer", "Pydantic validation schemas", "FastAPI swagger docs"],
    },
    problems: [
      "Slow backend response times affecting mobile apps.",
      "Manual API documentation lagging behind codebase updates.",
      "Type conflicts causing errors in data serialization.",
    ],
    solutions: [
      "Asynchronous request loop executions (asyncio/uvicorn).",
      "Auto-generated Swagger/Redoc endpoints documentation.",
      "Pydantic data structures for type serialization validation.",
    ],
    features: [
      { title: "Asyncio performance core", desc: "Handle thousands of concurrent requests with lightweight processes.", detail: "Maximize EKS container density." },
      { title: "OpenAPI validation schemas", desc: "Generate self-documenting JSON schemas.", detail: "Interface with client teams easily." },
      { title: "SQLAlchemy connection pooling", desc: "Optimize database connections.", detail: "Prevent database connection locks." },
      { title: "Secure JWT auth scopes", desc: "Implement role-based access controls.", detail: "Secure endpoints at the API gateway." },
    ],
    benefits: [
      { num: "Async", label: "High Concurrency Core" },
      { num: "<50ms", label: "Request Response Times" },
      { num: "Zero", label: "Serialization conflicts" },
    ],
    techs: ["FastAPI", "Python", "SQLAlchemy", "Pydantic", "Docker", "PostgreSQL"],
    faqs: [
      { question: "What makes FastAPI faster than Django or Flask?", answer: "It leverages Starlette and Uvicorn, enabling asynchronous execution (async/await) similar to Node.js, combined with highly optimized Pydantic parsing." },
      { question: "Do you integrate SQLAlchemy ORM?", answer: "Yes. We write clean, indexed SQLAlchemy schemas with alembic database migrations." },
    ],
  },
  {
    slug: "nextjs-frontend-development",
    title: "Next.js Frontend Development",
    headline: "Blazing-Fast Next.js Frontends Optimized for SEO",
    subtext: "We build Next.js (App Router) web platforms using TypeScript and Tailwind CSS, securing top Google rankings.",
    category: "software",
    seo: {
      title: "Next.js Frontend Development Company | OnEggy",
      description: "Build premium Next.js App Router frontends with OnEggy's experts. TypeScript, Tailwind CSS, high Lighthouse performance scores.",
      keywords: ["Next.js Frontend Development", "Nextjs App Router company", "Lighthouse SEO optimization", "Tailwind CSS styling"],
    },
    problems: [
      "Slow, client-side rendered pages hurting search rankings.",
      "Complex state management and layout shift issues.",
      "High bundle sizes causing sluggish mobile performance.",
    ],
    solutions: [
      "Next.js hybrid server-side and static pre-rendering.",
      "TypeScript integration to prevent runtime javascript bugs.",
      "Code-splitting and asset optimization for lightweight page loads.",
    ],
    features: [
      { title: "Next.js App Router layout", desc: "Structure routing using nested folders.", detail: "Streamline data fetching patterns." },
      { title: "Tailwind styling system", desc: "Clean visual styling with responsive utilities.", detail: "Minimize final CSS bundle sizes." },
      { title: "TypeScript type checks", desc: "Define component inputs and API payloads.", detail: "Eradicate runtime exceptions." },
      { title: "Image component optimizations", desc: "Compress and serve graphics in modern webp layouts.", detail: "Prevent cumulative layout shifts (CLS)." },
    ],
    benefits: [
      { num: "100", label: "Lighthouse Performance" },
      { num: "SEO", label: "Ready Metadata" },
      { num: "Zero", label: "Cumulative Layout Shifts" },
    ],
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    faqs: [
      { question: "Why is Server-Side Rendering (SSR) important?", answer: "SSR generates the HTML for pages on the server, allowing Google web crawlers to index text content instantly, which drives organic search visibility." },
      { question: "Do you configure custom meta and open graph tags?", answer: "Yes, we integrate Next.js Metadata objects dynamically into all routes to optimize social share displays." },
    ],
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization",
    headline: "Stop Wasting Budgets: Rightsize AWS Cloud Spend",
    subtext: "We execute deep cloud audits to identify resource waste, downsize over-provisioned instances, and save 30%+.",
    category: "cloud",
    seo: {
      title: "Cloud Cost Optimization Experts | OnEggy Technologies",
      description: "Reduce AWS cloud overhead by 30%+. We perform waste audits, rightsize EC2, and configure Kubernetes autoscaling configurations.",
      keywords: ["Cloud Cost Optimization", "Rightsize AWS cloud", "Spot Instances EKS", "Database waste audit"],
    },
    problems: [
      "Skyrocketing monthly AWS bills with unclear cost origins.",
      "Unused EBS volumes and idle RDS instances leaking budgets.",
      "Kubernetes nodes scaling up and staying on continuously.",
    ],
    solutions: [
      "Implementing tagging schemas and detailed AWS Cost Explorer boards.",
      "Downsizing over-provisioned resources.",
      "Setting up Kubernetes scale-to-zero settings.",
    ],
    features: [
      { title: "EC2 & RDS rightsizing", desc: "Downsize server tiers to match actual average CPU usage.", detail: "Reduce costs instantly." },
      { title: "Spot Instance setups", desc: "Deploy stateless workloads on AWS Spot Instances.", detail: "Save up to 90% over on-demand pricing." },
      { title: "Automated off-hour scheduling", desc: "Turn off staging sandboxes automatically on weekends.", detail: "Cut staging bills by 60%." },
      { title: "AWS Savings Plans reviews", desc: "Commit to baseline compute targets for pricing drops.", detail: "Leverage AWS discount programs." },
    ],
    benefits: [
      { num: "30%+", label: "Monthly Cost Saved" },
      { num: "60%", label: "Staging Cost Reduction" },
      { num: "100%", label: "Resource Tagging Scoped" },
    ],
    techs: ["AWS Cost Explorer", "Karpenter Autoscaler", "AWS Budgets", "Terraform", "CloudWatch", "Prometheus"],
    faqs: [
      { question: "Will cost optimization affect system performance?", answer: "No. We base our recommendations on historical metric logs. We align CPU and memory capacity to actual usage peaks, maintaining full performance safety margins." },
      { question: "How do you automate dev environments shutdowns?", answer: "We write automated Lambda tasks triggered by EventBridge cron schedules to stop dev instances outside office hours." },
    ],
  },
  {
    slug: "security-devsecops",
    title: "Security & DevSecOps Services",
    headline: "Integrate Security Directly into CI/CD Pipelines",
    subtext: "We configure container security scanning, set up VPC isolation boundaries, and audit IAM permissions.",
    category: "devops",
    seo: {
      title: "Security & DevSecOps Services | OnEggy Technologies",
      description: "Secure your software platform. We integrate automated dependency scans, VPC isolations, and KMS key rotations.",
      keywords: ["Security & DevSecOps Services", "Container security scanning", "VPC isolation networks", "IAM security audit"],
    },
    problems: [
      "Vulnerable dependency packages deployed to production.",
      "Permissive security groups exposing databases to the public internet.",
      "Lack of centralized audit logging for IAM logins.",
    ],
    solutions: [
      "Integrating dependency and image scans inside pipeline tasks.",
      "Deploying secure VPC subnets with isolated private routes.",
      "Enforcing multi-account governance rules.",
    ],
    features: [
      { title: "Dependency vulnerability checks", desc: "Block pipeline builds containing high-severity exploits.", detail: "Prevent code injection attacks." },
      { title: "VPC Subnet isolations", desc: "Host databases in subnets with zero internet route access.", detail: "Eliminate external access points." },
      { title: "AWS CloudTrail audits", desc: "Consolidate and encrypt user access trails.", detail: "Enable post-incident forensic reviews." },
      { title: "KMS Envelope encryption", desc: "Secure application files before storing in S3.", detail: "Protect customer data records." },
    ],
    benefits: [
      { num: "Zero", label: "Known exploits in Prod" },
      { num: "100%", label: "Isolated Database subnets" },
      { num: "KMS", label: "Encrypted Data at Rest" },
    ],
    techs: ["Trivy", "Snyk", "AWS KMS", "CloudTrail", "AWS WAF", "Vault"],
    faqs: [
      { question: "What is DevSecOps?", answer: "It is the practice of integrating security checks (code scans, IAM policies, and VPC isolations) early and automatically in the development lifecycle rather than checking before launch." },
      { question: "How do you protect applications from web attacks?", answer: "We deploy AWS WAF (Web Application Firewall) policies to filter out SQL injection and cross-site scripting (XSS) requests." },
    ],
  },
  {
    slug: "database-architecture-optimization",
    title: "Database Architecture & Optimization",
    headline: "Scale High-Throughput, Low-Latency Databases",
    subtext: "We design multi-region database replication tiers, write clean SQL indices, and optimize query response times.",
    category: "software",
    seo: {
      title: "Database Architecture & Optimization | OnEggy",
      description: "Scale high-performance PostgreSQL and MySQL databases. We configure Aurora replication, query indexing, and Redis caching.",
      keywords: ["Database Architecture Optimization", "PostgreSQL index query", "Aurora DB replication", "Redis cache setup"],
    },
    problems: [
      "Slow database queries causing API latency spikes.",
      "Lockups during parallel transaction spikes.",
      "Lack of automatic database backup restoration tests.",
    ],
    solutions: [
      "Writing structured SQL query index strategies.",
      "Deploying high-availability Aurora Global Databases.",
      "Caching static queries inside Redis clusters.",
    ],
    features: [
      { title: "Aurora Global databases", desc: "Sync tables across regions automatically with low latency.", detail: "Provide regional failover targets." },
      { title: "Query Index plans", desc: "Create focused database indexes.", detail: "Reduce database query search execution times by 90%." },
      { title: "Redis Cache tables", desc: "Store frequent queries dynamically in lightweight memory clusters.", detail: "Bypass disk storage read limits." },
      { title: "Automated snapshot backup checks", desc: "Write daily database backup snapshot rules.", detail: "Verify restoration paths monthly." },
    ],
    benefits: [
      { num: "-90%", label: "Query Execution Speed" },
      { num: "<2s", label: "Cross-region DB Sync" },
      { num: "Daily", label: "Automated Backup verify" },
    ],
    techs: ["PostgreSQL", "AWS Aurora", "Redis", "SQLAlchemy", "DynamoDB", "AWS DMS"],
    faqs: [
      { question: "How do you optimize slow database queries?", answer: "We inspect database logs to identify bottleneck queries, optimize the indexing strategy, and configure query cache policies." },
      { question: "Do you support database horizontal scaling?", answer: "Yes. We configure read-replicas to distribute read traffic away from the primary writer node." },
    ],
  },
  {
    slug: "managed-kubernetes-infrastructure",
    title: "Managed Kubernetes Infrastructure",
    headline: "Deploy and Maintain Production Kubernetes Clusters",
    subtext: "We configure EKS/AKS namespaces, manage ingress controllers, and set up 24/7 cluster alert monitoring.",
    category: "devops",
    seo: {
      title: "Managed Kubernetes Infrastructure | OnEggy Technologies",
      description: "Maintain secure production EKS environments with OnEggy's engineers. Ingress controllers, Helm deployment packs, and autoscaling.",
      keywords: ["Managed Kubernetes Infrastructure", "AWS EKS cluster maintenance", "Nginx Ingress controller", "Cluster autoscaling"],
    },
    problems: [
      "System degradation during cluster upgrades.",
      "Lack of real-time pod logging and alerting.",
      "High costs due to running static node sizing configurations.",
    ],
    solutions: [
      "Zero-downtime rolling node upgrades.",
      "Loki and Prometheus telemetry aggregation setups.",
      "Karpenter scaling node sizes dynamically.",
    ],
    features: [
      { title: "Karpenter Autoscaler", desc: "Provision cluster node sizes dynamically to match real-time workloads.", detail: "Reduce waste compute overhead." },
      { title: "Grafana Alert Dashboarding", desc: "Monitor EKS pod metrics in centralized dashboards.", detail: "Get alerts before container failures." },
      { title: "Cert-Manager setups", desc: "Automate SSL Let's Encrypt renewal cycles.", detail: "Prevent site safety warnings." },
      { title: "VPC CNI Network boundaries", desc: "Secure internal cluster pods with custom subnet routing.", detail: "Protect database boundaries." },
    ],
    benefits: [
      { num: "0", label: "Upgrade Downtime" },
      { num: "24/7", label: "Telemetry Monitored" },
      { num: "-40%", label: "Compute waste reduced" },
    ],
    techs: ["Kubernetes", "AWS EKS", "Karpenter", "Cert-Manager", "Grafana", "Terraform"],
    faqs: [
      { question: "How does Karpenter optimize Kubernetes costs?", answer: "Unlike default cluster autoscalers, Karpenter provisions node sizes that fit the exact resources of pending pods, slashing compute overhead." },
      { question: "What is your support structure for EKS upgrades?", answer: "We manage the entire upgrade lifecycle, testing node transitions in sandbox VPCs before updating production workloads." },
    ],
  },
  {
    slug: "ai-ready-cloud-infrastructure",
    title: "AI-Ready Cloud Infrastructure",
    headline: "Scale GPU Clusters and Vector Databases on AWS",
    subtext: "We architect secure infrastructure to train models, configure GPU scaling nodes, and deploy Vector databases.",
    category: "cloud",
    seo: {
      title: "AI-Ready Cloud Infrastructure Company | OnEggy",
      description: "Scale high-performance GPU nodes on AWS EKS. We configure vector databases, data pipelines, and machine learning infrastructure.",
      keywords: ["AI-Ready Cloud Infrastructure", "GPU node autoscaling EKS", "Vector database deployment", "MLOps infrastructure"],
    },
    problems: [
      "Extremely high costs from running idle GPU nodes.",
      "Slow database searches during vector embedding retrieval.",
      "Lack of secure pipelines to ingest large data sets.",
    ],
    solutions: [
      "Configuring EKS GPU autoscaling parameters.",
      "Deploying low-latency Pinecone or pgvector databases.",
      "Building S3-based secure data lakes.",
    ],
    features: [
      { title: "GPU Node Autoscaling", desc: "Provision GPU instances dynamically for inference tasks.", detail: "Avoid static server cost leaks." },
      { title: "Vector DB scaling", desc: "Deploy Pinecone, Qdrant, or pgvector postgres extensions.", detail: "Maintain low latency search responses." },
      { title: "S3 Data lakes mapping", desc: "Secure training data sets inside isolated buckets.", detail: "Configure encrypted access keys." },
      { title: "MLOps pipelines setup", desc: "Automate model artifact tracking and deployments.", detail: "Integrate model sync triggers." },
    ],
    benefits: [
      { num: "<10ms", label: "Vector Search Latency" },
      { num: "-50%", label: "GPU Idle Waste Reduced" },
      { num: "TB+", label: "Data Pipeline Sizing" },
    ],
    techs: ["AWS EKS", "Terraform", "pgvector", "Pinecone", "AWS S3", "Python"],
    faqs: [
      { question: "How do you optimize GPU infrastructure costs?", answer: "We deploy scale-to-zero policies on GPU node groups, ensuring expensive compute nodes only run during active model execution workloads." },
      { question: "Do you support pgvector postgres setups?", answer: "Yes, we configure pgvector extensions inside RDS/Aurora PostgreSQL databases for unified vector searches." },
    ],
  },
  {
    slug: "healthcare-platform-development",
    title: "Healthcare Platform Development",
    headline: "HIPAA-Compliant Healthcare Product Engineering",
    subtext: "We build secure medical software platforms, configuring end-to-end data encryption, access controls, and audits.",
    category: "software",
    seo: {
      title: "Healthcare Platform Development Services | OnEggy",
      description: "Engineer HIPAA-compliant healthcare software. We build secure Next.js platforms, AWS RDS databases, and SMS alert APIs.",
      keywords: ["Healthcare Platform Development", "HIPAA compliant software", "AWS KMS data encryption", "Healthcare API setups"],
    },
    problems: [
      "Difficulty meeting HIPAA requirements for data encryption.",
      "Lack of detailed access logs for patient health records.",
      "Slow user interfaces delaying clinical communications.",
    ],
    solutions: [
      "Deploying AWS KMS envelope encryption at rest and in transit.",
      "Centralizing audit logging with write-once S3 logs.",
      "Next.js App Router frontends with low-latency APIs.",
    ],
    features: [
      { title: "HIPAA Compliant Blueprint", desc: "Deploy encrypted RDS databases and IAM credential checkouts.", detail: "Pass healthcare security audits." },
      { title: "Audit log centralizations", desc: "Store patient access logs in immutable, locked S3 buckets.", detail: "Maintain compliant tracking data." },
      { title: "Secure Twilio SMS integrations", desc: "Configure secure appointment reminders and OTP login alerts.", detail: "Integrate notification systems." },
      { title: "VAPT Security scans", desc: "Perform penetration testing checks on all APIs.", detail: "Remediate code flaws proactively." },
    ],
    benefits: [
      { num: "100%", label: "HIPAA Audit Ready" },
      { num: "KMS", label: "Envelope Encrypted" },
      { num: "<1s", label: "Clinic UI Latency" },
    ],
    techs: ["Next.js", "FastAPI", "AWS KMS", "PostgreSQL", "CloudTrail", "Twilio API"],
    faqs: [
      { question: "How do you ensure data is encrypted at rest?", answer: "We enforce AWS KMS envelope encryption across all databases, S3 buckets, and EBS storage volumes, ensuring data cannot be read without secure keys." },
      { question: "What is your audit trail policy?", answer: "We direct all activity logs to an isolated, read-only S3 bucket with strict lifecycle lock policies, satisfying HIPAA tracking rules." },
    ],
  },
  {
    slug: "enterprise-application-development",
    title: "Enterprise Application Development",
    headline: "Scale Robust, Secure Enterprise Software Platforms",
    subtext: "We build enterprise application codebases, configuring multi-region redundancy, secure auth networks, and CI/CD pipelines.",
    category: "software",
    seo: {
      title: "Enterprise Application Development Company | OnEggy",
      description: "Scale high-performance enterprise platforms. OnEggy's engineers build Next.js, Django, EKS, and database replication setups.",
      keywords: ["Enterprise Application Development", "Enterprise SaaS scale", "Aurora DB replication", "EKS cluster systems"],
    },
    problems: [
      "Legacy software platforms unable to scale under transactional loads.",
      "Lack of automated deployment rollbacks causing long outages.",
      "Siloed codebases lacking unified APIs and standards.",
    ],
    solutions: [
      "Refactoring monoliths into modular container APIs.",
      "Deploying multi-region EKS clusters with Route53 routing.",
      "Writing clean, typed TypeScript and Python backend interfaces.",
    ],
    features: [
      { title: "Multi-Region active EKS setups", desc: "Run identical container clusters across AWS zones.", detail: "Prevent region-wide service downtime." },
      { title: "Aurora Global database clusters", desc: "Replicate database writes with low-latency regional syncs.", detail: "Ensure database data preservation." },
      { title: "Okta / SAML SSO configurations", desc: "Integrate corporate employee login credentials security.", detail: "Secure internal admin systems." },
      { title: "Helm automated rollbacks", desc: "Revert buggy releases to previous stable state in 1 click.", detail: "Maintain platform safety." },
    ],
    benefits: [
      { num: "99.99%", label: "Service SLA Engineered" },
      { num: "SAML", label: "Enterprise SSO Active" },
      { num: "<2.2s", label: "Global Page Load Speed" },
    ],
    techs: ["Next.js", "FastAPI", "AWS EKS", "Aurora DB", "SAML SSO", "Route53 DNS"],
    faqs: [
      { question: "How do you secure corporate logins?", answer: "We integrate Single Sign-On (SSO) configurations using Okta, Azure AD, or custom SAML/OAuth2 providers directly in the API layer." },
      { question: "Do you supply SLA uptime guarantees?", answer: "Yes. Our SRE retainer squads monitor system availability to meet and protect your enterprise SLA metrics." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((s) => s.slug === slug);
}
