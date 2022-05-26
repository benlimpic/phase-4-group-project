
import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import kanbanData from './data';

const KanBan = () => {
  


  
  return (
    <div>
            <KanbanComponent id="kanban" keyField="Status" dataSource={kanbanData} cardSettings={{ contentField: "Summary", headerField: "Title" }} swimlaneSettings={{ keyField: "User", allowDragAndDrop: true }}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open"/>
                  <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                  <ColumnDirective headerText="Testing" keyField="Testing"/>
                  <ColumnDirective headerText="Done" keyField="Close"/>
                </ColumnsDirective>
            </KanbanComponent>
</div>
  )
}

export default KanBan