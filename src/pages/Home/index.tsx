import React from 'react'
import {
  ConsultantCard,
  CustomHeader,
  Card,
  ColorfulCirclesText,
  LetterWithBoundary,
  TransparentButton,
  Carousel
} from '../../components'


import { methods } from '../../consts/methods'
import { consultants } from '../../consts/consultants'

import separator from '../../../assets/rectangle.png'
import path from '../../../assets/pc2x.png'

const Home = () => {
  const handleClick = () => {
    console.log('Button clicked!')
  }
   const images = [
    '../../../assets/infographic-1.png',
    '../../../assets/infographic-2.png',
    '../../../assets/infographic-3.png'
  ]

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
      <section className="px-28 mt-20">
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


    <section>
       <Carousel images={images} />
    </section>

      {/* methods */}
      <section className="mt-20">
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
        <div className="flex gap-16 items-center mb-12">
          <CustomHeader title="консультанты." />
          <p className="text-base">Люди, посвятившие жизнь своему призванию</p>
        </div>
        <div className="flex lg:flex-row sm:flex-col sm:w-full sm:items-center md:flex-col md:w-full">
          <div className="lg:mr-10">
            {consultants.map((consultant, i) => (
              <ConsultantCard
                img_url={consultant.img_url}
                heading={consultant.heading}
                link={consultant.link}
                superPower={consultant.superPower}
                description={consultant.description}
                key={i}
              />
            ))}
          </div>
          <div className="flex items-end sm:w-1/2 md:w-1/2 lg:w-full">
            {/* надо вынести в отдельный компонент */}
            <div className="flex justify-start flex-col">
              <h2 className="text-3xl leading-10">“</h2>

              <div className="text-2xl tracking-widest text-left uppercase">
                The most <ColorfulCirclesText text="commоn" color="#d7797e" />{' '}
                way <ColorfulCirclesText text="people" color="#7571a9" /> give
                up their power is by thinking they{' '}
                <ColorfulCirclesText text="don't" color="#556ea8" /> have any
              </div>
              <div className="flex justify-end align-center tracking-normal text-left text-2xl">
                — Команда PINCODE
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 align-center">
        <CustomHeader title="стоимость." />
        <div className="flex flex-col ">
          <div className="flex flex-col lg:flex-row gap-60 mt-10 items-start justify-between">
            <div className="flex flex-row-reverse items-center gap-8">
              <h2 className="text-8xl tracking-wide font-spileCompressed uppercase">
                тест и персональный отчет
              </h2>
              <div className="w-14 h-14 "></div>
            </div>

            <div className="w-1/3 ">
              <h2 className="text-5xl">12 000 тенге</h2>
              <hr className="border-t-2 border-gray-200 w-full my-4" />
              <p className="text-sm">
                После оплаты вам откроется доступ к прохождению теста. По
                результату вы получите персональную расшифровку в формате pdf.
                См. пример отчета.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-60 mt-10 items-start justify-between">
            <div>
              <div className="flex flex-row-reverse items-center gap-8">
                <div>
                  <h2 className="text-8xl tracking-wide font-spileCompressed uppercase">
                    Базовая консультация
                  </h2>
                  <div className="mt-4 uppercase">
                    <p>психологическая сессия </p>
                    <p>план личностного развития</p>
                  </div>
                </div>

                <div className="w-14 h-14 rounded-full border-2 border-black flex justify-center items-center">
                  <p className="text-black text-4xl text-center">+</p>
                </div>
              </div>
            </div>
            <div className="w-1/3 ">
              <h2 className="text-5xl text-[#606060]">15 000 тенге</h2>
              <hr className="border-t-2 border-[#606060] w-full my-4" />
              <p className="text-sm">
                После оплаты вам откроется доступ к бронированию кон- сультации
                в удобное для вас время. Консультации осуществ- ляются онлайн в
                zoom/skype.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-60 mt-10 items-start justify-between">
            <div className="flex flex-row-reverse items-center gap-8">
              <div>
                <h2 className="text-8xl tracking-wide font-spileCompressed uppercase">
                  Расширенная консультация
                </h2>
                <div className="mt-4 uppercase">
                  <p>психологическая сессия </p>
                  <p>план личностного развития</p>
                  <p>консультация по профессиям будущего</p>
                </div>
              </div>

              <div className="w-14 h-14 rounded-full border-2 border-black flex justify-center items-center">
                <p className="text-black text-4xl text-center">+</p>
              </div>
            </div>
            <div className="w-1/3 ">
              <h2 className="text-5xl text-[#606060]">30 000 тенге</h2>
              <hr className="border-t-2 border-[#606060] w-full my-4" />
              <p className="text-sm">
                После оплаты вам откроется доступ к бронированию кон- сультации
                в удобное для вас время. Консультации осуществ- ляются онлайн в
                zoom/skype.
              </p>
            </div>
          </div>
          <div className='flex justify-center mt-20 '>
            <div className="flex flex-row items-baseline justify-between w-10/12">
              <TransparentButton
                text="ПЕРЕЙТИ К ОПЛАТЕ"
                onClick={handleClick}
              />
              <h2 className="text-5xl">ИТОГО:</h2>
              <div>
                <h2 className="text-5xl">42 000 тенге</h2>
                <hr className="border-t-2 border-[#606060] w-full my-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-between mt-40 flex-row ">
        <div className="text-5xl w-7/12 tracking-widest text-left uppercase">
          <h2 className="text-9xl leading-10">“</h2>
          <ColorfulCirclesText text="Инoгда" color="#6f8d75" /> самый маленький
          шаг в <ColorfulCirclesText text="вернoм" color="#a5a5a5" />{' '}
          направлении может быть самым большим{' '}
          <ColorfulCirclesText text="шагoм" color="#e3cb9f" /> в вашей жизни.
        </div>
        <div className="flex flex-col items-start justify-end tracking-normal ml-8 text-left ">
          <div>
            <h2 className="text-4xl tracking-widest uppercase">Хочешь стать</h2>
            <p className="text-5xl tracking-wide font-spileCompressed uppercase">
              частью команды?
            </p>
          </div>
          <div className="mt-10">
            <TransparentButton
              text="Подробнее об обучении"
              onClick={handleClick}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
