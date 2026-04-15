'use client'
import React, { useEffect, useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { IoMdText } from 'react-icons/io';
import { MdWifiCalling2 } from 'react-icons/md';

const Timeline = () => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline(storedData);
    }, []);
    return (
        <div>
            (
            <div className="p-5 container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Timeline</h1>
                    
                {
                    timeline.length === 0 ? (
                        <p>No data found</p>
                    ) : (
                        timeline.map((item, index) => (
                            <div key={index} className="shadow p-3 mb-3 rounded flex items-center gap-5  ">
                                <div>

                                    <h2 className="font-semibold">
                                        {
                                            item.type === "call" ? <MdWifiCalling2 size={40} /> :
                                                item.type === "text" ? <IoMdText size={40} /> :
                                                    item.type === "video" ? <FaVideo size={40} /> :
                                                        null
                                        }
                                      </h2>
                                </div>
                               <div>
                                <span className='text-2xl'>  {item.type} </span><span className='text-gray-500'>With</span><span className='text-gray-500'>{item.name}</span>
                                <p>Date: {item.date}</p>
                               </div>
                            </div>
                        ))
                    )
                }

            </div>
            );

        </div>
    );
};

export default Timeline;