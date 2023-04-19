// src/components/TransparentButton.tsx

import React from 'react'

interface TransparentButtonProps {
  text: string
  onClick?: () => void
}

const TransparentButton: React.FC<TransparentButtonProps> = ({
  text,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className=" border-2 border-black bg-transparent text-center text-base text-black py-6 px-6 uppercase"
    >
      {text}
    </button>
  )
}

export default TransparentButton
