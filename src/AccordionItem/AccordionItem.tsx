import { AccordionItemProps } from "./AccordionItem.props";

export const AccordionItem = ({
  content,
  clickHandler,
  id,
  activeId,
}: AccordionItemProps) => {
  return (
    <div>
      <button
        className="transition-colors duration-900 text-white w-full rounded-lg bg-purple-700 py-[5px] px-[10px] mb-[5px] hover:bg-purple-400"
        onClick={() => clickHandler(id)}
      >
        {content.header}
      </button>
      <div
        className={`transition duration-1000 +
          ${
            id === activeId
              ? "h-auto opacity-100"
              : "h-0 overflow-hidden opacity-0"
          }
        `}
      >
        <div className="text-center text-white rounded-lg bg-purple-500 py-[5px] px-[5px]">
          {content.content}
        </div>
      </div>
    </div>
  );
};
