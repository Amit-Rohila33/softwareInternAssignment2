import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/students/delete-student/" + this.props.obj._id
      )
      .then((res) => {
        alert("Student deleted successfully, Please refresh to see the changes");
        
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.age}</td>
        <td>{this.props.obj.gender}</td>
        <td>{this.props.obj.mobile}</td>
        <td>
          <Link
            className="edit-link"
            to={"/edit-student/" + this.props.obj._id}
          >
            Edit
          </Link>
          <Button
            onClick={this.deleteStudent}
            size="sm"
            variant="danger"
            className="mx-4"
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
