function ErrorMessage({ message, onRetry = null }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10 px-4 text-center">
      {/* Icone erreur */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 text-3xl">
        ⚠️
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-white">
          Une erreur est survenue
        </h3>
        <p className="text-sm text-gray-400 max-w-sm">
          {message || "Erreur inconnue, veuillez réessayer."}
        </p>
      </div>

      {/* Bouton retry optionnel */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
        >
          🔄 Réessayer
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
