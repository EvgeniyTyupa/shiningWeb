import React from "react";

const MailIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
        { ...props }
        >
           <path
                fill="#fff"
                fillRule="evenodd"
                d="M1 5.75A2.75 2.75 0 013.75 3h12.5A2.75 2.75 0 0119 5.75v8.5A2.75 2.75 0 0116.25 17H3.75A2.75 2.75 0 011 14.25v-8.5zM3.75 4.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H3.75zm.43 1.765a.75.75 0 011.058-.082L10 10.265l4.762-4.082a.75.75 0 11.976 1.14l-5.25 4.5a.75.75 0 01-.976 0l-5.25-4.5a.75.75 0 01-.081-1.058z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default MailIcon;
