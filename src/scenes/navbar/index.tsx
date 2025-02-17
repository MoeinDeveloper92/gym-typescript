import { useState } from "react"
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"

const Navbar = () => {
const flexBetween = "flex items-center justify-between"
  return (
    // Semantic
    <nav>
        <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >   
        <div className={`${flexBetween} mx-auto w-5/6`}>
            {/* Left side */}
            <div className={`${flexBetween} gap-3`}>
                <img src={Logo} alt="Logo" />
            </div>
            {/* Right side */}
            <div className={`${flexBetween} flex-1`}>
                {/* Inner Leftside */}
                <div className={`flex-1 flex gap-8 ml-4 text-sm`}>
                    <p>Home</p>
                    <p>Benefits</p>
                    <p>Our Classes</p>
                    <p>Contact</p>
                </div>
                {/* Inner Right side */}
                <div className={`${flexBetween}`}>
                     <p>SignIn</p>
            <button>Become A Memver</button>
                </div>
            </div>
           
        </div>
        </div>
    </nav>
  )
}

export default Navbar