import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

/*
<SwitchElement>
    <section1 />
    <section2 />
    <section3 />
</SwitchElement>
*/

const SwitchElement = ({ children }: Props): React.ReactNode => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = React.Children.toArray(children);

 const buttonName: string[] = ["button1", "button2", "button3", "button4"]

  return (
    <div className="mx-5">
      {/* Horní přepínače */}
      <div className="flex space-x-2 mb-4">
        {tabs.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition mx-2 ${
              activeIndex === index
                ? "text-white"
                : "bg-one"
            }`}
          >
            {buttonName[index]}
          </button>
        ))}
      </div>

      {/* Obsah */}
      <div className="border rounded-lg border-two shadow bg-white">
        {tabs[activeIndex]}
      </div>
    </div>
  );
};

export default SwitchElement;
