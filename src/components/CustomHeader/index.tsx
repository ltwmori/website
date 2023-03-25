import React from 'react'

interface IProps {
  title: string
}

const CustomHeader: React.FC<IProps> = ({ title }) => {
  return (
    <h2 className="font-nagelRegular text-4xl inline-block border-b-2 black">
      {title}
    </h2>
  )
}

export default CustomHeader
