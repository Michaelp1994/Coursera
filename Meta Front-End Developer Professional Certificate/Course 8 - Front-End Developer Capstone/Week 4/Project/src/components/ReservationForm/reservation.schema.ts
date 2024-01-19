import { add, startOfDay } from "date-fns";
import * as z from "zod";

export const reservationSchema = z.object({
    numGuests: z.coerce
        .number({
            required_error: "Required",
        })
        .gt(0, { message: "Cannot be less than 1" })
        .lt(11, {
            message:
                "I'm sorry, we can't accept bookings for more than 10 people.",
        })
        .int({ message: "Please enter an integer" }),
    date: z
        .date()
        .min(startOfDay(new Date()), { message: "Can't be before today!" })
        .max(add(new Date(), { months: 1, days: 1 }), {
            message:
                "I'm sorry, we are not accepting bookings for more than a month in advance",
        }),
    occasion: z.enum(["birthday", "anniversary"]).optional(),
    seatingLocation: z.enum(["inside", "outside"], {
        required_error: "Please select a seating location",
        invalid_type_error: "Please select a seating location",
        description: "Where would you like to sit?",
    }),
    specialRequests: z.string(),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
