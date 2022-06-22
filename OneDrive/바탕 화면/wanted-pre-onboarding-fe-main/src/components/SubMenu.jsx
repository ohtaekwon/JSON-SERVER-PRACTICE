import React from 'react';

export default function SubMenu() {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return <button onClick={handleClick}>Logout</button>;
}
