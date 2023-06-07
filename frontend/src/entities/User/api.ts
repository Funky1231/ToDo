import ky from 'ky';
import { SaveUserRequest, User } from './types';

const api = ky.create({ prefixUrl: `${__API__}/users` });

export function getUsers(): Promise<User[]> {
  return api.get('get-users').json();
}

export function getUser(id: number): Promise<User> {
  return api.get(`get-user/${id}`).json();
}

export function saveUser(request: SaveUserRequest): Promise<User> {
  return api.post('save-user', { json: request }).json();
}

export function updateUser(user: User): Promise<User> {
  return api.put('update-user', { json: user }).json();
}

export function deleteUser(id: number): Promise<void> {
  return api.delete('delete-user', { json: { id } }).json();
}
