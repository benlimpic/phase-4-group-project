
import React, { useState, useEffect } from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import './Kanban.css'

const KanBan = () => {
  const [kanbanData, setKanbanData] = useState([]);

  useEffect(() => {
    fetch('/tasks')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setKanbanData(data)})
  }, [])

  const dataSourceChanged = (state: any) => {
    console.log(state)
    if (state.requestType == 'cardChanged') { 
    fetch(`/tasks/${state.changedRecords[0].id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state.changedRecords[0])
    })
    .then(res => res.json())
    .then(data => {
    })
  } else if (state.requestType == 'cardRemoved'){
    console.log("Hello")
    console.log(state.deletedRecords[0].id)
    fetch(`/tasks/${state.deletedRecords[0].id}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}
    })
  }


  }


  

  
  return (
    <div className='kanban-container'>
            <KanbanComponent 
            id="kanban" keyField="status" dataSource={kanbanData} dataSourceChanged={dataSourceChanged} 
            cardSettings={{ contentField: "summary", headerField: "title", priority: "RankId" }}swimlaneSettings={{ keyField: "project_title"}}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="open"/>
                  <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                  <ColumnDirective headerText="Testing" keyField="testing"/>
                  <ColumnDirective headerText="Done" keyField="close"/>
                </ColumnsDirective>
            </KanbanComponent>
    </div>
  )
}

export default KanBan