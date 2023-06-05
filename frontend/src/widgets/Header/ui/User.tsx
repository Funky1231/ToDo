import { Dropdown } from 'flowbite-react';
import React from 'react';

export const User = () => {
  const userName = 'Bonnie Green';

  return (
    <Dropdown
      inline
      label={<span className="p-2.5 pr-0">{userName}</span>}
    >
      <Dropdown.Item>
          Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
          Settings
      </Dropdown.Item>
      <Dropdown.Item>
          Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
          Sign out
      </Dropdown.Item>
    </Dropdown>
  );
};
