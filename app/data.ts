type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'AI финансовый аналитик',
    description:
      'Автоматическое управление бухгалтерией по британским стандартам для китайского банка в Гонконге.',
    link: 'C:/Users/Asus ZenBook/Desktop/Booth_@2/nim-main/app/ИИ бухгалтер.mp4',
    video:
      'https://asset.cloudinary.com/drqudb6ed/1d886bb516c9632b8ae1910236774d24',
    id: 'project1',
  },
  {
    name: 'Тендерный софт и Бот для госзакупок',
    description: 'Система управления контрактами на сумму более 2,5 млрд тенге. Автоматизация тендеров для Самрука и государственных закупок.',
    link: 'https://youtu.be/0LIe6_NZHQ8',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Фриланс',
    title: 'Фулл-стек разработчик / AI-инженер',
    start: '2019',
    end: 'настоящее время',
    link: 'https://portfolio-nim-iota.vercel.app/',
    id: 'work1',
  },
  {
    company: 'Крипто-компания',
    title: 'Сеньор-разработчик',
    start: '2022',
    end: '2024',
    link: 'https://portfolio-nim-iota.vercel.app/',
    id: 'work2',
  },
  {
    company: 'CEO',
    title: 'Собственное агентство по разработке',
    start: '2020',
    end: '2022',
    link: 'https://portfolio-nim-iota.vercel.app/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Как AI меняет бизнес',
    description: 'Обсуждение реальных кейсов внедрения AI и их влияния на компании.',
    link: '/blog/how-AI-is-changing-business',
    uid: 'blog-1',
  },
  {
    title: 'От фриланса к миллиардам',
    description:
      'История роста и ключевые инсайты из опыта работы с крупными компаниями.',
    link: '/blog/from-freelancing-to-billions',
    uid: 'blog-2',
  },
  {
    title: 'Почему я отказался от найма в пользу собственных проектов',
    description:
      'Личный опыт перехода от корпоративной работы к предпринимательству.',
    link: '/blog/why-did-i-give-up-hiring-in-favor-of-my-own-projects',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/nekorytaylor666',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/tokha313',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/akmt/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/tokha.it/',
  },
]

export const EMAIL = 'akmt.me23@gmail.com'
