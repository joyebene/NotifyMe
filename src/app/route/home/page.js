"use client";
// import React from 'react'
import { useState, useEffect } from "react";
import Notify from "../../../components/Notify";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [notification, setNotification] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  // const fetchPosts = async () => {
  //   try {
  //     const response = await fetch("/api/data/new");
  //     console.log("Rsponse status:", response.status);

  //     if (response.ok) {
  //       const data = await response.json();

  //       // const newData = await insertNewData();
  //       setData(data); // Update state
  //     } else {
  //       console.error("Failed to fetch data");
  //     }
  //   } catch (error) {
  //     console.error("Network or fetch error:", error);
  //   }
  // };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data3");
      console.log("Rsponse status:", response.status);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        // console.log(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Network or fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data);

  // fetchData();

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/data/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          notification,
          date,
          time,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const newData = {
        title,
        notification,
        date,
        time,
        _id: Date.now(),
      };

      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (d) => {
    router.push(`/update-data?id=${d._id}`);
  };

  const handleDelete = async (d) => {
    const hasConfirmed = confirm("Are you sure you want to delete this Data?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/data/${d._id.toString()}`, {
          method: "DELETE",
        });

        const filteredData = data.filter((item) => item._id !== d._id);

        setData(filteredData);
        console.log(filteredData);

        console.log("Data deleted successfully");
      } catch (error) {
        console.log(error);
        alert("There was an error deleting the data. Please try again later.");
        console.error(error);
      }
    }
  };

  console.log(data);
  

  return (
    <div className="w-full overflow-hidden">
      <section className="text-center pt-4 bg-yellow-200 ">
        <div className="flex items-center justify-center border border-gray-200 rounded-lg w-[80%] px-4 py-2 mx-auto bg-gray-50">
          <input
            type="text"
            placeholder="enter title to search for a notification"
            className="w-full text-center outline-none "
          />
          <div className="w-1 bg-gray-200 h-[30] mx-1" />
          <button>
            <img src="/icons.svg" className="h-5 " />
          </button>
        </div>
      </section>
      <section className="flex items-center justify-between bg-yellow-200 px-2">
        <div className="flex-1">
          <h1 className="font-bold !leading-tight text-lg tracking-tight text-balance pl-3 text-black">
            Welcome to <span className="text-blue-400 text-xl">Notify</span>
            <span className="gold text-xl">Me</span>! We're excited to help you
            stay on top of your notifications.{" "}
          </h1>
        </div>
        <div className="flex-1">
          <img src="/img7s.png" alt="img" className="relative object-contain" />
        </div>
      </section>
      <div className="divider w-full h-[3] shadow-2xl" />

      <section className="py-5 bg-blue-300">
        <div className="tracking-tight text-balance">
          <h1 className="font-bold text-2xl px-4  text-gray-900 ">
            Create Notification
          </h1>

          <div className="px-4 py-5">
            {/* <div className="w-[120] shadow-xl">
              <img src="img8.jpg" alt="img" className="object-contain rounded-lg" />
            </div> */}

            <form
              onSubmit={submit}
              className="flex flex-col justify-center gap-4"
            >
              <div className="w-full bg-gray-50 px-2 py-4 rounded-2xl">
                <label className="font-semibold text-gray-900">Title: </label>{" "}
                <br />
                <input
                  type="text"
                  required
                  value={title}
                  placeholder="enter title"
                  className="outline-none pl-2 w-[90%] h-9 rounded-lg "
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="w-full bg-gray-50 px-2 py-4 rounded-2xl">
                <label className="font-semibold text-gray-900">
                  Notification:{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  required
                  value={notification}
                  placeholder="enter notification"
                  className="outline-none pl-2  w-[90%] h-9 rounded-lg"
                  onChange={(e) => setNotification(e.target.value)}
                />
              </div>
              <div className="w-full bg-gray-50 px-2 py-4 rounded-2xl">
                <label className="font-semibold text-gray-900">Date: </label>{" "}
                <br />
                <input
                  type="date"
                  required
                  value={date}
                  className="outline-none pl-2 w-[90%] h-9 rounded-lg"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="w-full bg-gray-50 px-2 py-4 rounded-2xl">
                <label className="font-semibold text-gray-900">Time: </label>{" "}
                <br />
                <input
                  type="time"
                  required
                  value={time}
                  placeholder="enter exact time"
                  className="outline-none pl-2 w-[90%] h-9 rounded-lg"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="w-full mt-4">
                <button
                  className="float-end px-9 py-3 bg-yellow-300 rounded-2xl font-bold text-xl text-gray-900  App-link"
                  // disable={submitting}
                  onClick={() => {
                    fetchData();
                    window.location.reload();
                  }}
                >
                  {submitting ? "creating" : "create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* {searchText ? (
        <Notification datas={searchedResults} />
      ) : ( */}
      <Notify data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
      {/* )} */}
    </div>
  );
};

export default page;
