import React from 'react'
import Paragraph from './Paragraph'

const RoundedTitle = ({title}) => {
  return (
     <div className=" inline-block px-7 py-3 rounded-full border-2 border-gray-400">
      <Paragraph className="text-gray-400 text-base sm:text-lg">
       {title}
      </Paragraph>
    </div>
  )
}

export default RoundedTitle