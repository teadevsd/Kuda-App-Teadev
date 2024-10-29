import { IoFolderSharp } from "react-icons/io5";
import { RiPieChartFill } from "react-icons/ri";
import { FaArrowsToDot } from "react-icons/fa6";
import { TbLocationFilled } from "react-icons/tb";
import { PiGithubLogoFill } from "react-icons/pi";
import styled from "styled-components";

const Card = () => {
    const CardArray = [
        {
            icon: <Iconstyled as = {IoFolderSharp} />,
            Description: 'Order a Kuda card on the app with pickup and delivery options.'
        },

        {
            icon: <Iconstyled as = {RiPieChartFill} />,
            Description: 'Enjoy cashless payment options online and offline.'
        },

        {
            icon: <Iconstyled as = {FaArrowsToDot} />,
            Description: 'Pay your essential bills and buy gift cards easily.'
        },

        {
            icon: <Iconstyled as = {TbLocationFilled} />,
            Description: 'Get 25 free transfers to Nigerian banks every month.'
        },

        {
            icon: <Iconstyled as = {PiGithubLogoFill} />,
            Description: 'Save money automatically any time you spend.'
        },
    ];

    return (
        <Wrapper>
            <CardCont>
                {CardArray.map((card, index) =>(
                    <CardItem key={index}>
                        {card.icon}
                        <Description>{card.Description}</Description>
                    </CardItem>
                ))}
            </CardCont>
        </Wrapper>
    )
}

export default Card;

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;

`

const CardCont = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    width: 85%;
    margin: 0 auto;
    max-width: 1280px;
`

const CardItem = styled.div `
    width: 100%;
    max-width: 320px;
    height: 150px;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    
@media (max-width: 900px) {
    min-width: 80%;
    height: 100px;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}`

const Iconstyled = styled.div`
    font-size: 30px;
    color: #2c012c; 
    border-radius: 50%;
    width: 30px;
    height: 30px;
    /* background-color:  #40196d97; */
    border: 8px solid #612e9b96;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Description = styled.span `
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    color: #40196d; 

@media (max-width: 768px) {
    font-size: 13px;
    
}
`
