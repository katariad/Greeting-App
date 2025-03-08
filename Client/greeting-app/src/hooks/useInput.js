import { useState } from "react";

const useInput = () => {
  const [name, setName] = useState("");

  return { name, setName };
};

export default useInput;
