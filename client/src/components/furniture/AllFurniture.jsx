import { useState } from 'react';
import Header from '../manager/Header'
import Footer from '../manager/ManagerFooter';
import  Navigation  from '../manager/Navigation';
import { ChevronsUpDown, CirclePlus,Search, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
function AddFurniture(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const URL = import.meta.env.VITE_GET_ALL_FURNITURE
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 return(<>
    <Header toggleSidebar={toggleSidebar} Status="Furniture"/>
    <Navigation isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} currentPage="furniture" />
    
    <div className="grid  md:w-3/4 md:ml-32 lg:w-2/3 lg:ml-[25%] grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
    <div className='grid grid-cols-1 lg:mt-4 lg:grid-cols-2 lg:place-items-center  md:grid-cols-2 md:place-items-center'>
         <h1 className='text-center font-bold md:text-xl lg:text-2xl text-2xl'>All Furniture</h1>
           <div className="ml-14 mt-2 lg:hidden md:hidden  relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-skyBlue text-white placeholder-blue-200 rounded-full focus:outline-none focus:ring-2"
            />
          </div>
          
           <Link to="/furniture" className='text-center lg:text-base lg:mt-0 lg:w-48 md:text-xl ml-14 md:w-56 mt-4 flex space-x-4 px-2 py-2 w-2/3 rounded-xl cursor-pointer bg-skyBlue duration-300 ease-in text-white font-bold text-xl hover:bg-skyHover'>
           <CirclePlus className='size-5'/> <h1>Add Furniture</h1>
           </Link>
    </div>

    <div className="overflow-x-auto w-full">
        <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-700 uppercase  text-xs">
            <tr>
                <th className="px-4 py-2 border-b">
                <div className="flex items-center gap-1">
                    <span>#</span>
                    <ChevronsUpDown className="w-4 h-4 text-gray-500" />
                </div>
                </th>
                <th className="px-4 py-2 border-b">
                <div className="flex items-center gap-1">
                    <span>Furniture name</span>
                    <ChevronsUpDown className="w-4 h-4 text-gray-500" />
                </div>
                </th>
                <th className="px-4 py-2 border-b">
                <div className="flex items-center gap-1">
                    <span>Owner name</span>
                    <ChevronsUpDown className="w-4 h-4 text-gray-500" />
                </div>
                </th>
                <th className="px-4 py-2 border-b">
                <div className="flex items-center gap-1">
                    <span>Type</span>
                    <ChevronsUpDown className="w-4 h-4 text-gray-500" />
                </div>
                </th>
                <th className="px-4 py-2 border-b">
                <div className="flex items-center gap-1">
                    <span>Quantity</span>
                    <ChevronsUpDown className="w-4 h-4 text-gray-500" />
                </div>
                </th>
                <th className="px-4 py-2 border-b">
                <div className="flex items-center gap-1">
                    <span>Status</span>
                    <ChevronsUpDown className="w-4 h-4 text-gray-500" />
                </div>
                </th>
                <th className="px-4 py-2 border-b">
                <div className="flex items-center gap-1">
                    <span>Action</span>
                    <ChevronsUpDown className="w-4 h-4 text-gray-500" />
                </div>
                </th>
            </tr>
            </thead>
        <tbody>
          <tr className="border-b-2 border-gray-300  cursor-pointer hover:bg-gray-200">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Cupboard</td>
            <td className="px-4 py-2">Musafiri Eric</td>
            <td className="px-4 py-2">N/A</td>
            <td className="px-4 py-2">4</td>
            <td className="px-4 py-2">Available</td>
            <td className="px-4 py-2">
              <Trash2 className="text-red-600 cursor-pointer" />
            </td>
          </tr>
          <tr className="border-b-2 border-gray-300 cursor-pointer hover:bg-gray-200">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Cupboard</td>
            <td className="px-4 py-2">Musafiri Eric</td>
            <td className="px-4 py-2">N/A</td>
            <td className="px-4 py-2">4</td>
            <td className="px-4 py-2">Available</td>
            <td className="px-4 py-2">
              <Trash2 className="text-red-600 cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>    
    </div>
    <Footer></Footer>
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
 </>)
}
export default AddFurniture;