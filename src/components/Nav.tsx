import Link from "next/link";
import { useRouter } from "next/router";
import {
  Links,
  MenuContainer,
  NavContainer,
  NavTitle,
  NavWrapper,
} from "./Nav.style";

import navlinks from "@/data/navlinks";

export default function Nav() {
  const router = useRouter();

  return (
    <NavContainer>
      <NavWrapper>
        <Link href={"/"}>
          <NavTitle>국민주권당(추)</NavTitle>
        </Link>
        <MenuContainer>
          <Links>
            <ul>
              {navlinks.map((nav) => (
                <li
                  key={nav.title}
                  data-selected={
                    router.pathname.includes(nav.link) ? "true" : "false"
                  }
                >
                  <Link href={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </Links>
        </MenuContainer>
      </NavWrapper>
    </NavContainer>
  );
}
