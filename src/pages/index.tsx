import { Input, Table } from "antd";
import React from "react";
import { css } from "../utils/stitches";
import { useLocalStore, useObserver } from "mobx-react-lite";
import { api } from "../utils/api";

const styles = {
  homePage: css({
    padding: "5vw",
  }),
};

export const HomePage = () => {
  const store = useLocalStore(() => ({
    searchResult: {
      accounts: [],
      assets: [],
      txs: [],
    },
    async search(query) {
      const res = await api.search({ query });
      console.log(res);
      store.searchResult = res;
    },
  }));
  return useObserver(() => (
    <div className={styles.homePage}>
      <Input.Search placeholder="input search text" onSearch={(value) => store.search(value)} />
      <div>Accounts:</div>
      <Table
        rowKey={"address"}
        dataSource={store.searchResult.accounts}
        style={{ width: "90vw" }}
        tableLayout={"fixed"}
        columns={[
          { title: "Chain ID", dataIndex: ["context", "renaissanceTx", "tx", "chainId"] },
          { title: "address", dataIndex: ["address"] },
          { title: "Nickname", dataIndex: ["moniker"] },
          { title: "Balance", dataIndex: ["balance"] },
          { title: "Nickname", dataIndex: ["nonce"] },
        ]}
      />
      <div>Transactions</div>
      <Table
        rowKey={"hash"}
        dataSource={store.searchResult.txs}
        style={{ width: "90vw" }}
        tableLayout={"fixed"}
        columns={[
          { title: "Chain ID", dataIndex: ["tx", "chainId"] },
          { title: "Height", dataIndex: "height" },
          { title: "Address", dataIndex: ["tx", "from"] },
          { title: "NickName", dataIndex: ["tx", "itx", "moniker"] },
          { title: "Transaction Hash", dataIndex: ["hash"] },
          { title: "Nonce", dataIndex: ["tx", "nonce"] },
          { title: "Time", dataIndex: ["time"] },
        ]}
      />
    </div>
  ));
};
