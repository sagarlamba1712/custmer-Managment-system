import React, { useState, useTable } from 'react';
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
  const [Item, setItem] = useState("");
  const [Bill, setBill] = useState("");

  const [users, setUsers] = useState([]);

  const navbar = useNavigate();


  const homeBack = () => {
    navbar("/Header")
  }

  const addUser = (e) => {
    e.preventDefault();

    const user = {
      Name,
      Date,
      Qty,
      Item,
      Bill,
    };
    setUsers([...users, user])

    setName("");
    setDate("");
    setQty("");
    setItem("");
    setBill("");
    setIsOpen(false)

    
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
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <button className='btn btn-primary' onClick={homeBack}>Home</button>
          </Col>
          <Col md="auto"></Col>
          <Col xs lg="2">
            <button className='btn btn-dark' onClick={openModal}>ADD Detail</button>
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
              type="number text"
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
            <label>Item:</label>
            <input
              type="number text"
              value={Item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <br></br>
          <div>
            <label>Bill:</label>
            <input
              type="number text"
              value={Bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
          <button className="btn btn-success" >{"update Add"} </button>
        </form>
      </Modal>
        
      <Table striped bordered hover variant="dark columns">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Qty</th>
            <th>Item</th>
            <th>Bill</th>
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
                <td> {user.Item} </td>
                <td> {user.Bill} </td>
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