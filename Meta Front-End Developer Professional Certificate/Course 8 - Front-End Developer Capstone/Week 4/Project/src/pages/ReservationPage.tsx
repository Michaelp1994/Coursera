import styled from "styled-components";
import { Formik } from "formik";

import ReservationForm from "../components/ReservationForm";

interface Props {}

interface FormValues {
    numGuests: number;
    date: Date;
    time: Date;
    seatingLocation: string;
    specialRequests: string;
}

const CustomerTable: React.FC<Props> = () => {
    const initialValues: FormValues = {
        numGuests: 0,
        date: new Date(),
        time: new Date(),
        seatingLocation: "inside",
        specialRequests: "",
    };
    function handleSubmit(values: FormValues) {
        console.log(values);
    }
    return (
        <Wrapper>
            <TitleBar>
                <Title>Reservation Form</Title>
            </TitleBar>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <ReservationForm />
            </Formik>
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
export default CustomerTable;
