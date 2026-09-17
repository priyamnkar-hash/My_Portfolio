import { ProjectItem, SkillProgress, ProgrammingSkill, EducationItem } from '../types';

export const HERO_DATA = {
  specCode: '772-B',
  systemTag: 'SYSTEM ARCHITECT // V.01',
  structTag: '021.STRUCT',
  headline: 'Building Bridges & Building Systems',
  subtitle:
    'Civil Engineering Undergraduate & Software Developer bridging the gap between physical infrastructure and digital environments with structural precision.',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAheplpawXHz1m8qkupVlRv7luBVd_maOSM7y7PviSWMwKIEfmmamMg5ZQwp_CLZyUYXuf6WgzWuHxZ_D1JV6Z9i8xyGewkswnEk93-L5-rMtIz-0whg-TrpOwnO7PKfEnFqrjYB3welc17VuN2cUAw8Z4jjHsiuEABsdRWceAeJPlkZknB0tz1WzmbnfxvevJzJ2GEtdSRKWtgwBDyDTmvul2pVB3xi2y6KlfYxzyMAKB6MjrGGdFkvVlCHM3nu3g8G4jHi3ojfw',
  latestDeployment: {
    label: 'LATEST_DEP',
    title: 'BridgeOS v2.4',
    status: 'ACTIVE_ENGINE',
  },
};

export const BENTO_STRUCTURAL_ITEMS = [
  {
    id: 'urban-truss',
    modCode: 'MOD_01',
    title: 'Urban Truss System',
    description:
      'Designing high-resilience structural frameworks for dense urban environments using generative algorithms.',
    tags: ['AutoCAD', 'C++'],
    gridSpan: 'md:col-span-2 md:row-span-2',
    icon: 'account_tree',
    specs: {
      structuralSystem: 'Space Truss Octahedral Lattice (Grade 50 Steel)',
      algorithmicApproach: 'Generative Evolutionary Stress Minimization',
      loadCapacity: 'Dead Load 4.2 kN/m², Live Load 7.5 kN/m²',
      simulationEngine: 'Finite Element Analysis (Custom C++ Solver)',
      languageStack: ['AutoCAD API', 'C++20', 'OpenMP', 'VTK'],
      benchmark: '38% mass reduction under equivalent Eurocode 3 load combinations',
    },
  },
  {
    id: 'digital-twin',
    modCode: 'MOD_02',
    title: 'Digital Twin Engine',
    description: 'Real-time infrastructure monitoring dashboard.',
    tags: ['IoT', 'WebGL'],
    gridSpan: 'md:col-span-2',
    icon: 'precision_manufacturing',
    specs: {
      structuralSystem: 'Sensor-Instrumented Cable Stayed Truss',
      algorithmicApproach: 'Kalman Filter State Estimation & Anomaly Detection',
      loadCapacity: 'Continuous real-time dynamic oscillation dampening',
      simulationEngine: 'Three.js / WebGL Custom Shaders with WebSockets telemetry',
      languageStack: ['TypeScript', 'WebGL', 'Node.js', 'TimescaleDB'],
      benchmark: 'Sub-40ms latency telemetry ingest across 420 strain gauge nodes',
    },
  },
  {
    id: 'hydraulics',
    modCode: 'P_FILE_09',
    title: 'Hydraulics',
    description: 'Computational fluid dynamics for storm-surge abatement barriers.',
    tags: ['OpenFOAM', 'Python'],
    gridSpan: 'md:col-span-1',
    icon: 'water_drop',
    specs: {
      structuralSystem: 'Pneumatically Actuated Radial Surge Gates',
      algorithmicApproach: 'Navier-Stokes Eulerian Multiphasic Hydrodynamic Simulation',
      loadCapacity: 'Head pressure rated to 14.8m tidal storm surges',
      simulationEngine: 'OpenFOAM & Python NumPy / SciPy automation pipeline',
      languageStack: ['Python', 'OpenFOAM', 'C++', 'Bash'],
      benchmark: '99.4% surge energy dissipation with minimized cavitation risk',
    },
  },
  {
    id: 'bim-auth',
    modCode: 'P_FILE_12',
    title: 'BIM Auth',
    description: 'Cryptographic permissioning & audit trail for IFC architectural models.',
    tags: ['Revit API', 'Rust'],
    gridSpan: 'md:col-span-1',
    icon: 'security',
    specs: {
      structuralSystem: 'ISO 19650 Compliant Common Data Environment (CDE)',
      algorithmicApproach: 'Merkle-DAG Differential Versioning for IFC Entities',
      loadCapacity: 'Concurrent collaboration across 60+ engineering disciplines',
      simulationEngine: 'Revit .NET SDK & Rust WebAssembly verification daemon',
      languageStack: ['Rust', 'C# / Revit API', 'IFCOpenShell', 'GraphQL'],
      benchmark: 'Zero collision desynchronization over 1.2M parametric objects',
    },
  },
];

