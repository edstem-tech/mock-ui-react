import styled from 'styled-components';


const colWidth = {
    12: (100 / 12) * 12,
    11.5: (100 / 12) * 11.5,
    11: (100 / 12) * 11,
    10.5: (100 / 12) * 10.5,
    10: (100 / 12) * 10,
    9.5: (100 / 12) * 9.5,
    9: (100 / 12) * 9,
    8.5: (100 / 12) * 8.5,
    8: (100 / 12) * 8,
    7.5: (100 / 12) * 7.5,
    7: (100 / 12) * 7,
    6.5: (100 / 12) * 6.5,
    6: (100 / 12) * 6,
    5.5: (100 / 12) * 5.5,
    5: (100 / 12) * 5,
    4.5: (100 / 12) * 4.5,
    4: (100 / 12) * 4,
    3.5: (100 / 12) * 3.5,
    3: (100 / 12) * 3,
    2.5: (100 / 12) * 2.5,
    2: (100 / 12) * 2,
    1.5: (100 / 12) * 1.5,
    1: (100 / 12) * 1,
    0.5: (100 / 12) * 0.5,
  };
  
  export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    height: ${(props) => props.height};
    flex-wrap: wrap;
    position: relative;
    background: ${(props) => props.background};
    border-radius: ${(props) => props.borderRadius};
    margin: ${(props) => props.margin};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    margin-left: ${(props) => props.marginLeft};
    margin-right: ${(props) => props.marginRight};
    border: ${(props) => `${props.border}` || 'none'};
    padding: ${(props) => props.padding};
    padding-top: ${(props) => props.paddingTop};
    background-color: ${(props) => props.backgroundColor};
  `;
  
  export const Col = styled.div`
    width: ${(props) => (props.width ? props.width : `${colWidth[props.col]}%` || '100%')};
    text-align: ${(props) => props.textAlign};
    flex-grow: ${(props) => props.flexGrow};
    position: relative;
    position: ${(props) => props.position || 'relative'};
    z-index: ${(props) => props.zIndex || 'none'};
    box-sizing: border-box;
    background: ${(props) => props.background};
    display: ${(props) => props.display};
    place-content: ${(props) => props.placeContent};
    margin-top: ${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
    margin-right: ${(props) => props.marginRight};
    margin: ${(props) => props.margin};
    align-self: ${(props) => props.alignSelf};
    border-radius: ${(props) => props.borderRadius};
    height: ${(props) => props.height};
    justify-content: ${(props) => props.justifyContent};
    background-color: ${(props) => props.backgroundColor};
    border-left: ${(props) => props.borderLeft};
    border-right: ${(props) => props.borderRight};
    padding: ${(props) => props.padding};
    padding-right: ${(props) => props.paddingRight};
    padding-left: ${(props) => props.paddingLeft};
    border-radius: ${(props) => props.borderRadius};
  `;

export const MainWrap = styled.div`
background: #D6DBE3;
// margin:0.5rem;
`;
export const Sidebar = styled.div`
background:white;
height:45rem;
`;

export const ArrowDownIcon = styled.img`
margin:0rem 0.5rem;
`;
export const NotificationIcon = styled.img`
float:right;
margin-left:10rem;
margin-top:-0.5rem;
`;
export const EdstemLogo = styled.img`
padding:0.5rem 0.3rem;
width:50%;
`;
export const Icons = styled.img`
padding:1.5rem;
width:20%;
`;
export const ContentWrapper = styled.div`
background: #e6e9ee;
height:45rem;
`;
export const DropDownIcon = styled.img`
margin:0rem;
`;

export const ContentWrapperRight = styled.div`
height:40rem;
`;

export const RightSideHeader = styled.div`
background: #e5e8ed;
padding:0.8rem 0.5rem;
display:flex;
`;
export const ProfilePic = styled.img`
margin:0rem 0.5rem;
`;
export const Name = styled.div`
margin:0.2rem 0rem;
`;
export const WhiteDiv = styled.div`
background:white;
height:45rem;
`;

export const Header = styled.div`
background: #D6DBE3;
padding:1rem;
`;
export const HeaderYourStatus = styled.div`
padding:1rem 0rem;
font-style: normal;
font-weight: 600;
font-size: 17px;
text-align:left;
margin-left:1rem;
`;

export const CompletedDiv = styled.div`
background: #EFF4F8;
padding:0.5rem;
margin:1rem;
border-radius: 9px;
`;
export const ProgressText = styled.div`
display:flex;
`;
export const Percent = styled.div`
text-align:left;
margin:0rem 1rem;
`;
export const Total = styled.div`
text-align:right;
margin-left:11rem;
`;
export const ProgressBar = styled.div`
background: #FFFFFF;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.13);
border-radius: 6px;
height:1rem;
postion:relative;
margin:1rem;
`;
export const ProgressBarActive = styled.hr`
background: linear-gradient(270deg, #B5D78C 42.5%, #8FCEB3 113.48%);
border-radius: 6px;
height:0.9rem;
postion:absolute;
width:60%;
margin-left:0rem;
margin-top:0rem;
`;
export const HorizontalLine= styled.hr`
border: 1px solid #E0E0E0;
`;
export const TimePendingDiv = styled.div`
padding:2rem;
`;
export const Text = styled.div`

`;
export const OrangeDiv = styled.div`
background: rgb(238,68,51, 0.3);
border-radius: 6px;
margin:1rem;
padding:1rem;
`;
export const Text1 = styled.div`
font-weight: 500;
font-size: 18px;
line-height: 17px;
color: #EE4433;
text-align:left;
width:10%;
`;
export const CountText1 = styled.div`
font-weight: 600;
font-size: 28px;
text-transform: capitalize;
color: #EE4433;
text-align:left;
margin:1rem 0rem;
`;
export const Text2 = styled(Text1)`
color: #5DB0A6;
`;
export const CountText2 = styled(CountText1)`
color: #5DB0A6;
`;
export const GreenDiv = styled(OrangeDiv)`
background: rgb(101,181,168,0.3);
margin-left:0rem;
`;
export const Timer = styled.div`
`;
export const Text3 = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 19px;
text-align:left;
`;



export const ContentDiv = styled.div`
background:white;
padding:1rem;
margin:2rem;
height:35rem;
`;
export const Greeting = styled.div`
text-align:left;
font-weight: 600;
font-size: 29px;
line-height: 37px;
`;
export const Span = styled.div`
color:orange;
font-weight: 600;
font-size: 29px;
line-height: 37px;
`;
export const Header1 = styled.div`
display:flex;
`;
// export const Text = styled.div`

// `;