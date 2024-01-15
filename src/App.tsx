import { useState } from "react";
import { Accordion } from "./Accordion/Accordion";

export interface AccordionItemContent {
  header: string;
  content: string;
}

function App() {
  const accordionContent: AccordionItemContent[] = [
    { header: "Frontend", content: "Vue, Angular, React" },
    { header: "Backend", content: "Spring, ASP.NET Core" },
    { header: "GameDev", content: "Unity, Unreal Engine" },
  ];

  return (
    <div className="w-full h-[100vh] flex justify-center items-center dark:bg-slate-800">
      <Accordion accordionContent={accordionContent} />
    </div>
  );
}

export default App;
