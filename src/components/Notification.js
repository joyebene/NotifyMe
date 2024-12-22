import React from "react";

const Notification = ({ data, handleEdit, handleDelete }) => {
  return (
    <div>
      <section className="bg-blue-50">
        <div>
          <div className="p-5 flex items-center justify-between">
            {" "}
            <div className="">
              <h1 className="font-bold text-gray-900 text-2xl tracking-tight">
                All Notifications
              </h1>
            </div>{" "}
            <div className="w-[100] h-[100]">
              <img
                src="/img8.jpg"
                alt="img"
                className="object-contain w-full rounded-xl shadow-xl"
              />
            </div>{" "}
          </div>
          <div className="w-full divider my-3 h-[1]" />

          {/* <p className="text-black tracking-tight leading-tight text-lg">
            Notification
          </p> */}

          {data.map((data) => 
            <div className="gap-8 odd:bg-yellow-50 " key={data._id}>
              <div className="font-semibold text-xl mx-5 pt-9">
                <h1>{data.title}</h1>
              </div>
              <div className="mx-5 pt-6">
                <p className="text-black tracking-tight leading-tight text-lg">
                  {data.notification}
                </p>
              </div>
              <div className="flex items-center justify-normal px-5 pt-5 text-md text-gray-700">
                <div className="tracking-tight text-balance ">
                  <p>{data.time}</p>
                </div>
                <div className="px-9 text-balance tracking-tight">
                  <p>{data.date}</p>
                </div>
              </div>
              <div className="w-full flex items-center justify-end pr-6">
                <div className="pr-6">
                  <button
                    className="float-start px-4 py-2 bg-white border-2 border-yellow-400 rounded-2xl font-bold text-lg text-yellow-400 "
                    onClick={() => {
                      handleEdit(data);
                    }}
                  >
                    edit
                  </button>
                </div>
                <div className="">
                  <button
                    className=" px-4 py-2 bg-yellow-400 rounded-2xl font-bold text-lg text-white"
                    onClick={() => {
                      handleDelete(data);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
              <div className="w-full divider my-3 h-[1]" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Notification;
