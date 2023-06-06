import { List } from './types';
import { api } from '@/shared/api/api';

interface ApiList {
  getLists: () => Promise<List[]>;
  getList: (id: number) => Promise<List>;
  saveList: (request: List) => Promise<List>;
  updateList: (list: List) => Promise<List>;
  deleteList: (id: number) => Promise<void>;
}

export const apiList: ApiList = {
  getLists: () => api.get('lists/get-lists').json<List[]>(),
  getList: (id: number) => api.get(`lists/get-list/${id}`).json<List>(),
  saveList: (request: List) => api.post('lists/save-list', { json: request }).json<List>(),
  updateList: (list: List) => api.put('lists/update-list', { json: list }).json<List>(),
  deleteList: (id: number) => api.delete('lists/delete-list', { json: { id } }).json<void>(),
};
