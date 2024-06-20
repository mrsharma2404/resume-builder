import React from 'react'

const ArrowIcon = ({ color = '#222222', size = 24 }: { color?: string; size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.4697 11.4693L10.2803 7.27991C9.80786 6.80744 9 7.14207 9 7.81025L9 16.1889C9 16.8571 9.80785 17.1917 10.2803 16.7193L14.4697 12.5299C14.7626 12.237 14.7626 11.7621 14.4697 11.4693Z"
        fill={color}
      />
    </svg>
  )
}

export default ArrowIcon
