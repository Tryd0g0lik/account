import Postman from '@Postman';

export interface Context {
  username?: string
  password?: string
  repassword?: string
  email?: string
  is_superuser?: boolean
}

export enum RequstsView {
  'post' = 'POST',
  'get' = 'GET',
  'patch' = 'PATCH',
  'delete' = 'DELETE'
}

export interface PostmansRequest {
  url: string
  requestsView: string // request type - post/get/...
}
