'use client'
import React from 'react';
import data from "@/data/data.json";
import { IoMdNotificationsOutline, IoMdText } from 'react-icons/io';
import { FaArchive, FaVideo } from 'react-icons/fa';
import { MdDelete, MdWifiCalling2 } from 'react-icons/md';
import { toast } from 'react-toastify';


const cardDatailsPage = async ({ params }) => {
    const { cardId } = await params;
    const card = data.find(item => item.id === Number(cardId));

const handleAction = (type) => {
  const newData = {
    name: card.name,
    type: type,
    date: new Date().toLocaleDateString()
  };
  const existing = JSON.parse(localStorage.getItem("timeline")) || [];

  existing.push(newData);
 
  if(type === 'call'){
     toast(`Call By ${card.name}`)
  }
  else if (type=== 'text'){
    toast(`Text By ${card.name}`)
  }
  else{
    toast(`Video Call By ${card.name}`)
  }
  localStorage.setItem("timeline", JSON.stringify(existing));
  console.log(existing)
};
    return (
        <div className='container mx-auto px-4 flex flex-col lg:flex-row gap-8 overflow-hidden'>
            <div className="w-full lg:w-1/3">

                <div className='shadow text-center space-y-2 p-6 md:p-10 mt-10'>
                    <img className='w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full' src={card.picture} />

                    <h1 className="text-lg md:text-xl font-semibold">{card.name}</h1>

                    <p className={`badge 
        ${card.status === "overdue"
                            ? "text-white bg-red-600"
                            : card.status === "almost due"
                                ? "text-white bg-yellow-500"
                                : "text-white bg-green-900"
                        }`}>
                        {card.status}
                    </p>

                    <p className='badge badge-warning'>{card.tags[0]}</p>
                    <p className="text-sm text-gray-500">{card.bio}</p>
                </div>


                <div className="space-y-3 mt-5">

                    <div className="flex items-center gap-2 shadow w-full p-3 justify-center text-base md:text-lg rounded-xl cursor-pointer">
                        <IoMdNotificationsOutline />
                        Snooze 2 weeks
                    </div>

                    <div className="flex items-center gap-2 shadow w-full p-3 justify-center text-base md:text-lg rounded-xl cursor-pointer">
                        <FaArchive />
                        Archive
                    </div>

                    <div className="flex items-center gap-2 shadow w-full p-3 justify-center text-base md:text-lg rounded-xl text-red-600 cursor-pointer">
                        <MdDelete />
                        Delete
                    </div>

                </div>

            </div>

            <div className='w-full lg:w-2/3 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>

                    <div className="card shadow lg:h-36 flex items-center justify-center">
                        <div className="card-body text-center p-3">
                            <h2 className="text-2xl md:text-3xl font-semibold">
                                {card.days_since_contact}
                            </h2>
                            <p className="text-xs md:text-sm text-gray-400">
                                Days Since Contact
                            </p>
                        </div>
                    </div>

                    <div className="card shadow lg:h-36 flex items-center justify-center">
                        <div className="card-body text-center p-3">
                            <h2 className="text-2xl md:text-3xl font-semibold">{card.goal}</h2>
                            <p className="text-xs md:text-sm text-gray-400">Goal (Days)</p>
                        </div>
                    </div>

                    <div className="card shadow lg:h-36 flex items-center justify-center">
                        <div className="card-body text-center p-3">
                            <h2 className="text-2xl md:text-3xl font-semibold">6</h2>
                            <p className="text-xs md:text-sm text-gray-400">Need Attention</p>
                        </div>
                    </div>


                </div>
                <div className='shadow mt-5 p-5'>
                    <div className='flex justify-between items-center'>
                        <h1>Relationship Goal</h1>
                        <button className='btn'>Edit</button>
                    </div>
                    <p>Connect every 30 days</p>
                </div>
                 
               <div className='mt-5'>
                <h1>Quick Check-In</h1>
                 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                   
                    <div 
                     onClick={() => handleAction("call")}
                    className="bg-gray-200 carou  card shadow lg:h-20 flex items-center justify-center">
                        <div className="card-body text-center ">
                            <MdWifiCalling2 size={40}/>
                            <p className="text-xs md:text-xl  text-gray-900">
                                Call
                            </p>
                        </div>
                    </div>
                    <div
                    onClick={() => handleAction("text")}
                     className="card shadow lg:h-20 flex items-center justify-center">
                        <div className="card-body text-center p-3">
                            <IoMdText  size={40}/>
                            <p className="text-xs md:text-sm text-gray-900">
                                text
                            </p>
                        </div>
                    </div>
                    <div
                    onClick={() => handleAction("video")} 
                    className="card shadow lg:h-20 flex items-center justify-center">
                        <div className="card-body text-center p-3">
                         <FaVideo size={40} />

                            <p className="text-x  text-gray-900">
                                Call
                            </p>
                        </div>
                    </div>

                   

                </div>
               </div>
            </div>

        </div>
    );
};

export default cardDatailsPage;