import React from "react";
import ProjectLogosTools from "../home/project-logostoolsandtech";

const ToolsAndTech = () => {
    return (
        <div className="bg-gray-900 py-16 flex justify-center">
            <div className="max-w-6xl px-4 text-center text-white">
                {/* Title and Subtitle */}
                <div className="flex flex-row gap-6 mb-8">
                    <h2 className="text-[40px] text-left font-bold">Tools & Technology Expertise</h2>
                    <p className="text-[16px] text-left text-gray-400 mt-2">
                        Leveraging Cutting-Edge Tools & Technologies for Optimal DevOps Performance
                    </p>
                </div>

                {/* Icons Section */}
                <div className="flex justify-center items-center flex-wrap gap-8">
                    {/* Add your icons here */}
                    <ProjectLogosTools />
                </div>
            </div>
        </div>
    );
};

export default ToolsAndTech;
