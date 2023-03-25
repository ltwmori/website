import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface INavOption {
  path: string
  name: string
}

const navbarOptions: INavOption[] = [
  {
    path: '/',
    name: 'О нас'
  },
  {
    path: '/education',
    name: 'Обучение'
  },
  {
    path: '/testing',
    name: 'Тестирование'
  },
  {
    path: '/hr',
    name: 'HR'
  }
]

const Navbar = () => {
  const location = useLocation()

  console.log(location.pathname)

  return (
    <nav className="flex justify-center h-20">
      <ul className="flex flex-row items-center gap-5 font-spileCompressed text-5xl">
        {navbarOptions.map((link, i) => (
          <li
            key={i}
            className={`pb-5 tracking-wide ${
              location.pathname === link.path ? 'border-b-2 black' : ''
            }`}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
