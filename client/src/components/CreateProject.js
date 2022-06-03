import React, {useState, useEffect} from 'react'
import { Button, Error, Input, FormField, Label, Select, Textarea } from "../styles";
import { useNavigate } from 'react-router-dom';

const CreateProject = ({ user }) => {
  
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [color, setColor] = useState('');
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault()
  const project = { 
    title,  
    summary,
    color,
    user_id: user.id
   };

   fetch('/projects', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project)
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
}








  return (
    <div>
      <h1>Create a New Project</h1>
      <form onSubmit={handleSubmit}>
      <FormField>
          <Label htmlFor="title">Title</Label>
          <Input type="text" required id="title" autoComplete="off" value={title} onChange={(e) => setTitle(e.target.value)} />
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

export default CreateProject