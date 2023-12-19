import SectionTitle from "../service/SectionTitle"
import WorkItems from "./WorkItems";
import DataWork from "./DataWork";

function Work() {
  return (
    <div className=" py-6" id="projet">
      <SectionTitle id="works">Projets récents</SectionTitle>
      <div className="md:mx-8 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {DataWork.map((work) => (
          <WorkItems 
            key={work.titre}
            imageUrl={work.imageUrl}
            titre={work.titre}
            tech={work.tech}
          ></WorkItems>
        ))}
      </div>
    </div>
  );
}

export default Work