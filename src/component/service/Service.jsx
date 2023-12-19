import SectionTitle from "./SectionTitle";
import Data from "./Data";
import Items from "./Items";

function Service() {
  return (
    <div className=" py-6">
      <SectionTitle>Services</SectionTitle>
      <div>
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