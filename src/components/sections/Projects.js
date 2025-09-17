const github_link = "https://github.com/robertmorgan-se"
const projects = [
  {
    title: "OpenEdAI",
    description:
      "An AI-powered educational platform that generates personalized learning paths using OpenAI and Google APIs. Built as a full-stack capstone project with Blazor WebAssembly, ASP.NET Core Web API, and hosted entirely on AWS.",
    tech: [
      "C#", ".NET 9", "Blazor WebAssembly", "ASP.NET Core API",
      "AWS (ECS, RDS, S3, Cognito, CloudFront)",
      "OpenAI API", "Google Custom Search", "YouTube Data API"
    ],
    github: `${github_link}` + "/OpenEdAI",

  },
  {
    title: "Pomodoro Notifier",
    description:
      "A desktop Pomodoro timer built with Python and Tkinter. Includes customizable work/break intervals, real-time countdown, pop-up notifications, and optional sound playback. Designed for productivity and ease of use.",
    tech: ["Python", "Tkinter", "PyInstaller", "Pygame"],
    github: `${github_link}` + "/Pomodoro_Notifier",
  },
  {
    title: "Inventory Management System",
    description:
      "A feature-rich inventory management desktop app built in C# for a small manufacturing company. Includes custom part/product tracking, validation, and intuitive form-based UI.",
    tech: ["C#", ".NET", "WinForms", "UML", "Object-Oriented Design"],
    github: `${github_link}` + "/Inventory-Management-System",
  },
  {
    title: "Image Text Reader and Renamer",
    description:
      "A Python utility that uses OpenCV and Tesseract OCR to read text from images and rename the files automatically. Built to help with bulk renaming tasks like product images for e-commerce. Includes a GUI for preview and confirmation.",
    tech: ["Python", "OpenCV", "Tesseract OCR", "Tkinter", "Pillow"],
    github: `${github_link}` + "/Image_Rename",
  },
  {
    title: "Coin Flip Game",
    description:
      "A Java-based multiplayer coin flipping game created as a class project. Simulates players flipping coins (penny, nickel, dime, quarter) in rounds. Players earn money based on heads and compete to reach $1 first. Features OOP design with validation, formatting, and GUI interaction using `JOptionPane`.",
    tech: ["Java", "OOP", "Swing (JOptionPane)", "Class Design"],
    github: `${github_link}` + "/CoinFlip_java",
  },
  {
    title: "Minecraft Discord Bot",
    description:
      "A custom Python-based Discord bot built for a Minecraft server. Handles user-specific location calculations and stores data via a local database. Developed from scratch as a first chatbot project.",
    tech: ["Python", "Discord API", "SQLite", "Bot Development"],
    github: `${github_link}` + "/Discord_Bot",
  },
];

const Projects = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 auto-rows-fr">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col justify-between h-full bg-white border border-gray-200 rounded-lg shadow-sm p-5"
        >
          <div>
            <div className="mb-2 flex justify-between items-start">
              <h3 className="text-lg font-semibold text-slate-800">{project.title}</h3>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 underline hover:text-slate-800 transition duration-200 hover:underline underline-offset-2 decoration-slate-600"
                >
                  Live
                </a>
              )}
            </div>

            <p className="text-gray-700 text-sm mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 border border-gray-200 rounded px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* GitHub link pinned to bottom, left aligned */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-slate-600 hover:text-slate-800 font-medium transition duration-200 hover:underline underline-offset-2 decoration-slate-600"
          >
            View on GitHub →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
