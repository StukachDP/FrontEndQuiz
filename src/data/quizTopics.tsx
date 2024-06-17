import { ReactNode } from 'react'
import { ReactComponent as CSS } from '../assets/icons/css-3.svg'
import { ReactComponent as JavaScript } from '../assets/icons/javascript.svg'
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'
import { ReactComponent as BulbIcon } from '../assets/icons/bulb.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'JavaScript',
    icon: <JavaScript />,
  },
  {
    title: 'General Knowledge',
    icon: <BulbIcon />,
  },
  {
    title: 'CSS',
    icon: <CSS />,
    disabled: true,
  },
]
