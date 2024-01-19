// src/__ tests __/App.test.tsx
import { BrowserRouter } from "react-router-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from "./ReservationForm";
import { reservationSchema } from "./reservation.schema";

test("Renders the main page and checks the number of guests works", () => {
    render(
        <BrowserRouter>
            <ReservationForm onSubmit={() => ({})} />
        </BrowserRouter>
    );
    const minusBtn = screen.getByTestId("minus");
    const plusBtn = screen.getByTestId("plus");
    const numGuests = screen.getByTestId("numGuests");
    fireEvent.click(minusBtn);
    expect(numGuests.textContent).toEqual("1");
    fireEvent.click(plusBtn);
    expect(numGuests.textContent).toEqual("2");
});

test("the schema is working", () => {
    const correctData = {
        numGuests: 5,
        date: new Date(),
        occasion: "birthday",
        seatingLocation: "inside",
        specialRequests: "nothing",
    };
    const incorrectData = {
        numGuests: 11,
        date: new Date(),
        occasion: "sdasad",
        seatingLocation: "sdfsdf",
        specialRequests: "nothdsfing",
    };
    expect(() => reservationSchema.parse(correctData)).not.toThrow();
    expect(() => reservationSchema.parse(incorrectData)).toThrow();
});
