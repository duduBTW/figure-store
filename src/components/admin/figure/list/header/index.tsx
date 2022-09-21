// components
import Search2LineIcon from "remixicon-react/Search2LineIcon";
import Button from "components/button";
import AddLineIcon from "remixicon-react/AddLineIcon";
import Link from "next/link";

// styles
import { Container, SearchInput, Filters } from "./styles";
import ButtonIcon from "components/button/icon";
import Text from "components/text";

const AdminFigureListHeader = ({
  onSearchChange,
  create,
}: {
  create?: {
    href: string;
    label: string;
  };
  onSearchChange: (value: string) => void;
}) => {
  return (
    <div>
      <Container>
        {create && (
          <Link href={create.href} passHref>
            <ButtonIcon tooltip={create.label} color="primary-l">
              <AddLineIcon fontSize={"1.6rem"} />
            </ButtonIcon>
          </Link>
        )}
        <SearchInput
          data-tcy="search"
          onChange={(e) => onSearchChange(e.target.value)}
          name="search"
          placeholder="Search..."
          endIcon={<Search2LineIcon />}
        />
      </Container>
      <Filters>
        <Text color="primary" variant="button-outlined">
          Advanced filters
        </Text>
      </Filters>
    </div>
  );
};

export default AdminFigureListHeader;
