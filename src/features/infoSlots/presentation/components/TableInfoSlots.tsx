import { HourglassTwoTone } from "@ant-design/icons";
import { duration } from "@mui/material";
import { Button, message, Table, Tag } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InfoSlotsKey, Reserve } from "../../domain/models/InfoSlots";
import { infoSlotsService } from "../../domain/services/InfoSlots.service";

type Props = {
  infoSlots: InfoSlotsKey[];
  space: string | null;
  date: string;
  person: string;
};

const TableInfoSlots = ({ infoSlots, space, date, person }: Props) => {
  const [clickedButton, setClickedButton] = useState("");
  const [rows, setRows] = useState<React.Key[]>([""]);
  const [selectionType] = useState<"checkbox">("checkbox");
  const columns = [
    {
      title: "Hora",
      dataIndex: "hour",
      key: "hour",
    },
    {
      title: "Ocupación",
      dataIndex: "occupied",
      key: "occupied",
      render: (occupied: boolean) => {
        let color = occupied ? "red" : "green";
        let word = occupied ? "Ocupado" : "Libre";
        return <Tag color={color}>{word}</Tag>;
      },
    },
    {
      title: "Reservante",
      dataIndex: "person",
      key: "person",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: InfoSlotsKey[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setRows(selectedRowKeys);
    },
    getCheckboxProps: (record: InfoSlotsKey) => ({
      disabled: record.occupied, // Column configuration not to be checked
      name: HourglassTwoTone.toString(),
    }),
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const reserveHandler = async () => {
    var reserve: Reserve[] = new Array();
    for (var i in rows) {
      reserve[i] = {
        space: space,
        hour: infoSlots[i].hour,
        date: date,
        person: person,
      };
    }
    const allreserves = await infoSlotsService.reserve(reserve);
    const key = "update";
    message.loading({ content: "Reservando...", key });
    await delay(500);
    if (allreserves.isError) {
      message.error("No se ha podido completar la reserva");
    } else {
      setClickedButton("HOLA");
      message.success({
        content: "Espacios reservados, actualizando página",
        key,
        duration: 1,
      });
      await delay(300);
      window.location.reload();
    }
  };

  return (
    <div style={{ margin: "10px", width: "800px" }}>
      <Table
        pagination={{ pageSize: 7 }}
        dataSource={infoSlots}
        columns={columns}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
      />
      <div style={{ flexDirection: "row" }}>
        <Button type="primary" onClick={reserveHandler}>
          Reservar selección
        </Button>
        <Link to="/slots" id="mainLogo" style={{ cursor: "pointer" }}>
          <Button type="primary" danger style={{ marginLeft: "1%" }}>
            Cancelar
          </Button>
        </Link>
        <h1>{clickedButton !== "" ? `Reservando a las "${rows}"` : ""}</h1>
      </div>
    </div>
  );
};

export default React.memo(TableInfoSlots);
