import { SocialIcon } from "react-social-icons";

import * as SC from "./FooterStyled"

const Footer = () => {
  return (
    <SC.Footer>
      <SC.Copyright>© Copyright Oleksandr Berdychevskyi</SC.Copyright>
      <address >
        <SC.AddressList >
          <SC.AddressItem>
            <SC.AddressLink href="mailto:alex.berd86@gmail.com">alex.berd86@gmail.com</SC.AddressLink>
          </SC.AddressItem>
          <SC.AddressItem>
            <SC.AddressLink href="tel:+380673588786">+38 067 358 87 86</SC.AddressLink>
          </SC.AddressItem>
        </SC.AddressList>
        <SC.SocList >
          <li >
            <SocialIcon
              url="https://www.facebook.com/sasha.berdichevsky"
              style={{ width: 36, height: 36 }}
              fgColor="#fff"
            />
          </li>
          <li >
            <SocialIcon
              url="https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/"
              style={{ width: 36, height: 36 }}
              fgColor="#fff"
            />
          </li>
          <li >
            <SocialIcon
              url="https://github.com/Oleksandr-Berd"
              style={{ width: 36, height: 36 }}
              fgColor="#fff"
            />
          </li>
          <li >
            <SocialIcon
              url="https://twitter.com/UaBerd"
              style={{ width: 36, height: 36 }}
              fgColor="#fff"
            />
          </li>
        </SC.SocList>
      </address>
    </SC.Footer>
  );
};

export default Footer;
