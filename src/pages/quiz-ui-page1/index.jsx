import React from 'react';
import edstemlogo from '../../images/edstem-logo.svg';
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';
import icon3 from '../../images/icon3.svg';
import dropdownIcon from '../../images/dropdown-lines.svg'
import arrowDownGreen from '../../images/arrow-down-green.svg';
import arrowNext from '../../images/arrow-next-orange.svg';
import arrowPrevious from '../../images/arrow-previous-grey.svg';
import notificationIcon from '../../images/notification-icon.svg';
import profilePic from '../../images/profile-pic.svg';
import workingImage from '../../images/working-image.svg';

import 
{ 
 MainWrap,
 Col,
 EdstemLogo,
 Header, 
 RightSideHeader, 
 Row,
 Sidebar,
 Icons,
 ContentWrapper,
 DropDownIcon,
 ContentWrapperRight,
 ProfilePic,
 ArrowDownIcon,
 Name,
 NotificationIcon,
 WhiteDiv,
 CompletedDiv,
 ProgressText,
 Percent,
 Total,
 ProgressBar,
 HorizontalLine,
 TimePendingDiv,
 Timer,
 Text,
 ProgressBarActive,
 HeaderYourStatus,
 OrangeDiv,
 Text1,
 CountText1,
 Text2,
 CountText2,
 GreenDiv,
 Text3,
 Greeting,
 ContentDiv,
 Span,
 Header1
} from './style';

export default function QuizUiPage() {
  return (
    <MainWrap>
       <Row>
        <Col col={1}>
            <Sidebar>
                <EdstemLogo src={edstemlogo} />
                <Icons src={icon1} />
                <Icons src={icon2} />
                <Icons src={icon3} />
            </Sidebar>
        </Col>
        <Col col={8}>
            <ContentWrapper>
                <Header>               
                 <Row>
                    <Col col={0.5}><DropDownIcon src={dropdownIcon}/></Col>
                </Row>
                </Header>
                <ContentDiv>
                    <Header1>
                      <Greeting>Hello, &nbsp;</Greeting>
                      <Span>John</Span>
                    </Header1>
                </ContentDiv>
            </ContentWrapper>
        </Col>
        <Col col={3}>
            <ContentWrapperRight>
                <RightSideHeader>
                    <ProfilePic src={profilePic} />
                    <Name>Samon John</Name>
                    <ArrowDownIcon src={arrowDownGreen} />
                    <NotificationIcon src={notificationIcon} />
                </RightSideHeader>
                <WhiteDiv>
                    <HeaderYourStatus>Your Status</HeaderYourStatus>
                    <Row>
                        <Col col={6}>
                            <OrangeDiv>
                            <Text1>
                            Total Questions
                            </Text1>
                            <CountText1>30</CountText1>
                            </OrangeDiv>
                        </Col>
                        <Col col={6}>
                          <GreenDiv>
                                <Text2>
                                Completed Questions
                               </Text2>
                            <CountText2>60</CountText2>
                            </GreenDiv>
                        </Col>
                    </Row>
                    <CompletedDiv>
                        <ProgressText>
                          <Percent>60% Completed</Percent>
                          <Total>24/30</Total>
                        </ProgressText>
                        <ProgressBar><ProgressBarActive /></ProgressBar>
                    </CompletedDiv>
                    <HorizontalLine />
                    <TimePendingDiv>
                        <Text3>TimePending</Text3>
                        <Timer>26:05:00</Timer>
                    </TimePendingDiv>
                    <HorizontalLine />
                </WhiteDiv>
            </ContentWrapperRight>
        </Col>
      </Row>
    </MainWrap>
  )
}