export const PROJECTS_ARCHIVE: ProjectItem[] = [
  {
    id: 'shm-app',
    serialNumber: 'SN: 882-SHM',
    title: 'Structural Health Monitoring App',
    category: 'Hybrid',
    tags: ['Engineering', 'Code'],
    description:
      'Real-time sensor data integration for predictive maintenance of industrial steel structures.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbWT__oYfp_-DxYjh1AZ2pcj6c-3iMDu7cwPoa5nnTkY_N5zycqIDUlSFXZeCKyNA_VpmOtawVtiDBaU-LlavR7MPWA3fa8gLI0J898Gt6GEJNcMAkpEkY-IBV5Xl7QQh1TU0equ6a74Yf7mE_W1-q7PVIgLlVUsGB-uTNQDm7-G9k44NLjKzwU1pxD0ZcEyE3YShpGaW1mffgVY_Pky2bSJGLudF6kex2bjLy3BXP8wn-cxnkKWclKYqGvVRrH0wSHKMs-xUNOw',
    altText:
      'Technical blueprint of a bridge structure with digital data overlays and clean white architectural lines on a dark slate background',
    specs: {
      structuralSystem: 'Continuous Truss & Suspension Hybrid Bridge (Span: 480m)',
      algorithmicApproach: 'Fourier Modal Analysis & Machine Learning Micro-Crack Forecasting',
      loadCapacity: 'AASHTO HL-93 Standard Live Loading + Fatigue Category A',
      simulationEngine: 'Python SciPy Fast Fourier Transform + InfluxDB Time-Series',
      languageStack: ['Python', 'TypeScript', 'Tailwind', 'TimescaleDB', 'Kafka'],
      benchmark: 'Predicted structural deflection within 0.8mm of physical LiDAR verification',
    },
  },
  {
    id: 'bridge-opt',
    serialNumber: 'SN: 404-OPT',
    title: 'Bridge Optimization Algorithm',
    category: 'Code',
    tags: ['Code'],
    description:
      'Evolutionary algorithm designed to minimize material usage while maintaining safety factors.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCuzS2tBe3xaB9w_LzHd1RkaqECFIyTsLTuAQ1o1VzF1qhFn8og-eWfDgDcC46Cwm3sqFpDgYIrfOyU-YdbM7pcqGxgRl0Q6pT_VhDA8Q9CGYRk1ebzHIUU0UUlnmGUX0d0KyIqjJS6sCwD2g6Kyg8-5vs8S_lGQDWmWNvAkLFFYZxH7pSHoIlKVDUDol0uiOozrq1ZyyPtuaOcj-JRGJXXY21SNovh0u0WFmKhLs3_QTOZ97mQHNoofBEa72MGiVxGfwbMfLsBIA',
    altText:
      'Abstract visualization of a genetic algorithm or neural network with glowing cyan data points and thin connecting lines',
    specs: {
      structuralSystem: 'Topological Truss Member Topology',
      algorithmicApproach: 'NSGA-II Multi-Objective Evolutionary Algorithm (Pareto Front)',
      loadCapacity: 'Variable point loads up to 1,200 kN with AISC safety factor 1.67',
      simulationEngine: 'Direct Stiffness Method matrix solver written in C++',
      languageStack: ['C++20', 'Python (Binding)', 'Matplotlib', 'Eigen Library'],
      benchmark: '24.6% reduction in raw steel tonnage without reducing allowable deflection',
    },
  },
  {
    id: 'steel-design',
    serialNumber: 'SN: 119-STL',
    title: 'Steel Design Project',
    category: 'Engineering',
    tags: ['Engineering'],
    description:
      'Comprehensive structural analysis and BIM modeling for a high-rise commercial development.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBf6EWfAThZSNwkRYFQp2S6fkXKwBABqHKeLoIoLD1UUp8-jupX59Rkvxp9jg9jZAemafvqJ9Tj4aOdhPfBxUpa0kgoIMGyJAGihHciOeEcEL31d-VtjwqIR5_hyF4KEPSu7HRnUcx7vgCEVz1zlnUTFV11Eu6zHeNRPELHAVqLQyWhssDIr_DXDsVyXNNoz2HS4e7mR3asOZEFRTFHYxCV5rKrtaPP071rMKsOVA049TCm4oFWN47UvatQBkAZdgi87YE_mhkWIA',
    altText:
      'Close-up of a high-tech steel joint connection with industrial bolts and polished metallic surfaces in cold lighting',
    specs: {
      structuralSystem: 'Composite Steel Moment Frame with Eccentric Braced Frames (EBF)',
      algorithmicApproach: 'Non-Linear Pushover Seismic Analysis (ASCE 7-16 & AISC 360)',
      loadCapacity: 'Wind load 140 mph (3-second gust), Seismic Design Category D',
      simulationEngine: 'Autodesk Revit + ETABS Structural Design Package',
      languageStack: ['Revit Dynamo', 'Python', 'ETABS OpenAPI'],
      benchmark: 'Verified drift index 1/450 under 50-year return wind event',
    },
  },
  {
    id: 'iac-framework',
    serialNumber: 'SN: 501-IFR',
    title: 'Infrastructure-as-Code Framework',
    category: 'Code',
    tags: ['Code'],
    featured: true,
    description:
      'Custom Terraform modules for deploying highly-available architectural simulation environments.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAw9kGYkDZBUrow6ZrjsCguGMSQPlTbdvLRyI5qHmRGvhxjpcZ3tpTR0dvLpvn4xMLPMwVwo9iVLQTX0gcEpZnjZ0oRe5t4jB_DceBVFjyuYaHFpxEPDc2q6mKd7p8FRKVynHXG2QpoRkRj0S7gMv82BFyeqg0lcD_s_FCn0R5klXWzcX8XD2Gml37q9euZYU7A1Cr6jzW97NWT9eL4ec24LrjjENE7FNYYxsCfk7GOOb0UVKf9s86t1Y76LYSY1iQaEusRKsJ6WA',
    altText:
      'Deep server rack rows with blinking green and blue LEDs in a high-security data center environment',
    specs: {
      structuralSystem: 'Cloud-Native HPC Cluster with Elastic Compute Scaling',
      algorithmicApproach: 'Immutable Infrastructure Provisioning & GitOps Automation',
      loadCapacity: 'Up to 2,048 parallel CPU cores for finite element batch calculations',
      simulationEngine: 'Docker containerized OpenFOAM/CalculiX on Kubernetes nodes',
      languageStack: ['HCL / Terraform', 'Go', 'Docker', 'Kubernetes', 'AWS/GCP'],
      benchmark: 'Spins up 128-node CFD cluster from cold commit in under 4.2 minutes',
    },
  },
];

export const ENGINEERING_SKILLS: SkillProgress[] = [
  { name: 'AutoCAD / Revit', percentage: 95 },
  { name: 'Structural Analysis', percentage: 90 },
  { name: 'BIM Coordination', percentage: 85 },
  { name: 'Project Management', percentage: 80 },
];

export const PROGRAMMING_SKILLS: ProgrammingSkill[] = [
  {
    id: 'python',
    name: 'Python',
    iconName: 'terminal',
    subtitle: 'DATA & AUTOMATION',
    description: 'NumPy, SciPy, finite element scripts, algorithmic design automation.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    iconName: 'javascript',
    subtitle: 'CORE ENGINE',
    description: 'Modern ESNext, runtime performance, reactive computational graphs.',
  },
  {
    id: 'react',
    name: 'React',
    iconName: 'deployed_code',
    subtitle: 'INTERFACE LOGIC',
    description: 'Declarative component architecture, custom hooks, real-time UI state.',
  },
  {
    id: 'sql',
    name: 'SQL',
    iconName: 'database',
    subtitle: 'PERSISTENCE',
    description: 'Relational data modeling, schema normalization, time-series telemetry.',
  },
  {
    id: 'git',
    name: 'Git',
    iconName: 'gite',
    subtitle: 'VERSION CONTROL',
    description: 'Branching protocols, automated CI/CD pipelines, release versioning.',
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    iconName: 'api',
    subtitle: 'CONNECTIVITY',
    description: 'Secure endpoints, microservice routing, WebSocket real-time streams.',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.S. Civil Engineering',
    institution: 'Institute of Structural Excellence',
    period: '2018 — 2022',
    detail: 'Focused on Computational Analysis and Material Science.',
    active: true,
  },
  {
    degree: 'Full-Stack Certification',
    institution: 'Tech-Draft Academy',
    period: '2022 — 2023',
    detail: 'Modern web systems, cloud infrastructure, and distributed databases.',
    active: false,
  },
];

export const ABOUT_DESK_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDIXXgyUPzAaiDvuXimW-EYEXB-FCmwdr8Z2UsYRwnk4VD581gX6El6j_oh80Wy2gEC39f74eg36VMzdlX1Nuc9iN2Tb8vVnBec17ZLYwx1zWy6u9fmT58dzxB6sXhQAJC7qQz6Ue7lexqBU3JVHuVu0I4mFzOEW4UvMn30ziTXJXERS52bFS9UvEq32oMmM7LSQsHWeJIQEVP4TewsilxgkVOCUsyaTZtD6wDU50QudTEy85xHeFpBXmtwyqOXJ3v_sZ_7GDMeQQ';
