// src/components/VideoComponent.tsx
import React, { useState } from "react";

const VideoComponent: React.FC = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div className="relative w-full h-screen">
            <video
                className="object-cover w-full h-full"
                autoPlay
                muted
                loop
                onCanPlayThrough={handleVideoLoad}
            >
                <source src="demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {!isVideoLoaded && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
                    <p className="text-white text-3xl">Loading...</p>
                </div>
            )}
        </div>
    );
};

export default VideoComponent;
