import Link from "next/link";
import Icon from "@mdi/react";
import {mdiEmailOutline, mdiMapMarkerRadiusOutline, mdiPhoneClassic} from "@mdi/js";

export default function Contact() {
    return (
        <div className="resume__section">
            <h1 className="resume__section-title">
                Contact
            </h1>
            <div className="resume-contact">
                <Link href="tel:008801738-916935" className="resume-contact__item font-Roboto">
                    <Icon className="resume-contact__item-icon" path={mdiPhoneClassic}/>
                    +880 1738916935
                </Link>
                <Link href="mailto:abdullahalfahad.bd@gmail.com" className="resume-contact__item">
                    <Icon className="resume-contact__item-icon" path={mdiEmailOutline}/>
                    abdullahalfahad.bd@gmail
                </Link>
                <div className="resume-contact__item">
                    <Icon className="resume-contact__item-icon" path={mdiMapMarkerRadiusOutline}/>
                    Dhaka, Bangladesh
                </div>
            </div>
        </div>
    );
}
