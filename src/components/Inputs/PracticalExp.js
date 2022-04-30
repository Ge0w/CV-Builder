import { useState } from "react";

const PracticalExp = ({ onAdd }) => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateChecked, setDateChecked] = useState(false);
  const [dateTo, setDateTo] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ role, company, dateFrom, dateChecked, dateTo, description });

    setRole("");
    setCompany("");
    setDateFrom("");
    setDateChecked(false);
    setDateTo("");
    setDescription("");
  };

  return (
    <div className="card">
      <h1>Practical Experience</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            name="role"
            placeholder="Role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <input
            type="text"
            name="company"
            placeholder="Company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>From</label>
          <input
            type="date"
            name="from"
            required
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>I work here currently</label>
          <input
            className="checkbox"
            type="checkbox"
            checked={dateChecked}
            name="current"
            value={dateChecked}
            onChange={(e) => setDateChecked(e.currentTarget.checked)}
          ></input>
        </div>
        <div className="form-control">
          <label>To</label>
          <input
            type="date"
            name="to"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <textarea
            type="textarea"
            name="description"
            placeholder="Description of Role"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Add" className="btn my-1"></input>
      </form>
    </div>
  );
};

export default PracticalExp;
