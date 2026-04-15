import Link from 'next/link';
import React from 'react';
import data from "@/data/data.json";

const CardPage = async () => {
 

    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 '>
            {
                data.map((a) => <Link key={a.id} href={`/Card/${a.id}`}>
                <div  className='shadow text-center space-y-2 p-10'>
                    <img className='w-24 h-24 mx-auto rounded-full' src={a.picture} alt={a.name} />
                    <h1>{a.name}</h1>
                    <p>{a.days_since_contact}d ago</p>
                    <p className='badge badge-warning'>{a.tags[0]}</p>
                    <br />
                    <p className={`badge 
                    ${a.status === "overdue"
                            ? "text-white bg-red-600 px-2 py-1 rounded"
                            : a.status === "almost due"
                                ? "text-white bg-yellow-500 px-2 py-1 rounded"
                                : a.status === "on-track"
                                    ? "text-white bg-green-900 px-2 py-1 rounded"
                                    : "text-gray-500"
                    }
                        `}>{a.status}</p>
                </div></Link>)
            }
        </div>
    );
};

export default CardPage;