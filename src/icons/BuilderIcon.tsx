import React from "react";

const BuilderIcon = ({color = "#5050C5", size = 32}: {color?: string; size?: number}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.8293 4H23C25.7614 4 28 6.23858 28 9V25C28 27.7614 25.7614 30 23 30H9C6.23858 30 4 27.7614 4 25V9C4 6.23858 6.23858 4 9 4H9.17071C9.58254 2.83481 10.6938 2 12 2H20C21.3062 2 22.4175 2.83481 22.8293 4ZM9.17071 6H9C7.34315 6 6 7.34315 6 9V25C6 26.6569 7.34315 28 9 28H23C24.6569 28 26 26.6569 26 25V9C26 7.34315 24.6569 6 23 6H22.8293C22.4175 7.16519 21.3062 8 20 8H12C10.6938 8 9.58254 7.16519 9.17071 6ZM11 5C11 4.44772 11.4477 4 12 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H12C11.4477 6 11 5.55228 11 5Z"
        fill={color}
      />
    </svg>
  );
};

export default BuilderIcon;