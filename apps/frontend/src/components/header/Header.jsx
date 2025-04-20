// components/Header.jsx

import StyledMenu from "../../style-guide/menu";
import Title from "../../style-guide/title";
import HeaderWrapper from "./style/HeaderWrapper";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
const menuItems = [
  {
    label: <div>Tickets</div>,
    key: "/",
  },
  {
    label: <div>Create ticket</div>,
    key: "/create",
  },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate(e.key);
  };
  return (
    <HeaderWrapper>
      <Title className="header-title" size="middle">
        Support Ticket Manager
      </Title>
      <StyledMenu
        onClick={handleNavigation}
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={menuItems}
      />
    </HeaderWrapper>
  );
}
