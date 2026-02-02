export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-8 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Have a question or want to work together? Reach out!
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:thearc31@gmail.com"
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/arindam31"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            GitHub
          </a>
          <a
            href="/Resume_ArindamRoychowdhury_Python_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
