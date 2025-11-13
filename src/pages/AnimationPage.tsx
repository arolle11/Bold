import { MoveLeft } from "lucide-react";
import type { JSX } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonAnimation from "../components/animations/ButtonAnimation";
import CardFlip from "../components/animations/CardFlip";
import CheckboxInteraction from "../components/animations/CheckboxInteraction";
import HamburgerMenus from "../components/animations/HamburgerMenus";
import ImageUploadAnimation from "../components/animations/ImageUploadAnimation";
import LoadingAnimation from "../components/animations/LoadingAnimation";
import MessagingAppInput from "../components/animations/MessagingAppInput";
import PlayfulChips from "../components/animations/PlayfulChips";
import RadioButton from "../components/animations/RadioButton";
import SearchAnimation from "../components/animations/SearchAnimation";
import SubmitButton from "../components/animations/SubmitButton";
import SwipeCard from "../components/animations/Swipecard";
import TodoList from "../components/animations/TodoList";

type AnimationType = {
  component: JSX.Element;
  title: string;
  description: string;
  tech: string;
};

type AnimationsType = {
  [key: string]: AnimationType;
};

const AnimationPage = () => {
  const { name } = useParams();

  const animations: AnimationsType = {
    ButtonAnimation: {
      component: <ButtonAnimation />,
      title: "Button Animations",
      description:
        "A collection of button animations featuring smooth scaling, color transitions, and ripple effects on hover and click.",
      tech: "Tailwind CSS, Framer Motion",
    },
    HamburgerMenus: {
      component: <HamburgerMenus />,
      title: "Hamburger Menus",
      description:
        "Creative hamburger menus animation that transforms into a close icon with smooth transitions.",
      tech: "Tailwind CSS, Framer Motion",
    },
    CardFlip: {
      component: <CardFlip />,
      title: "Card Flip",
      description: "A card flip animation that flips the card when clicked.",
      tech: "Tailwind CSS, Framer Motion",
    },
    SubmitButton: {
      component: <SubmitButton />,
      title: "Submit Button",
      description: "A simple microinteraction for a form submit button.",
      tech: "Tailwind CSS, Framer Motion",
    },
    SearchAnimation: {
      component: <SearchAnimation />,
      title: "Search Animation",
      description: "An animation that searches data in a list.",
      tech: "Tailwind CSS, Framer Motion",
    },
    SwipeCard: {
      component: <SwipeCard />,
      title: "Swipe Card",
      description: "Cards swipe on click.",
      tech: "Tailwind CSS, Framer Motion",
    },
    PlayfulChips: {
      component: <PlayfulChips />,
      title: "Playful Chips",
      description: "Playful Chips Animation",
      tech: "Tailwind CSS, Framer Motion",
    },
    MessagingAppInput: {
      component: <MessagingAppInput />,
      title: "Messaging App Input",
      description: "Messaging App Input UI - Micro Animation",
      tech: "Tailwind CSS, Framer Motion",
    },
    RadioButton: {
      component: <RadioButton />,
      title: "RadioButton",
      description: "RadioButton Animation",
      tech: "Tailwind CSS, Framer Motion",
    },
    ToDoList: {
      component: <TodoList />,
      title: "To Do List",
      description: "To Do List Micro Animation",
      tech: "Tailwind CSS, Framer Motion",
    },
    CheckboxInteraction: {
      component: <CheckboxInteraction />,
      title: "Checkbox Interaction",
      description: "Checkbox Interaction Animation",
      tech: "Tailwind CSS, Framer Motion",
    },
    LoadingAnimation: {
      component: <LoadingAnimation />,
      title: "Loading Animation",
      description: "Loading Animation",
      tech: "Tailwind CSS, Framer Motion",
    },
    ImageUploadAnimation: {
      component: <ImageUploadAnimation />,
      title: "Image Upload Animation",
      description:
        "Image upload animation with drop zone, progress bar, and preview",
      tech: "Tailwind CSS, Framer Motion",
    },
  };

  const animation = name ? animations[name] : undefined;

  if (!animation) {
    return (
      <div className="h-screen flex flex-col bg-white p-4 max-md:p-2 overflow-y-auto">
        <div className="self-start mb-4 pt-8 pl-16">
          <Link to="/" className="text-primary flex items-center gap-2">
            <MoveLeft /> Back to Home
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600">Animation not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white p-4 max-md:p-2 overflow-y-auto">
      <div className="self-start mb-4 pt-8 pl-16">
        <Link
          to="/"
          className="text-secondary font-bold flex items-center gap-2"
        >
          <MoveLeft /> Back to Home
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-2">{animation.title}</h1>
        <p className="text-center max-w-md text-gray-600 mb-4">
          {animation.description}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          <strong>Built with</strong> {animation.tech}.
        </p>

        <div className="w-full flex items-center justify-center">
          {animation.component}
        </div>
      </div>
    </div>
  );
};

export default AnimationPage;
