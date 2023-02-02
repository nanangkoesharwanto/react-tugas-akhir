import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo_Edspert.png";
import { FiShoppingCart } from "react-icons/fi";

const NavbarMenu = ({ dataManager }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showright, setShowRight] = useState(false);
  const handleCloseRight = () => setShowRight(false);
  const handleShowRight = () => setShowRight(true);

  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#152a46" }} variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: 'pointer' }}
          >
            <img
              alt=""
              src={logo}
              width="165"
              height="35"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <NavDropdown title="Program" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Bootcamp</NavDropdown.Item>
                <NavDropdown.Item href="#">Mini bootcamp</NavDropdown.Item>
                <NavDropdown.Item href="#">Online course</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Bidang Ilmu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Digital Marketing</NavDropdown.Item>
                <NavDropdown.Item href="#">Product Management</NavDropdown.Item>
                <NavDropdown.Item href="#">Data Analysis</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Front End Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Back End Development
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>Tentang edspert</Nav.Link>
            </Nav>
            <Nav>
              <Button
                variant="warning"
                className="rounded-pill mx-2"
                onClick={() => navigate("checkout")}
              >
                <FiShoppingCart />
                {" "}
                <Badge bg="success">0</Badge>
              </Button>
              <Button variant="danger" className="rounded-pill mx-2">
                Login / Register
              </Button>
              {/* <Nav.Link onClick={() => navigate("detail/1")}>Detail</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Kata Bijak</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ol>
            <li>
              Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah
              berlalu dan yakinlah semua akan baik-baik saja.
            </li>
            <li className="mt-2">
              Setiap detik sangatlah berharga karena waktu mengetahui banyak
              hal, termasuk rahasia hati.
            </li>
            <li className="mt-2">
              Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah
              sendiri.
            </li>
            <li className="mt-2">
              Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.
            </li>
            <li className="mt-2">
              Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan
              berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang
              baru dengan harapan yang lebih baik dari sebelumnya.
            </li>
            <li className="mt-2">
              Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan
              bersyukurlah yang akan menjadikan hidup kita bahagia.
            </li>
          </ol>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showright} onHide={handleCloseRight} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tertawa Sejenak</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ol>
            <li>
              Berenang jauh para ikan
              <br />
              Mereka bebas hatinya senang
              <br />
              Badan kurus kurang makan
              <br />
              Kalau ditiup goyang-goyang
            </li>
            <li className="mt-2">
              Jalan-jalan ke pinggir empang
              <br />
              Nemu katak di pinggir empang
              <br />
              Hati siapa tak bimbang
              <br />
              Kamu botak minta dikepang
            </li>
            <li className="mt-2">
              Tetangga baru namanya Rahmat
              <br />
              Punya istri namanya Cua
              <br />
              Kakek cerita terlalu semangat
              <br />
              Gigi palsunya copot semua
            </li>
          </ol>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarMenu;
