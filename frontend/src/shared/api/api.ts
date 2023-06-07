import ky from 'ky';

export const api = (endpoint: ApiEndpoints) => ky.create({
  prefixUrl: `${__API__}${endpoint}`,
});

export enum ApiEndpoints {
  USERS = '/users',
  LISTS = '/lists',
  CATEGORIES = '/categories'
}
