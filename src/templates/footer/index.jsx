import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className="footer" style={{ background: 'white' }}>
            <Container className='py-5 mb-3'>
                <Row>
                    <Col className="col-footer" md={6}>
                        <img
                            alt=""
                            src="https://edspert.id/assets/img/logo_Edspert.png"
                            width="145"
                            height="35"
                            className="d-inline-block align-top img-nav mb-3"
                        />
                        <div className='mb-3'>
                            Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
                        </div>
                        <FontAwesomeIcon icon={faEnvelope} /> <a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>halo@widyaedu.com</a>
                        <br />
                        <FontAwesomeIcon icon={faPhone} /> <a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>+6282123824483</a>
                    </Col>
                    <Col className="col-footer">
                        <b>Program</b>
                        <ul className="no-bullets" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            <li className='mt-2'><a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>Online Course</a></li>
                            <li className='mt-2'><a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>Mini Bootcamp</a></li>
                            <li className='mt-2'><a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>Bootcamp</a></li>
                        </ul>
                    </Col>
                    <Col className="col-footer">
                        <b>Bidang ilmu</b>
                        <ul className="no-bullets" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            <li className='mt-2'><a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>Digital Marketing</a></li>
                            <li className='mt-2'><a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>Product Management</a></li>
                            <li className='mt-2'><a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>English</a></li>
                            <li className='mt-2'><a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>Programming</a></li>
                        </ul>
                    </Col>
                    <Col className="col-footer">
                        <b>Tentang edspert</b>
                        <ul className="no-bullets" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            <li className='mt-2'><a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>Bantuan</a></li>
                            <li className='mt-2'><a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>Kontak Kami</a></li>
                            <li className='mt-2'><a style={{ textDecoration: 'none' }} className='footer-link' href='#installation'>Media Sosial</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col className="col-footer" md={{ span:6, offset:6 }}>
                        Edspert, Copyright {new Date().getFullYear()}.
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;