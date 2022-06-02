import React, {useState, useEffect} from 'react'
import { Button, Error, Input, FormField, Label, Select, Textarea } from "../styles";

const CreateForm = () => {
  
  const [title, setTitle] = useState('hello');
  const [status, setStatus] = useState([]);
  const [summary, setSummary] = useState('goodbye');
  const [priority, setPriority] = useState([]);
  const [errors, setErrors] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectNames, setProjectNames] = useState("eggs");


const handleSubmit = (e) => {
  e.preventDefault()
  const task = { title, status, summary, priority };

  fetch('/tasks', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  }).then(() => { console.log("New task added!")})

  console.log(task)
}

  useEffect(() => {
    fetch('/projects')
    .then(r => r.json())
    .then(projects => setProjects(projects)
    )
  }, [])

const projectOptions = projects.map(project => {
  return <option key={project.id} value={project.id}>{project.name}</option>})


  return (
    <div>
      <h1>Create a new task</h1>
      <form onSubmit={handleSubmit}>
      <FormField>
          <Label htmlFor="title">Title</Label>
          <Input type="text" required id="title" autoComplete="off" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormField>
        <FormField>
          <Label htmlFor="status">Status</Label>
          <Select value={projectNames} onChange={(e) => setProjectNames(e.target.value)}>
            {projectOptions}
            </Select>
        </FormField>
        <FormField>
          <Label htmlFor="status">Status</Label>
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Testing">Testing</option>
                <option value="Done">Done</option>
            </Select>
        </FormField>
        <FormField>
          <Label htmlFor="summary">Summary</Label>
          <Textarea rows="3" type="text"  id="title" autoComplete="off" value={summary} onChange={(e) => setSummary(e.target.value)} />
        </FormField>
        <FormField>
          <Label htmlFor="priority">Priority</Label>
          <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="Critical">Critical</option>
            </Select>
        </FormField>
        <FormField>
          <Button variant="fill" color="primary" type="submit">
            Create
          </Button>
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>
    </div>
  )
}

export default CreateForm