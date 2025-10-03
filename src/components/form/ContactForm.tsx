import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    jmeno: "",
    prijmeni: "",
    email: "",
    dotaz: "",
    souhlas: false,
  });

  const [success, setSuccess] = useState(false);
  const [formCheck, setformCheck] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement; //ts pro checkbox at nerve
    const { name, value, type, checked } = target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.souhlas) {
      setformCheck(true);
      return;
    }
    try {
      const result = await fetch(URL + "contact", { //definuj URL
        method: "POST",
        body: JSON.stringify({
          jmeno: form.jmeno,
          prijmeni: form.prijmeni,
          email: form.email,
          dotaz: form.dotaz,
        }),
        headers: { "Content-type": "application/json" },
      });
      if (result.status === 200) {
        setformCheck(false);
        setSuccess(true);
      } else if (result.status === 400) {
        console.log("Bad Request: Invalid input data");
      } else if (result.status === 401) {
        console.log(
          "Unauthorized: You are not authorized to perform this action"
        );
      } else {
        console.log("Server Error: Something went wrong on the server");
      }
    } catch (error) {
      console.log("Error occurred while sending the request:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form  bg-one"
    >
      <h2 className="qform">Dotazovací formulář</h2>

      {/* Jméno */}
      <div>
        <label
          htmlFor="jmeno"
          className="label"
        >
          Jméno
        </label>
        <input
          type="text"
          id="jmeno"
          name="jmeno"
          value={form.jmeno}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      {/* Příjmení */}
      <div>
        <label
          htmlFor="prijmeni"
          className="label"
        >
          Příjmení
        </label>
        <input
          type="text"
          id="prijmeni"
          name="prijmeni"
          value={form.prijmeni}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className=""
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      {/* Dotaz */}
      <div>
        <label
          htmlFor="dotaz"
          className="label"
        >
          Dotaz
        </label>
        <textarea
          id="dotaz"
          name="dotaz"
          value={form.dotaz}
          onChange={handleChange}
          rows={4}
          required
          className="textArea"
        />
      </div>

      {/* Souhlas */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="souhlas"
          name="souhlas"
          checked={form.souhlas}
          onChange={handleChange}
          className="input"
        />
        <label htmlFor="souhlas" className="label">
          Odesláním formuláře souhlasíte se zpracováním osobních údajů.
        </label>
      </div>

      {/* Zpráva o úspěchu */}
      {success && (
        <p className="text-green-600 font-medium">
          Formulář byl úspěšně odeslán!
        </p>
      )}

      {/* CHECK */}
      {formCheck && (
        <p className="text-red-600 font-medium">
          Musíte souhlasit se zpracováním osobních údajů.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="button"
      >
        Odeslat
      </button>
    </form>
  );
}
