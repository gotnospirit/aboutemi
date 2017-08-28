import React from 'react'
import { getSlug } from './utils'
import { projects } from './data'
import Work from './Work'
import NotFound from './NotFound'

const slugify = (project) => {
  return project.details
    ? getSlug(project.name)
    : null
}

const getProjectIndex = (id) => {
  for (let i = 0, max = projects.length; i < max; ++i) {
    const project_id = slugify(projects[i])

    if (project_id === id) {
      return i
    }
  }
  return null
}

const getPreviousProjectId = (idx) => {
  if (!idx) {
    return null
  }

  for (let i = idx - 1; i >= 0; --i) {
    let project_id = slugify(projects[i])

    if (project_id) {
      return project_id
    }
  }
  return null
}

const getNextProjectId = (idx) => {
  let max = projects.length

  if (null === idx || idx > max) {
    return null
  }

  for (let i = idx + 1; i < max; ++i) {
    let project_id = slugify(projects[i])

    if (project_id) {
      return project_id
    }
  }
  return null
}

export default ({ match }) => {
  let id = match.params.id
  let project_idx = getProjectIndex(id)

  if (null === project_idx) {
    return <NotFound/>
  }
  return <Work
    project={projects[project_idx]}
    previous_project={getPreviousProjectId(project_idx)}
    next_project={getNextProjectId(project_idx)} />
}