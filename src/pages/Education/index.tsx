import React from 'react'
import Carousel from '../../components/Carousel'
import Photo from '../../..//assets/photo.jpg'
import ColorfulCirclesText from '../../components/TextWithCircles'

const Education = () => {
  const images = [
    '../../../assets/infographic-1.png',
    '../../../assets/infographic-2.png',
    '../../../assets/infographic-3.png'
  ]
  const myText = 'Hello, world! Colorful Os are fun!'
  return (
    <div className="h-full font-nagelRegular tracking-widest">
      <section className="flex flex-row gap-x-8 justify-center">
        <div className="flex flex-col w-1/3">
          <h2 className="flex justify-start align-center text-3xl mb-10 text-center uppercase underline underline-offset-8 lg:text-4xl">
            наша миссия.
          </h2>
          <div className="justify-center text-3xl w-4/5 tracking-widest text-left uppercase">
            <ColorfulCirclesText text="ПОСТРOИТЬ" color="#e2a0a3" /> МИР, В{' '}
            <ColorfulCirclesText text="КОТОРOМ" color="#92adcf" /> БЫТЬ
            СЧАСТЛИВЫМ — <ColorfulCirclesText text="ЭТO" color="#eccd9e" />{' '}
            НОРМА.
          </div>
        </div>
        <div className="">
          <img
            className="h-auto max-w-full self-center justify-center object-contain "
            src="../assets/main_photo.jpeg"
            alt="image description"
          />
        </div>
        <div className="w-1/3 flex items-end">
          <p className="flex justify-start align-center mt-2 text-sm text-left">
            Мы хотим построить мир, в котором каждый человек будет на своем
            месте, избавившись от внутренней тревожности из-за вечного сравнения
            себя с другими и от примерки на себя чужих ролей и ожиданий. Для нас
            это формула новой нормальности. Формула мира, где люди осознают и
            принимают свою уника- льность и основным приоритетом делают свое
            счастье. Ведь только когда мы создаем что-то из состояния
            наполненности и искрен- ней воодушевленности - мы можем создавать
            что-то прекрасное и ценное.
          </p>
        </div>
      </section>
      <section className="flex justify-center mt-20">
        <h2 className="uppercase text-3xl underline underline-offset-8 mr-10 ">
          Мы
        </h2>

        <div className="flex justify-center items-center w-1/2 flex-col">
          <h2 className="flex justify-start align-center text-2xl text-left uppercase ">
            ПОМОГАЕМ ЛЮДЯМ ПРИКОСНУТЬСЯ К СВОЕМУ ПОТЕНЦИАЛУ.
          </h2>
          <p className="mt-2 text-sm text-left ">
            Осознание своей ценности и уникальности - это фундамент самореализа-
            ции личности, основа счастливой жизни. В каждом человеке заложен
            суперпотенциал - способности, которые сформировались благодаря его
            уникальному жизненному пути. Когда человек реализует все то прекрас-
            ное, что заложено в него, процесс приносит удовольствие, появляется
            больше энергии и воодушевления, растет продуктивность.
          </p>
        </div>
      </section>
      <section className="flex justify-center mt-20 flex-col">
        <div className="flex items-end gap-x-6 justify-center">
          <h2 className="flex justify-start align-center text-5xl uppercase font-spileCompressed ">
            из чего состоит самоценность.
          </h2>
          <h3>fig. 01</h3>
        </div>

        <Carousel images={images} />
      </section>
      <section className="flex justify-center mt-20 flex-col">
        <div className="flex flex-row mb-20">
          <div className="flex flex-col justify-between items-start space-y-40">
            <h2 className="flex justify-start align-center text-3xl text-center uppercase underline underline-offset-8 lg:text-4xl">
              КАК МЫ ЭТО ДЕЛАЕМ?
            </h2>
            <h2 className="flex justify-start align-center text-8xl uppercase tracking-wide font-spileCompressed w-2/3">
              КОМПЛЕКСНЫЙ ПОДХОД НА СТЫКЕ СОВРЕМЕННОЙ ПСИХОЛОГИИ, КОУЧИНГА И
              БИЗНЕСА.
            </h2>
          </div>
          <img src={Photo}></img>
        </div>
        <div className="flex flex-row justify-between  items-start">
          <p className="text-sm w-2/3">
            Всю свою жизнь я посвятила изучению Человека. Я изучала детскую и
            взрослую психологию, прошла между- народные образовательные курсы
            коучинга и профессиональной ориентации. Итогом моей работы стала
            докторская диссертация по теме природного потенциала человека и
            инновационного подхода к формирова- нию команд и развитию
            сотрудников. Моя глобальная цель - создать рекрутинговое агентство,
            основной цен- ностью которого будет не профессиональные достижения
            человека, а его природный потенциал, желания, потребности и
            стремления. Я верю, что только так мы можем построить счастливое
            общество, где каждый человек будет находится на своем месте и с
            удовольствием проживать свою жизнь.
          </p>
          <div className="flex flex-col  items-end">
            <h2 className="flex justify-start align-left text-5xl uppercase font-spileCompressed ">
              Балсулу Тасбулатова
            </h2>
            <h2 className="flex justify-start align-center text-base text-center uppercase ">
              Основатель проекта
            </h2>
            <h2 className="flex justify-start text-[#2c23d7] align-center text-base text-center  ">
              @balsulu.tasbulatova
            </h2>
          </div>
        </div>
      </section>

      <section className="flex justify-start mt-40 flex-col ">
        <h2 className="text-9xl leading-10">“</h2>

        <div className="text-5xl w-4/5 tracking-widest text-left uppercase">
          <ColorfulCirclesText text="Самoе" color="#d7797e" /> большое счастье
          для нас - видеть, как человек превращается в{' '}
          <ColorfulCirclesText text="прекрасногo" color="#7571a9" /> лебедя,
          раскрывает свои крылья, и с уверенностью в{' '}
          <ColorfulCirclesText text="свoих" color="#556ea8" /> силах, начинает
          путь к мечте.
        </div>
        <div className="flex justify-end align-center tracking-normal text-left text-2xl">
          — Команда PINCODE
        </div>
      </section>
    </div>
  )
}

export default Education
