import CounterImage from "../assets/counter.webp";
import SingleRoom from "../assets/SingleRoom.webp"
import DoubleRoom from "../assets/ doubleroom.webp"
import Ac from "../assets/ac.avif"
import NonAc from "../assets/non-ac.jpeg"
const Hotels = () => {
    return (
        <div>
            <h1>this is hotel page</h1>

            <div style={{ display: "flex" }}>
                <img src={CounterImage} style={{ width: "250px" }} alt="this is image" />
                <p>Today i went to the coolest hotel ever! I couldn’t believe what i was seeing, it was amazing! Everything was made out of glass, but that's not all. Every room had some sort of waterfall, river, creek, or body of water in it. When I got off the plane all I wanted to do was go inside. The outside was gorgeous, it was all glass and surrounding the hotel was the pacific ocean .When you walk in you see that the floor is made of glass, the walls are made of glass, the ceiling is made of glass, even the tables and chairs are made of
                </p>
            </div>

            <div>
                <h1 style={{ textAlign: "center" }}>Bed Rooms</h1>

                <div style={{
                    display: "grid", 
                    
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    
                    marginLeft: "5%",
                    justifyContent: "center",
                    alignItems: "center"
                
                    
                }}>



                    <div>

                        <img src={SingleRoom} style={{ width: "250px", height: "200px", borderRadius: "10px" }} alt="Single room" />
                        <h1>SingleRoom</h1>
                    </div>

                    <div> <img src={DoubleRoom} style={{ width: "250px", height: "200px", borderRadius: "10px" }} alt="Double bedroom" />
                        <h1>DoubleRoom</h1>
                    </div>

                    <div>
                        <img src={DoubleRoom} style={{ width: "250px", height: "200px", borderRadius: "10px" }} alt="Double bedroom" />
                        <h1>Ac Room</h1>
                    </div>

                    <div><img src={NonAc} style={{ width: "100%", height: "auto", borderRadius: "10px" }} alt="Non-AC room" />
                        <h1>Non-Ac Room</h1>
                    </div>



                    <div>

                        <img src={SingleRoom} style={{ width: "250px", height: "200px", borderRadius: "10px" }} alt="Single room" />
                        <h1>SingleRoom</h1>
                    </div>

                    <div> <img src={DoubleRoom} style={{ width: "250px", height: "200px", borderRadius: "10px" }} alt="Double bedroom" />
                        <h1>DoubleRoom</h1>
                    </div>

                    <div>
                        <img src={DoubleRoom} style={{ width: "250px", height: "200px", borderRadius: "10px" }} alt="Double bedroom" />
                        <h1>Ac Room</h1>
                    </div>

                    <div><img src={NonAc} style={{ width: "100%", height: "auto", borderRadius: "10px" }} alt="Non-AC room" />
                        <h1>Non-Ac Room</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hotels