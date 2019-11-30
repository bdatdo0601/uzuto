import React from "react";
import Countdown from "react-countdown-now";
import moment from "moment";
import LF1 from "../../assets/LF1.jpg";
import LF2 from "../../assets/LF2.jpg";

import { useWindowSize } from "../../utils/hooks";

const CountdownDisplay = ({ value, measurement }) => {
    return (
        <div
            className="flex-col content-center items-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", margin: 8, padding: 8 }}
        >
            <h3
                className="self-center text-4xl"
                style={{
                    fontFamily: "CursiveFont",
                    color: "white",
                    textShadow: "4px 4px #000",
                }}
            >
                {value}
            </h3>
            <h6
                className="self-center text-2xl"
                style={{
                    fontFamily: "CursiveFont",
                    color: "white",
                    textShadow: "4px 4px #000",
                }}
            >
                {measurement}
            </h6>
        </div>
    );
};

const Home = () => {
    const WEDDING_DATE = moment("20200516");
    const { width } = useWindowSize();
    console.log(width);
    const imgPath = width > 768 ? LF2 : LF1;
    return (
        <>
            <div
                className="h-screen v-screen align-middle flex text-center items-center content-center self-center"
                style={{
                    backgroundImage: `url(${imgPath})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <span className="w-full">
                    <h1
                        className="self-center text-6xl"
                        style={{ fontFamily: "CursiveFont", color: "white", textShadow: "4px 4px #000" }}
                    >
                        Linh Do & Andrew Fritz
                    </h1>
                    <h4
                        className="self-center text-4xl"
                        style={{ fontFamily: "CursiveFont", color: "white", textShadow: "4px 4px #000" }}
                    >
                        Save the date - {WEDDING_DATE.format("MMMM Do YYYY")}
                    </h4>
                    <Countdown
                        date={WEDDING_DATE.toString()}
                        renderer={({ days, hours, minutes, seconds, completed }) => {
                            if (completed) {
                                // Render a completed state
                                return (
                                    <h4
                                        className="self-center text-4xl"
                                        style={{
                                            fontFamily: "CursiveFont",
                                            color: "white",
                                            textShadow: "4px 4px #000",
                                        }}
                                    >
                                        Today is the day
                                    </h4>
                                );
                            } else {
                                // Render a countdown
                                return (
                                    <>
                                        <div
                                            className="flex flex-row w-full content-center items-center flex-wrap"
                                            style={{ justifyContent: "center" }}
                                        >
                                            <CountdownDisplay value={days} measurement="Day(s)" />
                                            <CountdownDisplay value={hours} measurement="Hour(s)" />
                                            <CountdownDisplay value={minutes} measurement="Minute(s)" />
                                            <CountdownDisplay value={seconds} measurement="Second(s)" />
                                        </div>
                                    </>
                                );
                            }
                        }}
                    />
                </span>
            </div>
        </>
    );
};

export default Home;
