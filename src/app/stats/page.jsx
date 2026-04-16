"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const DonutChart = () => {
    const [timeline, setTimeline] = useState([]);
       useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline(storedData);
    }, []);

    const counts ={
      text: timeline.filter(item=>item.type==='text').length,
      video:timeline.filter(item=>item.type==='video').length,
      call:timeline.filter(item=>item.type==='call').length,
    }
   
  const data = [
    { name: "Text", value: counts.text, color: "#7C3AED" },
    { name: "Video", value:counts.video, color: "#2F855A" },
    { name: "Call", value: counts.call, color: "#084933" },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl mt-10">Friendship Analytics</h2>
      
      <div className="shadow mt-10 p-10 bg-white rounded-xl">
        <h2 className="text-xl font-semibold mb-4">By Interaction Type</h2>
        
        <div className="w-80 h-80 mx-auto flex items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={8}
                cornerRadius={10}
                stroke="none"
                isAnimationActive={true}
                animationBegin={200}    
                animationDuration={1500}
                animationEasing="ease-out" 
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip></Tooltip>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center items-center gap-6 mt-6">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <span 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-lg font-medium text-gray-700">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;