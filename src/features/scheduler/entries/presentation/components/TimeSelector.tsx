import { Form, TimePicker } from "antd";

const format = "HH:mm";
const { RangePicker } = TimePicker;

export const TimeSelector = () => {
  return (
    <Form.Item
      label="Horas"
      name="time"
      required
      rules={[
        {
          type: "array" as const,
          required: true,
          message: "Elige una hora!",
        },
      ]}
    >
      <RangePicker
        format={format}
        minuteStep={10}
        disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 21, 22, 23]}
        hideDisabledOptions
        placeholder={["Inicio", "Final"]}
      />
    </Form.Item>
  );
};
