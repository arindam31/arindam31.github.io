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
        <p className="text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
          I’m a Software Professional with a penchant for working with Python.
          I have been in roles of Python developer in Test (SDET) , Data Analyst, and lately, Senior Backend Engineer

          I have helped companies stand on the shoulders of products I created, nurtured and delivered to clients.
        </p>

        <p className="text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
        In my last 2 jobs spanning 3 years as a Senior Backend developer, I build 
          scalable web apps using Django. These products are in production at the customer's site.          
        </p>
        <p className="text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
        I love clean testable code, complete test automation of APIs and detailed documentation.

        I like to work in a process where I can plan my tasks, divide them into parts and deliver
        as per goals defined.
        </p>
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
