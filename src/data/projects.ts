import { SkillProps, skills } from "../data/skills";


export type ProjectType = {
  title: string;
  shortDescription?: string; // for homepage summary
  description: string;
  features?: string[]; // bullets of capabilities
  skills?: SkillProps[];
  testStatusGithub?: string;
  images?: string[];
  url?: string;
  dockerRunCommand?: string; // if you provide a Docker image
  github?: string; // shortcut to source
  slug: string; // used to route to `/project/:slug`
};


function getSkillByTitle(title: string): SkillProps | undefined {
  return skills.find((skill) => skill.title.toLowerCase() === title.toLowerCase());
}

function requireSkill(title: string): SkillProps {
  const skill = getSkillByTitle(title);
  if (!skill) throw new Error(`Skill not found: ${title}`);
  return skill;
}


export const projects: ProjectType[] = [
  {
    title: "Interview Management System",
    slug: "interview-management-system",
    description: "Manage Applications. Schedule Interview rounds by availability. Create Assessment forms. \
        View appointments in calendar. Receive alerts in email.",
    url: "https://github.com/arindam31/Interview_management",
    testStatusGithub: "https://img.shields.io/github/actions/workflow/status/arindam31/Interview_management/django.yml?branch=main",
    skills: [
      requireSkill("Python"),
      requireSkill("Django"),
      requireSkill("Docker"),
      requireSkill("Pytest"),
      requireSkill("React"),
      requireSkill("SQL Alchemy"),
    ],
    images: [
      "/screenshots/imt/calender_frontend.png",
      "/screenshots/imt/staff_list.png",
      "/screenshots/imt/schema_backend.png",
      "/screenshots/imt/admin.png",
      "/screenshots/imt/test_coverage_report.png",
    ]
  },
  {
    title: "City Weather App",
    slug: "city-weather-app",
    description: "This project demonstrates how to use Flask to write RESTful APIs with complete swagger documentation.",
    url: "https://github.com/arindam31/CityWeatherWithFlask",
    testStatusGithub: "https://img.shields.io/github/actions/workflow/status/arindam31/CityWeatherWithFlask/ci.yml?branch=master",
    skills: [
      requireSkill("Flask"),
      requireSkill("Docker"),
      requireSkill("React"),
      requireSkill("SQL Alchemy"),
    ],
    images:[
      "/screenshots/CityWeatherFlask/launch_page.png",
      "/screenshots/CityWeatherFlask/search_result_existing_past_data.png",
      "/screenshots/CityWeatherFlask/todays_weather_demo.png",
      "/screenshots/CityWeatherFlask/Swagger_docs.png",
    ],
    
  },
];