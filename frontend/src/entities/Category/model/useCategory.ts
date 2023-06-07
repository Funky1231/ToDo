// // write useCategory hook here
// import { useMutation, useQuery } from 'react-query';
// import { Category } from './Category';
// import { apiCategory } from './api';
//
// export const useCategory = () => {
//   const { data: categories = [], isLoading } = useQuery('categories', apiCategory.getCategories, {
//     onSuccess: (data) => {
//       console.log('data', data);
//     },
//   });
//
// };
