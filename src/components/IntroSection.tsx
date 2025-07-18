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
      className="w-full rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 text-gray-800 dark:text-gray-100 py-20 px-6"     
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h5 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight">
            {headerText}
          </h5>
          <p className="text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
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
    </section>
  );
}
