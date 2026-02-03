import React from 'react';

const BG_PURPLE = '#5A2C8F';
const DARK_PURPLE = '#4A2475';
const LIGHT_CYAN = '#4DD0E1';
const WHITE = '#FFFFFF';

export default function EmployeePerformanceEvaluationSplash() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: BG_PURPLE }}
    >
      {/* Centered logo and title */}
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        {/* Main logo image */}
        <div className="mb-8">
          <img 
            src="/imgs/image 1.png" 
            alt="Logo" 
            className="drop-shadow-lg max-w-[200px] h-auto"
          />
        </div>
        {/* Title */}
        <h1
          className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold max-w-lg leading-tight"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Employee Performance Evaluation App
        </h1>
      </div>

      {/* Bottom right image */}
      <div className="absolute bottom-6 right-6 sm:bottom-0 sm:right-0">
        <img 
          src="/imgs/WAH2 1.png" 
          alt="Bottom right decoration" 
          className="max-w-[300px] sm:max-w-[400px] h-auto"
        />
      </div>
    </div>
  );
}
