import { FC } from "react";

interface KeyCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const KeyCard: FC<KeyCardProps> = ({ icon, title, text }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
      <div className="border border-gray/20 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500">
        <svg
          className="w-8 h-8 mx-auto mb-4 text-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {icon}
        </svg>
        <h3 className="mb-2 font-bold text-black">{title}</h3>
        <p className="text-gray/50 font-light">{text}</p>
      </div>
    </div>
  );
};

export default KeyCard;
