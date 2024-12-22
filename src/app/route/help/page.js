import React from 'react'

const page = () => {
  return (
    <div className="h-screen overflow-hidden bg-blue-50">
      <section className="text-center text-balance leading-tight tracking-tight pt-16 px-4">
        <div>
          <div className="py-5">
          <h1 className="font-bold text-3xl tracking-tight">Help Center</h1>
          </div>
          <div className="mx-auto">
            <p className="text-xl">Do you need help on how to use the <span className="text-blue-500">Notify</span><span className="text-yellow-500">Me</span> app? Here are a step guide on how to use it. </p>
          </div>
          <div className="m-7">
            <ol className="list-decimal list-outside text-black text-md">
              <li className="bg-gray-50 p-3 text-start">In create notification section, fill in the form as directed according to your schedule.</li>
              <li className="text-start p-3 bg-blue-50">Click on the create button</li>
              <li className="text-start bg-gray-50 p-3">You have successfully created a notification, next is to check your notification section to see if your notification was created</li>
              <li className="text-start bg-blue-50 p-3">It will notify you when it is time to carry out your schedule</li>
            </ol>
          </div>
          <div className="py-5">
            <p className="font-semibold text-xl tracking-tight leading-tight">Hope it was helpful?</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page;