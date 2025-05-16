const skills = [
  {
    title: "Front End",
    items: [
      "Blazor WebAssembly",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Material Design",
      "Windows Forms",
      "Mobile-First Design"
    ],
  },
  {
    title: "Back End",
    items: [
      "ASP.NET Core (Web API)",
      ".NET 9",
      "MySQL",
      "SQL",
      "RESTful API Development",
      "Authentication (JWT, OAuth2)",
      "OpenAI API Integration",
      "Google APIs (Custom Search, YouTube Data)"
    ],
  },
  {
    title: "Programming Languages",
    items: [
      "C#",
      "Python",
      "Java",
      "C++",
      "JavaScript"
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (ECS, RDS, S3, CloudFront, Route 53, Cognito)",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Secrets Management (AWS Secrets Manager, .NET User Secrets)"
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      "Visual Studio",
      "Git & GitHub",
      "MySQL Workbench",
      "Android Studio",
      "Firebase",
      "Oracle SQL Developer"
    ],
  },
  {
    title: "Development Practices",
    items: [
      "Agile Methodologies",
      "Incremental Development",
      "Secure Coding Practices",
      "Version Control (Git)",
      "Unit Testing"
    ],
  },
];

const Skills = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl">
      {skills.map(({ title, items }) => (
        <div key={title}>
          <h3 className="text-base font-semibold text-slate-800 mb-2">{title}</h3>
          <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 text-sm">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
