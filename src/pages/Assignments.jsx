import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { subjects } from '../data/subjects';
import { getAssignments, getResources, deleteAssignment, deleteResource } from '../services/assignmentService';
import './Assignments.css';

function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [resources, setResources] = useState([]);

  async function fetchData() {
    const assignmentData = await getAssignments();
    const resourceData = await getResources();
    setAssignments(assignmentData);
    setResources(resourceData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleDeleteAssignment(id) {
    await deleteAssignment(id);
    fetchData();
  }

  async function handleDeleteResource(id) {
    await deleteResource(id);
    fetchData();
  }

  return (
    <div>
      <Navbar />
      <div className="assignments-wrapper">
        {subjects.map((subject) => {
          const subjectAssignments = assignments.filter((a) => a.subject === subject.name);
          const subjectResources = resources.filter((r) => r.subject === subject.name);

          return (
            <section key={subject.id} id={`subject-${subject.id}`} className="subject-section">
              <h1 className="subject-heading">{subject.name}</h1>

              <h2>Assignments</h2>
              {subjectAssignments.length === 0 ? (
                <p className="no-assignments">No assignments yet.</p>
              ) : (
                subjectAssignments.map((a) => (
                  <div key={a.id} className="assignment-item">
                    <h3>{a.title}</h3>
                    <p>Due: {a.dueDate}</p>
                    <p>{a.description}</p>
                    <button className="delete-button" onClick={() => handleDeleteAssignment(a.id)}>
                      Delete
                    </button>
                  </div>
                ))
              )}

              <h2>Lesson Resources</h2>
              {subjectResources.length === 0 ? (
                <p className="no-assignments">No resources yet.</p>
              ) : (
                subjectResources.map((r) => (
                  <div key={r.id} className="assignment-item">
                    <a href={r.link} target="_blank" rel="noreferrer">
                      {r.label || 'Resource'}
                    </a>
                    <button className="delete-button" onClick={() => handleDeleteResource(r.id)}>
                      Delete
                    </button>
                  </div>
                ))
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Assignments;