function Input({ label, placeholder, type, value, onChange, className }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md py-2 px-4 ${className}
        `}
      />
    </div>
  );
}

export default Input;
