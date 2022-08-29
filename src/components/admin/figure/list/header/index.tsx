// components
import Search2LineIcon from "remixicon-react/Search2LineIcon";
import Button from "components/button";
import AddLineIcon from "remixicon-react/AddLineIcon";
import Link from "next/link";

// styles
import { Container, SearchInput, Filters } from "./styles";

const AdminFigureListHeader = ({
  onSearchChange,
}: {
  onSearchChange: (value: string) => void;
}) => {
  return (
    <>
      <Container>
        <Link href={"/admin/figure/create"} passHref>
          <Button tooltip="Add new figure" color="primary-l" dense>
            <AddLineIcon fontSize={"1.6rem"} />
          </Button>
        </Link>
        <SearchInput
          data-tcy="search"
          onChange={(e) => onSearchChange(e.target.value)}
          name="search"
          placeholder="Name..."
          endIcon={<Search2LineIcon />}
        />
      </Container>
      <Filters variant="button-outlined">Advanced filters</Filters>
    </>
  );
};

export default AdminFigureListHeader;
