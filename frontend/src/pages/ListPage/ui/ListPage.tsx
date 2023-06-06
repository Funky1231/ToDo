import { apiList, useList } from '@/entities/List';
import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { Button, Spinner, TextInput } from 'flowbite-react';

export const ListPage: FC = () => {
  const { data, isLoading, isError } = useQuery('users', apiList.getLists);
  const [ userName, setUserName ] = React.useState('');
  const { lists, saveList } = useList();

  console.log('ListPage');


  // const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  //
  //   const newUser = {
  //     userName,
  //   };
  //
  //   saveUser(newUser).then();
  //   setUserName('');
  // };

  return (
    <>
      <h1 className="text-3xl">List page</h1>

      <div className="py-4 border-b max-w-md">
        <h2 className="text-xl mb-2">Lists:</h2>
        {isLoading && <Spinner />}
        {isError && <div>Error</div>}
        {lists && (
          <ul>
            {lists.map((list) => (
              <li key={list.id}>{list.id}. {list.title}</li>
            ))}
          </ul>
        )}
      </div>

      {/*<div className="py-4 max-w-md">*/}
      {/*  <h2 className="text-xl mb-2">Save user:</h2>*/}
      {/*  <form className="flex flex-col">*/}
      {/*    <TextInput*/}
      {/*      className="mb-2"*/}
      {/*      placeholder="User name"*/}
      {/*      value={userName}*/}
      {/*      onChange={(e) => setUserName(e.target.value)}*/}
      {/*    />*/}
      {/*    <Button type="submit" onClick={onSave}>Submit</Button>*/}
      {/*  </form>*/}
      {/*</div>*/}
    </>
  );
};
