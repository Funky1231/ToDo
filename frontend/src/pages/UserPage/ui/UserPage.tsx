import React, { FC } from 'react';
import { getUsers, saveUser } from '@/entities/User';
import { useQuery } from 'react-query';
import { Button, Spinner, TextInput } from 'flowbite-react';

export const UserPage: FC = () => {
  const { data, isLoading, isError } = useQuery('users', getUsers);
  const [ userName, setUserName ] = React.useState('');

  const onSave = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const newUser = {
      userName,
    };

    await saveUser(newUser);
    setUserName('');
  };

  return (
    <>
      <h1 className="text-3xl">User page</h1>

      <div className="py-4 border-b max-w-md">
        <h2 className="text-xl mb-2">Users list:</h2>
        {isLoading && <Spinner />}
        {isError && <div>Error</div>}
        {data && (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.id}. {user.user_name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="py-4 max-w-md">
        <h2 className="text-xl mb-2">Save user:</h2>
        <form className="flex flex-col">
          <TextInput
            className="mb-2"
            placeholder="User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button type="submit" onClick={onSave}>Submit</Button>
        </form>
      </div>
    </>
  );
};
