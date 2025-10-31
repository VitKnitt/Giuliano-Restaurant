import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUrl } from "..//url/urlSlice";
import { AuthMe } from "./AuthMe";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [wrongNameOrPassword, setWrongNameOrPassword] = useState(false);
  const URL = useSelector(selectUrl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await fetch(URL + "users/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ userName, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.status === 200) {
        console.log("uzivatel prihlasen");
        AuthMe(dispatch, URL);
        navigate("/article");
      } else {
        setWrongNameOrPassword(true);
      }
    } catch (err) {
      console.error("Chyba v přihlášení:", err);
    }
  };

  useEffect(() => {
    if (wrongNameOrPassword) {
      const timer = setTimeout(() => {
        setWrongNameOrPassword(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [wrongNameOrPassword]);

  return (
    <div className="registration">
      <form
        onSubmit={(e) => handleLogin(e)}
        
        className="registration-submit"
      >
        <h2 className="text-seven">jméno:</h2>
        <input
          required
          type="text"
          placeholder="jméno"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="text-seven"
        />
        <h2 className="text-seven">heslo:</h2>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-seven"
        />
        <button type="submit" className="text-seven">log in</button>
      </form>
      {wrongNameOrPassword && <p>špatné jméno nebo heslo</p>}
    </div>
  );
};

export default LogIn;
