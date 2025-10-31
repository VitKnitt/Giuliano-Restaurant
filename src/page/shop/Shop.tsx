import { useEffect, useState } from "react";
import CreateItemForm from "./CreateItemForm";
import ShopItemCard from "./ShopItemCard";

export default function Shop() {
  const [items, setItems] = useState<any[]>([]);

  const fetchItems = async () => {
    const res = await fetch("http://localhost:8080/shop/findAllItems");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: number) => {
    const res = await fetch("http://localhost:8080/shop/deleteShopItems", {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([id]),
    });
    if (res.ok) fetchItems();
  };

  return (
    <div className="p-8 text-seven [&_*]:text-inherit">
      <h1 className="text-3xl font-bold mb-6">Administrace zboží</h1>
      <CreateItemForm onCreated={fetchItems} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {items.map((item) => (
          <ShopItemCard key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
