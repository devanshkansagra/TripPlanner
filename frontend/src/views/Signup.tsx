import { useState } from "react";
import { signup } from "../api/TripPlannerApi";
import { getAuthorizationURL } from "../helpers/getAuthorizationURL";
export function Signup() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const oauthURL = getAuthorizationURL();

  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = { fullname, email, username, password };
    try {
      const response = await signup(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container mt-5">
      <form className="w-50 md:w-auto mx-auto p-4 border rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="form-control"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-light w-100 mt-2 d-flex align-items-center justify-content-center"
          onClick={() => {
            window.location.href = oauthURL;
          }}
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          Signup with Google
        </button>
      </form>
    </div>
  );
}
