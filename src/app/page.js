import { IoIosAdd } from "react-icons/io";
import CardPage from "./Card/page";
import { Suspense } from "react";
import data from '../Data/data.json'

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="text-center mt-20 space-y-6">
        <h1 className="text-5xl">Friends to keep close in your life</h1>
        <p className="text-gray-500">
          Your personal shelf of meaningful connections. <br />
          Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">
          <IoIosAdd size={30} />
          Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        <div className="card shadow ">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold">{data.length}</h2>
            <p className="text-lg text-gray-400">Total Friends</p>
          </div>
        </div>
        <div className="card shadow ">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold">3</h2>
            <p className="text-lg text-gray-400">On Track</p>
          </div>
        </div>
        <div className="card shadow ">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold">6</h2>
            <p className="text-lg text-gray-400">Need Attention</p>
          </div>
        </div>
        <div className="card shadow ">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold">12</h2>
            <p className="text-lg text-gray-400">Interactions This Month</p>
          </div>
        </div>
      </div>
      
       <div className="my-10">
         <Suspense 
          fallback={
            <div className="flex justify-center items-center h-40">
              <span className="loading loading-spinner text-error"></span>
            </div>
          }
        >
          <CardPage />
        </Suspense>
       </div>
    
    </div>
  );
}
