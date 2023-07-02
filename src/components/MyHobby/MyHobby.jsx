import React from 'react';

const MyHobby = () => {
    return (
        <>
            <div id='myhobby' className="flex min-h-screen  items-center justify-center">
       <div className="md:flex md:flex-row flex flex-col-reverse items-center md:justify-between md:mx-24 md:h-96 h-auto mt-20 md:py-0 py-5 ">
          <div className="md:flex items-center md:gap-x-10 md:space-y-0 space-y-5 md:ml-10 md:mt-0 mt-10">
            <div
              className="md:w-80 w-72 h-48 py-5  rounded md:flex items-center justify-center cursor-pointer hover: group hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105  border  border-opacity-30"
              style={{ borderColor: "rgb(10, 105, 220)" }}
            >
              <div className="flex flex-col items-center gap-y-5">
                <span
                  className="text-7xl"
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                  </svg>
                </span>
                <h1 className="text-2xl  group-hover:text-black font-semibold">
                  Coding
                </h1>
              </div>
            </div>
            <div
              className="md:w-80 w-72 h-48 py-5  rounded md:flex items-center justify-center cursor-pointer hover: group hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105  border  border-opacity-30"
              style={{ borderColor: "rgb(10, 105, 220)" }}
            >
              <div className="flex flex-col items-center gap-y-5">
                <span
                  className="text-7xl"
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 6h18v5h2V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H3V6z" />
                    <path d="M15 12L9 8v8zM22.71 18.43c.03-.29.04-.58.01-.86l1.07-.85c.1-.08.12-.21.06-.32l-1.03-1.79c-.06-.11-.19-.15-.31-.11l-1.28.5a3.44 3.44 0 00-.75-.42l-.2-1.36a.249.249 0 00-.25-.22h-2.07c-.12 0-.23.09-.25.21l-.2 1.36c-.26.11-.51.26-.74.42l-1.28-.5c-.12-.05-.25 0-.31.11l-1.03 1.79c-.06.11-.04.24.06.32l1.07.86c-.03.29-.04.58-.01.86l-1.07.85c-.1.08-.12.21-.06.32l1.03 1.79c.06.11.19.15.31.11l1.27-.5c.23.17.48.31.75.42l.2 1.36c.02.12.12.21.25.21h2.07c.12 0 .23-.09.25-.21l.2-1.36c.26-.11.51-.26.74-.42l1.28.5c.12.05.25 0 .31-.11l1.03-1.79c.06-.11.04-.24-.06-.32l-1.06-.85zM19 19.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </span>
                <h1 className="text-2xl  group-hover:text-black font-semibold">
                  Content Creation
                </h1>
              </div>
            </div>
            <div
              className="md:w-80 w-72 h-48 py-5  rounded md:flex items-center justify-center cursor-pointer hover: group hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105  border  border-opacity-30"
              style={{ borderColor: "rgb(10, 105, 220)" }}
            >
              <div className="flex flex-col items-center gap-y-5">
                <span
                  className="text-7xl"
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm256 253.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z" />
                  </svg>
                </span>
                <h1 className="text-2xl  group-hover:text-black font-semibold">
                  Bloging
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex items-center space-y-2 md:-rotate-90 text-md   "
            style={{ color: "rgb(10, 105, 220)" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
            </svg>
            <span className="uppercase border py-0 px-4 rounded-md font-bold whitespace-nowrap">
              LoveTo Do
            </span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
            </svg>
          </div>
        </div>
      </div>
        </>
    );
}

export default MyHobby;
