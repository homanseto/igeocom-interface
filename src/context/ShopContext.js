import { createContext, useState } from "react";
import axios from "axios";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [shopInfo, setResult] = useState([]);
  const [added, setAdded] = useState([]);
  const [removed, setRemoved] = useState([]);
  const [editInfo, setEdit] = useState([]);

  const searchGrabbedInfo = async (shop) => {
    const url = `http://3dmapweb3:8088/api/${shop}/result`;
    const data = await axios.get(url);
    setResult(data.data);
  };

  const searchAddedInfo = async (shop) => {
    const url = `http://3dmapweb3:8088/api/${shop}/added`;
    const data = await axios.get(url);
    setAdded(data.data);
  };

  const searchRemovedInfo = async (shop) => {
    const url = `http://3dmapweb3:8088/api/${shop}/removed`;
    const data = await axios.get(url);
    setRemoved(data.data);
  };

  // type: add or remove
  const addToList = async (shopInfo, type) => {
    const url = `http://3dmapweb3:8088/api/All/${type}`;
    await axios.post(url, { shopInfo });
  };

  return (
    <ShopContext.Provider
      value={{
        shopInfo,
        searchGrabbedInfo,
        added,
        searchAddedInfo,
        removed,
        searchRemovedInfo,
        editInfo,
        addToList,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContext;
