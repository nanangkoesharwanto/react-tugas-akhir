import { useEffect } from "react";
// import { httpService } from "../../utils/service";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../store/course/action";
import Sidebar from "../../templates/sidebar";
import Header from "../../templates/header";

const DashboardPage = () => {
    const { entities } = useSelector((state) => state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchProducts = async () => {
        // const response = await httpService.get("/product");
        // console.log("response", response);
        await dispatch(getAll());
    };

    const goToDetail = (id) => {
        navigate(`/detail/${id}`);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <Header />
            <div className='container my-5'>
                <Row>
                    <Col md={3}><Sidebar /></Col>
                    <Col md={9}>
                        <Row className="justify-content-md-center">
                            {entities.slice(0, 6).map((item) => {
                                return (
                                    <Col md={4} className='mb-4'>
                                        <div key={item.id} style={{ cursor: "pointer" }}>
                                            <Card
                                                onClick={() => goToDetail(item.id)}
                                                style={{ minHeight: "450px" }}
                                            >
                                                <Card.Img variant="top" src={item.image} />
                                                <Card.Body style={{ minHeight: "195px" }}>
                                                    <Card.Title style={{ minHeight: "25px", fontWeight: "bold" }}>{item.title}</Card.Title>
                                                    <Card.Text>{item.description}</Card.Text>
                                                </Card.Body>
                                                <Card.Body style={{ textAlign: "right" }}>
                                                    <span className="" style={{ textDecoration: 'line-through', fontSize: 'smaller', marginRight: 20 }}>$ {item.price}</span>
                                                    <span style={{ color: 'green', fontSize: 'larger', fontWeight: 'bold' }}>$ {item.price}</span>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>

                    </Col>
                </Row>
            </div>
        </>
    );
}

export default DashboardPage;