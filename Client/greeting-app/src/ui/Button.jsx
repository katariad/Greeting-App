function Button({ text = "click-me", onclick, isLoading }) {
  return (
    <button
      className="bg-amber-200 p-2 rounded-3xl  active:scale-x-95 cursor-pointer  "
      onClick={onclick}
    >
      {text}
    </button>
  );
}

export default Button;
