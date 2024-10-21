import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {

  const education = [
    {
      institution: "Sekolah Dasar",
      degree: "(2014-2019)",
      description: "Waktu saya Sekolah Dasar (SD), Saya Sekolah di SDN Sukamenak 08.",
    },
    {
      institution: "Sekolah Menengah Pertama",
      degree: "(2019-2022)",
      description: "Waktu saya Sekolah Menengah Pertama (SMP), Saya Sekolah di SMPN 02 Margahayu.",
    },
    {
      institution: "Sekolah Menengah Kejuruan",
      degree: "(2022-Sekarang)",
      description: "Dan Sekarang saya masih menimba ilmu di SMK Assalaam Bandung khususnya jurusan RPL.",
    },
  ];

  return (
    <section className="education" id="education">
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="text-center w-100">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Pendidikan</h2>
                <p>Berikut adalah riwayat Pendidikan saya dimulai dari Sekolah Dasar (SD), Sekolah Menengah Pertama (SMP), dan Sekolah Menengah Kejuruan (SMK).</p>
                <Tab.Container id="education-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center">
                    <Nav.Item>
                      <Nav.Link eventKey="first">SD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">SMP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">SMK</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row className="g-4 justify-content-center">
                        {education.filter(edu => edu.degree.includes("2014-2019")).map((edu, index) => (
                          <Col key={index} sm={12} md={6} lg={4} className="d-flex">
                            <div className="education-item w-100">
                              <h4>{edu.institution}</h4>
                              <p><strong>{edu.degree}</strong></p>
                              <p>{edu.description}</p>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="g-4 justify-content-center">
                        {education.filter(edu => edu.degree.includes("2019-2022")).map((edu, index) => (
                          <Col key={index} sm={12} md={6} lg={4} className="d-flex">
                            <div className="education-item w-100">
                              <h4>{edu.institution}</h4>
                              <p><strong>{edu.degree}</strong></p>
                              <p>{edu.description}</p>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="g-4 justify-content-center">
                        {education.filter(edu => edu.degree.includes("2022-Sekarang")).map((edu, index) => (
                          <Col key={index} sm={12} md={6} lg={4} className="d-flex">
                            <div className="education-item w-100">
                              <h4>{edu.institution}</h4>
                              <p><strong>{edu.degree}</strong></p>
                              <p>{edu.description}</p>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
