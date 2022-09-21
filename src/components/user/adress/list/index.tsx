import { AdressApiListResponse } from "server/client/adress";
import { useQuery } from "@tanstack/react-query";
import service from "server/client/services";

// components
import RadioList from "components/radio/list";
import DeleteBin7LineIcon from "remixicon-react/DeleteBin7LineIcon";
import Edit2LineIcon from "remixicon-react/Edit2LineIcon";
import RadioItem from "components/radio/item";
import Link from "next/link";
import ButtonIcon from "components/button/icon";

const useAdressList = () => useQuery(["address-list"], service.getAdressList);
const AdressList = ({
  checked,
  onChange,
  hideActions = false,
}: {
  checked?: string;
  hideActions?: boolean;
  onChange?: (address: AdressApiListResponse) => void;
}) => {
  const { data: adressList, isLoading } = useAdressList();

  if (isLoading) return <div>...</div>;
  return (
    <RadioList
      validadeSelection={({ id }, checked) => checked === id}
      checked={checked}
      items={adressList!}
    >
      {(address, selected) => {
        const { id, street, number, state, cep, city } = address;

        return (
          <RadioItem
            key={id}
            selected={selected}
            onClick={() => onChange?.(address)}
            primary={`${street}, ${number}`}
            secondary={`${city}, ${state} - CEP ${cep}`}
            endAction={
              hideActions ? undefined : (
                <>
                  <Link href={`/user/adress/${id}`}>
                    <ButtonIcon
                      tooltip="Edit"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Edit2LineIcon />
                    </ButtonIcon>
                  </Link>
                  <ButtonIcon
                    onClick={(e) => e.stopPropagation()}
                    color="error-l"
                    tooltip="Delete"
                    variant="contained"
                  >
                    <DeleteBin7LineIcon />
                  </ButtonIcon>
                </>
              )
            }
          />
        );
      }}
    </RadioList>
  );
};

export default AdressList;
