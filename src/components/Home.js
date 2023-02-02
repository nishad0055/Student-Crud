import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here.
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    console.log(`Username: ${email}, Password: ${password}`);
  };
  return (
    <div>
      <section className="min-h-screen flex justify-center items-center ">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Email:</label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            className="bg-blue-700 w-full mt-5 rounded text-white text-lg py-3"
            type="submit"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
