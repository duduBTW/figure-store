import styled from "@emotion/styled";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { buttonOutlined } from "components/text/styles";
import { PropsWithChildren, useState } from "react";
import User3LineIcon from "remixicon-react/User3LineIcon";
import MapPin2LineIcon from "remixicon-react/MapPin2LineIcon";
import MoneyDollarCircleLineIcon from "remixicon-react/MoneyDollarCircleLineIcon";
import ShoppingCartLineIcon from "remixicon-react/ShoppingCartLineIcon";
import LogoutCircleLineIcon from "remixicon-react/LogoutCircleLineIcon";
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import service from "server/client/services";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const contentStyles = {
  minWidth: "14rem",
  zIndex: 2,
  backgroundColor: "white",
  borderRadius: 6,
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
};

const StyledContent = styled(DropdownMenuPrimitive.Content)({
  ...contentStyles,
});

const StyledArrow = styled(DropdownMenuPrimitive.Arrow)({
  fill: "white",
});

function Content({
  children,
  ...props
}: PropsWithChildren<DropdownMenuPrimitive.MenuContentProps>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  );
}

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent)({
  ...contentStyles,
});

function SubContent(props: DropdownMenuPrimitive.MenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </DropdownMenuPrimitive.Portal>
  );
}

const StyledItem = styled(DropdownMenuPrimitive.Item)`
  all: unset;

  ${buttonOutlined}
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.4rem 0.8rem;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: var(--color-divider);
    pointer-events: none;
  }

  &[data-highlighted] {
    background-color: var(--color-primary);
    color: var(--color-content);
  }
`;

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubContent = SubContent;

export const UserLayoutMenu = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const { mutate } = useMutation(service.logout, {
    onSuccess: () => {
      push("/login");
      queryClient.setQueryData(["user"], null);
    },
    onError: (error) => {
      console.log("error", error);
      toast.error("Cant logout, you are here forever now ヾ(≧▽≦*)o");
    },
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    console.log("fechar");
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={(o) => setOpen(o)}>
      <DropdownMenuTrigger onClick={() => setOpen(true)} asChild>
        {children}
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={4} align="end">
        <Link href={"/user/profile"}>
          <DropdownMenuItem onClick={handleClose}>
            <User3LineIcon size={"1.8rem"} />
            Profile
          </DropdownMenuItem>
        </Link>
        <Link href={"/user/adress"}>
          <DropdownMenuItem onClick={handleClose}>
            <MapPin2LineIcon size={"1.8rem"} />
            Address
          </DropdownMenuItem>
        </Link>
        <Link href={"/user/payment"}>
          <DropdownMenuItem onClick={handleClose}>
            <MoneyDollarCircleLineIcon size={"1.8rem"} />
            Payment
          </DropdownMenuItem>
        </Link>
        <Link href={"/user/order"}>
          <DropdownMenuItem onClick={handleClose}>
            <ShoppingCartLineIcon size={"1.8rem"} />
            Orders
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={() => {
            handleClose();
            mutate();
          }}
        >
          <LogoutCircleLineIcon size={"1.8rem"} />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserLayoutMenu;
