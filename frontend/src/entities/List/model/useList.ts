import { apiList } from '@/entities/List';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useListStore } from './useListStore';

export const useList = () => {
  const { lists, setLists } = useListStore();
  const queryClient = useQueryClient();

  useQuery('lists', apiList.getLists, {
    onSuccess: (data) => {
      setLists(data);
    },
  });

  const saveListMutation = useMutation(apiList.saveList, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('lists');
    },
  });

  return {
    lists,
    saveList: saveListMutation.mutate,
  };
};
