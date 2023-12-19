import SectionTitle from "./SectionTitle";
import Data from "./Data";
import Items from "./Items";

function Service() {
  return (
    <div className=" py-6" id="service">
      <SectionTitle>Services</SectionTitle>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-2">
        {Data.map(dats => (
            <Items 
                key={dats.title} 
                title={dats.title} 
                icon={dats.icon} 
                describe={dats.describe}
            > 
            </Items>
        ))}
      </div>
      
    </div>
  );
}

export default Service