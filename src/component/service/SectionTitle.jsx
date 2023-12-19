import React from "react"

function SectionTitle({ children, id }) {
  return (
    <div>
        <h1 
            id={id && id} 
            className=" text-3xl font-bold md:px-8 px-6 text-blue-300 pb-3 dark:text-blue-300"
        >
            {children}
        </h1>
    </div>
  )
}

export default SectionTitle