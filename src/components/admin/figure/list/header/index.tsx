// components
import Search2LineIcon from "remixicon-react/Search2LineIcon";
import Button from "components/button";
import AddLineIcon from "remixicon-react/AddLineIcon";
import Link from "next/link";

// styles
import { Container, SearchInput, Filters } from "./styles";
import ButtonIcon from "components/button/icon";

const AdminFigureListHeader = ({
  onSearchChange,
}: {
  onSearchChange: (value: string) => void;
}) => {
  return (
    <>
      <Container>
        <Link href={"/admin/figure/create"} passHref>
          <a>
            <ButtonIcon tooltip="Add new figure" color="primary-l">
              <AddLineIcon fontSize={"1.6rem"} />
            </ButtonIcon>
          </a>
        </Link>
        <SearchInput
          data-tcy="search"
          onChange={(e) => onSearchChange(e.target.value)}
          name="search"
          placeholder="Search..."
          endIcon={<Search2LineIcon />}
        />
      </Container>
      <Filters variant="button-outlined">Advanced filters</Filters>
    </>
  );
};

export default AdminFigureListHeader;
