import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <div className="container">
            <Form className="text-center mt-4">
                <Form.Group className="mb-3">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label><b>Descripción</b></Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    <Button variant="danger" type="submit" className="mt-3">Enviar</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Contact;
