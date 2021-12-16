import { Space, Tooltip } from "antd";
import Badge from "antd/lib/badge";
import Button from "antd/lib/button";
import Row from "antd/lib/grid/row";
import Tag from "antd/lib/tag";
import Text from "antd/lib/typography/Text";
import { Time } from "../../../entries/domain/models/Entry";
import { SubjectAvailableHours } from "../../domain/models/SubjectAvailableHours";
import { degreeAvailableHoursService } from "../../domain/services/AvailableHours.service";

type Props = {
  setDraggedEvent: Function;
  subjectB: SubjectAvailableHours;
  key: number;
};

export const SubjectBadget = ({ setDraggedEvent, subjectB, key }: Props) => {
  const { subject, kind, hours } = subjectB;
  return (
    <div
      draggable
      key={key}
      onDragStart={() =>
        setDraggedEvent({
          title: subject,
          kind,
        })
      }
    >
      <Space
        style={{
          height: "auto",
          backgroundColor: "#e1e1e1",
          padding: 5,
          width: "auto",
          border: "#878787 2px solid",
          borderRadius: 5,
        }}
        direction="vertical"
        align="center"
      >
        <Text style={{ whiteSpace: "normal" }}>{subject}</Text>
        <Row>
          {/* FIXME: @Iñigo: you have to change the [{hour, min}] when [SubjectAvailableHours] is changed] */}
          {getTypeAndHours("blue", { hour: 20, min: 0 }, "Teo.")}
          {getTypeAndHours("magenta", { hour: 20, min: 0 }, "Prac.")}
          {getTypeAndHours("green", { hour: 20, min: 0 }, "Prob.")}
        </Row>
      </Space>
    </div>
  );
};

const getTypeAndHours = (color: string, { hour, min }: Time, name: string) => {
  return (
    <Tooltip title="Horas restantes" placement="left" mouseEnterDelay={1}>
      <Tag color={color} style={{ border: "2px solid" }}>
        <Space
          direction="vertical"
          size={1}
          style={{ paddingTop: 5, paddingBottom: 5 }}
        >
          <Text style={{ color: color }}>{name}</Text>
          <Badge showZero count={`${hour}:${min}`} />
        </Space>
      </Tag>
    </Tooltip>
  );
};
