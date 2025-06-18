

import { 
  Home, 
  Package, 
  Truck, 
  BarChart3, 
  Settings, 
  LogOut, 
  X,
} from 'lucide-react';
const Navigation = ({ isSidebarOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Package, label: 'Furniture', active: false },
    { icon: Truck, label: 'Import/export', active: false },
    { icon: BarChart3, label: 'Reports', active: false },
    { icon: Settings, label: 'Setting', active: false },
    { icon: LogOut, label: 'Logout', active: false },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-blue-100 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:fixed lg:inset-y-0`}>
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-6 lg:justify-center flex-shrink-0">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-4 mb-4 inline-block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-800">GREAT HILLS LOGISTICS</span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Manager</h2>
            
            {/* Profile */}
            <div className="bg-white rounded-full w-32 h-32 mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face" 
                alt="Mugisha Buban" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Mugisha Buban</h3>
          </div>
          <button 
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="px-6 space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
                item.active 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 hover:bg-blue-200'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default Navigation;