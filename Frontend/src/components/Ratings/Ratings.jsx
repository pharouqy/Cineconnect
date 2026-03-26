import { useState } from "react";
import Button from "../Buttons/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Ratings({ onRateChange }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const handleSet = (value) => {
    setDisplayValue(value);
    setCurrentValue(value);
    if (typeof onRateChange === "function") onRateChange(value);
  };
  return (
    <div className="ratings flex flex-col gap-2 text-center">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-gray-700">
          Noter le Media :
        </span>
        <span className="text-sm text-gray-600">
          {currentValue}/{5}
        </span>
      </div>

      <div className="gap-1 flex justify-center items-center">
        {Array.from({ length: 5 }).map((_, idx) => {
          const starValue = idx + 1;
          const active = starValue <= displayValue;

          return (
            <button
              key={starValue}
              type="button"
              aria-label={`Noter ${starValue} étoile(s)`}
              onClick={() => handleSet(starValue)}
              className={`select-none text-2xl leading-none transition-colors cursor-pointer ${
                active ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
          );
        })}
      </div>

      <div className="text-xs text-gray-500">
        Cliquez sur une étoile pour noter.
      </div>
    </div>
  );
}

export default Ratings;
