import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const caseStudies = [
  {
    title: "Girl Child Education",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere enim eu velit faucibus, vel ullamcorper nibh dignissim.",
    image: "https://dummyimage.com/300x200/cccccc/000000",
    url: "#",
  },
  {
    title: "Saving Wildlife",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere enim eu velit faucibus, vel ullamcorper nibh dignissim.",
    image: "https://dummyimage.com/300x200/cccccc/000000",
    url: "#",
  },
  // Add more case studies here
];

function CaseStudy({ study }) {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={study.image} />
        <Card.Body>
          <Card.Title>{study.title}</Card.Title>
          <Card.Text>{study.summary}</Card.Text>
          <Button variant="primary" href={study.url}>
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function CaseStudies() {
  return (
    <Container className="mt-5">
      <h1>Case Studies</h1>
      <Row>
        {caseStudies.map((study) => (
          <CaseStudy key={study.title} study={study} />
        ))}
      </Row>
    </Container>
  );
}

export default CaseStudies;
