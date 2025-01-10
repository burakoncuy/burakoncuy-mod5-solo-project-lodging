// import { useState, useEffect, useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { FaUserCircle } from 'react-icons/fa';
// import * as sessionActions from '../../store/session';

// function ProfileButton({ user }) {
//   const dispatch = useDispatch();
//   const [showMenu, setShowMenu] = useState(false);
//   const menuRef = useRef(null); // To reference the dropdown menu

//   // Function to log out the user
//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//   };

//   // Effect to handle clicks outside of the dropdown to close it
//   useEffect(() => {
//     // Function to close the menu when clicking outside
//     const closeMenu = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target) && e.target !== document.querySelector('button')) {
//         setShowMenu(false);
//       }
//     };

//     // Add event listener to document when the menu is visible
//     if (showMenu) {
//       document.addEventListener('click', closeMenu);
//     } else {
//       document.removeEventListener('click', closeMenu);
//     }

//     // Cleanup the event listener on component unmount or menu toggle
//     return () => {
//       document.removeEventListener('click', closeMenu);
//     };
//   }, [showMenu]);

//   // Toggle the dropdown menu on button click
//   const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

//   return (
//     <>
//       <button onClick={() => setShowMenu(!showMenu)}>
//         <FaUserCircle />
//       </button>
//       {/* Ref the dropdown menu for click detection */}
//       <ul className={ulClassName} ref={menuRef}>
//         <li>{user.username}</li>
//         <li>{user.firstName} {user.lastName}</li>
//         <li>{user.email}</li>
//         <li>
//           <button onClick={logout}>Log Out</button>
//         </li>
//       </ul>
//     </>
//   );
// }

// export default ProfileButton;

// frontend/src/components/Navigation/ProfileButton.jsx

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import * as sessionActions from '../../store/session';
import './ProfileButton.css'; // Add any additional styling here

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the document
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const closeMenu = () => setShowMenu(false);

    if (showMenu) {
      document.addEventListener('click', closeMenu);
    }

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  return (
    <>
      <button onClick={toggleMenu}>
        <FaUserCircle />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.firstName} {user.lastName}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
