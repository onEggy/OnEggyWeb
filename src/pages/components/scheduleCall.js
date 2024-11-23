import React from "react";
import Cal from "@calcom/embed-react";
import Headline from "./headline";

const ScheduleCall = () => {
  const title = "Schedule Call";
  const desc =
    "Your growth journey starts here. Schedule a free consultation with us, right at your fingertips!";

  return (
    <div className="pt-10 sm:pt-16">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <Headline
          title={title}
          desc={desc}
          descCss="md:mt-6 text-gray-600 text-base sm:text-lg"
        />

        {/* Cal.com Inline Widget */}
        <div className="mt-10 sm:mt-12 bg-white overflow-hidden">
          <div className="w-full h-[500px] sm:h-[600px] p-4 sm:p-6 md:p-8 lg:p-10">
            <Cal
              calLink="oneggy-aakash-sharma/30min"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
