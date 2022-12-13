import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onChangeStudentGender = this.onChangeStudentGender.bind(this);
    this.onChangeStudentMobile = this.onChangeStudentMobile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      age: "",
      gender: "",
      mobile: "",
    };
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
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) => console.log(res.data));
    this.setState({ name: "", age: "", gender: "", mobile: "",});
  }
  render() {
    return (
      <>
        <div className="form-wrapper">
          <Form className="my-4" onSubmit={this.onSubmit}>
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
            <Button
              variant="danger"
              size="lg"
              block="block"
              type="submit"
              className="my-4"
            >
              Create Student
            </Button>
          </Form>
        </div>
      </>
    );
  }
}
