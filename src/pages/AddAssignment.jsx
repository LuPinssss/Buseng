import { useState } from 'react';
import Navbar from '../components/Navbar';
import { subjects } from '../data/subjects';
import { addAssignment, addResource } from '../services/assignmentService';
import './AddAssignment.css';

function AddAssignment() {
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');

  const [resourceSubject, setResourceSubject] = useState('');
  const [resourceLabel, setResourceLabel] = useState('');
  const [resourceLink, setResourceLink] = useState('');

  async function handleAddReminder() {
    await addAssignment({
      subject: subject,
      title: title,
      dueDate: dueDate,
      description: description,
    });
    alert('Assignment added!');
  }

  async function handleAddResource() {
    await addResource({
      subject: resourceSubject,
      label: resourceLabel,
      link: resourceLink,
    });
    alert('Resource added!');
  }

  return (
    <div>
      <Navbar />
      <div className="add-container">

        <div className="add-card">
          <h2 className="add-title">Add Assignment</h2>

          <label className="add-label">Subject</label>
          <select className="add-input" value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">Select a subject</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>

          <label className="add-label">Title</label>
          <input className="add-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label className="add-label">Due Date</label>
          <input className="add-input" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

          <label className="add-label">Description</label>
          <textarea className="add-input" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

          <button className="add-button" onClick={handleAddReminder}>Add Reminder</button>
        </div>

        <div className="add-card">
          <h2 className="add-title">Add Lesson Resource</h2>

          <label className="add-label">Subject</label>
          <select className="add-input" value={resourceSubject} onChange={(e) => setResourceSubject(e.target.value)}>
            <option value="">Select a subject</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>

          <label className="add-label">Label</label>
          <input className="add-input" type="text" placeholder="e.g. Week 3 Slides" value={resourceLabel} onChange={(e) => setResourceLabel(e.target.value)} />

          <label className="add-label">Google Drive Link</label>
          <input className="add-input" type="text" value={resourceLink} onChange={(e) => setResourceLink(e.target.value)} />

          <button className="add-button" onClick={handleAddResource}>Add Resource</button>
        </div>

      </div>
    </div>
  );
}

export default AddAssignment;