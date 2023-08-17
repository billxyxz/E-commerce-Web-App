import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-black w-full mt-auto text-white p-20 pt-20 pb-20">
        <div className="flex justify-between items-start flex-wrap gap-6">
            <div>
                <h3 className="font-logo"><Link to="/">BillFashion</Link></h3>
                <p>One stop fashion store.</p>
            </div>
            <div className="uppercase text-sm font-light font-['Heebo']">
                <p><Link to="/">Home page</Link></p>
                <p><Link to="about">About Us</Link></p>
                <p><Link>Services</Link></p>
            </div>
            <div className="uppercase text-sm font-light font-['Heebo']">
                <p>Weekly Themes</p>
                <p>NewsLetter</p>
                <p>Help Center</p>
            </div>
            <div>
                <h3 className="font-['Noto'] font-light text-xl">Socials</h3>
                <div className="text-xl">
                    <a href="#" className="mr-2"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" className="mr-2"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href="#" className="mr-2"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#" className="mr-2"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer