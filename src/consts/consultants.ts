// import Balsulu from '../../../assets/balsu.png'
import Balsulu from '../../assets/balsu.png'
import Anara from '../../../assets/anara.png'
import Elizaveta from '../../../assets/katie.png'

interface IConsultant {
  img_url: string
  heading: string
  superPower: string
  link: string
  description: string
}

export const consultants: IConsultant[] = [
  {
    img_url: Balsulu,
    heading: 'Балсулу Тасбулатова , PHD',
    link: '@balsulu.tasbulatova',
    superPower: 'СУПЕРСПОБНОСТЬ: LOREMEPSUM',
    description: `Профессиональный коуч (Erikson International),PhD, эксперт/диагност
                        личностнопрофессиональных компетенций, исследователь внутренних воз-
                        можностей человеческого потенциала, человеческих ресурсов, силы мышле-
                        ния и воображения.
                        500 + часов профессиональной коучинговой
                        деятельности с руководителями международных компаний.
                        1.000+ часов консультаций проф. ориентации.
                    `
  },
  {
    img_url: '../../../assets/anara.png',
    heading: 'Анара Какимова, психолог',
    link: '@redkids.kz',
    superPower: 'СУПЕРСПОБНОСТЬ: LOREMEPSUM',
    description: `Профессиональный коуч (Erikson International),PhD, эксперт/диагност
                личностнопрофессиональных компетенций, исследователь внутренних воз-
                можностей человеческого потенциала, человеческих ресурсов, силы мышле-
                ния и воображения.
                500 + часов профессиональной коучинговой
                деятельности с руководителями международных компаний.
                1.000+ часов консультаций проф. ориентации.`
  },
  {
    img_url: '../../../assets/katie.png',
    heading: 'Елезавета Саттарова, психолог',
    link: '@sattarova_kz',
    superPower: 'СУПЕРСПОБНОСТЬ: LOREMEPSUM',
    description: `
                Профессиональный коуч (Erikson International),PhD, эксперт/диагност
                личностнопрофессиональных компетенций, исследователь внутренних воз-
                можностей человеческого потенциала, человеческих ресурсов, силы мышле-
                ния и воображения.
                500 + часов профессиональной коучинговой
                деятельности с руководителями международных компаний.
                1.000+ часов консультаций проф. ориентации.`
  }
]
