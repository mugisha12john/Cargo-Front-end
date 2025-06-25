import {  useState } from 'react';
import { 
  LucideSofa,
  FolderInput,
  FolderOutput,
  Boxes
} from 'lucide-react';
import Footer from './ManagerFooter';
import QuickLinks from './QuickLinks';
import ImportExportChart from './Chart';
import LowStock from './Lowstock';
import Header from './Header';
import Navigation from './Navigation';


const StatCard = ({ number, label, icon: Icon,iconimg, color,bgimg }) => (
  <div className={`${bgimg} rounded-xl p-6 shadow-sm`}>
    <div className="flex items-center justify-between">
      <div>
        <h3 className={`text-3xl font-bold ${color}`}>{number}</h3>
        <p className={`${color} text-sm mt-1 font-bold`}>{label}</p>
      </div>
      <div className={`p-3 rounded-lg${iconimg.replace('text-', 'bg-').replace('-600', '-100')}`}>
        {Icon && <Icon className={`w-6 h-6 ${iconimg}`} />}
      </div>
    </div>
  </div>
);


const StatsGrid = () => {

  return (
    <div className="grid grid-cols-1 md:w-3/4 md:ml-32 lg:w-3/4 lg:ml-[25%]  md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard 
        number="43" 
        label="Total Furniture" 
        icon={LucideSofa} 
        color="text-gray-600"
        iconimg="text-zinc-800"
        bgimg="bg-gray-300"
      />
      <StatCard 
        number="27" 
        label="Total Imported" 
        icon={FolderInput} 
        color="text-white"
        iconimg="text-zinc-100"
        bgimg="bg-skyBlue"
      />
      <StatCard 
        number="14" 
        label="Total Exported" 
        icon={FolderOutput} 
        color="text-gray-600"
        iconimg="text-zinc-800"
        bgimg="bg-gray-300"
      />
      <StatCard 
        number="12" 
        label="Current Stock" 
        icon={Boxes} 
        iconimg="text-zinc-100"
        color="text-white"
        bgimg="bg-skyBlue"
      />
    </div>
  );
};


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navigation isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} currentPage="dashboard" />


      <div className="flex-1 flex flex-col min-w-0">
        <Header toggleSidebar={toggleSidebar} Status="Dashboard" />
        <main className="flex-1 p-6">
          <StatsGrid />
          <div className="grid md:w-3/4 md:ml-32 lg:w-3/4 lg:ml-[25%] grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <LowStock />
            <ImportExportChart />
          </div>
          <QuickLinks />
        </main>
        <Footer />
      </div>
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Dashboard;
