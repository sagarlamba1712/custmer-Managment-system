import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Crud() {
  const [Name, setName] = useState("");
  const [Date, setDate] = useState("");
  const [Qty, setQty] = useState("");
  const [Price, setPrice] = useState("");

  const [users, setUsers] = useState([]);

  const navbar = useNavigate();


  const homeBack = () => {
    navbar('/Header')

  }

  const addUser = (e) => {
    e.preventDefault();

    const user = {
      Name,
      Date,
      Qty,
      Price,
    };

  setUsers([...users, user]);

    setName("");
    setDate("");
    setQty("");
    setPrice("");
    setIsOpen(false);
  };

  const deleteUser = (user) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      let copy = users.filter((item) => item !== user);

      setUsers([...copy]);
    }
  };


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col xs>
            <button className='btn btn-primary' onClick={homeBack}>Home</button>
          </Col>
          <Col xs>
            <button className="btn btn-dark" onClick={openModal}>ADD Detail</button>
          </Col>
        </Row>
      </Container>
      <br>
      </br>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>Add item detail</div>
        <form onSubmit={addUser}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br></br>
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <br></br>
          <div>
            <label>Qty:</label>
            <input
              type="number text"
              value={Qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
          <br>
          </br>
          <div>
            <label>Price:</label>
            <input
              type="number text"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button className="btn btn-success">{" Add"}</button>
        </form>
      </Modal>

      <Table striped bordered hover variant="dark columns">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td> {user.Name} </td>
                <td> {user.Date} </td>
                <td> {user.Qty} </td>
                <td> {user.Price} </td>
          
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

    </div>
  );
}