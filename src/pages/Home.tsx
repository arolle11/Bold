import {
  ArrowUpRight,
  CircleArrowUp,
  Menu,
  Search,
  Square,
  SquareChartGantt,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const items = [
    { icon: <CircleArrowUp size={12} />, label: "Buttons" },
    { icon: <SquareChartGantt size={12} />, label: "Landing Pages" },
    { icon: <Search size={12} />, label: "Search Bar" },
    { icon: <Menu size={12} />, label: "Hamburger animations" },
    { icon: <Square size={12} />, label: "Cards animations" },
  ];

  const animations = [
    {
      name: "ButtonAnimation",
      title: "Button Animations",
      description:
        "Interactive buttons with hover effects and smooth transitions",
      tech: "Framer Motion",
    },
    {
      name: "HamburgerMenus",
      title: "Hamburger Menus",
      description: "Creative menu transitions and morphing animations",
      tech: "CSS Transforms",
    },
    {
      name: "CardFlip",
      title: "Card Flip",
      description: "3D card animations with perspective effects",
      tech: "CSS 3D",
    },
    // {
    //   name: "SearchAnimation",
    //   title: "Search Animation",
    //   description: "Expanding search with dynamic filtering",
    //   tech: "React Hooks",
    // },
    // {
    //   name: "SwipeCard",
    //   title: "Swipe Card",
    //   description: "Stack-based card interactions",
    //   tech: "Gesture Handling",
    // },
    // {
    //   name: "PlayfulChips",
    //   title: "Selection Chips",
    //   description: "Interactive multi-select components",
    //   tech: "State Management",
    // },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen px-4">
      {/* Simple header */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-light text-secondary mb-4">
          Explore Animations with <span className="text-primary">Bold</span>
        </h1>
        <p className="text-lg text-secondary max-w-xl mx-auto leading-relaxed">
          A curated set of interface animations and interactions built with
          modern web technologies.
        </p>
      </div>

      {/* Category filters - simple and clean */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {items.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-2 border border-secondary rounded-md px-3 py-1.5 text-sm text-secondary transition-transform transform hover:scale-105 cursor-pointer"
          >
            {item.icon} {item.label}
          </span>
        ))}
      </div>

      {/* Section intro */}
      <div className="flex justify-between items-end mb-8 px-2">
        <div>
          <h2 className="text-2xl font-medium text-secondary mb-1">
            Latest Work
          </h2>
          <p className="text-secondary">Interactive demos</p>
        </div>
        <Link
          to="/animations"
          className="text-secondary hover:text-primary text-sm flex items-center gap-1 group font-medium"
        >
          View all
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </Link>
      </div>

      {/* Clean animations grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {animations.map((animation) => (
          <Link
            key={animation.name}
            to={`/animation/${animation.name}`}
            className="group block"
          >
            <article className="border border-gray-200 bg-white hover:shadow-sm transition-all duration-200">
              {/* Simple header area */}
              <div className="h-24 bg-gray-50 border-b border-gray-100 flex items-center justify-between px-4">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-xs text-gray-500 font-mono">
                  {animation.tech}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">
                    {animation.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2"
                  />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {animation.description}
                </p>

                <div className="text-xs text-gray-500">
                  Interactive demo available
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Simple footer section */}
      <div className="text-center py-12 border-t border-gray-100">
        <p className="text-gray-600 mb-4">
          More animations and experiments coming soon
        </p>
        <button className="border border-primay px-6 py-2 text-primary hover:bg-blue-50">
          Get Updates
        </button>
      </div>
    </div>
  );
};

export default Home;
