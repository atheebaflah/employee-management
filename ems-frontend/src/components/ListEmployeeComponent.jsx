
import React, { useEffect, useState } from 'react'
import { listEmployees , deleteEmployee} from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {

        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    function addNewEmployee() {
        navigate('/add-employee');
    }
    function updateEmployee(id) {
        navigate(`/edit-employee/${id}`);
    }
    function removeEmployee(id) {
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div className='container-fluid' >
            <h2>List of Employees</h2>
            <button className="btn btn-primary mb-2 " onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered table-responsive'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id} </td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>

                                    <button className="btn btn-danger m-lg-1 mt-md-1 mt-sm-1" onClick={() => removeEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>)

                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent