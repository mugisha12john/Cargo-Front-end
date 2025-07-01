const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex flex-col md:flex-col lg:justify-centerlg:items-center lg:flex-row justify-between items-center space-y-2 ">
        <p className="text-sm text-gray-600 lg:ml-96">&copy; 2025 Great Hills Logistics. All rights reserved.</p>
        <p className="text-sm text-gray-600">{new Date().toLocaleString()}</p>
      </div>
    </footer>
  );
};

export default Footer;