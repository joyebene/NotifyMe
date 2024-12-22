"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";



const EditData = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dataId = searchParams.get('id');


  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState({
    title: "",
    notification: "",
    date: "",
    time: ""
  });

  useEffect(()=>{
    const getDataDetails = async () => {
        const response = await fetch(`/api/data/${dataId}`)
        const data = await response.json();

        setData({
            title: data.title,
            notification: data.notification,
            date: data.date,
            time: data.time
        })
        
    }

    if(dataId) getDataDetails()
  },[dataId])


  const updateData = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    

    if(!dataId) return alert('Data ID not found')

    try {
      
      const response = await fetch(`/api/data/${dataId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            
            notification: data.notification,
            date: data.date,
            time: data.time
        })
      });
      if (response.ok) {
        router.push("/route/home");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };


  
  return (
    // <Form
    //   type="Edit"
    //   post={post}
    //   setPost={setPost}
    //   submitting={submitting}
    //   handleSubmit={updateData}
    // />
    <section className="py-5 bg-blue-300 h-screen">
    <div className="tracking-tight text-balance ">
      <div className="flex items-center justify-between px-2">
      <h1 className="font-bold text-2xl px-4  text-gray-900 ">
        Update Notification
      </h1>
      <img src="logo3.png" alt="img" className=" w-28" />
      </div>
      <div className="px-4 py-5">
        {/* <div className="w-[120] shadow-xl">
          <img src="img8.jpg" alt="img" className="object-contain rounded-lg" />
        </div> */}

        <form
          onSubmit={updateData}
          className="flex flex-col justify-center gap-4 pt-4"
        >
          <div className="w-full p-2 text-center">
            {/* <label className="font-semibold text-gray-900">Title: </label>{" "}
            <br />
            <input
              type="text"
              required
              value={title}
              placeholder="enter title"
              className="outline-none pl-2 w-[90%] h-9 rounded-lg "
              onChange={(e) => setData(e.target.value)}
            /> */}
            <h2 className="font-semibold text-xl underline">{data.title}</h2>
          </div>
          <div className="w-full bg-gray-50 px-2 py-4 rounded-2xl">
            <label className="font-semibold text-gray-900">
              Notification:{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              required
              value={data.notification}
              placeholder="enter notification"
              className="outline-none pl-2  w-[90%] h-9 rounded-lg"
              onChange={(e) => setData({...data, notification:e.target.value})}
            />
          </div>
          <div className="w-full bg-gray-50 px-2 py-4 rounded-2xl">
            <label className="font-semibold text-gray-900">Date: </label>{" "}
            <br />
            <input
              type="date"
              required
              value={data.date}
              className="outline-none pl-2 w-[90%] h-9 rounded-lg"
              onChange={(e) => setData({...data, date:e.target.value})}
            />
          </div>
          <div className="w-full bg-gray-50 px-2 py-4 rounded-2xl">
            <label className="font-semibold text-gray-900">Time: </label>{" "}
            <br />
            <input
              type="time"
              required
              value={data.time}
              placeholder="enter exact time"
              className="outline-none pl-2 w-[90%] h-9 rounded-lg"
              onChange={(e) => setData({...data, time:e.target.value})}
            />
          </div>
          <div className="w-full mt-4">
            <button
              className="float-end px-9 py-3 bg-yellow-300 rounded-2xl font-bold text-xl text-gray-900  App-link"
              // disable={submitting}
               >
              {submitting ? "updating" : "update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  );
};

export default EditData;
