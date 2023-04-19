import React from 'react'
import { CustomHeader } from '../../components'
import Card from '../../components/Card'
import { methods } from '../../consts/methods'
import separator from '../../../assets/rectangle.png'
import path from '../../../assets/pc2x.png'

const Home = () => {
  return (
    <div className="h-full">
      {/* top section */}
      <section>
        <img
          className="h-auto max-w-full self-center justify-center object-contain "
          src="../assets/smart.png"
          alt="image description"
        />
        <img className="mt-10" src={path}></img>
      </section>
      <section className="px-28">
        <div className="max-w-4xl sm:max-w-3xl lg:max-w-6xl mt-0 mb-0 ml-auto mr-auto">
          <h2 className="flex justify-center align-center mt-20 mb-20  text-3xl text-center font-nagelRegular tracking-widest lg:text-4xl">
            ВСПОМНИ, КЕМ ТЫ ХОТЕЛ СТАТЬ, ДО ТОГО, КАК НАУЧИЛСЯ БЫТЬ КЕМ-ТО
            ДРУГИМ.
          </h2>
        </div>

        <div className="flex flex-row mt-14">
          <div className="flex flex-col w-1/3 gap-2">
            <p className="text-2xl tracking-wide">активируй свои</p>
            <p className="text-6xl tracking-wide font-spileCompressed ">
              суперспособности
            </p>
            <div className="w-12 h-12 bg-black rounded-full mt-3"></div>
          </div>
          <div className="flex flex-col w-2/3 gap-2">
            <p>Каждый несет в себе уникальный потенциал.</p>
            <p>
              Способности, которые сформировались благодаря неповторимому
              жизненному пути. Реализация этого потенциала приносит в жизнь
              легкость и удовольствие. Сдерживание - тревожность, сравнение с
              другими и выгорания.
            </p>
            <p>
              {' '}
              Мы хотим, чтобы счастливое проживание жизни стало нормой для
              каждого человека на земле. Мы верим, что можно построить мир, где
              все создается с любовью и вдохновением, потому что каждый
              находится на своем месте.
            </p>
          </div>
        </div>
      </section>
      <section className="px-28 mt-60">
        <div className="flex flex-row">
          <div className="flex flex-col align-center gap-9">
            <h2 className="text-7xl tracking-wide font-spileCompressed ">
              Подросткам
            </h2>
            <p className="text-base uppercase w-3/4">
              Сделать правильный выбор профессии.
            </p>
          </div>
          <img src={separator} className="mx-10"></img>
          <div className="flex flex-col align-center gap-9">
            <h2 className="text-7xl tracking-wide font-spileCompressed ">
              Взрослым
            </h2>
            <p className="text-base uppercase w-3/4">
              Прикоснуться к своему потенциалу и поверить в себя.
            </p>
          </div>
          <img src={separator} className="mx-10"></img>
          <div className="flex flex-col align-center  gap-9">
            <h2 className="text-7xl tracking-wide font-spileCompressed ">
              HR отделу
            </h2>
            <p className="text-base uppercase w-3/4">
              Сделать сотрудников счастливыми.
            </p>
          </div>
        </div>
      </section>

      {/* methods */}
      <section className="mt-10">
        <CustomHeader title="Путь к самоценности." />
        <div className="flex gap-3 flex-col lg:flex-row mt-10">
          {methods.map((method, i) => (
            <Card
              key={i}
              title={method.title}
              info={method.info}
              url={method?.url}
              urlName={method.urlName}
            />
          ))}
        </div>
      </section>

      {/* consultants */}
      <section className="mt-20">
        <div className="flex items-end gap-16">
          <CustomHeader title="консультанты." />
          <p className="text-base">Люди, посвятившие жизнь своему призванию</p>
        </div>
      </section>
    </div>
  )
}

export default Home
