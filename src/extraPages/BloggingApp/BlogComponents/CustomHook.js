import Login from "./chComponents/Login";
import Reset from "./chComponents/Reset";

import { useState } from "react";

function CustomHook() {
  const [form, setForm] = useState("login");

  return (
    <div className="CustomHook">
      <h1>Welcome!</h1>
      {form === "login" ? <Login /> : <Reset />}
      <button
        onClick={() => {
          setForm(form === "login" ? "reset" : "login");
        }}
      >
        {form === "login" ? "Forgot Password" : "Back to Login"}
      </button>
    </div>
  );
}

export default CustomHook;
