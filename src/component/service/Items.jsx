import React from 'react'

function Items({title, icon, describe}) {
  return (
    <div className="bg-slate-300 md:px-16 px-6 md:py-5 py-4 md:mx-9 mx-6 transition rounded-md my-2 hover:bg-slate-200 cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-700">
      <div className="text-gray-800 dark:text-gray-300 text-3xl">{icon}</div>
      <h1 className=" font-semibold text-xl text-gray-600 dark:text-gray-200">
        {title}
      </h1>
      <p className=" font-medium text-gray-600 dark:text-gray-400">
        {describe}
      </p>
    </div>
  );
}

export default Items