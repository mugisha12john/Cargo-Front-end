import { 
  Search, 
  Moon, 
  Bell, 
  User,
  Menu,
} from 'lucide-react';
const Header = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-40 md:w-4/5 md:ml-24 lg:w-4/5 lg:ml-72  bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-black">Dashboard</h1>
            <p className="text-gray-600">Manager/dashboard</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-skyBlue text-white placeholder-blue-200 rounded-full focus:outline-none focus:ring-2"
            />
          </div>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Moon className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;