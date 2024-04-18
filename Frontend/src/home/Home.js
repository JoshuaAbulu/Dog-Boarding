import React from "react";
import Header from "../components/navbar/Header";

export const Home = () => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium shadow-lg">
            <li>
              <a
                href="/home"
                className="flex items-center p-2 text-white rounded-lg dark:text-white bg-lime-400 dark:hover:bg-lime-200 group"
              >
                <svg
                  class="w-5 h-5 text-white transition duration-75 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/jobs"
                className="flex items-center p-2 text-white rounded-lg dark:text-black dark:hover:bg-lime-400 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Jobs</span>
              </a>
            </li>
            <li>
              <a
                href="/notifications"
                className="flex items-center p-2 text-white rounded-lg dark:text-black dark:hover:bg-lime-400 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Notifications</span>
              </a>
            </li>
            <li>
              <a
                href="/bookings"
                className="flex items-center p-2 text-white rounded-lg dark:text-black dark:hover:bg-lime-400 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Booking Management</span>
              </a>
            </li>
            <li>
              <a
                href="/message"
                className="flex items-center p-2 text-white rounded-lg dark:text-black dark:hover:bg-lime-400 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Message</span>
              </a>
            </li>
            <li>
              <a
                href="/location"
                className="flex items-center p-2 text-white rounded-lg dark:text-black dark:hover:bg-lime-400 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Update Location</span>
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="flex items-center p-2 text-white rounded-lg dark:text-black dark:hover:bg-lime-400 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="/logout"
                className="flex items-center p-2 text-white rounded-lg dark:text-black dark:hover:bg-lime-400 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <Header/>
      </div>
    </div>
  );
};
