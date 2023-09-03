import {Accordion} from 'react-bootstrap';

function FlushAccordeon() {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>About Me</Accordion.Header>
          <Accordion.Body>
                I am a web developer with more than 4 years of experience who can work 
                both individually and as a team. I have contributed to many projects and 
                given a lot of solutions for the company and its clients. Some projects 
                that I have completed and contributed to include the Company Profile, 
                CMS, Risk Management System, REST API, and PT Pelayaran Bahtera 
                Adhiguna's whistle blowing system, FX Sudirman website, as well as 
                CMS and Tabloid Senayan web.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
  
  export default FlushAccordeon;