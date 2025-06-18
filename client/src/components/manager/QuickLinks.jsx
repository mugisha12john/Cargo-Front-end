
import { 
  Settings, 
  Plus,
  Download,
  Upload
} from 'lucide-react';


const QuickLinks = () => {
  const quickLinks = [
    { icon: Plus, label: 'Add furniture' },
    { icon: Download, label: 'Record Import' },
    { icon: Upload, label: 'Record Export' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="bg-blue-500 rounded-xl md:w-3/4 md:ml-32 lg:w-3/4 lg:ml-[25%] p-6 text-white">
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickLinks.map((link, index) => (
          <button
            key={index}
            className="flex flex-col items-center space-y-2 p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
          >
            <link.icon className="w-6 h-6" />
            <span className="text-sm font-medium">{link.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
export default QuickLinks;