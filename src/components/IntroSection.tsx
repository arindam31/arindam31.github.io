interface IntroSectionProps {
  headerText: string;
  bodyText: string;
  showImage?: boolean;
}

export default function IntroSection({
  headerText,
  bodyText,
  showImage = true,
}: IntroSectionProps) {
  return (
    <section id="intro" className="py-6">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Profile photo */}
        {showImage && (
          <div className="flex-shrink-0">
            <img
              src="/Profile_Pic_Arindam.jpg"
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-md object-cover border-2 border-blue-200 dark:border-gray-600"
            />
          </div>
        )}

        {/* Text content */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {headerText}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            {bodyText}
          </p>
        </div>
      </div>
    </section>
  );
}
