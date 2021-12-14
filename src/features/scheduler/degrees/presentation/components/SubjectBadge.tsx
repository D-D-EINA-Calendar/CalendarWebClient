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
      <Button
        type="primary"
        style={{
          height: "auto",
          backgroundColor: degreeAvailableHoursService.getSubjectColor(kind),
          padding: 4,
          width: "auto",
        }}
      >
        <Text style={{ whiteSpace: "normal" }}>{subject}</Text>
        <Row justify="space-between">
          {/* FIXME: @Iñigo: you have to change the [{hour, min}] when [SubjectAvailableHours] is changed] */}
          {getTypeAndHours("blue", { hour: 20, min: 0 }, "Teo.")}
          {getTypeAndHours("magenta", { hour: 20, min: 0 }, "Prac.")}
          {getTypeAndHours("green", { hour: 20, min: 0 }, "Prob.")}
        </Row>
      </Button>
    </div>
  );
};

const getTypeAndHours = (color: string, { hour, min }: Time, name: string) => {
  return (
    <Tooltip
      title="Horas restantes por tipo"
      placement="left"
      mouseEnterDelay={1}
    >
      <Tag color={color}>
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
