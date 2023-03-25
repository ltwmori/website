import React from 'react'
import { CustomHeader } from '../../components'
import Card from '../../components/Card'
import { methods } from '../../consts/methods'

const Home = () => {
  return (
    <div className="h-full">
      {/* top section */}
      <section>
        <img
          className="h-auto max-w-full mt-10 self-center justify-center object-contain "
          src="../assets/smart.png"
          alt="image description"
        />

        <div className="max-w-4xl sm:max-w-3xl lg:max-w-6xl mt-0 mb-0 ml-auto mr-auto">
          <h2 className="flex justify-center align-center mt-20  text-3xl text-center font-nagelRegular tracking-widest lg:text-4xl">
            ВСПОМНИ, КЕМ ТЫ ХОТЕЛ СТАТЬ, ДО ТОГО, КАК НАУЧИЛСЯ БЫТЬ КЕМ-ТО
            ДРУГИМ.
          </h2>
        </div>
      </section>

      {/* methods */}
      <section className="mt-24">
        <CustomHeader title="Путь к самоценности" />
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
      <section></section>
    </div>
  )
}

export default Home
