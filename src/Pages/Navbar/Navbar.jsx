import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isNavbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setNavbarScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className="fixed navbar z-10 h-30 w-full"> */}
      <div
        className={`fixed navbar z-10 h-30 w-full ${
          isNavbarScrolled ? "navbarStyle" : ""
        }`}
      >
        <div
          className={`top-line relative ${
            isNavbarScrolled ? "scrolled smaller" : ""
          }`}
        ></div>
        <div
          className={`absolute  right-0 p-[.8rem]   w-3/4 rounded-bl-full box-container ${
            isNavbarScrolled ? "smallerTopNav" : ""
          }`}
        >
          <ul className="flex space-x-16 justify-center  ">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to='/affiliation'>Affilation</Link>
            </li>
            <li>
              <Link to='/scholarship' >Scholarship & Fees</Link>
            </li>
            <li>
              <Link to='/'>Administration</Link>
            </li>
            <li>
              <Link to='/intern'>Internship</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div
          className={`p-5 top_nav flex justify-evenly px-10   font-bold ${
            isNavbarScrolled ? "smallerBottomNav" : ""
          }  `}
        >
          <Link to='/' className=" hover:border-b-0">
          <div className="left-box flex  w-60 ">
            <div className="logo mr-3">
              <img
                src="/images/logo.jpeg"
                alt=""
                className={` ml-1 w-20 h-20 rounded-xl ${
                  isNavbarScrolled ? "smallerLogo" : ""
                } `}
              />
            </div>
            <h1
              className={`logo-text w-[6.5rem] text-sm font-bold  text-center ${
                isNavbarScrolled ? "smallerText" : ""
              }`}
            >
              Dalia lama <span className="span-text">Institute</span> for Higher{" "}
              <span className="span-text">education</span>
            </h1>
          </div>
          </Link>

          <div className="flex items-end justify-end pb-2 ">
            <ul className="flex space-x-16 justify-center ">
              <li>
                <a href="#">Student Council</a>
              </li>
              <li>
                <Link to='/academic'>Academic & Admission</Link>
              </li>
              <li>
                <a href="#">Announcement</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Campus</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
