import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";
import { EuiHeader, EuiText, EuiTextColor } from "@elastic/eui";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = useAppSelector((zoom) => zoom.auth.userInfo?.name);
  const [breadCrumbs, setbreadCrumbs] = useState([{ text: "Dashboard" }]);
  const [isResponsive, setisResponsive] = useState(false);
  const dispatch = useDispatch();
  const section = [
    {
      items: [
        <Link to="/">
          <EuiText>
            <h2 style={{ padding: "0 1vw" }}>
              <EuiTextColor color="#0b5cff">Chat App</EuiTextColor>
            </h2>
          </EuiText>
        </Link>,
      ],
    },
  ];
  const responsiveSection = [
    {
      items: [
        <Link to="/">
          <EuiText>
            <h2 style={{ padding: "0 1vw" }}>
              <EuiTextColor color="#0b5cff">Chat App</EuiTextColor>
            </h2>
          </EuiText>
        </Link>,
      ],
    },
    {
      items: [
        <>
          {username ? (
            <EuiText>
              <h1>
                <EuiTextColor color="white">Hello, </EuiTextColor>
                <EuiTextColor color="#0b5cff">{username} </EuiTextColor>
              </h1>
            </EuiText>
          ) : null}
        </>,
      ],
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 400) setisResponsive(true);
  }, []);
  return (
    <>
      <EuiHeader
        style={{ minHeight: "8vh" }}
        theme="dark"
        sections={isResponsive ? responsiveSection : section}
      />
      <EuiHeader
        style={{ minHeight: "8vh" }}
        sections={[{ breadcrumbs: breadCrumbs }]}
      />
    </>
  );
}

export default Header;
