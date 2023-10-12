import React, { useState } from "react";

const AccordionList = ({ title, paragraphs }) => {
  const [accordion, setAccordion] = useState(false);

  const setValue = () => {
    setAccordion(!accordion);
  };

  return (
    <div onClick={setValue}>
      <div className="accordionList">
        <h2>{title}</h2>
        <p>{accordion ? "-" : "+"}</p>
      </div>
      <div className="accordionList2">
        {accordion && <div>{paragraphs}</div>}
      </div>
    </div>
  );
};

export default AccordionList;
