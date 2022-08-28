import { cloneElement, useMemo, useState } from "react";
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss,
} from "@floating-ui/react-dom-interactions";
import { mergeRefs } from "react-merge-refs";

// styles
import { Content } from "./styles";
import Text from "components/text";

const FigureTooltip = ({
  children,
  figureName,
  figureColor,
  placement = "top",
}: {
  figureName: string;
  figureColor: string;
  placement?: Placement;
  children: JSX.Element;
}) => {
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [
      offset({
        alignmentAxis: 24,
        mainAxis: 12,
      }),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context),
  ]);

  // Preserve the consumer's ref
  const ref = useMemo(
    () => mergeRefs([reference, (children as any).ref]),
    [reference, children]
  );

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}
      {open && (
        <Content
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            background: figureColor,
          }}
          {...getFloatingProps()}
        >
          <Text variant="title-6" color="white">
            {figureName}
          </Text>
        </Content>
      )}
    </>
  );
};

export default FigureTooltip;
