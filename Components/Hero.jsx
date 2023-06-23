import SocialLinks from "./socialLinks";
import Image from "next/image";
export default function Hero() {
    return (
    <section className="hero-section">
        <div className="left">
            <h1 className="intro-text">
            Hello, I’m Moses, a full stack developer With over 3+ years of experience.
            </h1>
           <p className="discrition">
            I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.
            </p>
            <div className="socialinks">
                <SocialLinks/>
            </div>
            
        </div>
        <div className="right">
            <img class="my-img" src="me.png" alt="" />
        </div>
    </section>
    );
}