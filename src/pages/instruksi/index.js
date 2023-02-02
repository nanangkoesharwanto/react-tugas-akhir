import { Accordion, Button, Card, Col, Container, Form, Image, InputGroup, Row, Tab, Table, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import girl from "../../assets/images/girl.png";

const CheckoutPage = () => {
    const { entities } = useSelector((state) => state.cart);
    const countTotal = (data) => {
        const result = data.reduce((prev, curr) => {
            return prev + parseInt(curr.price, 10);
        }, 0);
        return result;
    };

    return (
        <>
            <Container style={{ paddingTop: "24px", marginTop: "30px", marginBottom: "50px" }}>
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
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

                                <p className="mb-4">
                                    <b>Metode Pembayaran</b>
                                    <div>Bank Transfer (verifikasi manual)-BCA</div>
                                </p>

                                <p className="mb-4">
                                    <b>No Rek. 137000299089</b>
                                    <div>a.n. PT Widya Kreasi Bangsa</div>
                                    <div>Nominal yang harus dibayar senilai:</div>
                                    <div style={{ fontSize: 'larger' }}><b>Rp. 400.000</b></div>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <h2 className="mb-4">Instruksi Pembayaran</h2>

                                <Tabs
                                    defaultActiveKey="profile"
                                    id="fill-tab-example"
                                    className="mb-3"
                                    fill
                                >
                                    <Tab eventKey="home" title="ATM">
                                        <ol>
                                            <li style={{ paddingLeft: 10 }}>Masukkan kartu ke mesin ATM BCA.</li>
                                            <li style={{ paddingLeft: 10 }}>Pilih Bahasa.</li>
                                            <li style={{ paddingLeft: 10 }}>Masukkan PIN ATM.</li>
                                            <li style={{ paddingLeft: 10 }}>Pilih menu transaksi lainnya.</li>
                                            <li style={{ paddingLeft: 10 }}>Pilih menu “Transfer”, lalu pilih ke relk BCA.</li>
                                            <li style={{ paddingLeft: 10 }}>Masukkan no rekening yang dituju.</li>
                                            <li style={{ paddingLeft: 10 }}>Masukkan nominal jumlah uang yang akan di transfer.</li>
                                            <li style={{ paddingLeft: 10 }}>Layar ATM akan menampilkan data transaksi anda, jika data sudah benar pilih “YA”.</li>
                                            <li style={{ paddingLeft: 10 }}>Selesai, struk akan keluar dari mesin ATM.</li>
                                        </ol>
                                    </Tab>
                                    <Tab eventKey="profile" title="Internet Banking">
                                        <ol>
                                            <li style={{ paddingLeft: 10 }}>Lakukan log in pada aplikasi KlikBCA Individual (https://ibank.klikbca.com/)</li>
                                            <li style={{ paddingLeft: 10 }}>Masukkan User ID dan PIN</li>
                                            <li style={{ paddingLeft: 10 }}>Pilih Transfer Dana > Transfer ke BCA Virtual Account</li>
                                            <li style={{ paddingLeft: 10 }}>Masukkan nomor BCA Virtual Account (80777) dan Nomor HP yang terdaftar di akun DTKP Anda (Contoh: 80777081316951940)</li>
                                            <li style={{ paddingLeft: 10 }}>Masukkan jumlah yang ingin dibayarkan</li>
                                            <li style={{ paddingLeft: 10 }}>Validasi pembayaran</li>
                                            <li style={{ paddingLeft: 10 }}>Cetak nomor referensi sebagai bukti transaksi Anda</li>
                                        </ol>
                                    </Tab>
                                    <Tab eventKey="longer-tab" title="M-Banking">
                                        <ol>
                                            <li style={{ paddingLeft: 10 }}>Lakukan log in pada aplikasi BCA Mobile</li>
                                            <li style={{ paddingLeft: 10 }}>Pilih menu m-BCA, kemudian masukkan kode akses m-BCA</li>
                                            <li style={{ paddingLeft: 10 }}>Pilih m-Transfer > BCA Virtual Account</li>
                                            <li style={{ paddingLeft: 10 }}>Pilih dari Daftar Transfer, atau masukkan 5 angka kode perusahaan untuk DTKP (80777) dan Nomor HP yang terdaftar di akun DTKP Anda (Contoh: 80777081316951940)</li>
                                            <li style={{ paddingLeft: 10 }}>Masukkan jumlah yang ingin dibayarkan</li>
                                            <li style={{ paddingLeft: 10 }}>Masukkan pin m-BCA</li>
                                            <li style={{ paddingLeft: 10 }}>Pembayaran selesai. Simpan notifikasi yang muncul sebagai bukti pembayaran</li>
                                        </ol>
                                    </Tab>
                                </Tabs>
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
                <h2>Sudah Transfer? Lakukan verifikasi pembayaran segera!</h2>
                <div className="mt-4">
                    <Button style={{ width: 200, fontWeight: 'bold' }} variant="warning" className="rounded-pill">
                        Verifikasi Pembayaran
                    </Button>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
