import { useEffect, useState } from 'react';
import Header from '../manager/Header'
import Footer from '../manager/ManagerFooter';
import  Navigation  from '../manager/Navigation';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function AddImport(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const FURN_URL = import.meta.env.VITE_GET_ALL_FURNITURE;
    const MGR_URL = import.meta.env.VITE_GET_ALL_MANAGER;
    const URL = import.meta.env.VITE_GET_ALL_IMPORT;
      const [furnitureList, setFurnitureList] = useState([]);
  const [managerList, setManagerList] = useState([]);

    useEffect(()=>{
        const fetch = async ()=>{
        try{
         const [furnRes, mgrRes] = await Promise.all([
          axios.get(`${FURN_URL}`),
          axios.get(MGR_URL)
        ]);
        setFurnitureList(furnRes.data.data);
        setManagerList(mgrRes.data.data);
        } catch(error){
            console.log(error)
        }
        }
        fetch()
        
    },[]) 
    {/*  form */}
    const schema = yup.object().shape({
        furnitureid:yup.number().typeError("please select furniture name!").required("furniture name required"),
        impdate:yup.date().typeError('Please enter a valid date').required("importdate required"),
        quantity:yup.number().typeError("quantity must be number").positive("number must be greater then zero").integer("must be integer number").required("quantity is required"),
        supplierName:yup.string().required("Supplier name is required"),
        managerid:yup.number().typeError("please select manager name!").required("manager name required"),
        confirmRecord:yup.boolean().oneOf([true], "you must agree to record this import"),

    })
    const {register,handleSubmit, formState : {errors}} = useForm({
        resolver:yupResolver(schema)
    })
   const navigate = useNavigate()
const onSubmit = async (data,e) => {
    e.preventDefault();
    try {
        const payload = {
        furnitureid: parseInt(data.furnitureid),
        impdate: data.impdate,
        quantity: parseInt(data.quantity),
        supplier: data.supplierName,
        managerid: parseInt(data.managerid),
        };
      await axios.post(`${URL}/`, payload);
      toast.success("Import recorded successfully!");
          setTimeout(() => {
      navigate('/import');
    }, 6000);
    } catch (err) {
      console.error("record error:", err);
      toast.error("Failed to record import");
    }
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 return(<>
    <ToastContainer />
    <Header toggleSidebar={toggleSidebar} Status="Import"/>
    <Navigation isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} currentPage="import" />
    
    <div className="grid md:w-3/4 md:ml-32 lg:w-2/4 lg:ml-[35%] grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
       <h1 className='text-center font-bold text-2xl mt-12'>Record Import</h1>
       <form className='ml-12' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid lg:grid-cols-2'>
            <div className='mt-2'>
                <div >Furniture Name</div>
                
                <select
                 className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'
                 {...register("furnitureid")}
                 > 
                 <option value="">Select furniture</option>
                    {furnitureList.map(f=>{
                        return(<option value={f.furnitureid} key={f.furnitureid}>{f.furniturename}</option>)
                    })}
                </select>
                <p className="text-red-500 capitalize text-sm mt-5">{errors.furnitureid?.message}</p>
            </div>
            <div className='mt-4'>
                <div>Import Date</div>
                <input 
                type="datetime-local" 
                className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'
                {...register("impdate")}
                />
                <p className="text-red-500 capitalize text-sm mt-5">{errors.impdate?.message}</p>
            </div>
            <div className='mt-4'>
                <div>Quantity</div>
                <input 
                type="text"
                 className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'
                 {...register("quantity")}
                 />
                <p className="text-red-500 capitalize text-sm mt-5">{errors.quantity?.message}</p>
            </div>
            <div className='mt-4'>
                <div>Supplier Name</div>
                <input 
                type="text"
                className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'
                {...register("supplierName")}
                />
                <p className="text-red-500 capitalize text-sm mt-5">{errors.supplierName?.message}</p>
            </div>
            <div className='mt-4'>
                <div>Manager</div>
               
                <select 
                className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'
                {...register("managerid")}
                >
                    <option value="">select manager</option>
                    {managerList.map(m=>{
                        return(<option value={m.managerid} key={m.managerid}>{m.fullname}</option>)
                    })}
                </select>
                <p className="text-red-500 capitalize text-sm mt-5">{errors.managerid?.message}</p>
            </div>
            </div>
           <div className='flex flex-col'>
              <div className='flex'>
                <div className='mt-4 flex gap-4'>
                <input type="checkbox"  {...register("confirmRecord")} />
                <div>Agree to Record this import Furniture</div>
            </div>
            </div>
            <div>
            <p className="text-red-500 capitalize text-sm ">{errors.confirmRecord?.message}</p>
           </div>
        </div>
        
        <input 
        type="submit" 
        value="Record Import" 
        className='mt-12 text-center px-2 py-2 w-4/5 rounded-xl cursor-pointer bg-skyBlue duration-300 ease-in text-white font-bold text-xl hover:bg-skyHover'
        />
       </form>
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
export default AddImport;