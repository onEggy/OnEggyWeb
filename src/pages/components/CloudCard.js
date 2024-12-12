// CloudCard.js
import React from 'react';
import { FaCloudDownloadAlt, FaCloudUploadAlt } from 'react-icons/fa';

const CloudCard = ({ title, active, onClick, children }) => {
    return (
        <div
            className={`bg-white rounded-lg shadow-md p-6 transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-50 hover:opacity-100 cursor-pointer'
                }`}
            onClick={onClick}
        >
            <div className="flex items-center mb-4">
                {title === 'AWS DevOps Services' ? (
                    <FaCloudDownloadAlt className="text-blue-500 h-8 w-8" />
                ) : (
                    <FaCloudUploadAlt className="text-blue-500 h-8 w-8" />
                )}
                <h3 className="text-xl font-bold ml-4">{title}</h3>
            </div>
            <div className="text-gray-600">{children}</div>
        </div>
    );
};

export default CloudCard;