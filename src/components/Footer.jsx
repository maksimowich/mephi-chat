import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Footer = () => (
  <footer className="flex-shrink-0">
    <div className="container py-2 border-top">
      <ListGroup horizontal>
        <ListGroup.Item className="border-0 p-0 pe-3 bg-transparent">
          <a href="https://github.com/maksimowich/fronend_chat" className="d-flex align-items-center text-reset text-decoration-none opacity-70 opacity-fade-in" target="_blank" rel="noreferrer">
            <span className="icon icon--github me-2" />
            <div className="d-flex flex-column">
              <span className="fs-dwarf-2 text-muted">implemented by</span>
              <span className="fs-dwarf-1 lh-1">Maksimowich</span>
            </div>
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  </footer>
);

export default Footer;
