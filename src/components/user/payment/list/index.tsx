import { useQuery } from "@tanstack/react-query";
import { PaymentApiListResponse } from "server/client/payment";
import service from "server/client/services";

// components
import RadioItem from "components/radio/item";
import RadioList from "components/radio/list";
import Button from "components/button";
import Link from "next/link";
import DeleteBin7LineIcon from "remixicon-react/DeleteBin7LineIcon";
import Edit2LineIcon from "remixicon-react/Edit2LineIcon";

const usePaymentList = () => useQuery(["payment-list"], service.getPaymentList);

const PaymentList = ({
  checked,
  onChange,
  hideActions = false,
}: {
  checked?: string;
  hideActions?: boolean;
  onChange?: (address: PaymentApiListResponse) => void;
}) => {
  const { data: paymentList, isLoading } = usePaymentList();

  if (isLoading) return <div>...</div>;
  return (
    <RadioList
      validadeSelection={({ id }, checked) => checked === id}
      checked={checked}
      items={paymentList!}
    >
      {(payment, selected) => {
        const { id, number, name, cvc, validDate } = payment;

        return (
          <RadioItem
            key={id}
            selected={selected}
            onClick={() => onChange?.(payment)}
            primary={`${name} - ${number}`}
            secondary={`${cvc}, ${validDate}`}
            endAction={
              hideActions ? undefined : (
                <>
                  <Link href={`/user/payment/${id}`}>
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

export default PaymentList;
