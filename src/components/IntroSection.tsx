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
      //  className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-12 scroll-mt-20"
       className="w-full bg-gradient-to-br from-blue-50 to-white py-20 px-6"
    >
      {/* Text content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          {headerText}
        </h1>
        <section>
          <p className="text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
            {bodyText}
          </p>
        </section>

        {/* Profile photo */}
      {showImage && (
          <div className="flex-1 flex justify-center">
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
