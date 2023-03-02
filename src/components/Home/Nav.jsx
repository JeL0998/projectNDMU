import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const [showSubMenu, setShowSubMenu] = useState(false);

    function handleSubMenuToggle() {
      setShowSubMenu((prevValue) => !prevValue);
    }
  

  return (
    <div className="navbar bg-primary">
    <div className="flex-1 xl:ml-60">
        <a className="btn btn-ghost normal-case text-xl">NOTRE DAME OF MARBEL UNIVERSITY</a>
    </div>
    <div className="flex-none xl:mr-60">
        <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
            <a onClick={handleSubMenuToggle}>
                Class
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className={`p-2 bg-base-100 ${showSubMenu ? "block" : "hidden"}`}>
                <li>
                <a>Submenu 1</a>
                </li>
                <li>
                <a>Submenu 2</a>
                </li>
            </ul>
            </li>
            <li><a>Faculty</a></li>
            <li><a>Events</a></li>
            <div className="dropdown dropdown-end ml-3">
            <label tabIndex={0}
                className="btn btn-ghost btn-circle avatar" onClick={toggleDropdown} >
                <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </label>
            {isOpen && (
                <ul tabIndex={0} className="mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-auto p-5" onClick={toggleDropdown} >
                <li>
                    <a className="justify-between">
                    Profile
                    </a>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <li>
                    <Link to="/">
                        <a>Logout</a>
                    </Link>
                </li>
                </ul>
            )}
            </div>
        </ul>
    </div>
    </div>
  )
}

export default Nav