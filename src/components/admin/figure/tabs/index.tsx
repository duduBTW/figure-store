// styles
import Link from "next/link";
import { Container, TabItem } from "./styles";

type AdminTabTypes = "product" | "orders" | "users" | "announcments";

const tabs: {
  type: AdminTabTypes;
  label: string;
  link: string;
}[] = [
  {
    type: "product",
    label: "Products",
    link: "figure",
  },
  {
    type: "orders",
    label: "Orders",
    link: "order",
  },
  {
    type: "users",
    label: "Users",
    link: "user",
  },
  {
    type: "announcments",
    label: "Announcments",
    link: "announcment",
  },
];
const AdminTabs = ({ selected }: { selected: AdminTabTypes }) => {
  return (
    <Container>
      {tabs.map((tab) => (
        <Link key={tab.type} href={tab.link} passHref>
          <a>
            <TabItem selected={selected === tab.type}>{tab.label}</TabItem>
          </a>
        </Link>
      ))}
    </Container>
  );
};

export default AdminTabs;
