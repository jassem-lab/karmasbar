import React, {useState} from "react";
import styled from "styled-components";
import Karmasbar from "../../../images/blacklogo-1-b.png";
import { useMediaQuery } from "react-responsive"
import { DeviceSize } from '../StyledNavbar'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  padding : 10px ; 
  z-index : 20000;

  img {
    width: 80%;
    height: 100%;
  }
`;


export function Logo(props) {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
    const [mobileSize,setMobileSize] = useState(false)
    const changeLogoSize = () => {
        if (window.size ==isMobile) {
            setMobileSize(true)
        } else {
            setMobileSize(false)
        }
      }
      window.addEventListener('resize', changeLogoSize);
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={Karmasbar} alt="Karmasbar logo" className={mobileSize ? "pcLogo" : "mobileLogo"} />
      </LogoImg>
    </LogoWrapper>
  );
}
