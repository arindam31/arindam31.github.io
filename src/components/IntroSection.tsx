import React from "react";

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
    <section
      id="intro"
      className="w-full rounded-lg shadow bg-gradient-to-br from-blue-50 to-white 
      dark:from-gray-800 dark:to-gray-800 
      text-gray-800 dark:text-gray-100 py-10
      border border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-screen-lg mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h5 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight">
              {headerText}
            </h5>
            <p className="text-xl text-gray-600  dark:text-gray-400 not-last-of-type:max-w-xl mx-auto md:mx-0">
              {bodyText}
            </p>
          </div>

          {/* Profile photo */}
          {showImage && (
            <div className="flex-shrink-0">
              <img
                src="/Profile_Pic_Arindam.jpg"
                alt="Profile"
                className="w-48 h-48 rounded-full shadow-md object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
