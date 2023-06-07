import { api, ApiEndpoints } from '@/shared/api/api';
import { Category, SaveCategoryRequest, UpdateCategoryRequest } from './types';

const categories = api(ApiEndpoints.CATEGORIES);

interface ApiCategory {
  getCategories: () => Promise<Category[]>;
  getCategory: (id: number) => Promise<Category>;
  saveCategory: (request: SaveCategoryRequest) => Promise<Category>;
  updateCategory: (request: UpdateCategoryRequest) => Promise<Category>;
  deleteCategory: (id: number) => Promise<Category>;
}

export const apiCategory: ApiCategory = {
  getCategories: () => categories.get('get-categories').json(),
  getCategory: (id) => categories.get(`get-category/${id}`).json(),
  saveCategory: (request) => categories.post('save-category', { json: request }).json(),
  updateCategory: (request) => categories.put('update-category', { json: request }).json(),
  deleteCategory: (id) => categories.delete('delete-category', { json: { id } }).json(),
};
