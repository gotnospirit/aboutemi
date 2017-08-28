import { page_title } from './data'
import slug from 'slug'

const getPageTitle = (title) => {
  let data = [...page_title]
  if (title) {
    data.push(title)
  }
  return data.join(' - ')
}

const getSlug = (value) => slug(value, { lower: true })

export {
  getPageTitle,
  getSlug
}