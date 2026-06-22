import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployeeById, updateEmployee } from '../service/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const { id } = useParams();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigate = useNavigate();
    useEffect(() => {
        if (id) {
            getEmployeeById(id).then((response) => {
                const employee = response.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmail(employee.email);
            }).catch(error => {
                console.error(error);
            });
            // Fetch employee data by ID and populate form fields for editing
            // You can use the getEmployeeById function from EmployeeService to fetch the data
        }

    }, [id]);

    function saveOrUpdateEmployee(e) {

        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email };
            console.log(employee);
            if (id) {
                updateEmployee(id, { firstName, lastName, email }).then((response) => {
                    console.log(response.data);
                    navigate('/employees');
                }).catch(error => {
                    console.error(error);
                });

            } else {

                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigate('/employees');
                }).catch(error => {
                    console.error(error);
                }


                )
            }
        }

    }
    function validateForm() {
        let Valid = true;
        const errorsCopy = { ...errors };

        if (firstName.trim()) {
            errorsCopy.firstName = '';

        } else {
            errorsCopy.firstName = 'First name is required';
            Valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        }
        else {
            errorsCopy.lastName = 'Last name is required';
            Valid = false;
        }
        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            Valid = false;
        }
        setErrors(errorsCopy);
        return Valid;
    }
    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update  Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter First Name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}


                                ></input>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter Last Name'
                                    name='lastName'
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                ></input>


                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}

                            </div>


                            <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                    type='text'
                                    placeholder='Enter Email'
                                    name='email'
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}

                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>submit</button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EmployeeComponent