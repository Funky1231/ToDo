export interface Category {
  id: number;
  categoryName: string;
  userId: number;
}

export interface SaveCategoryRequest {
  categoryName: string;
  userId: number
}

export interface UpdateCategoryRequest {
  id: number;
  categoryName: string;
}
