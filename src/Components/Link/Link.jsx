import React from "react";

const Link = ({route}) => {
  return (
    <li className="mr-10 hover:bg-yellow-600 p-2">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
