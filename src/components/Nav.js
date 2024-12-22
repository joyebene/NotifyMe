"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


const Nav = () => {

  let isHomeActive = false;
  let isNotifyActive = false;
  let isAboutActive = false;
  let isHelpActive = false;

    const pathname = usePathname();
    
    switch (pathname) {
      case "/route/home":
          isHomeActive = true;
        break;
    
      case "/route/all-notify":
          isNotifyActive = true;
        break;
    
      case "/route/help":
          isHelpActive = true;
        break;
    
      default:
        break;
    }
    
    const router = useRouter();
  
  
  
  
  return (

    <div className="  h-14 border-t border-gray-200 bg-white/75 w-full sm:hidden">
      <nav className="fixed z-[1000] py-2 inset-x-0 bottom-0  backdrop-blur-lg transition-all " aria-label="Main navigation">
        <ul className="flex items-center justify-evenly">
          <li>
            <Link href="/route/home"   >{isHomeActive? <img src="/icons-home.png" className="w-10" alt="img"  /> : <img src="/home.png" className="w-8" />}</Link>
          </li>
          <li>
            <Link href="/route/all-notify" >{isNotifyActive? <img src="/icons-notify.png" className="w-10" /> : <img src="/icons-notify2.png" className="w-8" />}</Link>
          </li>
     
          <li>
            <Link href="/route/help" className="">{isHelpActive ? <img src="/icons-help.png" className="w-10" /> : <img src="/help.png" className="w-8" />}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;





// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const Nav = () => {
//   const router = useRouter();
  
//   const isActive = (path) => router.pathname === path ? 'text-blue-600' : 'text-gray-600';
  
//   return (
//     <div className="sticky top-0 z-[100] h-14 border-t border-gray-200 bg-white/75">
//       <nav className="py-6 inset-x-0 bottom-0 w-full backdrop-blur-lg transition-all" aria-label="Main navigation">
//         <ul className="flex items-center justify-evenly">
//           <li>
//             <Link href="/home">
//               <a className={`${isActive('/home')} hover:text-blue-600 transition-colors`}>Home</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/allNotify">
//               <a className={`${isActive('/allNotify')} hover:text-blue-600 transition-colors`}>All Notify</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about">
//               <a className={`${isActive('/about')} hover:text-blue-600 transition-colors`}>About</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/help">
//               <a className={`${isActive('/help')} hover:text-blue-600 transition-colors`}>Help</a>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Nav;
