function Popup({
  loading = false,
  action = "Oui",
  onConfirm = () => {},
  onCancel = () => {},
  children,
  hasBackground = true,
  zIndex = "z-10",
  buttons = true,
}) {
  return (
    <>
      {hasBackground && (
        <div className="backdrop-blur	w-screen h-screen fixed top-0 left-0 z-[5]"></div>
      )}

      <div
        className={`bg-white ${zIndex} border max-h-[80vh] min-w-[90vw] md:min-w-none overflow-y-scroll fixed top-2/4 translate-x-[-50%] translate-y-[-50%] left-2/4  gap-4 rounded-lg p-6 flex flex-col align-middle`}
      >
        {children}
        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4">
          {buttons && (
            <button
              className="btn w-full rounded-full"
              title="confirm"
              onClick={onConfirm}
            >
              {loading ? "Chargement..." : action}
            </button>
          )}
          {buttons && (
            <button
              className="btn w-full rounded-full"
              title="cancel"
              onClick={onCancel}
            >
              Annuler
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Popup;
