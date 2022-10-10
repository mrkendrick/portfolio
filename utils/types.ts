import { Image, Meta, Timestamp } from './generics.types'

export type ExternalLink = {
  id: string
  title: string
  url: string
}

export type ProjectLink = {
  id: string
  title: string
  url: string
  platform: 'website' | 'codebase'
}

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

type Stack = {
  id: number
  name: string
}

type Tech = {
  id: number
  name: string
}

export type Project = {
  id: number
  attributes: {
    description: string
    image: Image
    links: ProjectLink[]
    stacks: Stack[]
    techs: Tech[]
    title: string
  } & Timestamp
}

export type Projects = {
  data: Project[]
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
    external_link: ExternalLink
  } & Timestamp
}

export type Experiences = {
  data: Experience[]
  meta: Meta
}

export type ProLang = {
  id: number
  attributes: {
    name: string
    external_link: ExternalLink
    icons: {
      light: string
      dark: string
    }
  } & Timestamp
}

export type ProLangs = {
  data: ProLang[]
  meta: Meta
}

export type SendEmail = {
  name: string
  email: string
  subject: string
  message: string
}
