import svgmobile from "../../../public/svg_mobile.svg";
import Image from "next/image";
const HowItWorks = () => {
    return (
        <div className="py-16 font-inter md:px-[5rem] bg-gray-50 max-md:py-1 bg-[radial-gradient(circle_at_bottom_left,_#37FFF4_-400%,_#ffffff_50%)] bg-[radial-gradient(circle_at_top_left,_#37FFF4_-400%,_#ffffff_70%)]">
            <div className="mt-[61px] md:mt-0">
                <h2 className="text-[29.76px] md:text-[50px] text-left font-bold mb-6 mx-12 max-md:mx-4 max-md:mb-0 max-md:text-3xl">
                    How It Works?
                </h2>
                <p className="text-gray-600 text-left text-[10.92px] md:text-[16px] mb-12 max-w-2xl mx-12 max-md:mx-4 max-md:max-w-lg max-md:mb-2 max-md:text-sm">
                    Whether you are looking to develop a strategy, migrating to
                    Cloud, obtain managed services, or further modernize and secure
                    your applications and infrastructure, request an expert
                    consultation at no cost.
                </p>
            </div>

            <div className="hidden md:block relative mx-auto mt-[12vh]">
                <div className="flex svgContainer justify-around items-center z-10 relative h-[300px]">
                    <div className="absolute bg-[#191A23] text-white rounded-lg p-6 shadow-lg w-[297px] left-[2%] z-10 top-[-2%]">
                        <h3 className="text-[55.17px] text-center font-bold mb-2">
                            01
                        </h3>
                        <h4 className="text-[25.45px] text-center font-semibold mb-2">
                            Assessment And Strategy
                        </h4>
                        <p className="text-[16px] text-center">
                            Hundreds of thriving businesses and Fortune 500
                            firms worldwide
                        </p>
                    </div>

                    <div className="absolute z-10 bg-[#222938] text-white rounded-lg p-6 shadow-lg w-[297px] left-[30%] top-[15%]">
                        <h3 className="text-[55.17px] text-center font-bold mb-2">
                            02
                        </h3>
                        <h4 className="text-[25.45px] text-center font-semibold mb-2">
                            Implementation
                        </h4>
                        <p className="text-[16px] text-center">
                            DevOps service provider for their mission-critical
                            projects.
                        </p>
                    </div>

                    <div className="absolute z-10 bg-[#191A23] text-white rounded-lg p-6 shadow-lg w-[297px] left-[54%] top-[-32%]">
                        <h3 className="text-[55.17px] text-center font-bold mb-2">
                            03
                        </h3>
                        <h4 className="text-[25.45px] text-center font-semibold mb-2">
                            Optimization
                        </h4>
                        <p className="text-[16px] text-center">
                            Hundreds of thriving businesses and Fortune 500
                            firms worldwide
                        </p>
                    </div>

                    <div className="absolute z-10 bg-[#222938] text-white rounded-lg p-6 shadow-lg w-[297px] left-[76%] top-[40%]">
                        <h3 className="text-[55.17px] text-center font-bold mb-2">
                            04
                        </h3>
                        <h4 className="ttext-[25.45px] text-center font-semibold mb-2">
                            Ongoing Support & Monitoring
                        </h4>
                        <p className="text-[16px] text-center">
                            Hundreds of thriving businesses and Fortune 500
                            firms worldwide
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex bg-[radial-gradient(circle_at_l,_#37FFF4_-500%,_#ffffff_30%)] flex-wrap gap-4 md:hidden mx-[2%] relative overflow-hidden h-fit">
                <Image src={svgmobile} alt="svg" className="absolute z-0 top-[55%] left-1/2  translate-x-[-50%] translate-y-[-53%] w-[216px] h-[344px]" />
                <div className="flex-[40%]  max-w-[50%] z-20">
                    <div className="w-full bg-[#222938] text-white rounded-lg py-6 px-4 shadow-lg mt-10 min-h-56 max-w-60 flex flex-col items-center mx-auto gap-4">
                        <h3 className="text-[33.58px] text-center font-bold">
                            01
                        </h3>
                        <h4 className="text-[15.49px] text-center font-semibold">
                            Assessment And Strategy
                        </h4>
                        <p className="text-[9.74px] text-center">
                            Hundreds of thriving businesses and Fortune 500
                            firms worldwide
                        </p>
                    </div>
                    <div className="w-full bg-[#222938] text-white rounded-lg py-6 px-4 shadow-lg mt-[26.87px] min-h-56 max-w-60 flex flex-col items-cente mx-auto gap-4">
                        <h3 className="text-[33.58px] text-center font-bold mb-2">
                            03
                        </h3>
                        <h4 className="text-[15.49px] text-center font-semibold mb-2">
                            Optimization
                        </h4>
                        <p className="text-[9.74px] text-center">
                            Hundreds of thriving businesses and Fortune 500
                            firms worldwide
                        </p>
                    </div>
                </div>
                <div className="flex-[40%] max-w-[50%] gap-2 mt-[40%] z-20">
                    <div className="w-full align-middle bg-[#222938] text-white rounded-lg py-6 px-4 shadow-lg mt-[10%] min-h-56 max-w-60 flex flex-col items-cente mx-auto gap-4">
                        <h3 className="text-[33.58px] text-center font-bold mb-2">
                            02
                        </h3>
                        <h4 className="text-[15.49px] text-center font-semibold mb-2">
                            Implementation
                        </h4>
                        <p className="text-[9.74px] text-center">
                            DevOps service provider for their mission-critical
                            projects.
                        </p>
                    </div>
                    <div className="w-full align-middle bg-[#222938] text-white rounded-lg py-6 px-4 shadow-lg mt-[26.87px] min-h-56 max-w-60 flex flex-col items-cente mx-auto gap-4">
                        <h3 className="text-[33.58px] text-center font-bold mb-2">
                            04
                        </h3>
                        <h4 className="text-[15.49px] text-center font-semibold mb-2">
                            Ongoing Support & Monitoring
                        </h4>
                        <p className="text-[9.74px] text-center">
                            Hundreds of thriving businesses and Fortune 500
                            firms worldwide
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;