import React from "react";
import { Accordion } from "react-bootstrap";

export default function AccordionItem({ id, title, content, selected }) {
  return (
    <Accordion.Item
      eventKey={id}
      className={`${
        selected ? "border-red" : "border-orange"
      } border border-2 rounded-3 bg-grey position-relative z-3`}
    >
      <Accordion.Button className="bg-grey px-4 rounded-3 fs-5 text-white fw-semibold">
        {title}
      </Accordion.Button>
      <Accordion.Body
        className={`${
          selected ? "border-red" : "border-orange"
        } px-4 py-2.5 border-top border-2 text-grey`}
      >
        {content}
      </Accordion.Body>
    </Accordion.Item>
  );
}
