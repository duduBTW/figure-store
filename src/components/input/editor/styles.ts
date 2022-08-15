import styled from "@emotion/styled";
import { EditorContent } from "@tiptap/react";
import { body1Styles } from "components/text/styles";

export const Container = styled.div`
  border: 0.1rem solid var(--color-divider);
  border-radius: 1.2rem;
`;

export const Content = styled(EditorContent)`
  .ProseMirror {
    border-radius: 1.2rem;
    outline: none;
    padding: 1.4rem 2rem;

    p {
      ${body1Styles}
    }
  }
`;

export const NavContainer = styled.div`
  border-bottom: 0.1rem solid var(--color-divider);
  padding: 1rem 1.8rem;
  gap: 1.2rem;
  display: flex;
  align-items: center;
`;

export const NavDivider = styled.div`
  width: 0.1rem;
  height: 1.8rem;
  background: var(--color-divider);
`;
