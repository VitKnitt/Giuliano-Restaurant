export default function ShopItemCard({ item, onDelete }: any) {
  return (
    <div className="border p-3 rounded-lg shadow-sm bg-white">
      <img
        src={`data:image/jpeg;base64,${item.itemImage}`}
        alt={item.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
      <p className="text-gray-600 mb-4">{item.additionalDescription}</p>
      <p className="font-bold mt-1">{item.price} Kč</p>
      <p className="text-gray-700">{item.theme}</p>
      <p className="text-gray-700">{item.productType}</p>
      <p className="text-gray-700">
        investiční potenciál: {item.investmentPotential ? "ANO" : "NE"}
      </p>
      <button
        onClick={() => onDelete(item.id)}
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Smazat
      </button>
    </div>
  );
}
