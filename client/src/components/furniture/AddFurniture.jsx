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
    const MGR_URL = import.meta.env.VITE_GET_ALL_MANAGER;
    const URL = import.meta.env.VITE_GET_ALL_FURNITURE;
  const [managerList, setManagerList] = useState([]);

    useEffect(()=>{
        const fetch = async ()=>{
        try{
         const [mgrRes] = await Promise.all([
          axios.get(MGR_URL)
        ]);
        setManagerList(mgrRes.data.data);
        } catch(error){
            console.log(error)
        }
        }
        fetch()
        
    },[]) 
    {/*  form */}
    const schema = yup.object().shape({
        furniturename:yup.string().typeError("please select furniture name!").required("furniture name required"),
        type:yup.string().typeError('Please enter furniture type').required("furniture type required"),
        quantity:yup.number().typeError("quantity must be number").positive("number must be greater then zero").integer("must be integer number").required("quantity is required"),
        status:yup.string().required("furniture status  is required"),
        managerid:yup.number().typeError("please select manager name!").required("manager name required"),
        confirmRecord:yup.boolean().oneOf([true], "you must agree before to add this furniture data"),

    })
    const {register,handleSubmit, formState : {errors}} = useForm({
        resolver:yupResolver(schema)
    })
   const navigate = useNavigate()
const onSubmit = async (data,e) => {
    e.preventDefault();
    try {
        const payload = {
        furniturename: data.furniturename,
        type: data.type,
        quantity: parseInt(data.quantity),
        status: data.status,
        managerid: parseInt(data.managerid),
        };
        console.log(payload)
      await axios.post(`${URL}/`, payload);
      toast.success("furniture data recorded successfully!");
          setTimeout(() => {
      navigate('/all-furniture');
    }, 6000);
    } catch (err) {
      console.error("record error:", err);
      toast.error("Failed to record furniture data");
    }
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 return(<>
    <ToastContainer />
    <Header toggleSidebar={toggleSidebar} Status="Furniture"/>
    <Navigation isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} currentPage="furniture" />
    
    <div className="grid md:w-3/4 md:ml-32 lg:w-2/4 lg:ml-[35%] grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
       <h1 className='text-center font-bold text-2xl mt-12'>Add Furniture</h1>
       <form className='ml-12' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid lg:grid-cols-2'>
            <div className='mt-2'>
                <div >Furniture Name</div>
                
                <input
                 className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'
                 {...register("furniturename")}
                /> 
                <p className="text-red-500 capitalize text-sm mt-5">{errors.furniturename?.message}</p>
            </div>
            <div className='mt-4'>
                <div>Furniture Type</div>
                <input 
                type="text" 
                className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'
                {...register("type")}
                />
                <p className="text-red-500 capitalize text-sm mt-5">{errors.type?.message}</p>
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
                <div>Status</div>
                <input 
                type="text"
                className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'
                {...register("status")}
                />
                <p className="text-red-500 capitalize text-sm mt-5">{errors.status?.message}</p>
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
                <div>Agree to add this Furniture receord</div>
            </div>
            </div>
            <div>
            <p className="text-red-500 capitalize text-sm ">{errors.confirmRecord?.message}</p>
           </div>
        </div>
        
        <input 
        type="submit" 
        value="Add furniture" 
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