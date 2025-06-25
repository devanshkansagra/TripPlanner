import { useState } from "react";
import { login } from "../api/TripPlannerApi";
export function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await login(username, password);
    if (response) {
      console.log(response);
    }
  }
  return (
    <div className="container mt-5">
      <form className="w-50 md:w-auto mx-auto p-4 border rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
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
      </form>
    </div>
  );
}
