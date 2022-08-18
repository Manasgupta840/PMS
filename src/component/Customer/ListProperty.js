import React, { useState, Component } from "react";
import { useEffect } from "react";
import connection from '../../services/connection';
import { Row, Col, Image, Button, Card, ListGroup, Table } from "react-bootstrap";
import Base from "../Base/Base";


export default function ListProperty() {
  const [property, setProperty] = useState([]);

   useEffect(() => {
    connection
      .get("/api/properties")
      .then(response => {
        Object.entries(response.data["details"]).forEach(item => {
          console.log(item[1]);
          property.push(item[1]);
        })
      })
      .catch(error => error.message);
  }, [])

  return (
    <Base>
    <div>
      {
        property.map((prop => {
          return (
            
            <div>
              <section className="py-2 bg-primary">
              </section>
              <section className="section  border-bottm">
                <container>
                  <Row className="px-4 my-5">
                    <Col sm={4}>
                      <Image src={`http://localhost:9090/api/property/image/${prop.imageName}`} width="800px" height="1000px" alt="Image" fluid />
                    </Col>
                    <Col sm={5}>
                      <Table striped>
                        <thead>
                          <tr>
                            <th><h3 class="font-weigh-light">{prop.apartmenttype}</h3></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><h5>Bhk Type :</h5></td>
                            <td>{prop.bhktype}</td>
                          </tr>
                          <tr>
                            <td><h5>Floor Type :</h5></td>
                            <td>{prop.floor}</td>
                          </tr>
                          <tr>
                            <td><h5>Facing :</h5></td>
                            <td>{prop.facing}</td>
                          </tr>
                          <tr>
                            <td><h5>Buildup Area :</h5></td>
                            <td>{prop.builduparea}</td>
                          </tr>
                        </tbody>
                      </Table>
                     </Col>
                    <Col sm={2}>
                      <h5 class="font-weigh-light">Get Details</h5>
                      <hr />
                      <Row>
                        {/* <Col md={4}>Click here</Col> */}
                        <Col md={{ span: 4}}><Button variant="info" size="sm">Click here..</Button></Col>
                      </Row>
                    </Col>
                  </Row>
                </container>
              </section>
            </div>
          )
        }))
      }
    </div >
    </Base>
  )
}