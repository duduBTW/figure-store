import styled from "@emotion/styled";
import { mq } from "constants/theme";
import SearchLineIcon from "remixicon-react/SearchLineIcon";

export const Container = styled.div``;
export const UserNavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background: var(--color-content);
  padding: 1.5rem 2rem;
`;
export const Logo = styled.img`
  height: 2.8rem;
  width: 2.8rem;
  object-fit: cover;
  object-position: left;

  ${mq.fromTabletMd} {
    height: 3.4rem;
    width: auto;
  }
`;
export const Spacer = styled.div`
  flex: 1 1 100%;
`;

export const UserProfilePicture = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  margin-left: 2.4rem;
  border-radius: 222rem;
  border: 0.1rem solid var(--color-divider);

  ${mq.fromTabletMd} {
    height: 4.8rem;
    width: 4.8rem;
  }
`;

export const SearchInputContent = styled.input`
  display: none;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: var(--color-background);
  border-radius: 222rem;
  padding: 1rem 2.4rem;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;

  ${mq.fromTabletMd} {
    display: block;
  }
`;

export const SearchButton = styled(SearchLineIcon)`
  display: block;

  ${mq.fromTabletMd} {
    display: none;
    pointer-events: none;
  }
`;

export const Separator = styled.div`
  width: 2.8rem;
  pointer-events: none;
`;
