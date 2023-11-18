import { useState } from "react";
import PatternDivider from "../assets/pattern-divider-desktop.svg";
import Dice from "../assets/icon-dice.svg";
import "../App.css";

export const Container = () => {
  const [advice, setAdvice] = useState({
    id: 172,
    advice: "If it still itches after a week, go to the doctors.",
  });

  const adviceGenerator = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setAdvice(data.slip);
  };

  return (
    <section className="bg-darkgrayishblue flex flex-col items-center h-96 sm:max-w-md p-2 sm:px-10 sm:min-h-max rounded-lg">
      <p className="text-neongreen font-semibold  uppercase text-sm tracking-[3px] mt-5 font-manrope">
        Advice #{advice.id}
      </p>
      <p className="text-center h-2/3 font-extrabold text-2xl mt-10 mb-5 sm:mb-10 font-manrope">{`“${advice.advice}”`}</p>

      <img src={PatternDivider} alt="MySvg" className="object-cover h-7 sm:mb-5" />
      <button
        className="bg-neongreen translate-y-1/2 h-16 rounded-[50%] plain-button clicked sm:h-12 sm:py-7 flex items-center"
        onClick={adviceGenerator}
      >
        <img
          src={Dice}
          alt="Dice"
          className="pointer-events-none focus:ring-0 object-cover"
        />
      </button>
    </section>
  );
};
