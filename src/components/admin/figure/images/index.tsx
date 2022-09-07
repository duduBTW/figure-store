import { useCallback, useState } from "react";
import service from "server/client/services";
import { useFilePicker } from "use-file-picker";
import { Image as IImage } from "server/client/figures";

// components
import ImageUploadList from "components/image/upload/list";
import Text from "components/text";

// styles
import { Section, UploadButton, ImageList, ImageItem } from "./styles";

const AdminFigureImages = ({
  id,
  images,
  refetch,
}: {
  id: string;
  images: IImage[] | undefined;
  refetch: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [[total, uploaded], setUploaded] = useState([0, 0]);
  const filePicker = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
  });

  const uploadImages = useCallback(async () => {
    const [, { plainFiles, clear }] = filePicker;
    setUploaded([plainFiles.length, 0]);
    setLoading(true);

    await Promise.all(
      plainFiles.map(async (file, index) => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          await service.uploadImage(id, formData);
          setUploaded(([total]) => [total, index + 1]);
        } catch (error) {
          console.log(error);
        }
      })
    ).finally(() => {
      setLoading(false);
      refetch();
      clear();
    });
  }, [filePicker, id, refetch]);

  return (
    <>
      {images && (
        <Section>
          <Text variant="title-3">Images</Text>
          <ImageList>
            {images.map((image) => (
              <ImageItem
                key={image.id}
                src={`/figure/${image.medium}`}
                alt="image"
              />
            ))}
          </ImageList>
        </Section>
      )}
      <Section loading={loading}>
        <Text variant="title-3">Add Images</Text>
        <ImageUploadList filePicker={filePicker} />
        {filePicker[1].filesContent.length > 0 ? (
          <UploadButton
            loading={loading ? `Uploading ${uploaded} of ${total}...` : false}
            onClick={uploadImages}
          >
            Upload
          </UploadButton>
        ) : null}
      </Section>
    </>
  );
};

export default AdminFigureImages;
