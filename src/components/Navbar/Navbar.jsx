import React, { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import { ReactComponent as ArrowDown } from "../../assets/icons/down-arrow.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import {
  ArrowDownIconContainer,
  ArrowIconContainer,
  ArrowsContainer,
  Avatar,
  Name,
  NavContainer,
  NavLeftWrapper,
  NavRightWrapper,
  NavSubcontainer,
  UpgradeButton,
  UpgradeText,
  UserContainer,
} from "./navbarStyles";
import NavbarProfileMenu from "./NavbarProfileMenu";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LibraryMenu from "../LibraryMenu/LibraryMenu";

const Navbar = () => {
  const { images, display_name } = useSelector(({ auth }) => auth.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <NavContainer>
      <NavSubcontainer>
        <NavLeftWrapper>
          <ArrowsContainer>
            <ArrowIconContainer onClick={() => history.goBack()}>
              <ArrowLeft fill="#fff" width={22} height={22} />
            </ArrowIconContainer>
            <ArrowIconContainer onClick={() => history.goForward()}>
              <ArrowRight fill="#fff" width={22} height={22} />
            </ArrowIconContainer>
          </ArrowsContainer>
          {pathname === "/app/search" && <SearchInput />}
          {[
            "/app/collection/playlists",
            "/app/collection/albums",
            "/app/collection/artists",
          ].includes(pathname) && <LibraryMenu />}
        </NavLeftWrapper>
        <NavRightWrapper>
          <UpgradeButton
            href="https://www.spotify.com/premium"
            target="_blank"
            rel="noopener noreferrer"
            title="Upgrade to Premium"
          >
            <UpgradeText>Upgrade</UpgradeText>
          </UpgradeButton>

          <UserContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {images && <Avatar src={images[0].url} />}
            <Name>{display_name}</Name>
            <ArrowDownIconContainer open={isMenuOpen}>
              <ArrowDown fill="#fff" width={10} height={10} />
            </ArrowDownIconContainer>
            <NavbarProfileMenu open={isMenuOpen} />
          </UserContainer>
        </NavRightWrapper>
      </NavSubcontainer>
    </NavContainer>
  );
};

export default Navbar;
