export type Image = {
  data: {
    id: number
    attributes: {
      formats: {
        large: {
          width: number
          height: number
          url: string
        }
        medium: {
          width: number
          height: number
          url: string
        }
        small: {
          width: number
          height: number
          url: string
        }
        thumbnail: {
          width: number
          height: number
          url: string
        }
      }
    }
  }
}

export type Timestamp = {
  updatedAt: string
  createdAt: string
  publishedAt: string
}

export type Meta = {
  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}
