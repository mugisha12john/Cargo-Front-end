import { Package } from "lucide-react";

const LowStock = () => {
  const lowStockItems = [
    { id: 1, name: 'T-Shirts', count: '4 left' },
    { id: 2, name: 'Jeans', count: '3 left' },
    { id: 3, name: 'Sneakers', count: '2 left' },
    { id: 4, name: 'Hoodies', count: '1 left' },
  ];

  return (
    <div className="bg-gray-300 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Low stock items</h3>
      <div className="space-y-3">
        {lowStockItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <Package className="w-5 h-5 text-black" />
              <span className="text-black">{item.name}</span>
            </div>
            <span className="text-sm text-black">{item.count}</span>
          </div>        
        ))}
      </div>
    </div>
  );
};

export default LowStock; 