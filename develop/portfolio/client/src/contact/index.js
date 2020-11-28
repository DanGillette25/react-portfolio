import React from "react";
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (

    <div>
        
        <h2>Contact</h2>
        
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              I will not share your email with anyone else.
              </Form.Text>
          </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
      </div>
    
  );
}

export default Contact;