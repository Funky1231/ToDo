import { api, ApiEndpoints } from '@/shared/api/api';
import { List } from './types';

const lists = api(ApiEndpoints.LISTS);

interface ApiList {
  getLists: () => Promise<List[]>;
  getList: (id: number) => Promise<List>;
  saveList: (request: List) => Promise<List>;
  updateList: (list: List) => Promise<List>;
  deleteList: (id: number) => Promise<void>;
}

export const apiList: ApiList = {
  getLists: () => lists.get('get-lists').json<List[]>(),
  getList: (id: number) => lists.get(`get-list/${id}`).json<List>(),
  saveList: (request: List) => lists.post('save-list', { json: request }).json<List>(),
  updateList: (list: List) => lists.put('update-list', { json: list }).json<List>(),
  deleteList: (id: number) => lists.delete('delete-list', { json: { id } }).json<void>(),
};
