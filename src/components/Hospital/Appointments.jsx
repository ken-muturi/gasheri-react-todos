import { useEffect, useState } from "react";

const apiURL = "http://localhost/gasheri-learning/OOP/hospital/src/";
const fetcher = (url = "") => fetch(apiURL + url).then((res) => res.json());

const Page = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("appointments.php");
      setAppointments(data);
    };
    fetchData();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-sm table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>patient</th>
            <th>clinic</th>
            <th>Doctor</th>
            <th>Datetime</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.patient_id}</td>
              <td>{a.clinic_id}</td>
              <td>{a.optometrist_id}</td>
              <td>{a.datetime}</td>
              <td>{a.status_id}</td>
            </tr>
          ))}
        </tbody>
      </table>{" "}
    </div>
  );
};

export default Page;
