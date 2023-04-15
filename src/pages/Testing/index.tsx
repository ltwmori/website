import React from 'react'
import CustomHeader from '../../components/CustomHeader'

const Testing = () => {
  return (
    <>
      <div className="h-full">
        <div className="max-w-4xl sm:max-w-3xl lg:max-w-6xl mt-0 mb-0 ml-auto mr-auto">
          <h2 className="flex justify-center align-center  text-2xl md:text-3xl lg:text-4xl text-center font-nagelRegular tracking-widest">
            ТЕСТ ДЛЯ ПОИСКА <br /> СУПЕРСПОСОБНОСТЕЙ
          </h2>
        </div>

        <section className=" mt-12 md:mt-24 flex flex-col gap-4 md:flex-row justify-around sm:mx-4 md:mx-24">
          <div className=" w-full md:w-[30%] flex flex-col md:justify-center">
            <h3 className="font-nagelRegular text-2xl md:text-3xl font-normal break-words">
              психо— <br /> диагностический
            </h3>
            <h3 className="text-6xl font-spileCompressed leading-none md:text-7xl lg:text-8xl font-medium">
              подход
            </h3>
            <img
              className="w-[42px] h-[42px] mt-2"
              src="assets/ellipse-black.png"
              alt="ellipse"
            />
          </div>
          <div className="max-w-[559px]">
            <p className="text-base font-normal font-nagelRegular ">
              Одно из самых частых заблуждений заключается в том, что человека
              достаточно спросить “а чем бы вам было интересно заниматься?” и
              загадка волшебным образом будет разгадана. Это неправильный
              подход. Представления человека о той или иной деятельности часто
              ложны и стереотипны.
            </p>
            <p className="text-base font-normal font-nagelRegular mt-2 md:mt-4 ">
              Мы определяем не интересы, а структуру психики человека, поэтому
              знаем, в какой деятельности человек будет эффективен.
            </p>
            <p className="text-base font-normal font-nagelRegular mt-2 md:mt-4">
              Даже если ему кажется, что это не так.
            </p>
          </div>
        </section>

        <section className="mt-12 md:mt-20">
          <img
            className="h-full w-full object-cover"
            src="../assets/CompositeLayer.png"
            alt="image description"
          />
        </section>

        <div className="flex flex-col  sm:flex-row items-start sm:items-center  gap-2 md:gap-7 mt-12 md:mt-20 ">
          <p className="font-nagelRegular text-2xl md:text-3xl font-normal  md:text-end">
            преимущества методики <br />и особенности
          </p>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-spileCompressed leading-none">
            тестирования
          </h3>
          <img
            className="w-[42px] h-[42px] "
            src="assets/ellipse-black.png"
            alt="ellipse"
          />
        </div>

        <section className="flex flex-col md:flex-row  mt-12 md:mt-20 gap-12 mx-4 sm:mx-12 md:mx-16 ">
          <div className="flex flex-col md:w-1/2 ">
            <h1 className="font-spileCompressed text-8xl md:text-9xl lg:text-[104px] font-normal leading-none">
              MMPI
            </h1>
            <p className="font-nagelRegular text-sm md:text-base font-normal  ">
              Миннесотский многофакторный личностный опросник (The Minnesota
              Multiphasic Personality Inventory) является наиболее валидным и
              надежным методом диагностики личности в мировой психологической
              практике.
            </p>
            <h1 className="font-spileCompressed text-8xl md:text-9xl lg:text-[104px] font-normal leading-none">
              0,85
            </h1>

            <p className="font-nagelRegular text-sm md:text-base font-normal ">
              Надежность результатов 0,65-0,85. Один из самых высоких
              результатов в психодиагностике.
            </p>
          </div>
          <div className="flex flex-col md:justify-between gap-8 md:w-1/2 items-end">
            <div className="flex flex-col gap-4 md:gap-2">
              <img src="assets/icon1.png" className="w-[75px] h-[75px]" />

              <p className="font-nagelRegular text-sm md:text-base font-normal uppercase md:max-w-[480px]">
                Методика является базовой для принятия решений по кадрам во всех
                специальных службах мира.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:gap-2 ">
              <img src="assets/icon2.png" className="w-[75px] h-[75px]" />

              <p className="font-nagelRegular text-sm md:text-base font-normal uppercase md:max-w-[480px]">
                В рамках методики и модели тестирования создано больше 4 000
                научных работ.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col max-w-3xl gap-12 ml-auto mr-auto">
          <div className="max-w-xl   mb-0 ml-auto mr-auto mt-20">
            <h2 className="flex justify-center align-center   text-2xl md:text-3xl lg:text-4xl text-center font-nagelRegular tracking-widest">
              САМЫЙ ПОЛНЫЙ И ПОДРОБНЫЙ ОТЧЕТ СРЕДИ ВСЕХ СУЩЕСТВУЮЩИХ.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center  gap-8">
            <img
              className="w-[75px] h-[75px]"
              src="assets/icon3.png"
              alt="icon"
            />
            <p className="font-nagelRegular text-sm md:text-base font-normal">
              В отчете с результатами теста 20 страниц. Такой объем информации
              не предоставляет ни одна методика на рынке. Узнайте о себе все:
              компетенции, рекомендуемые профессии, портрет, черты характера,
              психологические особенности, роль в команде, стиль лидерства,
              стрессоустойчивость и многое другое!
            </p>
          </div>
        </section>

        <div className="flex flex-col  sm:flex-row items-start sm:items-center  gap-2 md:gap-7 mt-12 md:mt-20 ">
          <p className="font-nagelRegular text-2xl md:text-3xl font-normal  md:text-end">
            разделы отчета, который <br /> вы получите после
          </p>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-spileCompressed leading-none">
            прохождения
          </h3>
          <img
            className="w-[42px] h-[42px] "
            src="assets/ellipse-black.png"
            alt="ellipse"
          />
        </div>

        <section className="mt-12 md:mt-20">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-48">
                <div className="flex items-end gap-2 md:gap-5">
                  <h1 className="font-spileCompressed text-[104px] leading-none">
                    01
                  </h1>
                  <p className="font-nagelRegular text-base font-normal ">
                    ПСИХОЛОГИЧЕСКИЙ <br /> ПОРТРЕТ
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-8  md:max-w-sm">
                  <div>
                    <h3 className="text-base font-normal font-nagelRegular uppercase">
                      КАКОЙ ВЫ НА САМОМ ДЕЛЕ?
                    </h3>
                    <p className="font-nagelRegular text-sm font-normal max-w-md  mt-2">
                      Узнайте, какие черты характера вам свойственны, прочтите
                      свой полный психологический портрет. Это поможет вам
                      по-новому взглянуть на свои способности и выбрать
                      профессию.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-normal  font-nagelRegular uppercase">
                    УЧИТЫВАЙТЕ СВОИ ОСОБЕННОСТИ
                  </h3>
                  <p className="font-nagelRegular text-sm  font-normal max-w-md mt-2">
                    Какой вы – активный непоседа или любитель не вылазить из
                    дома? Интроверт или экстраверт? Как часто вы тревожитесь?
                    Все эти факторы надо учитывать при выборе профессии и
                    никогда не идти против своей природы.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5">
              <p className="h-[24%] flex items-end text-base font-normal ">
                Взгляните на себя с новой стороны
              </p>
              <div className="flex flex-col flex-wrap md:flex-row  items-start gap-2">
                <img src="assets/tablet.png" alt="tablet" />
                <img src="assets/tablet.png" alt="tablet" />
              </div>
            </div>
          </div>
        </section>

        {/* 2 */}

        <section className="mt-12 md:mt-20">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-48">
                <div className="flex items-end gap-2 md:gap-5">
                  <h1 className="font-spileCompressed text-[104px] leading-none">
                    02
                  </h1>
                  <p className="font-nagelRegular text-base font-normal ">
                    РОЛЬ <br /> В КОМАНДЕ
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-8  md:max-w-sm">
                  <div>
                    <h3 className="text-base font-normal font-nagelRegular uppercase">
                      Знайте свои сильные и <br /> слабые стороны в команде
                    </h3>
                    <p className="font-nagelRegular text-sm font-normal max-w-md  mt-2">
                      Как добиться успеха в команде? Нужно четко понимать, в
                      какой роли вы будете наиболее полез- ны и эффективны для
                      коллектива – так вы быстрее всего достигнете признания и
                      «взлетите» как специалист. Те роли, которые вам не
                      подходят, брать не нужно – карьеру вы в них не построите.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-normal  font-nagelRegular uppercase">
                    Добивайтесь лидерства <br /> свойственным вам способом
                  </h3>
                  <p className="font-nagelRegular text-sm  font-normal max-w-md mt-2">
                    Как стать лидером в коллективе? Есть четыре способа –
                    «авторитарный», «амбициозный», «демократический» и
                    «дружеский». Каждому человеку свойственен только один – и
                    только с помощью него он сможет легко стать лидером.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5">
              <p className="h-[20%] flex items-end text-base font-normal ">
                Узнайте, какая роль вам подходит в коллективе
              </p>
              <div className="flex flex-col  flex-wrap md:flex-row  items-start gap-2">
                <img src="assets/tablet.png" alt="tablet" />
                <img src="assets/tablet.png" alt="tablet" />
              </div>
            </div>
          </div>
        </section>

        {/* Questions */}

        <section id="questions" className="mt-12 md:mt-20 flex flex-col">
          <div className="inline-block">
            <CustomHeader title="  ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ." />
          </div>

          <div className="flex flex-col gap-1 self-center md:w-3/4 mt-12">
            <p
              className="md:w-[504px] text-[#352DD8]  
                break-words leading-normal text-base font-medium"
            >
              <span className="inline-block mr-1 text-black">ВОПРОС: </span>
              Какой должен быть возраст тестируемого?
            </p>

            <div className="flex gap-1 text-base font-medium mb-6">
              <p className="break-words leading-normal">
                ОТВЕТ:Тест можно проходить с 13 лет. Тест подходит как для
                школьников и абитуриентов, так и для студентов и взрослых. Для
                детей от 5 до 12 лет мы рекомендуем детский тест.
              </p>
            </div>
            <p
              className="md:w-[504px] text-[#352DD8]  
                break-words leading-normal text-base font-medium"
            >
              <span className="inline-block mr-1 text-black">ВОПРОС: </span>
              Сколько по времени длится тестирование?
            </p>

            <div className="flex gap-1 text-base font-medium mb-6">
              <p className="break-words leading-normal">
                На тест уйдет от 30 до 40 минут. Можно делать перерывы, но
                нежелательно.
              </p>
            </div>
            <p
              className="md:w-[504px] text-[#352DD8]  
                break-words leading-normal text-base font-medium"
            >
              <span className="inline-block mr-1 text-black">ВОПРОС: </span>
              Есть бесплатные тесты, которые к тому же короче по времени
              прохождения. В чем отличие вашего теста?
            </p>

            <div className="flex gap-1 text-base font-medium mb-6">
              <p className="break-words leading-normal">
                Вы должны понимать, что не всякий тест дает достоверные
                результаты. Любой человек может придумать свой тест, но только
                где гарантия того, что результаты его теста действи- тельно
                работают? Вместо большинства подобных тестов можно с таким же
                успехом исполь- зовать генератор случайных чисел. Наш тест
                прошел проверку временем (используется более 30 лет), а наш
                алгоритм профориентации прошел апробацию более чем на 150
                тысячах человек. Именно поэтому тест достаточно длинный –
                короткие тесты, как правило, не дают достоверных результатов.
              </p>
            </div>
            <p
              className="md:w-[504px] text-[#352DD8]  
                break-words leading-normal text-base font-medium"
            >
              <span className="inline-block mr-1 text-black">ВОПРОС: </span>
              Нужна ли консультация после теста?
            </p>

            <div className="flex gap-1 text-base font-medium ">
              <p className="break-words leading-normal">
                Выбирайте сами. Без всякого сомнения, консультация поможет вам
                получить более полную информацию, сделать профориентацию более
                индивидуальной. Мы предлагаем два вида консультаций: –
                Консультация по отчету. Длится 30 минут, на ней вы можете задать
                любые вопросы по пройденному тесту. Консультант вам подробнее
                расскажет про ваши результаты. – Карьерная консультация. Часовая
                консультация, которая поможет вам решить любые
                профориентационные и карьерные вопросы. Подробнее о карьерной
                консультации вы можете прочитать ниже.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Testing
