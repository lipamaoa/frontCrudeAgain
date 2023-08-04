import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const StudentDetailsPage = () => {
  const {studentId} = useParams();
  const [student, setStudent] = useState();
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const uri = `http://localhost:5005/api/students/${studentId}`;
      const response = await fetch(uri);
      if (response.status === 200) {
        const parsedStudent = await response.json();
        setStudent(parsedStudent);     
      }
    } catch (error) {
      console.error("Fail to fetch students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5005/api/students/${studentId}`, { method:"DELETE"}
      );
      if (response.status === 202) {
        navigate("/students")
      }
    } catch (error) {
      console.error("Fail to fetch students:", error);
    }
  }

  return student ? (
    <>
      <h1>Student details</h1>
      <h3>{student.name}</h3>
      <h3>{student.email}</h3>
      <ul>
        {student.priorXp.map((currentXp) => (
          <li>{currentXp}</li>
        ))}
        ;
      </ul>
      <button type="submit" onClick={handleDelete}>Delete</button>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default StudentDetailsPage;
