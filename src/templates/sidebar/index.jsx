import { Form } from "react-bootstrap";

const Sidebar = () => {
    return (
        <Form>
            <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label style={{ color: '#4080ff', fontWeight: 'bold' }}>Bidang</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                <Form.Check type="checkbox" label="Digital Marketing" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                <Form.Check type="checkbox" label="Product Management" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox3">
                <Form.Check type="checkbox" label="Data Analysis" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox4">
                <Form.Check type="checkbox" label="Front End Development" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox5">
                <Form.Check type="checkbox" label="Back End Development" />
            </Form.Group>
            <Form.Group className="mb-2 mt-5" controlId="formBasicPassword">
                <Form.Label style={{ color: '#4080ff', fontWeight: 'bold' }}>Jenis program</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox6">
                <Form.Check type="checkbox" label="Bootcamp" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox7">
                <Form.Check type="checkbox" label="Mini bootcamp" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox8">
                <Form.Check type="checkbox" label="Online course" />
            </Form.Group>
        </Form>
    );
}

export default Sidebar;