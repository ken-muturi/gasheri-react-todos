import { useEffect, useState } from "react";

const apiURL = "http://localhost/gasheri-learning/OOP/hospital/src/";
const fetcher = (url = "") => fetch(apiURL + url).then((res) => res.json());

const Page = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("patients.php");
      setPatients(data);
    };
    fetchData();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-sm table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>names</th>
            <th>Date of Birth</th>
            <th>National ID</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Gender</th>
            <th>County</th>
            <th>Address</th>
            <th>Next of Kin</th>
            <th>Next of Kin contacts</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>
                {a.firstname} {a.othernames}
              </td>
              <td>{a.date_of_birth}</td>
              <td>{a.national_id}</td>
              <td>{a.email}</td>
              <td>{a.telephone}</td>
              <td>{a.gender}</td>
              <td>{a.county_id}</td>
              <td>{a.residential_address}</td>
              <td>{a.next_of_kin}</td>
              <td>{a.next_of_kin_contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
