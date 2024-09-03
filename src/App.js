import LargeScreenNav from './components/LargeScreenNav.jsx';
import MobNav from './components/MobNav';
import { mainServices, otherServicesMenu } from './data/servicesData.js';

function App() {
  return (
    <div
      className="bg-gray-200 "
     
    >
      <nav>
        <div className="block lg:hidden">
          <MobNav />
        </div>
        <div className="hidden lg:block">
          <LargeScreenNav />
        </div>

        
      </nav>


      {/* Mobile View */}
      <div className="text-black flex justify-evenly space-x-2 items-center lg:hidden">
        {mainServices.map((item, index) => (
          <div
            key={index}
            className="w-24 flex flex-col items-center justify-center space-y-2 p-4 bg-white rounded-xl mb-4 hover:cursor-pointer"
          >
            <span className="text-blue-800 text-2xl">{item.logo}</span>
            <h3 className="capitalize text-sm">{item.name}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white m-2 p-4 rounded-lg grid grid-cols-4 items-center h-full lg:hidden">
        {otherServicesMenu.map((service, index) => (
          <div
            key={index}
            className="col-span-1 w-full flex flex-col items-center justify-between mx-auto space-y-2 p-2 hover:cursor-pointer"
          >
            <span className="text-2xl text-blue-800">{service.logo}</span>
            <span className="capitalize text-xs inline-flex text-center">
              {service.name}
            </span>
          </div>
        ))}
      </div>

       {/* End  Mobile View */}
    </div>
  );
}

export default App;
