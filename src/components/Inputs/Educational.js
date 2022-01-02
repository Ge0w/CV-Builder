import { useState } from "react";

const Educational = ({ onAdd }) => {
  const [school, setSchool] = useState("");
  const [level, setLevel] = useState("");
  const [courseSubject, setCourseSubject] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ school, level, courseSubject, dateFrom, dateTo });

    setSchool("");
    setLevel("");
    setCourseSubject("");
    setDateFrom("");
    setDateTo("");
  };
  return (
    <div className="card">
      <h1>Education</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            name="school"
            placeholder="School or University"
            required
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <input
            type="text"
            name="level"
            placeholder="Level of Education"
            required
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <input
            type="text"
            name="course-subject"
            placeholder="Course Subject"
            required
            value={courseSubject}
            onChange={(e) => setCourseSubject(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>From:</label>
          <input
            type="date"
            name="from"
            required
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>To:</label>
          <input
            type="date"
            name="to"
            required
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="Add" className="btn my-1"></input>
      </form>
    </div>
  );
};

export default Educational;
