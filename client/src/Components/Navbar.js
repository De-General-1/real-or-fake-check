import { Link } from "react-router-dom";
import '../css/styles.css'

const Navbar = () => {
    return (  
      <section className="text-white"> 
      <nav className="navbar flex justify-center items-center p-[2px]">
          <div className="navbar__container p-2 rounded-md flex items-center w-full max-w-[1300px] mx-auto">
              <div className="md:w-[20%] lg:w-[40%]">
                  <Link to="/" id="navbar__logo" className="inline-flex text-2xl font-bold">ImageCheckAI</Link>
              </div>
              <div className="navbar__toggle" id="mobile-menu">
                   <span className="bar"></span>
                   <span className="bar"></span>
                   <span className="bar"></span>
              </div>
              <div className="w-full hidden md:block  p-2 rounded-md border border-[#6b7280]">
                  <h1>Verify Image</h1>
              </div>
              <ul className="navbar__menu md:flex justify-evenly items-center w-full md:w-[40%] lg:w-[30%] md:ml-auto">
                  <li className="navbar__item">
                      <Link to="/contact" className="navbar__links font-semibold text-white transition-all mx-1" id="about-page">UPLOADS</Link>
                  </li>
                  <li className="md:hidden w-full space-y-2 items-center">
                      <div className="">
                          <Link to="/contact" className=" font-semibold text-white ml-1">CONTACT</Link>
                      </div>
                  </li>
                  <div className="signIn w-[6rem] md:w-auto transition-all">
                      <Link to="/contact" className="p-2 px-10 rounded bg-[#8c27ff] hover:bg-[#8c27ffdc] text-white">Join</Link>
                  </div>
              </ul>
          </div>
      </nav> 
  </section>
    );
}
export default Navbar;