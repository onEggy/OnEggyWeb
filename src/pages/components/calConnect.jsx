import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalConnect() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#37fff4" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="flex font-inter flex-col md:flex-row gap-0 md:gap-[200px]  justify-between bg-[radial-gradient(circle_at_top_left,_#37FFF4_-400%,_#ffffff_50%)] px-[5px] md:px-[80px] py-16 min-h-screen">
      {/* Left Column: Text Content */}
      <div className="flex-1 ml-[20px] md:pr-8 text-left md:text-left mb-8 md:mb-0">
        <h3 className="text-[29.76px] md:text-[50px] font-bold text-black mb-4">
          Get a 30-minute, no-cost strategy session with a Cloud Services expert
        </h3>
        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
          Whether you are looking to develop a strategy, migrating to Cloud,
          obtain managed services, or further modernize and secure your
          applications and infrastructure, request an expert consultation at no
          cost.
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-[86.46px] text-base font-medium hover:bg-gray-800 transition duration-300">
          Let's Talk
        </button>
      </div>

      {/* Right Column: Calendar */}
      <div className="flex-1 w-full mr-[20px] max-w-lg h-[557px] shadow-lg rounded-[24.33px] overflow-hidden">
        <Cal
          namespace="30min"
          calLink="oneggy-aakash-sharma/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}
