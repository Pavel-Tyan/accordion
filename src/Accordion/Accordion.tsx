import { useState } from "react";
import { AccordionItem } from "../AccordionItem/AccordionItem";
import { AccordionProps } from "./Accordion.props";

export const Accordion = ({ accordionContent }: AccordionProps) => {
  const [activeId, setActiveId] = useState<number>(-1);

  const clickHandler = (id: number) => {
    if (activeId !== id) {
      setActiveId(id);
    } else {
      setActiveId(-1);
    }
  };

  return (
    <div className="bg-zinc-600 rounded-lg">
      <ul className="w-[200px] m-[10px] flex flex-col gap-[15px]">
        {accordionContent.map((item, id) => (
          <li key={id}>
            <AccordionItem
              clickHandler={clickHandler}
              content={item}
              id={id}
              activeId={activeId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
