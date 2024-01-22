import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardText,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faUserCircle,
  faUnlock
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCard>
          <MDBCardHeader>
            <h2><FontAwesomeIcon icon={faUnlock} /> Features</h2>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              <MDBTypography listUnStyled className="lead mb-0">
                <li className="mb-1">
                  <MDBIcon icon="check-circle" className="me-2 text-success" />
                  <MDBTypography tag="strong">Data storage:</MDBTypography> Data
                  is saved exclusively within your browser.
                </li>
                <li className="mb-1">
                  <MDBIcon icon="check-circle" className="me-2 text-success" />
                  <MDBTypography tag="strong">
                    Data tracking:
                  </MDBTypography>{" "}
                  Currently, no data is being tracked by the system.
                </li>
                <li className="mb-1">
                  <MDBIcon icon="check-circle" className="me-2 text-success" />
                  <MDBTypography tag="strong">Cookies:</MDBTypography> The
                  system does not utilize any cookies.
                </li>
                <li className="mb-1">
                  <MDBIcon icon="check-circle" className="me-2 text-success" />
                  <MDBTypography tag="strong">
                    Cross-browser data:
                  </MDBTypography>{" "}
                  Data is not shared across different browsers.
                </li>
              </MDBTypography>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
      <MDBRow>
        <MDBCard>
          <MDBCardHeader>
            <h2><FontAwesomeIcon icon={faUserCircle} /> About Me</h2>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBTypography>
              Hi there! I'm Savan Koradia, the developer behind this time
              tracking application. I'm passionate about creating tools that
              help people work more efficiently and productively, and I'm
              excited to share this project with you.
            </MDBTypography>
            <MDBBtn
              tag="a"
              href="https://savankoradia.com/"
              className="stretched-link"
              color="success"
            >
              Blog <FontAwesomeIcon icon={faExternalLinkAlt} />
            </MDBBtn>{" "}
            &nbsp;
            <MDBBtn
              tag="a"
              href="https://www.linkedin.com/in/savan-koradia/"
              className="stretched-link"
            >
              LinkedIn <FontAwesomeIcon icon={faExternalLinkAlt} />
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
      <MDBRow>
        <MDBTypography className="mb-0" tag="em">
          Thanks for visiting!
        </MDBTypography>
      </MDBRow>
    </MDBContainer>
  );
};
export default About;
