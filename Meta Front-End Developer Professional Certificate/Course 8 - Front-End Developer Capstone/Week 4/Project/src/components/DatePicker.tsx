import React from "react";
import { CalendarIcon } from "lucide-react";
import { add, startOfDay } from "date-fns";
import TimeKeeper, { TimeOutput } from "react-timekeeper";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

interface Props {
    value: Date;
    onChange: (date: Date) => void;
}

const DatePicker: React.FC<Props> = ({ value, onChange }) => {
    const [timeValue, setTimeValue] = React.useState<string>("18:00");

    function handleTimeChange(timeOutput: TimeOutput) {
        console.log(timeOutput);
        const time = timeOutput.formatted24;
        if (!value) {
            setTimeValue(time);
            return;
        }
        const [hours, minutes] = time
            .split(":")
            .map((str) => parseInt(str, 10));
        const newSelectedDate = new Date(
            value.getFullYear(),
            value.getMonth(),
            value.getDate(),
            hours,
            minutes
        );
        onChange(newSelectedDate);
        setTimeValue(time);
    }
    function handleDateChange(date: Date | undefined) {
        if (!date) return;
        const [hours, minutes] = timeValue
            .split(":")
            .map((str) => parseInt(str, 10));

        const newSelectedDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            hours,
            minutes
        );
        onChange(newSelectedDate);
    }
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    data-testid="datepicker"
                    variant="outline"
                    size="icon"
                    className="flex h-full aspect-square w-full"
                >
                    <CalendarIcon className="h-full w-full p-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className=" flex w-auto p-0 gap-4">
                <div>
                    <Calendar
                        mode="single"
                        selected={value}
                        onSelect={handleDateChange}
                        initialFocus
                        disabled={[
                            {
                                after: add(startOfDay(new Date()), {
                                    months: 1,
                                }),
                            },
                        ]}
                        fromDate={new Date()}
                    />
                </div>
                <div>
                    <TimeKeeper
                        time={timeValue}
                        onChange={(data) => handleTimeChange(data)}
                        switchToMinuteOnHourSelect
                        closeOnMinuteSelect
                        hour24Mode
                        disabledTimeRange={{ from: "22:00", to: "12:00" }}
                        forceCoarseMinutes
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default DatePicker;
