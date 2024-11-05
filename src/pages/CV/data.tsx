import { AngularLogo, Lego, Toolbox } from '@phosphor-icons/react'

export const data = {
  basics: {
    github: 'https://vladut-pop.github.io/portfolio-app/',
    name: 'Vlǎduț Traian POP',
    email: 'vladpop@ucm.es',
    phone: '',
    picture:
      'https://storage.rxresu.me/cm1v20mmu2ceqmtv50adxdxvw/pictures/cm1v20mmu2ceqmtv50adxdxvw.jpg',
    headline: 'Frontend Developer',
    location: 'Baia Mare, Romania',
  },
  skills: [
    {
      icon: <AngularLogo size={24} weight="thin" />,
      heading: 'Frontend frameworks',
      subheading: 'React, Vue',
    },
    {
      icon: <Lego size={24} weight="thin" />,
      heading: 'Design System',
      subheading: 'Reusable components',
    },
    {
      icon: <Toolbox size={24} weight="thin" />,
      heading: 'Frontend tools',
      subheading: 'Typescript,',
    },
  ],
}
