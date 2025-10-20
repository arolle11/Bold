import {
  ChevronDown,
  ChevronUp,
  FolderDot,
  Menu,
  Play,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  const closeSideBar = () => setIsOpen(false);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  const beginners_animations = [
    { name: "ButtonAnimation", title: "Button Animations" },
    { name: "HamburgerMenus", title: "Hamburger Menus" },
    { name: "CardFlip", title: "Card Flip animation" },
    { name: "SubmitButton", title: "Submit Button" },
    { name: "SearchAnimation", title: "Search Animation" },
    { name: "SwipeCard", title: "Swipe card" },
    { name: "PlayfulChips", title: "Playful Chips" },
    { name: "MessagingAppInput", title: "Messaging App Input" },
    { name: "RadioButton", title: "Radio Button" },
    { name: "ToDoList", title: "To do List" },
    { name: "CheckboxInteraction", title: "Checkbox Interaction" },
    { name: "LoadingAnimation", title: "Loading Animation" },
  ];
  return (
    <div className="relative h-full">
      <button
        className="md:hidden flex justify-end w-full p-2"
        onClick={toggleSideBar}
      >
        <Menu />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0006] opacity-30 z-40 md:hidden"
          onClick={closeSideBar}
        ></div>
      )}
      <nav
        className={`${
          isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
        } 
          fixed md:static 
          top-0 right-0 max-md:w-2/3 w-72 h-full 
          bg-[#f4f4f4] z-50 max-md:shadow-lg pt-8 transition-transform delay-75 duration-300 ease-linear`}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-secondary px-4 text-3xl font-monospace">
          <Link to="/">Bold</Link>
        </h1>

        <div className="px-4 pt-4">
          <ul className="text-secondary text-lg space-y-2 cursor-pointer">
            <li>
              <div
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                <span className="flex items-center gap-2">
                  <Play size={18} />
                  Components
                </span>
                {openDropdown ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>
              {openDropdown && (
                <ul className="ml-6 mt-2 space-y-2 text-base text-gray-600">
                  {beginners_animations.map((animation) => (
                    <li key={animation.name}>
                      <Link
                        to={`/animation/${animation.name}`}
                        className="block px-2 py-1 rounded hover:bg-gray-100"
                      >
                        {animation.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/aboutMe"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
              >
                <User size={18} />
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/aboutProject"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
              >
                <FolderDot size={18} />
                About the project
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
              >
                <Settings size={18} />
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom-0 fixed pb-8 px-4 flex flex-col text-sm gap-2">
          ©{new Date().getFullYear()} Bold - All rights reserved
          <p>
            Designed by{" "}
            <Link to="https://arollefona.me/" className="text-primary pl-2">
              Arolle Fona
            </Link>{" "}
          </p>
        </div>
      </nav>
    </div>
  );
};
export default SideBar;
