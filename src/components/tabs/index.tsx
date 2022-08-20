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
    <div>
      <Container>
        {tabs.map((tab, index) => (
          <TabItem selected={activeTab === index} key={tab}>
            {tab}
          </TabItem>
        ))}
      </Container>
      {selectedContent}
    </div>
  );
};

export default Tabs;
