import React from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
    return (
        <div className="privacy-container">
            <h1 className="privacy-title">Cyberoaks – Privacy Policy & Terms</h1>

            <div className="privacy-content">
                <p>
                    At <strong>Cyberoaks</strong>, we value your privacy and are committed
                    to protecting your personal information. We collect only the necessary
                    details such as your name, email, phone number, and payment
                    information to provide training, improve our services, and share
                    updates about our programs.
                </p>

                <p>
                    Your data is kept secure and is never sold to third parties. It is
                    shared only with trusted service providers or when legally required to
                    comply with applicable laws and regulations.
                </p>

                <p>
                    By using Cyberoaks’ website or enrolling in our courses, you agree to
                    use the provided content solely for personal learning purposes. All
                    training materials, videos, and resources are the intellectual
                    property of Cyberoaks and cannot be copied, redistributed, or used for
                    commercial purposes without prior permission.
                </p>

                <p>
                    All payments made are subject to our refund and cancellation policy.
                    Placement support and outcomes depend on individual performance,
                    dedication, and successful completion of program requirements.
                </p>

                <p>
                    For any queries or concerns regarding privacy, data usage, or program
                    terms, please contact us:
                </p>

                <div className="privacy-contact">
                    <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:cyberoaks53@gmail.com">cyberoaks53@gmail.com</a>
                    </p>
                    <p>
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+917893907799">+91 7893907799</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
