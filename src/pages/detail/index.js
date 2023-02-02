import { useEffect, useState } from "react";
import { Col, Container, Image, Row, Button, Toast, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../store/course/action";
import { addItem } from "../../store/cart/slice";
import Header from "../../templates/header/detail";

const DetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { entity } = useSelector((state) => state.course);
    const [show, setShow] = useState(false);

    const fetchProduct = async (productId) => {
        await dispatch(getDetail(productId));
    };
    const tambah = (item) => {
        dispatch(addItem(item));
        setShow(true);
    };

    useEffect(() => {
        fetchProduct(id);
    }, []);

    return (
        <>
            <Header entity={entity} />
            <Container style={{ paddingTop: "24px" }}>
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Body className="px-0 pb-0">
                                <ul className="no-bullets" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li className='mt-2 p-2' style={{ backgroundColor: '#F1F7FF' }}><a style={{ textDecoration: 'none', marginLeft: 20 }} className='' href='#installation'>Materi</a></li>
                                    <li className='mt-2 p-2'><span style={{ textDecoration: 'none', marginLeft: 20 }}>Fasilitas</span></li>
                                </ul>
                                <hr />
                            </Card.Body>
                            <Card.Body style={{ textAlign: "center" }} className="d-grid gap-2 pt-0">
                                <span style={{ color: 'green', fontSize: 'larger', fontWeight: 'bold' }}>$ {entity.price}</span>
                                <Button variant="warning" className="rounded-pill" size="sm" onClick={() => tambah(entity)}>
                                    Daftar Kelas
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={9}>
                        <Toast
                            bg={"Success"}
                            onClose={() => setShow(false)}
                            show={show}
                            delay={3000}
                            autohide
                            className="mb-3"
                        >
                            <Toast.Body style={{ fontWeight: "bold" }}>Pendaftaran Berhasil Diproseskan.</Toast.Body>
                        </Toast>

                        <Card className="mb-4">
                            <Card.Body style={{ textAlign: "left" }}>
                                <h3 className="mb-4">Materi</h3>
                                <Card.Title style={{ minHeight: "25px", fontWeight: "bold" }}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                        <Form.Check type="checkbox" label={entity.title} />
                                    </Form.Group></Card.Title>
                                <Card.Text style={{ marginLeft: 30 }}>{entity.description}</Card.Text>

                                <Card.Title style={{ minHeight: "25px", fontWeight: "bold" }}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                        <Form.Check type="checkbox" label={entity.title} />
                                    </Form.Group></Card.Title>
                                <Card.Text style={{ marginLeft: 30 }}>{entity.description}</Card.Text>

                                <Card.Title style={{ minHeight: "25px", fontWeight: "bold" }}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                        <Form.Check type="checkbox" label={entity.title} />
                                    </Form.Group></Card.Title>
                                <Card.Text style={{ marginLeft: 30 }}>{entity.description}</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body style={{ textAlign: "left" }}>
                                <h3 className="mb-4">Fasilitas</h3>
                                <Card.Title style={{ minHeight: "25px", fontWeight: "bold" }}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                        <Form.Check type="checkbox" label="E-Sertifikat" />
                                    </Form.Group></Card.Title>

                                <Card.Title style={{ minHeight: "25px", fontWeight: "bold" }}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                        <Form.Check type="checkbox" label="Portfolio" />
                                    </Form.Group></Card.Title>

                                <Card.Title style={{ minHeight: "25px", fontWeight: "bold" }}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                        <Form.Check type="checkbox" label="Job Connector" />
                                    </Form.Group></Card.Title>

                                <Card.Title style={{ minHeight: "25px", fontWeight: "bold" }}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                        <Form.Check type="checkbox" label="Career Development" />
                                    </Form.Group></Card.Title>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body style={{ textAlign: "left" }}>
                                <Row>
                                    <Col md={6}>
                                        <Image
                                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                            src={entity.image}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <h3>{entity.title}</h3>
                                        <p>{entity.description}</p>
                                        <h5>$ {entity.price}</h5>

                                        <Button onClick={() => tambah(entity)}>Daftar Kelas</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>

            <div style={{
                backgroundColor: '#2B3E58',
                height: 200,
                color: 'white',
                textAlign: "center",
                paddingTop: 40
            }}>
                <h2>Sudah Siap Bergabung ?</h2>
                <div className="mt-4">
                    <Button style={{ width: 200, fontWeight: 'bold' }} variant="warning" className="rounded-pill" onClick={() => tambah(entity)}>
                        Daftar Kelas
                    </Button>
                </div>
            </div>
        </>
    );
};

export default DetailPage;