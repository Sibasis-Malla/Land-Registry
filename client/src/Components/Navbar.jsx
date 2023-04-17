import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = ({ selected }) => {
  const navigate = useNavigate();
  function handleClick(event) {
    switch (event) {
      case "Buy Land":
        navigate("/buy-land");
        break;
      case "Sell Land":
        navigate("/sell-land");
        break;
      default:
        break;
    }
  }
  const LinkComp = ({ linkTo, text }) => {
    return (
      <Link
        to={linkTo}
        class={`block py-2 pl-3 pr-4 text-red rounded md:bg-transparent ${
          selected === text ? "text-blue-600" : "text-gray-900"
        }`}
        aria-current="page"
      >
        {text}
      </Link>
    );
  };
  const Button = ({ text }) => {
    return (
      <button
        type="button"
        onClick={() => {
          handleClick(text);
        }}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {text}
      </button>
    );
  };
  return (
    <nav class=" mb-6 shadow-lg bg-gradient-to-r from-white to-gray-200 border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <div class="flex md:order-2">
          {selected === "Buy and Sell" && (
            <div className="flex flex-row space-x-3">
              <Button text="Buy Land" />
              <Button text="Sell Land" />
            </div>
          )}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <LinkComp linkTo="/" text="Home" />
            </li>
            <li>
              <LinkComp linkTo="/buy-sell" text="Buy and Sell" />
            </li>
            <li>
              <LinkComp linkTo="/services" text="Services" />
            </li>
            <li>
              <LinkComp linkTo="/dashboard" text="Dashboard" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
