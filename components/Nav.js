import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: "Brand";
`;

function Nav() {
  return (
    <NavContainer>
      <Link href="/">Blogge by Rohan</Link>
    </NavContainer>
  );
}

export default Nav;