import SocialLinks from "./socialLinks";
import Image from "next/image";
export default function Contact() {
    return (
    <section className="contact-section">
        <div className="footer">
            <h1 className="closing-text">
            Want to work together?
            </h1>
           <p className="footer-closeing">
           Feel free to reach out for collaborations or just a friendly hello
            </p>
            <a href="mailto:Kiskayemosesl@gmail.com">Kiskayemoses@gmail.com</a>

            <div className="socialinks">
                <SocialLinks/>
            </div>
            
        </div>
    </section>
    );
}