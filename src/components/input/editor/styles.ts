import styled from "@emotion/styled";
import { EditorContent } from "@tiptap/react";
import { body1Styles, subtitle1, title4 } from "components/text/styles";
import { mq } from "constants/theme";

export const Container = styled.div`
  margin: 0 -2rem;
  border-top: 0.1rem solid var(--color-divider);

  ${mq.fromMobileLg} {
    margin: 0;
    border: 0.1rem solid var(--color-divider);
    border-radius: 1.2rem;
  }
`;

export const Content = styled(EditorContent)`
  .ProseMirror {
    border-radius: 1.2rem;
    outline: none;
    padding: 1.4rem 2rem;

    p {
      ${body1Styles}
      padding: 0.6rem 0;
    }

    h3 {
      ${title4}
      padding: 0.6rem 0;
      margin: 0;
    }

    h4 {
      ${subtitle1}
      padding: 0.6rem 0;
      margin: 0;
    }
  }
`;

export const NavContainer = styled.div`
  border-bottom: 0.1rem solid var(--color-divider);
  padding: 1rem 1.8rem;
  gap: 1.2rem;
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
  top: 0;
  background: var(--color-content);
  border-top-right-radius: 1.2rem;
  border-top-left-radius: 1.2rem;
`;

export const NavDivider = styled.div`
  width: 0.1rem;
  height: 1.8rem;
  background: var(--color-divider);
`;
