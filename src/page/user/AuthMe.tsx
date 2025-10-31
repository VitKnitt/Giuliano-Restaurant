import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { saveUsersName } from "./usersSlice";

export const AuthMe = async (dispatch: Dispatch<UnknownAction>, URL: string) => {
  try {
    const result = await fetch(URL + "users/authme", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      const data = await result.json();
      if (data?.userName) {
        dispatch(saveUsersName(data.userName));
        console.log("Uživatel:", data.userName);
      } else {``
        console.log("Neplatný token nebo chybí data");
      }
    } else {
      console.log("Uživatel není přihlášen:", result.status);
    }
  } catch (err) {
    console.error("Chyba při ověřování přihlášení:", err);
  }
};
