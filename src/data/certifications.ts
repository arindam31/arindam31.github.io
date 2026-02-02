export type CertificationProps = {
  title: string;
  issuer: string;
  dateObtained: string;
  credentialUrl?: string;
  description?: string;
  image?: string;
};

export const certifications: CertificationProps[] = [
  {
    title: "ISTQB Certified Tester Foundation Level (CTFL)",
    issuer: "ISTQB",
    dateObtained: "February 2011",
    description:
      "Internationally recognized software testing certification covering fundamentals, SDLC testing, static testing, test analysis & design, test management, and test tools.",
  },
  {
    title: "ÖSD Zertifikat A1",
    issuer: "ÖSD (Österreichisches Sprachdiplom)",
    dateObtained: "July 2025",
    description: "Sehr gut bestanden (Passed with distinction)",
    image: "/certificates/oesd-a1-certificate.jpg",
  },
];
