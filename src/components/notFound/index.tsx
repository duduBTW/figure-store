import { PropsWithChildren } from "react";

// components
import Button from "components/button";
import Container from "components/container";
import Text from "components/text";
import Link from "next/link";

const NotFound = ({
  children,
  back,
}: PropsWithChildren<{
  back?: {
    label: string;
    url: string;
  };
}>) => {
  return (
    <Container gap={4}>
      <div>
        <Text variant="title-1">404</Text>
        <Text color="textSecondary" variant="body-2">
          {children} (＃°Д°)
        </Text>
      </div>
      {back && (
        <Link href={back.url}>
          <Button color="primary-l" dense>
            {back.label}
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default NotFound;
