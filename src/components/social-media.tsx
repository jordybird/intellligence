"use client";

import Image from "next/image";

export default function SocialMediaServices() {
  return (
    <div className="w-full px-4 md:px-8 py-16 flex justify-center">
      <div className="w-full bg-gray-100 rounded-[2rem] px-8 md:px-12 py-12">
        <h2 className="text-3xl md:text-4xl font-medium text-[#28282B] text-center mb-12">
          Social Media<br />Management Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* X (Twitter) Platform */}
          <div className="bg-white rounded-3xl p-8 flex flex-col">
            <div className="flex justify-start mb-8">
              <div className=" p-1 rounded-xl">
                <Image 
                  src="/social-media.png" 
                  alt="Twitter/X" 
                  width={36} 
                  height={36} 
                />
              </div>
            </div>
            <p className="text-gray-600">
              Leverage the power of X (formerly Twitter) with engaging content strategies, 
              trend analysis, and real-time engagement to build your brand presence and 
              connect with your target audience.
            </p>
          </div>

          {/* LinkedIn Platform */}
          <div className="bg-white rounded-3xl p-8 flex flex-col">
            <div className="flex justify-start mb-8">
              <div className=" p-1 rounded-xl">
                <Image 
                  src="/linkedin.png" 
                  alt="LinkedIn" 
                  width={36} 
                  height={36} 
                />
              </div>
            </div>
            <p className="text-gray-600">
              Establish your professional brand through strategic LinkedIn management. 
              We help create thought leadership content, engage with industry leaders, 
              and grow your professional network effectively.
            </p>
          </div>

          {/* Instagram Platform */}
          <div className="bg-white rounded-3xl p-8 flex flex-col md:col-span-2">
            <div className="flex justify-start mb-8">
              <div className=" p-1 rounded-xl">
                <Image 
                  src="/instagram.png" 
                  alt="Instagram" 
                  width={36} 
                  height={36} 
                />
              </div>
            </div>
            <p className="text-gray-600">
              Transform your Instagram presence with visually stunning content, 
              strategic hashtag utilization, and engaging Stories. We help you create 
              a cohesive visual identity that resonates with your audience and drives engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}