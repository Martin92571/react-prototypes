import React from 'react';
import Table from './table';
const student=[{student:"MArtin",course:"react",grade:"87"},{student:"Jaylen",course:"brat",grade:"95"},
{student:"Leo",course:"preschool",grade:"97"}]
export default ()=>{
    return (<div className="container">
     <h1>Student Grade Table</h1>
     <Table data={student}/>
    </div>
    )}

