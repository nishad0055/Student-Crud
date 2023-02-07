import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ShowDialog({ open, handleClose, view }) {
  const {
    firstName,
    lastName,
    middleName,
    roll,
    division,
    city,
    address1,
    address2,
    pincode,
    landMark,
  } = view;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title"></DialogTitle>
        <DialogContent>
          <form>
            {/* Name section start */}
            <section>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    disabled
                    placeholder="First Name"
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label>Middle Name</label>
                  <input
                    type="text"
                    name="middleName"
                    value={middleName}
                    disabled
                    placeholder="Middle Name"
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    disabled
                    placeholder="Last Name"
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  />
                </div>

                <div>
                  <label>Class Name</label>
                  <select
                    name="class"
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  >
                    <option value="I"> {view.class} </option>
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
                  <label>Division Name</label>
                  <select
                    name="division"
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  >
                    <option value="A">{division} </option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </select>
                </div>
                <div>
                  <label>Roll Number</label>
                  <input
                    type="number"
                    name="roll"
                    value={roll}
                    disabled
                    min="0"
                    max="99"
                    placeholder="Enter Roll Number in Digits"
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  />
                </div>
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label>Address1</label>
                  <input
                    type="text"
                    name="address1"
                    value={address1}
                    disabled
                    placeholder="Address Line1"
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label>Address2</label>
                  <input
                    type="text"
                    name="address2"
                    value={address2}
                    disabled
                    placeholder="Address Line 2"
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  />
                </div>
              </div>
            </section>
            <section>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                <div>
                  <label>LandMark</label>
                  <input
                    type="text"
                    name="landmark"
                    value={landMark}
                    disabled
                    placeholder="LandMark"
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={city}
                    disabled
                    placeholder="City"
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label>Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={pincode}
                    disabled
                    placeholder="Pincode"
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-300 border border-gray-200 rounded-md"
                  />
                </div>
              </div>
            </section>

            {/* <div class="flex justify-start mt-6">
              <button class="px-14 py-2.5 leading-5 text-white bg-red-700 rounded-md focus:outline-none">
                Add Student
              </button>
            </div> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
