
function Navbar() {
  return (
    <>
      <div className=" md:px-14">
        <div className=" bg-blue-500">
          <div className=" flex items-center justify-between">
            <h1 className=" text-black dark:text-white">R.</h1>
            <div className="flex items-center justify-center">
              <ul className=" text-white">
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