import React, {useState} from 'react'
import { Button, Error, Input, FormField, Label } from "../styles";

const CreateForm = () => {
  const [errors, setErrors] = useState([]);
  
  return (
    <div>

{/* Task.create!(
    title: "Steal a boat!",
    status: "InProgress",
    summary: "We are gonna need a bigger boat.. swipe one!",
    priority: "Critical",
    column: 1, */}
    <h1>Create a new task</h1>
    <FormField>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          autoComplete="off"
          value={"hello"}
        />
      </FormField>
      <FormField>
        <Label htmlFor="summary">Summary</Label>
        <Input
          type="text"
          id="summary"
          autoComplete="off"
          value={"goodbye"}
        />
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
    </div>
  )
}

export default CreateForm