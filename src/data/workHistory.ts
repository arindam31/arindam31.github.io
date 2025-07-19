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
        title: "Principle Engineer",
        company: "IFM Electronic GmbH",
        description: "Electronic sensors and devices for automation.",
        period: "March 2014 - September 2019",
        location: "Tettnang, Germany",
        skills:  [
            requireSkill("Python"),
            requireSkill("unittest"),
            requireSkill("Test Framework Designing"),
                ]
    },
    {
        title: "Python developer in Test Automation",
        company: "bigbasket.com",
        description: "India's largest ecommerce service for groceries.",
        period: "November 2016 - February 2019",
        location: "Bangalore, India",
        skills:  [
            requireSkill("Python"),
            requireSkill("unittest"),
            requireSkill("Selenium"),
            requireSkill("Django"),
        ]
    },
]

