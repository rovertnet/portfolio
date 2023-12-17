
function Navbar() {
  return (
    <>
      <div className=" md:px-14 ">
        <div className="  py-3 md:mt-7 fixed top-0 ">
          <div className=" bg-gray-100 dark:bg-blue-500 py-3 flex items-center justify-between px-7 ">
            <h1 className=" text-black dark:text-white">R.</h1>
            <div className="flex items-center justify-between px-7">
              <ul className="flex text-black dark:text-white space-x-3">
                <li>
                  <a href="">Accueil</a>
                </li>
                <li>
                  <a href="">A propos</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar