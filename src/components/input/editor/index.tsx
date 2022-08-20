import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ButtonIcon from "components/button/icon";
import { useController, useFormContext } from "react-hook-form";
import ArrowGoBackLineIcon from "remixicon-react/ArrowGoBackLineIcon";
import ArrowGoForwardLineIcon from "remixicon-react/ArrowGoForwardLineIcon";
import BoldIcon from "remixicon-react/BoldIcon";
import ItalicIcon from "remixicon-react/ItalicIcon";

// styles
import { Content, Container, NavContainer, NavDivider } from "./styles";

const InputEditor = ({ name }: { name: string }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    control,
    name,
    defaultValue: {
      html: "<p>Hello World!</p>",
    },
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: value.html,
    onUpdate: ({ editor }) => {
      onChange({
        json: editor.getJSON(),
        html: editor.getHTML(),
      });
    },
  });

  return (
    <Container>
      <Nav />
      <Content onBlur={onBlur} ref={ref} editor={editor} />
    </Container>
  );
};

const Nav = () => {
  const size = "1.8rem";
  return (
    <NavContainer>
      <ButtonIcon onClick={() => {}}>
        <ArrowGoBackLineIcon size={size} />
      </ButtonIcon>
      <ButtonIcon>
        <ArrowGoForwardLineIcon size={size} />
      </ButtonIcon>
      <NavDivider />
      <ButtonIcon>
        <BoldIcon size={size} />
      </ButtonIcon>
      <ButtonIcon>
        <ItalicIcon size={size} />
      </ButtonIcon>
    </NavContainer>
  );
};

export default InputEditor;
