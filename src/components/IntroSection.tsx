export default function IntroSection() {
    return (
      <section
        id="intro"
        className="min-h-screen flex flex-col justify-center items-start gap-6"
      >
        <h1 className="text-5xl font-bold leading-tight">
          Hey, I'm Arindam 👋
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          I'm a full-stack developer with 4 years of experience building modern,
          scalable web apps using React, Django, Flask, and more. I love clean
          design, clever architecture, and learning new tools.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    );
  }
  