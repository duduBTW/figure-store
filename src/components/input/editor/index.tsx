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
import { Label } from "../styles";
import Separator from "components/separator";

const InputEditor = ({ name, label }: { name: string; label?: string }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, ref, value },
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
    onUpdate: ({ editor }) => {
      onChange({
        json: JSON.stringify(editor.getJSON()),
        html: editor.getHTML(),
      });
    },
    onCreate: ({ editor }) => {
      if (value?.json) editor.commands.setContent(JSON.parse(value.json));
    },
  });

  return (
    <div>
      {label && <Label variant="subtitle-2">{label}</Label>}
      <Separator height={0.4} />
      <Container>
        <Nav editor={editor} />
        <Content onBlur={onBlur} ref={ref} editor={editor} />
      </Container>
    </div>
  );
};

const Nav = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  const size = "1.8rem";
  return (
    <NavContainer>
      <ButtonIcon
        tooltip="Undo"
        onClick={() => editor.chain().focus().undo().run()}
        type="button"
        tabIndex={-1}
      >
        <ArrowGoBackLineIcon size={size} />
      </ButtonIcon>
      <ButtonIcon
        tooltip="Redo"
        onClick={() => editor.chain().focus().redo().run()}
        type="button"
        tabIndex={-1}
      >
        <ArrowGoForwardLineIcon size={size} />
      </ButtonIcon>
      <NavDivider />
      <ButtonIcon
        tooltip="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
        type="button"
        tabIndex={-1}
      >
        <BoldIcon size={size} />
      </ButtonIcon>
      <ButtonIcon
        tooltip="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
        type="button"
        tabIndex={-1}
      >
        <ItalicIcon size={size} />
      </ButtonIcon>
      <NavDivider />
      <ButtonIcon
        tooltip="Title"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        active={editor.isActive("heading", { level: 3 })}
        type="button"
        tabIndex={-1}
      >
        <HeadingIcon size={size} />
      </ButtonIcon>
      <ButtonIcon
        tooltip="Label"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        active={editor.isActive("heading", { level: 4 })}
        type="button"
        tabIndex={-1}
      >
        <PriceTag2LineIcon size={size} />
      </ButtonIcon>
    </NavContainer>
  );
};

export default InputEditor;
