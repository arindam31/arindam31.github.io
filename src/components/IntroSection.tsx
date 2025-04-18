export default function IntroSection() {
  return (
    <section
      id="intro"
      //  className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-12 scroll-mt-20"
       className="w-full bg-gradient-to-br from-blue-50 to-white py-20 px-6"
    >
      {/* Text content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hey, I'm Arindam 👋
        </h1>
        <section>
          <p className="text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
            I’ve been hanging out with Python since 2012 — it’s my 
            favorite sidekick for solving problems and building 
            things that make life easier. I use Django, FastAPI, 
            or Flask to whip up REST APIs, and I’m a big fan of writing tests (yes, really!) 
            with <code>unittest</code>. You’ll usually find me poking around GitHub or 
            answering questions on Stack Overflow just for fun.
          </p>
        </section>

        {/* Profile photo */}
      <div className="flex-1 flex justify-center">
          <img
            src="/Profile_Pic_Arindam.jpg"
            alt="Arindam profile photo"
            className="w-48 h-48 rounded-full shadow-md object-cover"
          />        
      </div>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#work"
            className="px-5 py-2 border border-gray-400 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Work History
          </a>
        </div>
      </div>

    </section>
  );
}
