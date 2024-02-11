import SectionTitle from "../service/SectionTitle";

function Skills() {
  return (
    <>
      <div className="md:px-8 px-6">
        <SectionTitle>Compétences</SectionTitle>
        <div className="flex justify-center items-center gap-14">
          <div className=" bg-slate-400 dark:bg-slate-800 md:px-7 px-5">
            <h2 className=" font-bold text-slate-100 dark:text-blue-400 text-3xl md:text-2xl">
              Front End
            </h2>
            <div className=""></div>
          </div>
          <div className="bg-slate-400 dark:bg-slate-800 md:px-7 px-5">
            <h2 className="font-bold text-slate-100 dark:text-blue-400">Back End</h2>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills