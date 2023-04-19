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
    <div className="flex flex-row sm:w-full md:w-full lg:w-2/3 mb-2">
      <div className="mr-5">
        <img src={img_url} />
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
