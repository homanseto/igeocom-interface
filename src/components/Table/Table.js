import React, { useState, useContext } from "react";
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Modal, Button } from "react-bootstrap";
import ShopContext from "../../context/ShopContext";
import { displayGrabbedColumns } from "./displayGrabbedColumn";
import { removedColumns } from "./removedColumn";
import { grabbedColumns } from "./grabbedColumn";

const Table = (props) => {
  const { table, shopList } = props;
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const rowEvents = {
    onClick: (e, row) => {
      setModalInfo(row);
      toggleTrueFalse();
    },
  };
  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };
  const ModalContent = () => {
    const propertyNames = modalInfo !== [] ? Object.keys(modalInfo) : [];
    const propertyValuse = modalInfo !== [] ? Object.values(modalInfo) : [];
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.englishName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Information</h1>
          <ul>
            {propertyNames.map((v, i) => (
              <div>
                <ol>{v}</ol>
                <input type="text" defaultValue={propertyValuse[i]}></input>
              </div>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <div>
      <BootStrapTable
        keyField={"c_Address"}
        data={shopList}
        columns={table !== "removed" ? displayGrabbedColumns : removedColumns}
        pagination={paginationFactory({ sizePerPage: 25 })}
        rowEvents={rowEvents}
      />
      {show ? <ModalContent /> : null}
    </div>
  );
};

export default Table;
