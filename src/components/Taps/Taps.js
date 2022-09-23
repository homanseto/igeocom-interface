import React, { useState, useEffect, useContext } from "react";
import Table from "../Table/Table";
import ShopContext from "../../context/ShopContext";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "./Taps.css";
import "react-tabs/style/react-tabs.css";

const IGeoComTaps = () => {
  const [table, setTable] = useState("grabbed");
  const { shopInfo, added, removed } = useContext(ShopContext);
  // const { added } = useContext(ShopContext);
  return (
    <div className="igeocomTaps">
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Latest Grabbed Result</Tab>
          <Tab>Added</Tab>
          <Tab>Removed</Tab>
        </TabList>
        <TabPanel>
          <Table shopList={shopInfo} table="result" />
        </TabPanel>
        <TabPanel>
          <Table shopList={added} table="added" />
        </TabPanel>
        <TabPanel>
          <Table shopList={removed} table="removed" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default IGeoComTaps;
