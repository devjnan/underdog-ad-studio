
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                alt="Underdog Ads Logo" 
                className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300"
              />
              <h5 className="font-bold text-lg text-gray-900">UNDERDOG ADS</h5>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Celebrating excellence in marketing and advertising creativity worldwide.
            </p>
          </div>
          <div>
            <h6 className="font-semibold text-gray-900 mb-4">Projects</h6>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Digital Campaigns</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Brand Identity</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Social Media</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Product Launch</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-gray-900 mb-4">Community</h6>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Directory</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Awards</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Newsletter</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Events</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-gray-900 mb-4">Company</h6>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Press</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block duration-200">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Underdog Ads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
