import React, { useState, useContext } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import ShopContext from "../../../context/ShopContext";
import "./Navbar.css";

// http://3dmapweb3:8088/api/wellcome/result
let url = "http://3dmapweb3:8088/api/";
const IGeoComNavbar = (props) => {
  const shopList = [
    "--",
    "Wellcome",
    "seveneleven",
    "circleK",
    "USelect",
    "Vango",
  ];
  const typeList = ["--", "CVS", "SMK", "MKT", "MAL"];
  const { searchGrabbedInfo, searchAddedInfo, searchRemovedInfo } =
    useContext(ShopContext);

  const [typeState, setTitleState] = useState("--");
  const [shopState, setShopState] = useState("--");

  return (
    <div className="fixed-top">
      <h1 className="igeocom-title bg-dark text-white">iGeoCom</h1>
      <Navbar className="bg-dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand className="text-white igeocom-select">
                Shop Type
              </Navbar.Brand>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  const selectedType = e.target.value;
                  setTitleState(selectedType);
                }}
              >
                {typeList.map((v) => {
                  return (
                    <option value={v} key={v}>
                      {v}
                    </option>
                  );
                })}
              </Form.Select>

              <Navbar.Brand className="text-white igeocom-select">
                Shop Name
              </Navbar.Brand>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  const selectedShop = e.target.value;
                  console.log(selectedShop);
                  setShopState(selectedShop);
                }}
              >
                {shopList.map((v) => {
                  return <option key={v}>{v}</option>;
                })}
              </Form.Select>
              <Button
                className="igeocom-search text-dark "
                variant="light"
                onClick={() => {
                  console.log(shopState);
                  searchGrabbedInfo(shopState);
                  searchAddedInfo(shopState);
                  searchRemovedInfo(shopState);
                }}
              >
                Search
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default IGeoComNavbar;
