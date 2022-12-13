import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
export default class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onChangeStudentGender = this.onChangeStudentGender.bind(this);
    this.onChangeStudentMobile = this.onChangeStudentMobile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      name: "",
      age: "",
      gender: "",
      mobile: "",
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/students/edit-student/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          age: res.data.age,
          gender: res.data.gender,
          mobile: res.data.mobile,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeStudentName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeStudentAge(e) {
    this.setState({ age: e.target.value });
  }
  onChangeStudentGender(e) {
    this.setState({ gender: e.target.value });
  }
  onChangeStudentMobile(e) {
    this.setState({ mobile: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const studentObject = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      mobile: this.state.mobile,
    };
    axios
      .put(
        "http://localhost:4000/students/update-student/" +
          this.props.match.params.id,
        studentObject
      )
      .then((res) => {
        // console.log(res.data);
        alert("Student successfully updated, Please refresh to see the changes");
      })
      .catch((error) => {
        console.log(error);
      });
    // Redirect to Student List
    this.props.history.push("/student-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit} className="my-4">
          <Form.Group controlId="Name" className="my-4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>
          <Form.Group controlId="Number" className="my-4">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your age"
              value={this.state.age}
              onChange={this.onChangeStudentAge}
            />
          </Form.Group>

          <Form.Group controlId="Name" className="my-4">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Gender as male or female"
              value={this.state.gender}
              onChange={this.onChangeStudentGender}
            />
          </Form.Group>
          <Form.Group controlId="Number" className="my-4">
            <Form.Label>Mobile No.</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Your Mobile Number"
              value={this.state.mobile}
              onChange={this.onChangeStudentMobile}
            />
          </Form.Group>
          <Button variant="danger" size="lg" block="block" type="submit">
            Update Student
          </Button>
        </Form>
      </div>
    );
  }
}
