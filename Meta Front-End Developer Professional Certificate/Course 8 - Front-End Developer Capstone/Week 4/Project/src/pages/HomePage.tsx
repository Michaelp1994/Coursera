import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroImageSrc from "@/assets/restaurant_food.jpg";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card";
import greekSaladImg from "../assets/greek salad.jpg";
import bruschettaImg from "../assets/bruchetta.svg";
import lemonDessertImg from "../assets/lemon dessert.jpg";

interface Props {}

const HomePage: React.FC<Props> = () => {
    return (
        <Wrapper>
            <Hero>
                <HeroContainer>
                    <LeftSide>
                        <HeroTitle>Little Lemon</HeroTitle>
                        <HeroSubtitle>Chicago</HeroSubtitle>
                        <HeroDescription>
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern
                            twist.
                        </HeroDescription>
                        <Button asChild className="text-lg">
                            <Link to="/reservations">Reserve a table</Link>
                        </Button>
                    </LeftSide>
                    <HeroImage src={HeroImageSrc} alt="Plate of food" />
                </HeroContainer>
            </Hero>
            <Specials>
                <SpecialsBar>
                    <SpecialsTitle>This weeks specials!</SpecialsTitle>
                    <Button asChild>
                        <Link to="/menu">Online Menu</Link>
                    </Button>
                </SpecialsBar>

                <SpecialsGallery>
                    <Card>
                        <CardImage src={greekSaladImg} />
                        <CardHeader>
                            <CardTitle>Greek salad</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                The famous greek salad of crispy lettuce,
                                peppers, olives and our Chicago style feta
                                cheese, garnished with crunchy garlic and
                                rosemary croutons.
                            </p>
                        </CardContent>

                        <CardFooter>
                            <Button asChild>
                                <Link to="order">Order now!</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImage src={bruschettaImg} />
                        <CardHeader>
                            <CardTitle>Bruschetta</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Our Bruschetta is made from grilled bread that
                                has been smeared with garlic and seasoned with
                                salt and olive oil.
                            </p>
                        </CardContent>

                        <CardFooter>
                            <Button asChild>
                                <Link to="order">Order now!</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImage src={lemonDessertImg} />
                        <CardHeader>
                            <CardTitle>Lemon Dessert</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                This comes straight from grandma&apos;s recipe
                                book, every last ingredient has been sourced and
                                is as authentic as can be imagined.
                            </p>
                        </CardContent>

                        <CardFooter>
                            <Button asChild>
                                <Link to="order">Order now!</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </SpecialsGallery>
            </Specials>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    min-height: 65vh;
`;

const Hero = styled.div`
    width: 100%;
    background-color: hsl(var(--secondary));
    color: white;
    padding: 23px;
`;

const HeroContainer = styled.div`
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 100px;
`;

const LeftSide = styled.div`
    padding-top: 47px;
    max-width: 420px;
    padding-bottom: 28px;
`;

const HeroTitle = styled.h1`
    font-family: Roboto;
    font-size: 56px;
    color: hsl(var(--primary));
`;

const HeroSubtitle = styled.h2`
    font-family: "Markazi Text";
    font-size: 32px;
`;

const HeroImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 16px;
    margin-top: 23px;
    object-fit: cover;
`;

const HeroDescription = styled.p`
    padding-bottom: 72px;
`;

const Specials = styled.div`
    max-width: 860px;
    margin: 0 auto;
    min-height: 500px;
    padding-top: 87px;
`;

const SpecialsBar = styled.div`
    margin-bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SpecialsTitle = styled.h2`
    font-size: 40px;
`;
const SpecialsGallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-bottom: 2rem;
`;
const CardImage = styled.img`
    width: 100%;
    height: 12.5rem;
    object-fit: cover;
`;

export default HomePage;
