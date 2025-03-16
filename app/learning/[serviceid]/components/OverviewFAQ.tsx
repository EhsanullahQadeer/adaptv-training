"use client"

import React from 'react'
import { useState } from "react";


const OverviewFAQ = () => {
    const [selectedTab, setSelectedTab] = useState("overview"); 

  return (
    <div>
         <div className="flex items-center border-b border-[#0000001A]">
                <span
                  className={`py-[14px] px-[16px] font-semibold  text-center text-black w-1/2 border-b-2 ${
                    selectedTab === "overview"
                      ? "border-black "
                      : "border-transparent "
                  }`}
                  onClick={() => setSelectedTab("overview")}
                >
                  Overview
                </span>
                <span
                  className={`py-[14px] text-center font-semibold  text-black  w-1/2 px-[16px] border-b-2 ${
                    selectedTab === "faq"
                      ? "border-black "
                      : "border-transparent "
                  }`}
                  onClick={() => setSelectedTab("faq")}
                >
                  FAQ
                </span>
              </div>
              <div className="p-4">
                {selectedTab === "overview" && <p>Overview content goes here...</p>}
                {selectedTab === "faq" && <p>FAQ content goes here...</p>}
              </div>
    </div>
  )
}

export default OverviewFAQ
