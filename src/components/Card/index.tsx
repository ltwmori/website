import React from 'react'

interface IProps {
  title: string
  info: string
  url?: string
  urlName: string
}
// w-full md:w-1/3 px-2 mb-4
const Card: React.FC<IProps> = ({ title, info, url, urlName }) => {
  return (
    <div className="flex flex-col border border-gray-300 w-full rounded-lg pl-8 pr-8 pt-4 pb-6 mb-4 min-h-[30rem] sm:min-h-[20rem] lg:min-h-[30rem]">
      <h2 className="font-spileCompressed text-5xl font-medium mb-4">
        {title}
      </h2>
      <div className="font-nagelRegular text-base font-medium">
        <p>{info}</p>
      </div>
      <div className="mt-auto flex flex-row justify-between items-center">
        <a
          href={`${url ? url : '/'}`}
          className="underline uppercase text-base"
        >
          {urlName}
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          {' '}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />{' '}
        </svg>
      </div>
    </div>
  )
}

export default Card
