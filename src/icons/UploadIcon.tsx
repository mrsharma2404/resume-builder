import React from 'react'

const UploadIcon = ({ color = '#717171', size = 16 }: { color?: string; size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.64645 5.14645C3.45118 5.34171 3.45118 5.65829 3.64645 5.85355C3.84171 6.04882 4.15829 6.04882 4.35355 5.85355L7.5 2.70711L7.5 11.5C7.5 11.7761 7.72386 12 8 12C8.27614 12 8.5 11.7761 8.5 11.5L8.5 2.70711L11.6464 5.85355C11.8417 6.04882 12.1583 6.04882 12.3536 5.85356C12.5488 5.65829 12.5488 5.34171 12.3536 5.14645L8.35355 1.14645C8.3505 1.14339 8.3474 1.14037 8.34427 1.1374C8.25282 1.05057 8.13182 1.00143 8.00553 1.00003C8.00369 1.00001 8.00184 1 8 1C7.99816 1 7.99631 1.00001 7.99447 1.00003C7.86513 1.00146 7.74133 1.05297 7.64915 1.14377C7.64824 1.14466 7.64734 1.14555 7.64645 1.14645L3.64645 5.14645Z"
        fill="#717171"
      />
      <path
        d="M1.5 14.5C1.5 14.2239 1.72386 14 2 14H14C14.2761 14 14.5 14.2239 14.5 14.5C14.5 14.7761 14.2761 15 14 15H2C1.72386 15 1.5 14.7761 1.5 14.5Z"
        fill={color}
      />
    </svg>
  )
}

export default UploadIcon
