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

function ModifyExport() {
  const { id } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [furnitureList, setFurnitureList] = useState([]);
  const [managerList, setManagerList] = useState([]);
  const navigate = useNavigate()
  const URL = import.meta.env.VITE_GET_ALL_EXPORT;
  const FURN_URL = import.meta.env.VITE_GET_ALL_FURNITURE;
  const MGR_URL = import.meta.env.VITE_GET_ALL_MANAGER;

  const schema = yup.object().shape({
    furnitureid: yup.string().required("Please select a furniture"),
    expdate: yup.string().required("Import date is required"),
    quantity: yup
      .number()
      .typeError("Quantity must be a number")
      .positive("Must be greater than 0")
      .required("Quantity is required"),
    destination: yup.string().required("destination location is required"),
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
        const [expRes, furnRes, mgrRes] = await Promise.all([
          axios.get(`${URL}/${id}`),
          axios.get(FURN_URL),
          axios.get(MGR_URL),
        ]);
        const expData = expRes.data.data[0];
        setValue("furnitureid", expData.furnitureid);
        setValue("expdate", new Date(expData.exportdate).toISOString().slice(0, 16));
        setValue("quantity", expData.quantity);
        setValue("destination", expData.destination);
        setValue("managerid", expData.managerid);
        setFurnitureList(furnRes.data.data);
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
        furnitureid: parseInt(data.furnitureid),
        expdate: data.expdate,
        quantity: parseInt(data.quantity),
        destination: data.destination,
        managerid: parseInt(data.managerid),
        };
      await axios.put(`${URL}/${id}`, payload);
      toast.success("export info updated successfully!");
      setTimeout(()=>{
      navigate('/export')
      },6000)
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Failed to update export");
    }
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header toggleSidebar={toggleSidebar} Status="Export" />
          <Navigation
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            currentPage="export"
          />

          <div className="grid md:w-3/4 md:ml-32 lg:w-2/4 lg:ml-[35%] grid-cols-1 gap-6 mb-8">
            <div className="flex gap-4 flex-col md:flex-row justify-between mt-12">
              <h1 className="text-center font-bold text-2xl">Modify Exported Furniture</h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 w-2/4 ml-24 md:w-32 lg:w-48 rounded-lg font-semibold ${
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
                  <div>Furniture</div>
                  <select
                    {...register("furnitureid")}
                    disabled={!isEditing}
                    className="px-2 py-2 w-4/5 rounded-xl bg-inputColor"
                  >
                    <option value="">Select Furniture</option>
                    {furnitureList.map((f) => (
                      <option key={f.furnitureid} value={f.furnitureid}>
                        {f.furniturename}
                      </option>
                    ))}
                  </select>
                  <p className="text-red-500 text-sm">{errors.furnitureid?.message}</p>
                </div>

                {/* Import Date */}
                <div className="mt-4">
                  <div>Export Date</div>
                  <input
                    type="datetime-local"
                    {...register("expdate")}
                    disabled={!isEditing}
                    className="px-2 py-2 w-4/5 rounded-xl bg-inputColor"
                  />
                  <p className="text-red-500 text-sm">{errors.expdate?.message}</p>
                </div>

                {/* Quantity */}
                <div className="mt-4">
                  <div>Quantity</div>
                  <input
                    type="text"
                    {...register("quantity")}
                    disabled={!isEditing}
                    className="px-2 py-2 w-4/5 rounded-xl bg-inputColor"
                  />
                  <p className="text-red-500 text-sm">{errors.quantity?.message}</p>
                </div>

                {/* destination */}
                <div className="mt-4">
                  <div>destination</div>
                  <input
                    type="text"
                    {...register("destination")}
                    disabled={!isEditing}
                    className="px-2 py-2 w-4/5 rounded-xl bg-inputColor"
                  />
                  <p className="text-red-500 text-sm">{errors.destination?.message}</p>
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
                <div className="capitalize">Agree to update Export Info</div>
              </div>
              <p className="text-red-500 text-sm">{errors.confirmUpdate?.message}</p> 
              <button
                type="submit"
                disabled={!isEditing}
                className="mt-12 text-center px-2 lg: py-2 w-4/5 lg:w-1/2 lg:ml-32 rounded-xl cursor-pointer bg-skyHover duration-300 ease-in text-white font-bold text-xl hover:bg-skyBlue disabled:opacity-50"
              >
                Update export
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

export default ModifyExport;
