import { useState } from "react";
import { useParams } from "react-router-dom";

const StudentDetailsPage = () => {
  const studentId = useParams();
  const [student, setStudent] = useState();

  const fetchStudents = async () => {
    try {
      const response = await fetch(
        `http://localhost:5005/api/students/${studentId}`
      );
      if (response.status === 200) {
        const parsedStudents = await response.json();
        setStudents(parsedStudents);
      }
    } catch (error) {
      console.error("Fail to fetch students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

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
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default StudentDetailsPage;
