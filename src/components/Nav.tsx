import navlinks from "@/data/navlinks";
import Link from "next/link";
import { useRouter } from "next/router";
import { Links, MenuContainer, NavContainer, NavTitle } from "./Nav.style";

export default function Nav() {
  const router = useRouter();

  return (
    <NavContainer>
      <div className="container">
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
      </div>
    </NavContainer>
  );
}
