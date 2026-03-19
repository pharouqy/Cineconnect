import { useState } from "react";

/**
 * Rating utilisateur (étoiles cliquables) sans lien avec IMDb/OMDb.
 * - `storageKey` : si présent, stocke la note dans `localStorage`.
 * - `onRateChange` : callback optionnelle quand l'utilisateur note.
 */
function Ratings({
  defaultValue = 0,
  onRateChange,
  max = 5,
  storageKey,
  label = "Votre note",
  disabled = false,
}) {
  const normalizedMax = Math.max(1, Number(max) || 5);

  const [rating, setRating] = useState(() => {
    const dv = Number(defaultValue) || 0;
    if (!storageKey) return dv;

    try {
      const raw = localStorage.getItem(storageKey);
      if (raw === null) return dv;
      const n = Number(raw);
      return Number.isFinite(n) ? n : dv;
    } catch {
      return dv;
    }
  });

  const currentValue = rating;

  const persist = (next) => {
    setRating(next);
    if (storageKey) {
      try {
        localStorage.setItem(storageKey, String(next));
      } catch {
        // ignore (storage désactivé, etc.)
      }
    }
  };

  const handleSet = (next) => {
    const bounded = Math.min(normalizedMax, Math.max(0, next));
    persist(bounded);
    onRateChange?.(bounded);
  };

  const displayValue = currentValue;

  if (disabled) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="font-medium">{label}</span>
        <span>
          {currentValue}/{normalizedMax}
        </span>
      </div>
    );
  }

  return (
    <div className="ratings flex flex-col gap-2 text-center">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-600">
          {currentValue}/{normalizedMax}
        </span>
      </div>

      <div className="gap-1 flex justify-center items-center">
        {Array.from({ length: normalizedMax }).map((_, idx) => {
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
              ★
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
