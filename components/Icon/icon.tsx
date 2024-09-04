import React from "react";
import type { SVGProps } from "react";

export function ImagePlaceHolder(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width="24" height="24" fill="none" />
      <path
        fill="gray"
        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5z"
      />
    </svg>
  );
}

export function SignOut(props: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
    >
      <rect width="24" height="24" fill="none" />
      <path
        fill={props.color}
        d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1M17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"
      />
    </svg>
  );
}

export function SignIn(props: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.4em"
      height="1.4em"
      viewBox="0 0 24 24"
    >
      <rect width="24" fill="none" height="24" />
      <path
        fill={props.color}
        d="M20 12a1 1 0 0 0-1-1h-7.59l2.3-2.29a1 1 0 1 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L11.41 13H19a1 1 0 0 0 1-1M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 0 0-2 0v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3"
      />
    </svg>
  );
}

export function NotoVideoGame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#464c4f"
        d="M19.64 35.33c.09-.26-.09-4.82 2.45-8.41s5.87-4.12 8.33-4.56c2.98-.53 10.17-1.4 11.31 1.05c1.14 2.45.26 3.77 2.1 4.47s-1.49 4.82-1.49 4.82zm88.25-.09s.72-4.43-1.81-7.42c-3.8-4.51-9.75-5.97-15.38-5.97c-1.81 0-3.98.35-4.68 2.51c-.4 1.25-.68 2.77-1.56 2.94c-.87.18 17.73 5.93 23.43 7.94"
      ></path>
      <path
        fill="#5e6268"
        d="M39.04 81.29c-2.99 2.32-6.96 18.32-13.17 22.55s-20.28 1.97-21.34-6.66c-.93-7.61.76-23.61 5-39.96s7.5-24.45 17.41-27.1c7.95-2.13 23.53-3.63 38.66-3.48c15.14.15 28.39.15 36.72 3.33c7.47 2.85 12.56 10.6 16.05 25.73c3.48 15.14 6.17 33.34 5.75 39.36c-.61 8.78-13.02 14.38-22.25 7.57c-7.35-5.42-8.78-19.22-12.56-21.19s-47.55-2.27-50.27-.15"
      ></path>
      <path
        fill="#9e9e9e"
        d="M93.25 77.17c-.72.9.94 2.24 2.12 5.17c1.18 2.93 4.22 12.63 7.17 15.34c3.68 3.37 6.55 2.74 7.11 1.68s-2.62-3.8-6.36-9.91s-8.54-14.15-10.04-12.28m-82.73-2.49c-1.11.2-4.05 14.96-1.87 21.2c1.82 5.2 8.79 5.49 11.41 4.74c5.22-1.49 6.86-6.55 5.67-7.11c-1.18-.56-5.32 3.4-9.23 1.56c-4.36-2.06-4.3-7.86-4.86-13.72c-.5-5.28-.06-6.86-1.12-6.67m27.49-32.73c-.41 0-4.01-.02-4.01-.02l.02-4.35s.08-3.51-3.68-3.43c-3.37.07-3.3 2.88-3.3 3.43s-.02 4.32-.02 4.32s-3.82-.04-4.53-.02s-3.37.06-3.37 3.49c0 3.24 2.75 3.47 3.37 3.49s4.51.02 4.51.02s-.03 3.63-.02 4.22s.12 3.37 3.49 3.37c3.68 0 3.49-3.37 3.49-3.37l.02-4.19s3.44.03 4.04.02c.86-.02 3.39-.25 3.43-3.68c.03-3.39-3.02-3.3-3.44-3.3"
      ></path>
      <circle cx={48.4} cy={62.42} r={8.54} fill="#afafaf"></circle>
      <circle cx={77.75} cy={62.55} r={8.54} fill="#afafaf"></circle>
      <circle cx={48.39} cy={62.21} r={5.71} fill="#c8c8c8"></circle>
      <circle cx={77.75} cy={62.4} r={5.71} fill="#c8c8c8"></circle>
      <circle cx={85.82} cy={45.67} r={4.6} fill="currentColor"></circle>
      <circle cx={94.94} cy={54.48} r={4.6} fill="#06ac48"></circle>
      <circle cx={104.12} cy={46.4} r={4.6} fill="#f72e26"></circle>
      <circle cx={95.02} cy={37.01} r={4.6} fill="#fdb700"></circle>
    </svg>
  );
}

