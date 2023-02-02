import { useEffect } from "react";
import { Col, Container, Image, Row, Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../store/course/action";
import { addItem } from "../../store/cart/slice";
import Header from "../../templates/header/detail";
import { toast, Toaster } from "react-hot-toast";

const DetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { entity } = useSelector((state) => state.course);

    const fetchProduct = async (productId) => {
        await dispatch(getDetail(productId));
    };

    const notify = () => toast.success('Pendaftaran Berhasil Diproseskan.');

    const tambah = (item) => {
        dispatch(addItem(item));
        notify();
    };

    useEffect(() => {
        fetchProduct(id);
    }, []);

    return (
        <>
            <div><Toaster position="top-right"/></div>
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
                height: 250,
                color: 'white',
                textAlign: "center",
                paddingTop: 65,
                marginTop: 30
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
