import styled from "styled-components";

import footerImgSrc from "../assets/logo_footer.png";

interface Props {}

const Footer: React.FC<Props> = () => {
    return (
        <Wrapper>
            <ImageContainer>
                <Image src={footerImgSrc} />
            </ImageContainer>
            <SiteMap>
                <FooterHeading>Navigation</FooterHeading>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </SiteMap>
            <Contact>
                <FooterHeading>Contact Us</FooterHeading>
                <ul>
                    <li>678 Pisa Ave, Chicago, IL 60611</li>
                    <li> (312) 593-2744</li>
                    <li> customer@littlelemon.com</li>
                </ul>
            </Contact>
            <SocialMedia>
                <FooterHeading>Connect With Us</FooterHeading>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </SocialMedia>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 24px 120px;
    width: 100%;
    height: 240px;
    background-color: hsl(var(--secondary));
    color: white;
`;

const FooterHeading = styled.h3`
    display: block;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    scroll-margin: 5rem;
`;

const Image = styled.img`
    height: 100%;
`;

const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
`;

const SiteMap = styled.div`
    display: flex;
    flex-direction: column;
`;

const Contact = styled.div``;
const SocialMedia = styled.div``;
export default Footer;
