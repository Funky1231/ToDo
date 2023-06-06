import { create } from 'zustand';
import { List } from '../types';

interface ListStore {
  lists: List[];
  setLists: (lists: List[]) => void;
}

export const useListStore = create<ListStore>((set) => ({
  lists: [],
  setLists: (lists) => set({ lists }),
}));
