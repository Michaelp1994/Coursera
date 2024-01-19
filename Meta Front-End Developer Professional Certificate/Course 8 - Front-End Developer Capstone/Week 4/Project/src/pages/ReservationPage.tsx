import styled from "styled-components";

import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

import ReservationForm from "@/components/ReservationForm/ReservationForm";
import { ReservationInput } from "../components/ReservationForm/reservation.schema";

interface Props {}

const ReservationPage: React.FC<Props> = () => {
    const navigateTo = useNavigate();

    function onSubmit(values: ReservationInput) {
        if (values.numGuests === 1) {
            toast(
                `Your booking for 1 person on ${format(
                    values.date,
                    "PPP 'at' p"
                )} has been made.`
            );
        } else {
            toast.success(
                `Your booking for ${values.numGuests} people on ${format(
                    values.date,
                    "PPP 'at' p"
                )} has been made.`
            );
        }
        navigateTo("/");
    }
    return (
        <Wrapper>
            <TitleBar>
                <Title>Reservation Form</Title>
            </TitleBar>

            <ReservationForm onSubmit={(values) => onSubmit(values)} />
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const TitleBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(var(--secondary));
    color: white;
    height: 150px;
`;

const Title = styled.h1`
    font-size: 40px;
`;
export default ReservationPage;
