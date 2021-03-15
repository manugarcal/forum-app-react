import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Topics = (props) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="container mt-2">
      <Button
        color="dark"
        onClick={toggle}
        style={{ marginBottom: "1rem", width: "100%" }}
      >
        {props.title}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>{props.text}</CardBody>
          <Button color="primary">Go to comments</Button>
        </Card>
      </Collapse>
    </div>
  );
};

export default Topics;
