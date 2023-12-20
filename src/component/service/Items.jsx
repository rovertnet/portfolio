import React from 'react'

function Items({title, icon, describe}) {
  return (
    <div className="bg-slate-300 md:px-10 p-5 transition rounded-md md:mx-8 mx-6 md:my-4 my-2 md:py-7 lg:py-5 sm:py-8 py-5 hover:bg-slate-200 cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-700">
      <div className="text-gray-800 dark:text-gray-300 text-3xl">{icon}</div>
      <h1 className=' font-semibold text-xl text-gray-600 dark:text-gray-200'>{title}</h1>
      <p className=' font-medium text-gray-600 dark:text-gray-400'> {describe} </p>
    </div>
  );
}

export default Items