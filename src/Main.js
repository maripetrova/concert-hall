import Img1 from "./images/icon-architecture.png"
import Img2 from "./images/icon-interiors.png"
import Img3 from "./images/icon-planing.png"
import Img4 from "./images/5.jpeg"

function Main() {
    return (
        <main>
            <div className="headers_color">
                <h1>ABOUT </h1>
                <h1 className="color">GO.ARCH</h1>
            </div>
            <div className="main__main">
                <div className="main__left">
                    <h2>we turn ideas into works of art.</h2>
                    <p>For each project we establish relationships <br/>with partners who we know will help us create <br/>added value for your project. As well as bringing<br/> together the public and private sectors, we make<br/> sector-overarching links to gather knowledge and<br/> to learn from each other. The way we undertake<br/> projects is based on permanently applying values<br/> that reinforce each other: socio-cultural value,<br/> experiental value, building-technical value and<br/> economical value.</p>
                </div>
                <div className="main__center">
                        <h2>our specialization:</h2>
                    <img src={Img1} alt="architecture"/>
                    <h3>ARCHITECTURE</h3>
                    <img src={Img2} alt="interiors"/>
                    <h3>INTERIORS</h3>
                    <img src={Img3} alt="planing"/>
                    <h3>PLANING</h3>
                </div>
                <div className="main__right">
                    <img src={Img4} alt="5.jpeg" className="main-image"/>
                </div>
            </div>
            <div className="headers_cen">
                <h2 className="center">OUR</h2>
                <h2 className="color center">PROJECTS</h2>
            </div>
        </main>
    );
}

export default Main;
