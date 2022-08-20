// components
import Search2LineIcon from "remixicon-react/Search2LineIcon";
import Button from "components/button";
import AddLineIcon from "remixicon-react/AddLineIcon";

// styles
import { Container, SearchInput } from "./styles";
import Link from "next/link";

const AdminFigureListHeader = ({
  onSearchChange,
  searchValue,
}: {
  searchValue: string;
  onSearchChange: (value: string) => void;
}) => {
  return (
    <Container>
      <Link href={"/admin/figure/create"}>
        <a>
          <Button color="primary-l" dense>
            <AddLineIcon fontSize={"1.6rem"} />
          </Button>
        </a>
      </Link>
      <SearchInput
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        name="search"
        placeholder="Name..."
        endIcon={<Search2LineIcon />}
      />
    </Container>
  );
};

export default AdminFigureListHeader;
