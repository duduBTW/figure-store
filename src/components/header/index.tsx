import ButtonIcon from "components/button/icon";
import Separator from "components/separator";
import Text from "components/text";
import Link from "next/link";
import { PropsWithChildren } from "react";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";

const Header = ({
  backHref,
  children,
}: PropsWithChildren<{ backHref?: string }>) => {
  return (
    <div>
      {backHref && (
        <Link href={backHref}>
          <ButtonIcon>
            <ArrowLeftLineIcon />
          </ButtonIcon>
        </Link>
      )}
      <Separator height={1.2} />
      <Text variant="title-3">{children}</Text>
    </div>
  );
};

export default Header;
