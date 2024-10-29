import styled from "styled-components";
import { IoMdArrowDropright } from "react-icons/io";
import {Link} from "react-router-dom"



const Sidebar = () =>{
    return (
        <Container>

            <Loginbutton>
                <Button>
                        <button>Join Kuda</button>
                </Button>

                <Sighin>
                        <button>Sign in</button>
                </Sighin>
            </Loginbutton>


            <Naviga>
                <Link to="/">
                    <nav>Personal <IoMdArrowDropright /> </nav>
                </Link>

                <Link to= "/business">
                    <nav>Business <IoMdArrowDropright /></nav>
                </Link>
                
                <Link to= "/companies">
                    <nav>Companies <IoMdArrowDropright /></nav>
                </Link>

                <Link to= "/developer">
                    <nav>Developer </nav>
                </Link>

                <Link to= "/companies">
                    <nav>Contact Us</nav>
                </Link>

                <Link to= "/companies">
                    <nav>Help <IoMdArrowDropright /></nav>
                </Link>
            </Naviga>
            
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding-left: 20px;
`
const Loginbutton = styled.div`
    display: flex;
`
const Button = styled.div`
    button{
        padding: 16px 30px;
        background-color: #40196d;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        margin-left: 50px;
        margin-bottom: 50px;
        cursor: pointer;
    &:hover{
        background-color: #520f9e;
        transform: translateY(-2px);
    }
}`

const Sighin = styled.div`
      button{
        padding: 16px 30px;
        background-color: #d3d3d365;
        color: #40196d;
        font-size: 16px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        margin-left: 50px;
        margin-bottom: 50px;
        cursor: pointer;
    &:hover{
        transform: translateY(-2px);
    }
}`

const Naviga = styled.div`
    /* display: flex;
    justify-content: se; */
`
const Link = styled.div`
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border-bottom: 1px solid lightgrey;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 500;
        padding: 20px 0;
        color: #40196d;
    }
    
    
`