import { Space, Tooltip } from "antd";
import Badge from "antd/lib/badge";
import Row from "antd/lib/grid/row";
import Tag from "antd/lib/tag";
import Text from "antd/lib/typography/Text";
import { SubjectKind, Time } from "../../../entries/domain/models/Entry";
import { SubjectAvailableHours } from "../../domain/models/SubjectAvailableHours";

type Props = {
  setDraggedEvent: Function;
  subjectB: SubjectAvailableHours;
  key: number;
};

export const SubjectBadget = ({ setDraggedEvent, subjectB, key }: Props) => {
  const { subject, kind, hours } = subjectB;

  const getTypeAndHours = (
    color: string,
    kind: SubjectKind,
    { hour, min }: Time,
    name: string
  ) => {
    return (
      <div
        draggable
        key={key}
        style={{ cursor: "grab" }}
        onDragStart={() =>
          setDraggedEvent({
            title: subject,
            kind,
          })
        }
      >
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
      </div>
    );
  };

  return (
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
        {getTypeAndHours(
          "blue",
          SubjectKind.theory,
          { hour: 20, min: 0 },
          "Teo."
        )}
        {getTypeAndHours(
          "magenta",
          SubjectKind.practices,
          { hour: 20, min: 0 },
          "Prac."
        )}
        {getTypeAndHours(
          "green",
          SubjectKind.problems,
          { hour: 20, min: 0 },
          "Prob."
        )}
      </Row>
    </Space>
  );
};
