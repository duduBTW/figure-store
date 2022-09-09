import { AdressApiListResponse } from "server/client/adress";
import { useQuery } from "@tanstack/react-query";
import service from "server/client/services";

// components
import RadioList from "components/radio/list";
import DeleteBin7LineIcon from "remixicon-react/DeleteBin7LineIcon";
import Edit2LineIcon from "remixicon-react/Edit2LineIcon";
import Button from "components/button";
import RadioItem from "components/radio/item";
import Link from "next/link";

const useAdressList = ({
  initialData,
}: { initialData?: AdressApiListResponse[] } = {}) => {
  return useQuery(["address-list"], service.getAdressList, {
    initialData,
  });
};

const AdressList = ({
  adressList: initialData,
  checked,
  onChange,
  hideActions = false,
}: {
  adressList?: AdressApiListResponse[];
  checked?: string;
  hideActions?: boolean;
  onChange?: (address: AdressApiListResponse) => void;
}) => {
  const { data: adressList, isLoading } = useAdressList({ initialData });

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
                    <Button
                      onClick={(e) => e.stopPropagation()}
                      dense
                      color="primary-l"
                    >
                      <Edit2LineIcon />
                    </Button>
                  </Link>
                  <Button
                    onClick={(e) => e.stopPropagation()}
                    dense
                    color="error-l"
                  >
                    <DeleteBin7LineIcon />
                  </Button>
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
