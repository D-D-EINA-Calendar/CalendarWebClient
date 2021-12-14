/* eslint-disable react-hooks/exhaustive-deps */
import { Layout, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import { leftDrawerContext } from "../../context/leftDrawerContext";
import { DegreeSubjectsContextWrapper } from "../../context/DegreeSubjectsContext";
import { DegreePropertiesContextWrapper } from "../../context/DegreePropertiesContextWrapper";
import { SelectedDegreeContextWrapper } from "../../context/DegreeSelectedContext";
import LeftDrawer from "../../../features/scheduler/degrees/presentation/components/LeftDrawer";
import SchedulerCard from "../../../features/scheduler/entries/presentation/components/SchedulerCard";
import { CSSProperties, useState } from "react";
import { SiderTheme } from "antd/lib/layout/Sider";
import { ButtonToggleND } from "../components/notes-drawer/ButtonToggleND";
import Text from "antd/lib/typography/Text";
import DegreeForm from "../../../features/scheduler/degrees/presentation/components/DegreeForm";

const { Sider, Content, Header } = Layout;

export const SchedulerPage = () => {
  const isDrawerClosed = useMediaQuery({ query: "(min-width: 600px)" });
  const [visible, setvisible] = useState(leftDrawerContext.getVisibility());
  const [draggedEvent, setDraggedEvent] = useState(null);

  const toggleVisibility = () => {
    setvisible(!visible);
    leftDrawerContext.setVisibility(!visible);
  };

  return (
    <DegreeSubjectsContextWrapper>
      <DegreePropertiesContextWrapper>
        <SelectedDegreeContextWrapper>
          <Layout style={{ height: "100%", backgroundColor: "#E1E2E3" }}>
            {isDrawerClosed && (
              <Sider collapsed={visible} hidden={!isDrawerClosed}>
                <LeftDrawer setDraggedEvent={setDraggedEvent} />
              </Sider>
            )}
            <Layout style={{ backgroundColor: "transparent" }}>
              <Header
                style={{
                  height: "auto",
                  backgroundColor: "transparent",
                  paddingRight: 10,
                  paddingLeft: 10,
                }}
              >
                <Row justify="space-between" align="middle">
                  <Row align="middle">
                    {isDrawerClosed && (
                      <ButtonToggleND
                        toggleDrawer={toggleVisibility}
                        visibility={!visible}
                      />
                    )}
                    <Text
                      style={{ fontSize: 30, color: "#464646", marginLeft: 10 }}
                    >
                      Horario
                    </Text>
                  </Row>
                  <DegreeForm />
                </Row>
              </Header>
              <Content>
                <SchedulerCard draggedEvent={draggedEvent} />
              </Content>
            </Layout>
          </Layout>
        </SelectedDegreeContextWrapper>
      </DegreePropertiesContextWrapper>
    </DegreeSubjectsContextWrapper>
  );
};

Sider.defaultProps = {
  theme: "light" as SiderTheme,
  style: {
    height: "100%",
    borderRight: "2px solid #1890FF",
    overflowY: "scroll",
    backgroundColor: "#E6E7EA",
    display: "flex",
    justifyContent: "center",
  } as CSSProperties,
  collapsedWidth: 0,
  width: 275,
  id: "leftSider",
  trigger: null,
};
