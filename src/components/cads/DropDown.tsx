import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export default function DropDown({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[40rem] border-2 border-three">
      {/* Tlačítko */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-2 py-1 flex flex-row justify-between items-center rounded-none"
      >
        <p className="text-[1.7rem] m-0">{question}</p>
        <span className="text-[2.2rem] m-0">{open ? "−" : "+"}</span>
      </button>
      
      <div
        className={`transition-all duration-250 ease-in-out overflow-hidden ${
          open
            ? "px-2 py-2 text-[1.7rem] border-md border-three bg-white"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 py-2 text-[1.7rem]">{answer}</div>
      </div>
    </div>
  );
}
