import React, { useState } from "react";

const CheckBoxFiled = ({ title, id }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex gap-12 border-b py-8">
      <div className="w-6 h-6 border rounded-full overflow-hidden">
        <input
          onClick={() => setToggle(!toggle)}
          className="w-full h-full"
          type="checkbox"
          id={id}
        />
      </div>

      <label className={toggle && `line-through`} htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

export default CheckBoxFiled;
