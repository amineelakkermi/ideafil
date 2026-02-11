import React from 'react'

const RoundedTitle = ({title}) => {
  return (
     <div className=" inline-block px-7 py-3 rounded-full border-2 border-gray-400">
      <p className="text-gray-400 text-base sm:text-lg">
       {title}
      </p>
    </div>
  )
}

export default RoundedTitle