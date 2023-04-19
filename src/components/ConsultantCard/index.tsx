import React from 'react'

interface IProps {
  img_url: string
  heading: string
  superPower: string
  link: string
  description: string
}

const ConsultantCard: React.FC<IProps> = ({
  img_url,
  heading,
  superPower,
  link,
  description
}) => {
  return (
    <div className="flex flex-row w-full mb-10">
      <div className="mr-5 w-full">
        <img src={img_url} alt={heading + ' img'} className="object-contain w-full h-full" />
      </div>

      <div>
        <h2 className="font-spileCompressed text-5xl tracking-wide mb-2">
          {heading}
        </h2>
        <p className="font-nagelRegular mb-5">
          {superPower} <span className="ml-3 text-blue underline">{link}</span>
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ConsultantCard
