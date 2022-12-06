import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="bg-gray-800 bg-opacity-0">
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a class="text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">
                    Phone- 8283056888
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    E-mail- digidopvtltd@gmail.com
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    Address- Grand Omaxe, sec-93, NOIDA
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Support
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">WWW.digido.com</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">About</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">About</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Services
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">
                    Web-app based solutions
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    content based solutions
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    Database based solutions
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
