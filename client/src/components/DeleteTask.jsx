
import React, {useState, useEffect} from 'react'
import { Button, Error, Input, FormField, Label, Select, Textarea } from "../styles";
import { useNavigate } from 'react-router-dom';


const DeleteTask = () => {
  const [taskNames, setTaskNames] = useState([]);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  
  const projectOptions = taskNames.map(task => {
    return <option value={task.id} key={task.id}>{task.title}</option>
  })

  useEffect(() => {
    fetch('/tasks')
      .then(res => res.json())
      .then(data => setTaskNames(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title)
    fetch(`/tasks/${title}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      navigate('/')
    })
  }
  
  return (
    <div>  
      <h1>Delete Task</h1>    
      <FormField>
          <Label htmlFor="status">Task:</Label>
          <Select value={title} onChange={(e) => setTitle(e.target.value)}>
            <option value={0}>Select Project</option>
            {projectOptions}
            </Select>
        </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit" onClick={handleSubmit}>
          Delete
        </Button>
      </FormField>
      <FormField>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
      </FormField>
    </div>
  )
}

export default DeleteTask