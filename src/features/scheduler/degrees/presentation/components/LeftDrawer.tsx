import { Badge, Button, Space } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { FC } from "react";
import SubjectAvailableHours from "../../domain/models/SubjectAvailableHours";

type Props = {
  degreeInfo: { name: string; subjects: SubjectAvailableHours[] };
};

export const LeftDrawer: FC<Props> = ({ degreeInfo }) => {
  const subjectList = degreeInfo.subjects.map((degreeInfo, i) => (
    <Badge key={i} showZero count={degreeInfo.hours.remaining}>
      <Button
        block
        type="primary"
        style={{
          height: "auto",
          backgroundColor: "green",
          maxHeight: 150,
        }}
      >
        <Text style={{ whiteSpace: "normal", color: "white" }}>
          {degreeInfo.subject}
        </Text>
      </Button>
    </Badge>
  ));

  return (
    <Space
      direction="vertical"
      style={{
        height: "100%",
        backgroundColor: "#E6E7EA",
        width: "100%",
        padding: 15,
      }}
    >
      <Title level={4}>{degreeInfo.name}</Title>
      {subjectList}
    </Space>
  );
};