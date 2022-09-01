import { Image, Meta, Timestamp } from './generics.types'

export type About = {
  data: {
    id: number
    attributes: {
      avatar: Image
      name: string
      profile_description: string
      resume_url: string
      title: string
    } & Timestamp
  }
  meta: Meta
}

export type Skill = {
  id: number
  attributes: {
    title: string
    description: string
    icon_name: string
  } & Timestamp
}

export type Skills = {
  data: Skill[]
  meta: Meta
}

export type Education = {
  id: number
  attributes: {
    edu_desc: {
      id: number
      description: string
      end: string
      organization: string
      role: string
      start: string
    }
  } & Timestamp
}

export type Educations = {
  data: Education[]
  meta: Meta
}

export type Experience = {
  id: number
  attributes: {
    exp_desc: {
      id: number
      description: string
      end: string
      organization: string
      role: string
      start: string
    }
    external_link: {
      id: string
      title: string
      url: string
    }
  } & Timestamp
}

export type Experiences = {
  data: Experience[]
  meta: Meta
}
