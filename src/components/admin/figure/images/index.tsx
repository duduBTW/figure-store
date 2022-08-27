import ImageUploadList from "components/image/upload/list";
import Text from "components/text";

// styles
import { Section } from "./styles";

const AdminFigureImages = () => {
  return (
    <Section>
      <Text variant="subtitle-2">Add Images</Text>
      <ImageUploadList />
    </Section>
  );
};

export default AdminFigureImages;
