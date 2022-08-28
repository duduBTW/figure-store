import { Content as EditorContent, Editor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useController, useFormContext } from "react-hook-form";
import Heading from "@tiptap/extension-heading";

// components
import ButtonIcon from "components/button/icon";
import ArrowGoBackLineIcon from "remixicon-react/ArrowGoBackLineIcon";
import PriceTag2LineIcon from "remixicon-react/PriceTag2LineIcon";
import HeadingIcon from "remixicon-react/HeadingIcon";
import ArrowGoForwardLineIcon from "remixicon-react/ArrowGoForwardLineIcon";
import BoldIcon from "remixicon-react/BoldIcon";
import ItalicIcon from "remixicon-react/ItalicIcon";

// styles
import { Content, Container, NavContainer, NavDivider } from "./styles";

const InputEditor = ({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue?: EditorContent;
}) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, ref },
  } = useController({
    control,
    name,
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [3, 4],
      }),
    ],
    content: defaultValue,
    onUpdate: ({ editor }) => {
      onChange({
        json: JSON.stringify(editor.getJSON()),
        html: editor.getHTML(),
      });
    },
  });

  return (
    <Container>
      <Nav editor={editor} />
      <Content onBlur={onBlur} ref={ref} editor={editor} />
    </Container>
  );
};

const Nav = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  const size = "1.8rem";
  return (
    <NavContainer>
      <ButtonIcon
        onClick={() => editor.chain().focus().undo().run()}
        type="button"
      >
        <ArrowGoBackLineIcon size={size} />
      </ButtonIcon>
      <ButtonIcon
        onClick={() => editor.chain().focus().redo().run()}
        type="button"
      >
        <ArrowGoForwardLineIcon size={size} />
      </ButtonIcon>
      <NavDivider />
      <ButtonIcon
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
        type="button"
      >
        <BoldIcon size={size} />
      </ButtonIcon>
      <ButtonIcon
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
        type="button"
      >
        <ItalicIcon size={size} />
      </ButtonIcon>
      <NavDivider />
      <ButtonIcon
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        active={editor.isActive("heading", { level: 3 })}
        type="button"
      >
        <HeadingIcon size={size} />
      </ButtonIcon>
      <ButtonIcon
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        active={editor.isActive("heading", { level: 4 })}
        type="button"
      >
        <PriceTag2LineIcon size={size} />
      </ButtonIcon>
    </NavContainer>
  );
};

export default InputEditor;
