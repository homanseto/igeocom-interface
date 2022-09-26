import React, { useState, useContext } from "react";
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Modal, Button } from "react-bootstrap";
import ShopContext from "../../context/ShopContext";
import { displayGrabbedColumns } from "./displayGrabbedColumn";
import { removedColumns } from "./removedColumn";
import "./Table.css";

const Table = (props) => {
  const { table, shopList } = props;
  const [modalInfo, setModalInfo] = useState([]);
  const [list, setList] = useState(modalInfo);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const rowEvents = {
    onClick: (e, row) => {
      console.log(row);
      setModalInfo(row);
      toggleTrueFalse();
    },
  };
  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };
  const outputconvert = (shopInfo) => {
    return {
      grabId: shopInfo.grabId,
      geoNameId: shopInfo.geoNameId,
      englishName: shopInfo.englishName,
      chineseName: shopInfo.chineseName,
      class: shopInfo.class,
      type: shopInfo.type,
      subcat: shopInfo.subcat,
      easting: shopInfo.easting,
      northing: shopInfo.northing,
      source: shopInfo.source,
      eFloor: shopInfo.e_floor,
      cFloor: shopInfo.c_floor,
      eSitename: shopInfo.e_sitename,
      cSitename: shopInfo.c_sitename,
      eArea: shopInfo.e_area,
      cArea: shopInfo.c_area,
      eDistrict: shopInfo.e_District,
      cDistrict: shopInfo.c_District,
      eRegion: shopInfo.e_Region,
      cRegion: shopInfo.c_Region,
      eAddress: shopInfo.e_Address,
      cAddress: shopInfo.c_Address,
      Telephone: shopInfo.tel_No,
      Fax: shopInfo.fax_No,
      Website: shopInfo.web_Site,
    };
  };
  const ModalContent = () => {
    console.log(list);
    const result = outputconvert(modalInfo);
    const propertyNames = result !== [] ? Object.keys(result) : [];
    const propertyValuse = result !== [] ? Object.values(result) : [];
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
                <ol>
                  {v}:
                  <input
                    type="text"
                    defaultValue={propertyValuse[i]}
                    size="50"
                  ></input>
                </ol>
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
