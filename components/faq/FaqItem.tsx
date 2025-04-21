import { AddIcon, CloseIcon } from "../icons/icons";
import { FAQItemI } from "./Faq.utils";

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItemI;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 p-6 rounded-2xl last:border-0">
      <button
        className="w-full text-left flex items-center justify-between gap-4 hover:text-gray-600 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-textPrimary mb-3">
          {item.question}
        </span>
        {isOpen ? <CloseIcon /> : <AddIcon />}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-6"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-textSecondary text-sm font-lightt-">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
