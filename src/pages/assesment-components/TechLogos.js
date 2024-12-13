import React from "react";
import dynamic from "next/dynamic";
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });


import {
    siAmazonwebservices,
    siDigitalocean,
    siHeroku,
    siOpenstack,
    siPythonanywhere,
    siGooglecloud,
    siKubernetes,
    siTerraform,
    siDocker,
    siGrafana,
    siPrometheus,
    siRedis,
    siElasticsearch,
    siMysql,
    siMongodb
} from "simple-icons";

const techIcons = [
    { icon: siAmazonwebservices, label: "AWS" },
    { icon: siDigitalocean, label: "DigiOcean" },
    { icon: siHeroku, label: "Heroku" },
    { icon: siOpenstack, label: "Openstack" },
    { icon: siPythonanywhere, label: "Python" },
    { icon: siGooglecloud, label: "Google Cloud" },
    { icon: siKubernetes, label: "K8S" },
    { icon: siTerraform, label: "Terraform" },
    { icon: siGrafana, label: "Grafana" },
    { icon: siPrometheus, label: "Promet." },
    { icon: siRedis, label: "Redis" },
    { icon: siDocker, label: "Docker" },
    { icon: siElasticsearch, label: "ELK" },
    { icon: siMysql, label: "MySQL" },
    { icon: siMongodb, label: "MongoDB" }
];


const TechLogos = () => {
    return (
        <div className="py-12 bg-white">
                <h2 className="text-center text-4xl font-semibold text-gray-800 mb-10">
                    We Optimize Across Major Platforms
                </h2>
                <Marquee gradient={true} speed={40} className="overflow-hidden" autoFill={true} gradientWidth={20}>
                    <div className="flex items-center justify-center space-x-8 px-4">
                        {techIcons.map(({ icon, label }, index) => {
                            if (!icon || !icon.hex || !icon.path) {
                                console.warn(`Missing properties for icon: ${label}`);
                                return null;
                            }
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center w-24 h-24 p-4 border border-gray-200 shadow-sm hover:shadow-lg rounded-lg transition-transform transform"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill={`#${icon.hex}`}
                                        className="w-20 h-20"
                                    >
                                        <path d={icon.path} />
                                    </svg>
                                    <span className="mt-3 text-sm justify-center font-medium text-gray-800">
                                        {label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </Marquee>
            </div>
    )
}

export default TechLogos;