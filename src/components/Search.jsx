import React, { useState } from 'react'
import axios from 'axios'

const SearchStudent = () => {
    const [data, setData] = useState(
        {
            "name": ""
        }
    )
    

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch().finally()

    }
    return (
        <div>
            
            <h1><center>SEARCH STUDENTS</center></h1>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"></label>
                                name
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">NAME</th>
                                        <th scope="col">ROLL NO</th>
                                        <th scope="col">ADM NO</th>
                                        <th scope="col">COLLEGE</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.name}</th>
                                                    <td>{value.rollno}</td>
                                                    <td>{value.admNo}</td>
                                                    <td>{value.college}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={() => { deleteStudent(value._id) }}>DELETE</button>
                                                    </td>
                                                </tr>
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchStudent