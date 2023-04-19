import React from 'react'

interface ColorfulCirclesTextProps {
  text: string
  color: string
}

const ColorfulCirclesText: React.FC<ColorfulCirclesTextProps> = ({
  text,
  color
}) => {
  const transformedText = text.split('').map((char, index) => {
    if (char.toUpperCase() === 'O') {
      return (
        <span
          key={index}
          style={{
            backgroundColor: color,
            borderRadius: '50%',
            width: '1em',
            height: '1em',
            display: 'inline-block',
            verticalAlign: 'middle',
            lineHeight: '1.2'
          }}
        ></span>
      )
    } else if (char === ' ') {
      return (
        <span key={index} className="w-1">
          {char}
        </span>
      )
    }
    return (
      <span key={index} className="inline-block">
        {char}
      </span>
    )
  })

  return <div className="inline-flex items-center">{transformedText}</div>
}

export default ColorfulCirclesText
