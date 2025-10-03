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
      const result = await fetch(URL + "contact", {
        //definuj URL
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
       className="form bg-two bg-opacity-[90%] md:rounded-xl border-4 border-three md:w-[22rem] md:w-[28rem] max-w-full"
    >
      <h2 className="qform text-4xl">Dotazovací formulář</h2>

      {/* Jméno */}
      <div>
        <label htmlFor="jmeno" className="label text-xl">
          Jméno
        </label>
        <input
          type="text"
          id="jmeno"
          name="jmeno"
          value={form.jmeno}
          onChange={handleChange}
          required
          className="input text-xl"
        />
      </div>

      {/* Příjmení */}
      <div>
        <label htmlFor="prijmeni" className="label text-xl">
          Příjmení
        </label>
        <input
          type="text"
          id="prijmeni"
          name="prijmeni"
          value={form.prijmeni}
          onChange={handleChange}
          required
          className="input text-xl"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-xl">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="input text-xl"
        />
      </div>

      {/* Dotaz */}
      <div>
        <label htmlFor="dotaz" className="label text-xl">
          Dotaz
        </label>
        <textarea
          id="dotaz"
          name="dotaz"
          value={form.dotaz}
          onChange={handleChange}
          rows={4}
          required
          className="textArea text-xl"
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
          className="input mr-2"
        />
        <label htmlFor="souhlas" className="label text-xl">
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
      <button type="submit" className="cursor-pointer
         mx-auto  max-w-36 mb-3 text-one
         hover:text-four hover:bg-two bg-three rounded-xl text-center text-xl font-bold border-2 border-two hover:border-black">
        Odeslat
      </button>
    </form>
  );
}
