import { FileContent, useFilePicker } from "use-file-picker";

// components
import DeleteBinLineIcon from "remixicon-react/DeleteBinLineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
import Text from "components/text";

// styles
import {
  Container,
  ImageResetDropzoneContainer,
  ImageUploadDropzoneContainer,
  ImageUploadItemContainer,
  ImageUploadItemMiniature,
} from "./styles";

const ImageUploadList = () => {
  const [openFileSelector, { filesContent, clear }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
  });

  const getImage = (file: FileContent, index: number) => (
    <ImageUploadItemContainer key={file.name}>
      <ImageUploadItemMiniature src={file.content} alt={file.name} />
      <Text variant="subtitle-1">
        {index + 1}. {file.name}
      </Text>
    </ImageUploadItemContainer>
  );

  return (
    <Container>
      {filesContent.map(getImage)}
      {filesContent.length <= 0 ? (
        <ImageUploadDropzone onClick={openFileSelector} />
      ) : (
        <ImageResetDropzone
          onClick={() => {
            clear();
            openFileSelector();
          }}
        />
      )}
    </Container>
  );
};

const ImageUploadDropzone = ({ onClick }: { onClick: () => void }) => {
  return (
    <ImageUploadDropzoneContainer onClick={onClick}>
      <AddLineIcon />
      <Text variant="body-2">Add image</Text>
    </ImageUploadDropzoneContainer>
  );
};

const ImageResetDropzone = ({ onClick }: { onClick: () => void }) => {
  return (
    <ImageResetDropzoneContainer onClick={onClick}>
      <DeleteBinLineIcon />
      <Text variant="body-2">Reset images</Text>
    </ImageResetDropzoneContainer>
  );
};

export default ImageUploadList;
