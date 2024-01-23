function WorkItems({ imageUrl, titre, tech }) {
  return (
    <div className=" bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={titre}
        className=" w-full h-36 md:h-48 object-cover"
      />
      <div className=" text-gray-600 dark:text-gray-300 p-5 w-full">
        <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-semibold">
          {" "}
          {titre}{" "}
        </h3>
        <p className=" flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {tech.map((item) => (
            <span
              key={item}
              className=" inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default WorkItems;
