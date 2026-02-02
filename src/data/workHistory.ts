import { SkillProps, skills } from "./skills";

export type WorkItem = {
    title: string;
    company: string;
    period: string;
    location: string;
    description?: string;
    skills?: SkillProps[];
    achievements?: string[];
};

function getSkillByTitle(title : string): SkillProps | undefined {
    return skills.find((skill) => skill.title.toLowerCase() === title.toLowerCase());
}

function requireSkill(title: string): SkillProps {
    const skill = getSkillByTitle(title);
    if (!skill) throw new Error(`Skill not found: ${title}`);
    return skill;
  }


export const workHistory: WorkItem[] = [
    {
        title: "QA Automation Engineer — Deployment & System Validation",
        company: "Oraion",
        description: "Remote",
        period: "August 2025 - January 2026",
        location: "Remote",
        achievements: [
            "Developed and maintained Python-based automated validation checks to verify system readiness and correct behavior across deployed environments.",
            "Executed automated and manual integration tests to validate service availability, configuration correctness, and end-to-end system functionality.",
            "Integrated validation workflows into Git-based CI/CD pipelines, enabling repeatable quality gates during release and deployment processes.",
            "Designed health and readiness checks to ensure systems were operational and met expected functional criteria before release completion.",
            "Improved release reliability by replacing manual verification steps with repeatable, automated validation workflows."
        ],
        skills: [
            requireSkill("Python"),
            requireSkill("Pytest"),
            requireSkill("Docker"),
        ]
    },
    {
        title: "Senior Software Engineer",
        company: "Neke-Neke GmbH",
        description: "Medical softwares and Software services",
        period: "April 2023 - December 2024",
        location: "Salzburg (Full remote)",
        achievements: [
            "Led a project creating a complete Patient Appointment booking system.",
            "Designed RESTful APIs, planned Domain logic, and implemented complete API tests with PyTest",
            "Complete dockerized deployment",
            "Git Workflow for test and deploy.",
            "Brought Django as backend tool into the company and showed/trained how to work with it.",
            "Introducted Sentry for all running projects for continuous performance monitoring"
        ],
        skills:  [
            requireSkill("Django"),
            requireSkill("Docker"),
            requireSkill("Restful APIs"),
            requireSkill("AWS"),
            requireSkill("Postgres"),
            requireSkill("Redis"),
            requireSkill("Sentry"),
            requireSkill("Celery"),
        ]
    },
    {
        title: "Python Developer and Tester",
        company: "Pixofarm GmbH",
        description: "Agriculture Intelligence",
        period: "July 2021 - March 2023",
        location: "Vienna",
        achievements: [
            "Took charge of Testing mobile, customer web app and admin site",
            "Automated API testing with Python and Pytest",
            "Took charge of legacy Django based code and improved it bringing order in chaos.",
            "Created companies first AWS lambda based feature",
            "Created Dashboards showing metrics from data."
        ],
        skills:  [
            requireSkill("Django"),
            requireSkill("Docker"),
            requireSkill("Restful APIs"),
            requireSkill("Pytest"),

        ]
    },
    {
        title: "Test Engineer",
        company: "Omicron GmbH",
        description: "Power Industry testing and diagnosis instruments",
        period: "October 2019 - April 2021",
        location: "Klaus (Vorarlberg)",
        achievements: [
            "Maintained and expanded Pytest based Test Framework writing integration tests for OEM products. ",
            "Monitored daily test runs on Build bot (Continuous testing tool) and debugged issues",
            "Monitored system performance and added performance tests using Grafana , Prometheus, and InfluxDB",
        ],
        skills:  [
            requireSkill("Python"),
            requireSkill("Docker"),
            requireSkill("PyTest"),
            requireSkill("Prometheus"),
            requireSkill("Grafana"),            
        ]
    },
    {
        title: "Principal Engineer (QA & Test Automation)",
        company: "IFM Engineering Pvt. Ltd",
        description: "Industrial embedded vision devices - Python-based test automation for camera firmware and system-level functionality.",
        period: "March 2014 - September 2019",
        location: "Pune, India",
        achievements: [
            "Designed and implemented Python-based test frameworks for embedded camera devices (O3D & O3M), performing grey-box testing of firmware-exposed interfaces and system behavior.",
            "Developed automated tests for XML-RPC services, socket-based commands, and device control interfaces, validating functional correctness and system stability.",
            "Implemented scenario-based, validation, and stress tests to verify camera behavior under normal and edge-case conditions.",
            "Built a data-driven test framework to validate camera parameters and internal processing blocks (DSP, KP, GP) over CAN protocol and Ethernet communication.",
            "Executed tests both locally and remotely via Jenkins-based CI pipelines, enabling repeatable and unattended test execution on physical devices.",
            "Collaborated closely with firmware and hardware engineers to analyze failures, validate fixes, and ensure reliable device behavior before releases.",
            "Maintained test infrastructure, test documentation, and execution workflows to support long-term product validation."
        ],
        skills: [
            requireSkill("Python"),
            requireSkill("unittest"),
            requireSkill("Test Framework Designing"),
        ]
    },
    {
        title: "QA Tester",
        company: "bigbasket.com",
        description: "India's largest ecommerce service for groceries. First opportunity to work with automation and Python.",
        period: "March 2012 - March 2014",
        location: "Bangalore, India",
        achievements: [
            "Performed web testing manually and using Selenium WebDriver for the e-commerce platform.",
            "Created automation framework for the website using Selenium WebDriver.",
            "Wrote unit tests for the complete backend using Django's unittest module.",
            "Conducted mobile testing on iOS and Android applications."
        ],
        skills: [
            requireSkill("Python"),
            requireSkill("unittest"),
            requireSkill("Selenium"),
        ]
    },
    {
        title: "Test Analyst",
        company: "Electronic Arts (EA)",
        description: "Testing mobile games on various mobile and handheld devices.",
        period: "February 2010 - March 2012",
        location: "Hyderabad, India",
        achievements: [
            "Tested mobile games across all mobile platforms and handheld devices.",
            "Tested payment processes and gateways for in-game purchases.",
        ],
        skills: [
            requireSkill("Python"),
        ]
    },
]

