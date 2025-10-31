import { useState } from "react";

export default function CreateItemForm({
  onCreated,
}: {
  onCreated: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    additionalDescription: "",
    theme: "",
    productType: "",
    investmentPotential: false,
    price: "",
    size: false,
  });
  const [firstImage, setFirstImage] = useState<File | null>(null);
  const [secondImage, setSecondImage] = useState<File | null>(null);
  const [saveItem, setSavedItem] = useState<Boolean>(false);
  const [selectedImg, setSelectedImg] = useState<Boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstImage) {
      setSelectedImg(true);
      return;
    }
    setSelectedImg(false);
    const formData = new FormData();
    formData.append("firstImage", firstImage);
    if (secondImage) {
      formData.append("secondImage", secondImage);
    }
    Object.entries(form).forEach(([key, value]) =>
      formData.append(key, value.toString())
    );

    const res = await fetch("http://localhost:8080/shop/saveShopItem", {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    if (res.ok) {
      setSavedItem(true);
      onCreated();
    } else {
      console.log("chyba při ukládání zboří");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-gray-50 p-6 rounded-xl shadow-md"
    >
      <input
        type="text"
        placeholder="Název"
        className="border p-2 rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <textarea
        placeholder="Popis"
        className="border p-2 rounded"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <textarea
        placeholder="Doplňující popis"
        className="border p-2 rounded"
        value={form.additionalDescription}
        onChange={(e) =>
          setForm({ ...form, additionalDescription: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Téma"
        className="border p-2 rounded"
        value={form.theme}
        onChange={(e) => setForm({ ...form, theme: e.target.value })}
      />
      <input
        type="text"
        placeholder="Typ produktu"
        className="border p-2 rounded"
        value={form.productType}
        onChange={(e) => setForm({ ...form, productType: e.target.value })}
      />
      <input
        type="number"
        placeholder="Cena"
        className="border p-2 rounded"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <div className="flex justify-center gap-3 ">
        <p className="translate-y-2">Investiční potenciál</p>
          <input
            className="max-w-5"
            type="checkbox"
            checked={form.investmentPotential}
            onChange={(e) =>
              setForm({ ...form, investmentPotential: e.target.checked })
            }
          />
      </div>
      <div className="flex gap-2">
        <input
          type="file"
          onChange={(e) => setFirstImage(e.target.files?.[0] || null)}
        />
        <input
          type="file"
          onChange={(e) => setSecondImage(e.target.files?.[0] || null)}
        />
      </div>
      {selectedImg ? <p className="text-one">vyber první obrázek</p> : <></>}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Uložit produkt
      </button>
      {saveItem && <p className="text-one">"Zboží bylo úspěšně přidáno ✅"</p>}
    </form>
  );
}
