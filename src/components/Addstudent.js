import React from "react";
import Box from "@mui/material/Box";
import DashboardLayout from "./Dashboard/DashboardLayout";

const Addstudent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const studentInfo = {
      firstName: event.target.firstName.value,
      middleName: event.target.middleName.value,
      lastName: event.target.lastName.value,
      class: event.target.class.value,
      division: event.target.division.value,
      roll: event.target.roll.value,
      address1: event.target.address1.value,
      address2: event.target.address2.value,
      landMark: event.target.landmark.value,
      city: event.target.city.value,
      pincode: event.target.pincode.value,
    };
    console.log(studentInfo);
  };
  return (
    <div>
      <Box component="main" sx={{ display: "flex", p: 1, marginTop: "50px" }}>
        <DashboardLayout />
        <div>
          <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Account settings
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Name section start */}
              <section>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="middleName"
                      placeholder="Middle Name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <select
                      name="class"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    >
                      <option value="VI-A">VI-A</option>
                      <option value="VI-B">VI-B</option>
                      <option value="VII-A">VII-A</option>
                      <option value="IX-A">IX-A</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="division"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    >
                      <option value="1st">First</option>
                      <option value="2nd">Second</option>
                      <option value="3rd">Third</option>
                      <option value="average">average</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="roll"
                      placeholder="Enter Roll Number in Digits"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              </section>

              <section>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="address1"
                      placeholder="Address Line1"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="address2"
                      placeholder="Address Line 2"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <input
                      type="text"
                      name="landmark"
                      placeholder="LandMark"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Pincode"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              </section>

              <div class="flex justify-start mt-6">
                <button class="px-14 py-2.5 leading-5 text-white bg-red-700 rounded-md focus:outline-none">
                  Add Student
                </button>
              </div>
            </form>
          </section>
        </div>
      </Box>
    </div>
  );
};

export default Addstudent;
