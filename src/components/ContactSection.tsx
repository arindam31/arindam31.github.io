export default function ContactSection() {
    return (
      <section id="contact" className="scroll-mt-20 py-16 border-t rounded-2xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600 text-lg dark:text-gray-500">
            Have a question or want to work together? Just shoot me an email!
          </p>
  
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:thearc31@gmail.com"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Email Me
            </a>
            <a
              href="https://github.com/arindam31"
              target="_blank"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              GitHub
            </a>
            <a
              href="/Resume_ArindamRoychowdhury_Python_Developer.pdf"
              target="_blank"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Download Resume
            </a>
          </div>
  
          <p className="text-m text-gray-400 dark:text-gray-500 pt-6">Thanks for visiting! 🙌</p>
        </div>
      </section>
    );
  }
  