function Inputfiled({ name = "name", onchange, username = "" }) {
  return (
    <input
      type="text"
      name="name"
      value={username}
      onChange={onchange}
      className="bg-amber-50 p-1 rounded-2xl border-amber-200 border-2 focus-visible::border-amber-200 capitalize  "
      placeholder="Enter your name"
      pattern="[A-Za-z].{3,}"
    />
  );
}

export default Inputfiled;
