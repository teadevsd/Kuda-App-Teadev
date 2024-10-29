import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";
import { IoReorderTwoOutline } from "react-icons/io5";
import {Link} from "react-router-dom"
import { useState } from "react";
import Sidebar from "./SideBar";
import nigeria from "../assets/image/png/nigeria.png"


const Header = () =>{
    const [toggle, setToggle] = useState(false)

        const handleToggle = () =>{
            setToggle(!toggle)
        }
    return(
        <>
            <Wrapper>
                <Container>
                    <LogoNav>

                        <Logo>
                            <img src="/logo2.png" alt="nig" />
                        </Logo>
                        <Navigations>

                            <Link to={"/"}>
                                <nav>
                                    <span>Personal</span>
                                    <IoMdArrowDropdown />
                                </nav>    
                            </Link>

                            <Link to={"/business"}>
                                <nav>
                                    <span>Business</span>
                                    <IoMdArrowDropdown />
                                </nav>
                            </Link> 

                            <Link to={"/companies"}>
                                <nav>
                                    <span>Company</span>
                                    <IoMdArrowDropdown />
                                </nav>
                            </Link> 

                            <nav>
                                <span>Help</span>
                                <IoMdArrowDropdown />
                            </nav>
                        </Navigations>

                    </LogoNav>
                    
                    <Buttons>
                            <SignBtn>Sign In</SignBtn>
                            <JoinBtn>Join Kuda</JoinBtn>

                            <ConBtn>
                                <img src={nigeria} alt="nig" />
                            </ConBtn>

                            <Sidenav onClick={handleToggle}>
                                <IoReorderTwoOutline/>
                            </Sidenav>
                    </Buttons>
                    
                </Container>
            </Wrapper>
            {toggle === false ? null: <Sidebar toggle ={toggle}/>}
        </>
    )
}

export default Header

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 70px;
    box-shadow: 0 3px 9px rgba(27, 27, 27, 0.068);
`

const Container = styled.div `
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    @media (max-width: 1024px) {
    /* justify-content: space-around; */
    height: 60px;
  }

  @media (max-width: 480px) {
    /* flex-direction: column;
    height: auto;
    padding: 10px; */

    /* justify-content: ; */
  }
`;
const LogoNav = styled.div `
    display: flex;
    align-items: center;

`;

const Logo = styled.div `
    margin: 0px 80px 0px 50px;
    cursor: pointer;
    img{
        width: 100px;
    }

    @media (max-width: 1024px) {
    margin: 0px 20px;
    img {
      width: 80px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 60px;
    }
  }
`

const Navigations = styled.div `
    display: flex;
    
    
    nav{
        display: flex;
        align-items: center;
        margin: 0px 20px;
        color: #7e639c;
        font-weight: 600;
    }

    span {
        margin-right: 3px;
        font-size: 13px;
    }

    @media (max-width: 1024px) {
    span {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    display: none; 
  }
`


const Buttons = styled.div `
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 5px;
    color: #7e639c;
    font-weight: 600;
    font-size: 13px;
    margin: 0 30px;

 
`
const SignBtn = styled.div `
    background-color: transparent;

@media (max-width: 1200px){
        display: none;
        font-size: 15px;
    }
`
const JoinBtn = styled.div `
    padding: 10px 30px;
    border-radius: 10px;
    font-size: 12px;
    background-color: #40196d;
    color: white;

@media (max-width: 768px){
        display: none;
    }
`
const ConBtn = styled.div `
    cursor: pointer;
    img{
        width: 30px;
    }`

const Sidenav = styled.div`
    font-size: 40px;
    display: none;
    cursor: pointer;
    
    @media (max-width: 768px){
        display: block;
    }
`



