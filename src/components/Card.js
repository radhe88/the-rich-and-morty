import logo from "../img1.jpeg";
const Card = (props) => {
    return (
        <div className="main-container flex">
            <div className="container">
                <img src={props.image} className="rt" alt="logo" width={250} />
            </div>
            <div className="leftbox">
                <div className="section">
                    <h2>{props.name}</h2>
                    <span className="status">
                        <div className="flex">
                            <span className="status_icon"></span>
                            <span>Dead - Unknown</span>
                        </div>
                    </span>
                </div>
                <div className="section">
                    <span className="text-gray">Last known location:</span>
                    <p>Post-Apocalyptic Earth</p>
                </div>
                <div className="section">
                    <span className="text-gray">First seen in:</span>
                    <p>Rickmancing the Stone</p>
                </div>
            </div>
        </div>
        
    )
}
export default Card;
