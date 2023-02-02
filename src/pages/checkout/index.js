import { Accordion, Button, Card, Col, Container, Form, Image, InputGroup, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import girl from "../../assets/images/girl.png";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const { entities } = useSelector((state) => state.cart);
    const countTotal = (data) => {
        const result = data.reduce((prev, curr) => {
            return prev + parseInt(curr.price, 10);
        }, 0);
        return result;
    };
    const navigate = useNavigate();

    return (
        <Container style={{ paddingTop: 24, marginTop: 30, marginBottom: 50 }}>
            <Row>
                <Col md={5}>
                    <Card>
                        <Card.Body>
                            <h2 className="mb-4">Pilih Metode Pembayaran</h2>
                            <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Bank Transfer (verifikasi manual)</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui Whatsapp
                                        </p>
                                        <Card border="light">
                                            <Card.Body>
                                                <Form.Check
                                                    type='radio'
                                                    id='radio1'
                                                    label='Bank Transfer ke Rek Bank Mandiri'
                                                    name="group1"
                                                />
                                                <Form.Check
                                                    type='radio'
                                                    id='radio2'
                                                    label='Bank Transfer ke Rek Bank BCA'
                                                    name="group1"
                                                />
                                                <Form.Check
                                                    type='radio'
                                                    id='radio3'
                                                    label='Bank Transfer ke Rek Bank BRI'
                                                    name="group1"
                                                />
                                                <Form.Check
                                                    type='radio'
                                                    id='radio4'
                                                    label='Bank Transfer ke Rek Bank BNI'
                                                    name="group1"
                                                />
                                            </Card.Body>
                                        </Card>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Virtual Account (verifikasi otomatis)</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Pembayaran melalui virtual account berbagai bank. Metode bayar ini akan diverifikasi secara otomatis.
                                        </p>
                                        <Card border="light">
                                            <Card.Body>
                                                <Form.Check
                                                    type='radio'
                                                    id='radio1'
                                                    label='Virtual Account Bank Mandiri'
                                                    name="group1"
                                                />
                                                <Form.Check
                                                    type='radio'
                                                    id='radio2'
                                                    label='Virtual Account Bank BCA'
                                                    name="group1"
                                                />
                                                <Form.Check
                                                    type='radio'
                                                    id='radio3'
                                                    label='Virtual Account Bank BRI'
                                                    name="group1"
                                                />
                                                <Form.Check
                                                    type='radio'
                                                    id='radio4'
                                                    label='Virtual Account Bank BNI'
                                                    name="group1"
                                                />
                                            </Card.Body>
                                        </Card>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={7}>
                    <Card>
                        <Card.Body>
                            <h2 className="mb-4">Ringkasan Pesanan</h2>
                            <Row className="mb-4">
                                <Col md={3}>
                                    <Image
                                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                        src={girl}
                                        thumbnail
                                    />
                                </Col>
                                <Col md={9}>
                                    <h3>Programming Laravel
                                        Getting Started with Laravel 9</h3>
                                    <p>Batch September 2022
                                        <br />Mentor William Hartono, Farel Prayoga</p>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><b>Kode Promo</b></Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Masukkan kode promo"
                                        aria-label="Masukkan kode promo"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="primary" id="button-addon2">
                                        Terapkan
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <p className="mb-4">
                                <b>Metode Pembayaran</b>
                                <div>Bank Transfer (verifikasi manual)-Mandiri</div>
                            </p>

                            <p className="mb-0"><b>Ringkasan Pembayaran</b></p>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Nama Kelas</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entities.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.title}</td>
                                                <td>$ {item.price}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Total Pembayaran</th>
                                        <th>$ {countTotal(entities)}.00</th>
                                    </tr>
                                </tfoot>
                            </Table>

                            <p className="mb-5">
                                Dengan menekan tombol Bayar kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan baca kembali Syarat & ketentuan yang berlaku.
                            </p>

                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <Button style={{ width: 200, fontWeight: 'bold' }} variant="warning" className="rounded-pill" onClick={() => navigate("/instruksi")}>
                                    Bayar
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckoutPage;
