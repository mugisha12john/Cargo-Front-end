import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../manager/Header';
import Footer from '../manager/ManagerFooter';
import Navigation from '../manager/Navigation';
import { ChevronsUpDown, ClipboardPlus, Search, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingScreen from '../Loading';
import ConfirmModal from './Confirm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
function AllExport() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [Export, setExport] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const URL = import.meta.env.VITE_GET_ALL_EXPORT;
  const navigate = useNavigate();
  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const deleteFurniture = async () => {
    try {
      await axios.delete(`${URL}/${selectedItem.exportid}`);
      toast.success(`Export record deleted successfully!`);
      setExport((prev) => prev.filter((f) => f.exportid !== selectedItem.exportid));
    } catch (error) {
        console.log(error)
      toast.error('Failed to delete export record. Please try again.');
    }
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${URL}/page?page=${currentPage}&limit=${limit}`);
        setExport(res.data.data);
        setTotalPages(res.data.pagination.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [currentPage]);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Header toggleSidebar={toggleSidebar} Status="Export" />
          <Navigation isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} currentPage="export" />

          <div className="grid md:w-3/4 md:ml-32 lg:w-2/3 lg:ml-[25%] grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
            <div className="grid grid-cols-1 lg:mt-4 lg:grid-cols-2 lg:place-items-center md:grid-cols-2 md:place-items-center">
              <h1 className="text-center font-bold md:text-xl lg:text-2xl text-2xl">All Exported Furnitures</h1>
              <div className="ml-14 mt-2 lg:hidden md:hidden relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-skyBlue text-white placeholder-blue-200 rounded-full focus:outline-none focus:ring-2"
                />
              </div>
              <Link
                to="/export/add"
                className="text-center lg:text-base lg:mt-0 lg:w-48 md:text-xl ml-14 md:w-56 mt-4 flex space-x-4 px-2 py-2 w-2/3 rounded-xl cursor-pointer bg-skyBlue duration-300 ease-in text-white font-bold text-xl hover:bg-skyHover"
              >
                <ClipboardPlus className="size-5" /> <h1>Record Export</h1>
              </Link>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="min-w-full text-sm text-left border border-gray-200">
                <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
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
                        <span>Exported At</span>
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
                        <span>Destination</span>
                        <ChevronsUpDown className="w-4 h-4 text-gray-500" />
                      </div>
                    </th>
                    <th className="px-4 py-2 border-b">
                      <div className="flex items-center gap-1">
                        <span>Manager</span>
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
                  {Export.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center capitalize font-light text-xl">
                        no exported record found
                      </td>
                    </tr>
                  ) : (
                    Export.map((item, index) => (
                      <tr key={item.exportid} className="border-b">
                        <td className="px-4 py-2">{(currentPage - 1) * limit + index + 1}</td>
                        <td className="px-4 py-2 cursor-pointer" onClick={()=>navigate(`/export/modify/${item.exportid}`)}>{item.furniturename}</td>
                        <td className="px-4 py-2">{new Date(item.exportdate).toLocaleString()}</td>
                        <td className="px-4 py-2">{item.quantity}</td>
                        <td className="px-4 py-2">{item.destination}</td>
                        <td className="px-4 py-2">{item.fullname}</td>
                        <td className="px-4 py-2">
                          <Trash2 onClick={() => handleDeleteClick(item)} className="text-red-600 cursor-pointer" />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              <div className="flex justify-center mt-6 gap-2 flex-wrap">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
                >
                  Prev
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === index + 1 ? 'bg-skyBlue text-white' : 'bg-gray-100 hover:bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
                >
                  Next
                </button>
              </div>

            </div>

            <div>
              <ConfirmModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={deleteFurniture}
                message="Do you really want to delete this exported record?"
              />
            </div>
          </div>

          <Footer />

          {isSidebarOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleSidebar} />
          )}
        </div>
      )}
    </>
  );
}

export default AllExport;
