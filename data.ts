import { v4 } from 'uuid'

export const projects = [
  {
    id: v4(),
    title: 'Swirge Inc',
    image: '/images/1.jpg',
    tags: ['Frontend'],
  },
  {
    id: v4(),
    title: 'RunAm Technologies',
    image: '/images/2.jpg',
    tags: ['Frontend', 'Backend'],
  },
  {
    id: v4(),
    title: 'Portfolio',
    image: '/images/4.jpg',
    tags: ['Frontend', 'Backend'],
  },
]

export const contacts = [
  {
    id: v4(),
    icon: 'call',
    text: '0905-362-4684',
  },
  {
    id: v4(),
    icon: 'pin_drop',
    text: 'Lagos, NG',
  },
  {
    id: v4(),
    icon: 'mail',
    text: 'charlesrichson@gmail.com',
  },
]
