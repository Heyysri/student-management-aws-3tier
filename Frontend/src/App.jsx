import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const API = "http://<BACKEND-EC2-PUBLIC-IP>:8080/api/students";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "", email: "", course: "", branch: "", mobile: "", percentage: ""
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const fetchStudents = async () => {
    try {
      const res = await axios.get(API);
      setStudents(res.data);
    } catch (e) {
      console.error("Error fetching:", e);
    }
  };

  useEffect(() => { fetchStudents(); }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addStudent = async () => {
    if (!form.name || !form.email) {
      setMsg("Name and Email are required.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(API, { ...form, percentage: parseFloat(form.percentage) || 0 });
      setForm({ name: "", email: "", course: "", branch: "", mobile: "", percentage: "" });
      setMsg("Student added successfully!");
      fetchStudents();
    } catch (e) {
      setMsg("Error adding student.");
    }
    setLoading(false);
    setTimeout(() => setMsg(""), 3000);
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;
    await axios.delete(`${API}/${id}`);
    fetchStudents();
  };

  return (
    <div className="app">
      <header>
        <h1>🎓 Student Management System</h1>
        <p>AWS 3-Tier Architecture — React + Spring Boot + MySQL RDS</p>
      </header>

      <div className="form-card">
        <h2>Add New Student</h2>
        <div className="form-grid">
          <input name="name"       placeholder="Full Name *"    value={form.name}       onChange={handleChange} />
          <input name="email"      placeholder="Email *"        value={form.email}      onChange={handleChange} />
          <input name="course"     placeholder="Course"         value={form.course}     onChange={handleChange} />
          <input name="branch"     placeholder="Branch"         value={form.branch}     onChange={handleChange} />
          <input name="mobile"     placeholder="Mobile Number"  value={form.mobile}     onChange={handleChange} />
          <input name="percentage" placeholder="Percentage"     value={form.percentage} onChange={handleChange} type="number" />
        </div>
        <button onClick={addStudent} disabled={loading} className="add-btn">
          {loading ? "Adding..." : "Add Student"}
        </button>
        {msg && <p className="msg">{msg}</p>}
      </div>

      <div className="table-card">
        <h2>All Students ({students.length})</h2>
        {students.length === 0 ? (
          <p className="empty">No students yet. Add one above.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>Email</th>
                <th>Course</th><th>Branch</th><th>Mobile</th>
                <th>%</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.course}</td>
                  <td>{s.branch}</td>
                  <td>{s.mobile}</td>
                  <td>{s.percentage}%</td>
                  <td>
                    <button onClick={() => deleteStudent(s.id)} className="del-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
