import React from "react"

function SectionTitle({ children, id }) {
  return (
    <div>
        <h1 
            id={id && id} 
            className=" text-3xl font-bold mb-5 text-blue-300 text-center pb-6 dark:text-blue-300"
        >
            {children}
        </h1>
    </div>
  )
}

export default SectionTitle