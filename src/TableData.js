import React, { useState } from 'react';

const TableData = () => {
    const initialData= [{id:1,firstName:"Charles",lastName:"Rud",age:"20"},
                        {id:2,firstName:"Test",lastName:"Tested",age:"40"}];
    const [studentList, setStudentList]=useState(initialData);
    const [ShowDetails, setShowDetails]=useState(false);
    const [student,setStudent]=useState({id:0,firstName:"",lastName:"",age:""});
    
    const TableHeader=()=>{
        return(
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Action</th>
                    </tr>
                </thead>
        );
    }
    const TableRaw =(props)=>{
        return (
            <tbody>{
                props.list.map((student)=>(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    <td><Action student={student}/></td>
                </tr>))
                
                }
            </tbody>
        );
    }
    const Action =(props)=>{
        const ShowData=()=>{
            setShowDetails(true);
            console.log("SHOW STUDENT DATA");
            setStudent(props.student);
        }
        return(
            <button type='button' className='btn btn-primary'onClick={ShowData}>Details</button>
        );
    }

    const ShowStudentDetails =()=>{
        return (
            <div className='card'>
                <div className='card-header bg-info text-white'>Student Details</div>
                <div className='card-body'>
                    <h4 className='card-tittle'> Country And City</h4>
                    <p className='card-text'>ID:{student.id}</p>
                    <p className='card-text'>Name:{student.firstName} {student.lastName}</p>
                    <p className='card-text'>Age:{student.age}</p>
                    <button type="button" class="btn btn-outline-info">Hide</button>
                </div>
            </div>
        );
    }

    return (
      
        <div className='container'>
            <table className='table table-striped'>
                <TableHeader/>
                <TableRaw list={studentList}/>
            </table>
            <br/>
            <ShowStudentDetails/>
            
        </div>
    );
};

export default TableData;