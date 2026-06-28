import { Octokit } from 'octokit'
import { getCookie } from 'h3'

export function createOctokit(event) {
  const token = getCookie(event, 'access_token')
  //if (!token) {
  //throw createError({
  //  statusCode: 401,
  //  statusMessage: 'No access token'
  //})
  //}
  return new Octokit({
    auth: token || undefined
  })
}