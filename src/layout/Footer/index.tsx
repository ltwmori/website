import React from 'react'
import logo from '../../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="flex items-end lg:pb-14 pl-14 pr-14 lg:pl-24 lg:pr-24 mt-auto h-24 lg:h-48 bg-white font-nagelRegular">
      <div className="flex items-end justify-between w-full">
        <p className="text-grey1 text-xs">
          © 2022 PINCODE. Все права защищены.
        </p>
        <div>
          <img src={logo} className='object-contain w-2/3'></img>
        </div>
        <p>Designed by znat'</p>
      </div>
    </footer>
  )
}

export default Footer
