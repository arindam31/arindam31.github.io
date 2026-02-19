import Header from "../components/Header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Contact
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Reach out!
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-sm shrink-0">
              @
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold mb-0.5">Email</p>
              <a
                href="mailto:thearc31@gmail.com"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                thearc31@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600 dark:text-sky-300 font-bold text-sm shrink-0">
              in
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold mb-0.5">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/arindam-roychowdhury"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                linkedin.com/in/arindam-roychowdhury
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold text-sm shrink-0">
              GH
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold mb-0.5">GitHub</p>
              <a
                href="https://github.com/arindam31"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                github.com/arindam31
              </a>
            </div>
          </div>

          {/* Resume */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-sm shrink-0">
              CV
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold mb-0.5">Resume</p>
              <a
                href="/Resume_ArindamRoychowdhury_Python_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
