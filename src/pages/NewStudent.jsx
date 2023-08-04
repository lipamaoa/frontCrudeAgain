import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [priorXp, setPriorXp] = useState("");
  const navigate= useNavigate();

  const handleNewStudent = async (e) => {
    e.preventDefault(); 

    const priorXpArray = priorXp.split(" ");
    const newStudent = {
      name,
      email,
      priorXp: priorXpArray,
    };

    try {
      const response = await fetch(`http://localhost:5005/api/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
      const parsed = await response.json();
      navigate(`/students/${parsed._id}`)
    } catch (error) {
      console.error("Fail to create a new student:", error);
    }
  };

  return (
   
      <form onSubmit={handleNewStudent}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          value={priorXp}
          placeholder="priorXp"
          onChange={(e) => setPriorXp(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    
  );
};

export default NewStudent;
