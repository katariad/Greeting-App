import { useState } from "react";
import "./App.css";
import useInput from "./hooks/useInput";
import Button from "./ui/Button";
import Inputfiled from "./ui/Inputfiled";

function App() {
  const { name, setName } = useInput();
  const [message, setMessage] = useState();
  const [isPending, setIspending] = useState(false);
  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }
  const getGreeting = async () => {
    if (!name) {
      setMessage("Name is required.");
      return;
    }
    try {
      setIspending(true);
      const response = await fetch(
        `http://localhost:8000/api/greet?name=${name}`
      );
      const data = await response.json();
      setIspending(false);
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage("Error fetching greeting.");
    }
  };

  return (
    <>
      <h1 className="text-amber-600 text-5xl ">Greeting App</h1>
      <main className="flex flex-col justify-center align-middle  bg-amber-100  gap-1 p-2.5 ">
        <div className="flex gap-x-1.5  ">
          <Inputfiled username={name} onchange={(e) => handleChange(e)} />
          <Button
            text="Get Greeting"
            onclick={getGreeting}
            isloading={!isPending}
          />
        </div>

        <div>
          {!isPending ? (
            <p className="text-gray-700">{message}</p>
          ) : (
            <p>isLoading...</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
