import React from "react";
import Countdown from "react-countdown-now";

// eslint-disable-next-line no-lone-blocks
{
    /* <>
        <div
            className="flex flex-row w-full content-center items-center flex-wrap"
            style={{ justifyContent: "center" }}
        >
            <CountdownDisplay value={days} measurement="Day(s)" />
            <CountdownDisplay value={hours} measurement="Hour(s)" />
            <CountdownDisplay value={minutes} measurement="Minute(s)" />
            <CountdownDisplay value={seconds} measurement="Second(s)" />
        </div>
    </> */
}
const CountdownDisplay = ({ value, measurement }) => {
    return (
        <div className="flex-col content-center items-center" style={{ padding: 8 }}>
            <h3
                className="self-center text-5xl font-bold m-0 py-0"
                style={{
                    fontFamily: "AvenirNextLT",
                }}
            >
                {value}
            </h3>
            <h6
                className="self-center text-5 uppercase font-semibold m-"
                style={{
                    fontFamily: "AvenirNextLT",
                }}
            >
                {measurement}
            </h6>
        </div>
    );
};

const CountdownCounter = ({ date }) => (
    <Countdown
        date={date.toString()}
        renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return (
                    <h4
                        className="self-center text-5xl font-bold m-0 py-0"
                        style={{
                            fontFamily: "AvenirNextLT",
                        }}
                    >
                        0 Days
                    </h4>
                );
            } else {
                // Render a countdown
                return (
                    <div className="flex flex-row w-full content-between justify-around items-center flex-wrap">
                        <CountdownDisplay value={days} measurement="Days" />
                        <CountdownDisplay value={hours} measurement="Hours" />
                        <CountdownDisplay value={minutes} measurement="Minutes" />
                    </div>
                );
            }
        }}
    />
);

export default CountdownCounter;
