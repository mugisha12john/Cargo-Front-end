import { useEffect, useState } from 'react';
import Header from '../manager/Header';
import Footer from '../manager/ManagerFooter';
import Navigation from '../manager/Navigation';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingScreen from '../Loading';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UpdateFurniture() {
  const { id } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [managerList, setManagerList] = useState([]);
  const navigate = useNavigate()
  const URL = import.meta.env.VITE_GET_ALL_FURNITURE;
  const MGR_URL = import.meta.env.VITE_GET_ALL_MANAGER;

  const schema = yup.object().shape({
    furniturename: yup.string().required("Please select a furniture"),
    type: yup.string().required("furniture type is required"),
    quantity: yup
      .number()
      .typeError("Quantity must be a number")
      .positive("Must be greater than 0")
      .required("Quantity is required"),
    status: yup.string().required("status is required"),
    managerid: yup.string().required("Please select a manager"),
     confirmUpdate: yup.boolean().oneOf([true], "You must agree before updating"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [importRes, mgrRes] = await Promise.all([
          axios.get(`${URL}/${id}`),
          axios.get(MGR_URL),
        ]);
        const importData = importRes.data.data[0];
        setValue("furniturename", importData.furniturename);
        setValue("type", importData.type);
        setValue("quantity", importData.quantity);
        setValue("status", importData.status);
        setValue("managerid", importData.managerid);
        setManagerList(mgrRes.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error loading data", err);
        setLoading(false);
      }
    };
    fetchAll();
  }, [id, setValue]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onSubmit = async (data) => {
    try {
        const payload = {
        furniturename: data.furniturename,
        type: data.type,
        quantity: parseInt(data.quantity),
        status: data.status,
        managerid: parseInt(data.managerid),
        };
      await axios.put(`${URL}/${id}`, payload);
      toast.success("Furniture data Edited successfully!");
      setTimeout(() => {
        navigate('/all-furniture')
      }, 4500);
    } catch (err) {
      console.error("Edit error:", err);
      toast.error("Failed to Edit furniture data!");
    }
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header toggleSidebar={toggleSidebar} Status="Furniture" />
          <Navigation
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            currentPage="furniture"
          />

          <div className="grid md:w-3/4 md:ml-32 lg:w-2/4 lg:ml-[35%] grid-cols-1 gap-6 mb-8">
            <div className="flex gap-4 flex-col md:flex-row justify-between mt-12">
              <h1 className="text-center font-bold text-2xl">Edit  Furnitures Data</h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  isEditing ? 'bg-red-400' : 'bg-lime-500'
                } text-white`}
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="ml-12">
              <div className="grid lg:grid-cols-2">
                {/* Furniture */}
                <div className="mt-4">
                  <div>Furniture Name</div>
                  <input
                    {...register("furniturename")}
                    disabled={!isEditing}
                    className="px-2 py-2 w-4/5 rounded-xl bg-inputColor"
                  />
               
                  <p className="text-red-500 text-sm">{errors.furniturename?.message}</p>
                </div>

                {/* Import Date */}
                <div className="mt-4">
                  <div>Type</div>
                  <input
                    type="text"
                    {...register("type")}
                    disabled={!isEditing}
                    className="px-2 py-2 w-4/5 rounded-xl bg-inputColor"
                  />
                  <p className="text-red-500 text-sm">{errors.type?.message}</p>
                </div>

                {/* Quantity */}
                <div className="mt-4">
                  <div>Quantity</div>
                  <input
                    type="number"
                    {...register("quantity")}
                    disabled={!isEditing}
                    className="px-2 py-2 w-4/5 rounded-xl bg-inputColor"
                  />
                  <p className="text-red-500 text-sm">{errors.quantity?.message}</p>
                </div>

                {/* status */}
                <div className="mt-4">
                  <div>Status</div>
                  <input
                    type="text"
                    {...register("status")}
                    disabled={!isEditing}
                    className="px-2 py-2 w-4/5 rounded-xl bg-inputColor"
                  />
                  <p className="text-red-500 text-sm">{errors.status?.message}</p>
                </div>

                {/* Manager */}
                <div className="mt-4">
                  <div>Manager</div>
                  <select
                    {...register("managerid")}
                    disabled={!isEditing}
                    className="px-2 py-2 w-4/5 rounded-xl bg-inputColor"
                  >
                    <option value="">Select Manager</option>
                    
                    {managerList.map((m) => (
                      <option key={m.managerid} value={m.managerid}>
                        {m.fullname}
                      </option>
                    ))}
                  </select>
                  <p className="text-red-500 text-sm">{errors.managerid?.message}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <input
                  type="checkbox"
                   {...register("confirmUpdate")}
                  disabled={!isEditing}
                />
                <div className="capitalize">Do Agree  to update this furniture data?</div>
              </div>
               <p className="text-red-500 text-sm">{errors.confirmUpdate?.message}</p> 

              <button
                type="submit"
                disabled={!isEditing}
                className="mt-12 text-center px-2 py-2 w-4/5 lg:w-2/4 lg:ml-24 rounded-xl cursor-pointer bg-skyHover duration-300 ease-in text-white font-bold text-xl hover:bg-skyBlue disabled:opacity-50"
              >
                Edit furniture
              </button>
            </form>
          </div>

          <Footer />
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleSidebar}
            />
          )}
        </>
      )}
    </>
  );
}

export default UpdateFurniture;
