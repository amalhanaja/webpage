import { FC } from "react";

export const Logo: FC<{ size: number }> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_51_49)">
        <circle cx="20" cy="20" r="20" fill="#569CD6" />
        <g clipPath="url(#clip1_51_49)">
          <path
            d="M16.7486 12H17.8156C20.7239 12 22.4586 13.0094 23.0197 15.0282C23.2094 15.693 23.3042 16.4551 23.3042 17.3146V28.5517H16.7486V12ZM8 17.3146C8 15.5228 8.3991 14.2093 9.19731 13.3742C10.0745 12.4581 11.505 12 13.4887 12H14.5556V28.5517H8V17.3146Z"
            fill="white"
          />
          <path
            d="M16.9329 12H23.3106V20.2819H25.6223V12H32V28.5274H25.6223V22.1183H23.3106V28.5274H16.9329V12Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_51_49">
          <rect width="40" height="40" fill="white" />
        </clipPath>
        <clipPath id="clip1_51_49">
          <rect
            width="24"
            height="16.5517"
            fill="white"
            transform="translate(8 12)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
