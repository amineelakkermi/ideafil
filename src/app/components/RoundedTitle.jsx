import React from 'react'
import Paragraph from './Paragraph'

const RoundedTitle = ({title}) => {
  return (
     <div className=" inline-block px-7 py-3 rounded-full border-2 border-gray-400">
      <p className="text-white text-base sm:text-lg">
       {title}
      </p>
    </div>
  )
}

export default RoundedTitle