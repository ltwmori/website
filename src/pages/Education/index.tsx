import React from 'react'
import Carousel from '../../components/Carousel'

const Education = () => {
  const images = [
    '../../../assets/infographic-1.png',
    '../../../assets/infographic-2.png',
    '../../../assets/infographic-3.png'
  ]
  return (
    <div className="h-full font-nagelRegular tracking-widest">
      <section className="flex flex-row gap-x-8 justify-center">
        <div>
          <h2 className="flex justify-start align-center text-3xl text-center uppercase underline underline-offset-8 lg:text-4xl">
            наша миссия.
          </h2>
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
    </div>
  )
}

export default Education
