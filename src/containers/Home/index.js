import React, { useContext } from "react";
import LF1 from "../../assets/LF1.png";
import LOGO from "../../assets/logo.png";
import HomeSection from "../../components/HomeSection";
import LinhButton from "../../components/LinhButton";
import CountdownDisplay from "../../components/CountdownDisplay";
import WeddingInfoContext from "../../context/weddingInfoContext";

const Home = ({ history }) => {
    const { USA } = useContext(WeddingInfoContext);
    return (
        <div className="flex flex-wrap m-0">
            <HomeSection borders={["borderRight", "borderBottom"]}>
                <img src={LOGO} className="w-2/3" alt="logo" style={{ objectFit: "cover" }} />
            </HomeSection>
            <HomeSection borders={["borderLeft", "borderBottom"]}>
                <img className="w-full" src={LF1} alt="LF1" style={{ objectFit: "cover" }} />
            </HomeSection>
            <HomeSection borders={["borderRight", "borderTop", "borderBottom"]}>
                <div className="p-24">
                    <h2 className="text-5xl uppercase" style={{ fontFamily: "CorbelBold" }}>
                        You won't want to miss this
                    </h2>
                    <LinhButton onClick={() => history.push("/party")}>Schedule</LinhButton>
                </div>
            </HomeSection>
            <HomeSection borders={["borderLeft", "borderTop", "borderBottom"]}>
                <div style={{ width: "100%" }}>
                    <HomeSection borders={["borderBottom"]} filledRow hideMobileBorder>
                        <div className="py-12 px-12 w-full">
                            <CountdownDisplay date={USA.weddingDate} />
                            <h2 className="text-5xl uppercase m-0 p-0" style={{ fontFamily: "CorbelBold" }}>
                                Until the big day
                            </h2>
                        </div>
                    </HomeSection>
                    <HomeSection borders={["borderTop"]} filledRow hideMobileBorder>
                        <div className="p-12 w-full">
                            <h2 className="text-5xl uppercase" style={{ fontFamily: "CorbelBold" }}>
                                Are you coming?
                            </h2>
                            <LinhButton onClick={() => history.push("/rsvp")}>RSVP</LinhButton>
                        </div>
                    </HomeSection>
                </div>
            </HomeSection>
            <HomeSection borders={["borderRight", "borderTop", "borderBottom"]}>
                <div className="p-24">
                    <h2 className="text-5xl uppercase" style={{ fontFamily: "CorbelBold" }}>
                        Where to stay
                    </h2>
                    <LinhButton onClick={() => history.push("/accommodations")}>Accommodations</LinhButton>
                </div>
            </HomeSection>
            <HomeSection borders={["borderLeft", "borderTop", "borderBottom"]}>
                <div className="p-24">
                    <h2 className="text-5xl uppercase" style={{ fontFamily: "CorbelBold" }}>
                        {USA.location}
                    </h2>
                    <LinhButton onClick={() => history.push("/travel")}>Location</LinhButton>
                </div>
            </HomeSection>
        </div>
    );
};

export default Home;