export function IconParkPiano(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <rect width={40} height={16} x={4} y={8} fill="#2f88ff"></rect>
        <rect width={40} height={16} x={4} y={24}></rect>
        <path d="M10 24V32"></path>
        <path d="M16 24V32"></path>
        <path d="M26 24V32"></path>
        <path d="M32 24V32"></path>
        <path d="M38 24V32"></path>
      </g>
    </svg>
  );
}

export function MarketeqTelescope(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 50 50"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          stroke="#344054"
          d="m27.083 25l6.25 18.75M27.083 25l-6.25 18.75z"
        ></path>
        <path
          stroke="#306cfe"
          d="M43.75 22.354L39.438 6.25m3.77 14.083l-22.125 5.938a2.08 2.08 0 0 1-2.562-1.48l-2.146-8.124a2.083 2.083 0 0 1 1.458-2.563l22.146-5.77zM8.333 27.5l10.105-2.708l-2.063-8.125L6.25 19.458z"
        ></path>
      </g>
    </svg>
  );
}

export function IconParkBike(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none">
        <path
          fill="#2f88ff"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10.5 42C15.1944 42 19 38.1944 19 33.5C19 28.8056 15.1944 25 10.5 25C5.80558 25 2 28.8056 2 33.5C2 38.1944 5.80558 42 10.5 42Z"
        ></path>
        <path
          fill="#2f88ff"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M37 42C41.9706 42 46 37.9706 46 33C46 28.0294 41.9706 24 37 24C32.0294 24 28 28.0294 28 33C28 37.9706 32.0294 42 37 42Z"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18.9966 6H27.9971L36.9999 33"
        ></path>
        <path
          fill="#2f88ff"
          fillRule="evenodd"
          d="M11.0574 33L31.6819 16.7632L11.0574 33Z"
          clipRule="evenodd"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11.0574 33L31.6819 16.7632"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M31.6819 15H40.1539L42.0001 10"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M8 15.9736H15"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M15 16L18.2727 26.4211"
        ></path>
      </g>
    </svg>
  );
}

export function IconParkMovie(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" strokeWidth={4}>
        <path
          fill="#2f88ff"
          stroke="#000"
          strokeLinejoin="round"
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        ></path>
        <path
          fill="#43ccf8"
          stroke="#fff"
          strokeLinejoin="round"
          d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"
        ></path>
        <path
          fill="#43ccf8"
          stroke="#fff"
          strokeLinejoin="round"
          d="M24 36C25.6569 36 27 34.6569 27 33C27 31.3431 25.6569 30 24 30C22.3431 30 21 31.3431 21 33C21 34.6569 22.3431 36 24 36Z"
        ></path>
        <path
          fill="#43ccf8"
          stroke="#fff"
          strokeLinejoin="round"
          d="M15 27C16.6569 27 18 25.6569 18 24C18 22.3431 16.6569 21 15 21C13.3431 21 12 22.3431 12 24C12 25.6569 13.3431 27 15 27Z"
        ></path>
        <path
          fill="#43ccf8"
          stroke="#fff"
          strokeLinejoin="round"
          d="M33 27C34.6569 27 36 25.6569 36 24C36 22.3431 34.6569 21 33 21C31.3431 21 30 22.3431 30 24C30 25.6569 31.3431 27 33 27Z"
        ></path>
        <path stroke="#000" strokeLinecap="round" d="M24 44H44"></path>
      </g>
    </svg>
  );
}

export function LucideOrigami(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="#6d87d5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025M12 21l-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"></path>
        <path d="m12.214 3.381l8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"></path>
      </g>
    </svg>
  );
}
