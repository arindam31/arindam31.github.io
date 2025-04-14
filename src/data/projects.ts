import { Skill, skills } from "../data/skills";

export type Project = {
  title: string;
  description: string;
  skills?: Skill[];
  testStatusGithub?: string;
  images?: string[];
  url?: string;
};

function getSkillByTitle(title: string): Skill | undefined {
  return skills.find((skill) => skill.title.toLowerCase() === title.toLowerCase());
}

function requireSkill(title: string): Skill {
  const skill = getSkillByTitle(title);
  if (!skill) throw new Error(`Skill not found: ${title}`);
  return skill;
}


export const projects: Project[] = [
  {
    title: "Interview Management System",
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
  {
    title: "django-market",
    description: "Complete ecommerce app to cater to any kind of product.",
    url: "https://github.com/arindam31/django-market",
    skills: [
      requireSkill("Django"),
      requireSkill("Docker"),
    ]
  }
];