import { AccordionItemContent } from "../App";

export interface AccordionItemProps {
  id: number;
  activeId: number;
  content: AccordionItemContent;
  clickHandler: (id: number) => void;
}
