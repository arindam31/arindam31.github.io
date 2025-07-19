import { Skill, skills } from "./skills";

export type WorkItem = {
    title: string;
    company: string;
    period: string;
    location: string;
    description?:string;
    skills?: Skill[];
};

function getSkillByTitle(title : string): Skill | undefined {
    return skills.find((skill) => skill.title.toLowerCase() === title.toLowerCase());
}

function requireSkill(title: string): Skill {
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
        title: "Backend Python Developer",
        company: "Pixofarm GmbH",
        description: "Agriculture Intelligence",
        period: "July 2021 - March 2023",
        location: "Vienna",
        skills:  [
            requireSkill("Django"),
            requireSkill("Docker"),
            requireSkill("Restful APIs"),
        ]
    },
    {
        title: "Test Engineer",
        company: "Omicron GmbH",
        description: "Power Industry testing and diagnosis instruments",
        period: "October 2019 - April 2021",
        location: "Klaus (Vorarlberg)",
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

