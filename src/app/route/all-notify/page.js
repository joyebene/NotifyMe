"use client";

import { useState, useEffect } from "react";
import Notification from "@/components/Notification";
import React from "react";

const page = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data2");
      console.log("Rsponse status:", response.status);

      if (response.ok) {
        const data = await response.json();

        // const newData = await insertNewData();
        setData(data); // Update state
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

  console.log(data);

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

  return (
    <div>
      <section className="text-center py-4 bg-yellow-200">
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

      <section>
        <Notification
          data={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </section>
    </div>
  );
};

export default page;
