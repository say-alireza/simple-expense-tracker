import { useState } from "react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [current, setCurrent] = useState(false);
  const toggleButtun = () => {
    setCurrent(!current);
  };

  const displayedText = current
    ? text
    : text.substring(0, 100) + (text.length > 100 ? "..." : "");

  return (
    <div>
      <p>{displayedText}</p>
      <button onClick={toggleButtun}>
        {current ? "showless" : "showmore"}
      </button>
    </div>
  );
};
export default ExpandableText;
