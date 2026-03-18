function LoadingSpinner({ size = "md", text = "Chargement..." }) {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-10 h-10 border-4",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10">
      <div
        className={`${sizes[size]} rounded-full border-gray-600 border-t-red-500 animate-spin`}
      />
      {text && <p className="text-sm text-gray-400">{text}</p>}
    </div>
  );
}

export default LoadingSpinner;
