import React, {useState, useEffect} from 'react'
import { Button, Error, Input, FormField, Label, Select, Textarea } from "../styles";
import { useNavigate } from 'react-router-dom';

const CreateForm = ({ user }) => {
  
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [summary, setSummary] = useState('');
  const [priority, setPriority] = useState('');
  const [errors, setErrors] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectNames, setProjectNames] = useState(0);

  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault()
  const task = { 
    title, 
    status, 
    summary, 
    priority,
    user_id: user.id,
    project_id: projectNames
   };

  fetch('/tasks', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  }).then(r => {
    if (r.ok) {
      r.json().then(data => {
        navigate('/')
      })
    }
    else {
      r.json().then(err => {
        console.log(err)
        setErrors(err.errors)
      }
  )}
  })


  console.log(task)
}

  useEffect(() => {
    fetch('/projects')
    .then(r => r.json())
    .then(data => {
      console.log(data)
      setProjects(data)}
    )
  }, [])

  
const projectOptions = projects.map(project => {
  return <option key={project.id} value={project.id}>{project.title}</option>})

  console.log(!projectOptions)

  return (
    <div>
      <h1>Create a New Task</h1>
      <form onSubmit={handleSubmit}>
      <FormField>
          <Label htmlFor="title">Title</Label>
          <Input type="text" required id="title" autoComplete="off" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormField>
        <FormField>
          <Label htmlFor="status">Project:</Label>
          <Select value={projectNames} onChange={(e) => setProjectNames(e.target.value)}>
            <option value={0}>Select Project</option>
            {projectOptions}
            </Select>
        </FormField>
        <FormField>
          <Label htmlFor="status">Status</Label>
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Select Status</option>
                <option value="open">To Do</option>
                <option value="InProgress">In Progress</option>
                <option value="testing">Testing</option>
                <option value="close">Done</option>
            </Select>
        </FormField>
        <FormField>
          <Label htmlFor="summary">Summary</Label>
          <Textarea rows="3" type="text"  id="title" autoComplete="off" value={summary} onChange={(e) => setSummary(e.target.value)} />
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