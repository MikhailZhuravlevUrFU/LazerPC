import React from 'react'
import {Button, Form, Modal} from 'react-bootstrap';


const CreateType = ({show, onHide}) => {
  return (
    <Modal 
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="c-m-t-v">
                Добавить бренд
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    type="text"
                    placeholder="Введите название бренда"
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>

    </Modal>

  )
}

export default CreateType;
