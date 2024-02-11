import SectionTitle from "../service/SectionTitle";

function Skills() {
  return (
    <>
      <div className=" md:my-5 my-7">
        <SectionTitle className=" text-center">Compétences</SectionTitle>
        <div className="md:px-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-14">
            <div className=" bg-slate-400 dark:bg-slate-800 md:px-7 px-5 rounded-md  md:py-7 py-5">
              <h2 className=" font-bold text-slate-100 dark:text-blue-400 text-3xl md:text-2xl">
                Front End
              </h2>
              <div className=""></div>
            </div>
            <div className="bg-slate-400 dark:bg-slate-800 md:px-7 px-5 rounded-md  md:py-7 py-5">
              <h2 className="font-bold text-slate-100 dark:text-blue-400 text-3xl md:text-2xl">
                Back End
              </h2>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills