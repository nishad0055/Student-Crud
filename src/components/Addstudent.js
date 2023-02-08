import React from "react";
import Box from "@mui/material/Box";
import DashboardLayout from "./Dashboard/DashboardLayout";
import { toast } from "react-hot-toast";

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

    fetch("https://student-server-nishad0055.vercel.app/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged > 0) {
          toast.success("Add Student Sucessfull");
        }
        event.target.reset();
        console.log(data);
      });
  };
  return (
    <div>
      <Box component="main" sx={{ display: "flex", p: 1, marginTop: "50px" }}>
        <DashboardLayout />
        <div>
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Add Student
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
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="middleName"
                      placeholder="Middle Name"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <select
                      name="class"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    >
                      <option value="I">I</option>
                      <option value="II">II</option>
                      <option value="III">III</option>
                      <option value="IV">IV</option>
                      <option value="V">V</option>
                      <option value="VI">VI</option>
                      <option value="VII">VII</option>
                      <option value="VIII">VIII</option>
                      <option value="IX">IX</option>
                      <option value="X">X</option>
                      <option value="XI">XI</option>
                      <option value="XII">XII</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="division"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    >
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </select>
                  </div>
                  <div>
                    <input
                      required
                      type="number"
                      name="roll"
                      min="0"
                      max="99"
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
                      required
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
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Pincode"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              </section>

              <div className="flex justify-start mt-6">
                <button className="px-14 py-2.5 leading-5 text-white bg-red-700 rounded-md focus:outline-none">
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
