import { useState } from 'react';
import Header from '../manager/Header'
import Footer from '../manager/ManagerFooter';
import  Navigation  from '../manager/Navigation';
function AddFurniture(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 return(<>
    <Header toggleSidebar={toggleSidebar} Status="Furniture"/>
    <Navigation isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} currentPage="furniture" />
    
    <div className="grid md:w-3/4 md:ml-32 lg:w-2/4 lg:ml-[35%] grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
       <h1 className='text-center font-bold text-2xl'>Add Furniture</h1>
       <form className='ml-12'>
        <div className='grid lg:grid-cols-2'>
            <div className='mt-2'>
                <div >Furniture Name</div>
                <input type="text" className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'  />
            </div>
            <div className='mt-4'>
                <div>Type</div>
                <input type="text" className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'  />
            </div>
            <div className='mt-4'>
                <div>Quantity</div>
                <input type="text" className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'  />
            </div>
            <div className='mt-4'>
                <div>Status</div>
                <input type="text" className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'  />
            </div>
            <div className='mt-4'>
                <div>RecordedAt</div>
                <input type="datetime-local" className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'  />
            </div>
            <div className='mt-4'>
                <div>Manager</div>
                <input type="number" className='border-none border-black px-2 py-2 w-4/5 rounded-xl bg-inputColor'  />
            </div>
            <div className='mt-4 flex gap-4'>
                <input type="checkbox"  name="" id="" />
                <div>Agree to Add Furniture</div>
            </div>
        </div>
        <div className='mt-12 text-center px-2 py-2 w-4/5 rounded-xl cursor-pointer bg-skyBlue duration-300 ease-in text-white font-bold text-xl hover:bg-skyHover'>Add Furniture</div>
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
export default AddFurniture;