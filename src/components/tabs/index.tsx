import { ReactElement, useMemo, useState } from "react";

// styles
import { Container, TabItem } from "components/tabs/styles";

const Tabs = ({
  tabs,
  content,
}: {
  tabs: string[];
  content: ReactElement[];
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const selectedContent = useMemo(
    () => content[activeTab],
    [activeTab, content]
  );

  return (
    <>
      <Container>
        {tabs.map((tab, index) => (
          <TabItem
            onClick={() => setActiveTab(index)}
            selected={activeTab === index}
            key={tab}
          >
            {tab}
          </TabItem>
        ))}
      </Container>
      {selectedContent}
    </>
  );
};

export default Tabs;
