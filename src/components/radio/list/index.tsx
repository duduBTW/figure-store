import { ReactNode, useState } from "react";

// styles
import { RdioListContiner } from "./styles";

const RadioList = <T,>({
  items,
  children,
  checked,
  validadeSelection,
}: {
  checked: string;
  defaultValue?: string;
  items: T[];
  validadeSelection: (item: T, checked: string) => boolean;
  children: (item: T, selected: boolean) => ReactNode;
}) => {
  return (
    <RdioListContiner>
      {items.map((item) => children(item, validadeSelection(item, checked)))}
    </RdioListContiner>
  );
};

export default RadioList;
