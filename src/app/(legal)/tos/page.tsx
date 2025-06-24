import React from "react";

const TermsOfUse = () => {
    const acceptancePoints = [
        "By using RankyAds, you agree to comply with these Terms.",
        "If you do not agree, please do not use the service.",
    ];

    const userResponsibilities = [
        "Provide accurate and current information when creating an account.",
        "Maintain confidentiality of your login credentials.",
        "Use the service only for lawful purposes.",
        "Not attempt to disrupt or misuse the service.",
    ];

    const prohibitedActions = [
        "Reverse engineering or attempting to extract source code.",
        "Uploading malicious or harmful content.",
        "Violating any applicable laws or regulations.",
        "Using RankyAds to generate misleading or illegal ads.",
    ];

    const intellectualProperty = [
        "All content and software on RankyAds are owned or licensed by us.",
        "You may not copy, modify, distribute, or sell any part of the service without permission.",
    ];

    const terminationRights = [
        "We may suspend or terminate your access for violation of these Terms.",
        "Termination does not limit our rights to pursue legal action.",
    ];

    const disclaimers = [
        "RankyAds is provided 'as is' without warranties of any kind.",
        "We do not guarantee accuracy or success of generated ads.",
        "Use the service at your own risk.",
    ];

    const liabilityLimits = [
        "We are not liable for any damages resulting from your use of RankyAds.",
        "Our total liability is limited to the amount you paid to us, if any.",
    ];

    const changesToTerms = [
        "We may update these Terms occasionally.",
        "Continued use after changes constitutes acceptance.",
    ];

    return (
        <section className="w-full bg-white my-10">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
                <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
                    <ul className="list-disc list-inside">
                        {acceptancePoints.map((point,idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">2. User Responsibilities</h2>
                    <ul className="list-disc list-inside">
                        {userResponsibilities.map((point,idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">3. Prohibited Actions</h2>
                    <ul className="list-disc list-inside">
                        {prohibitedActions.map((point,idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">4. Intellectual Property</h2>
                    <ul className="list-disc list-inside">
                        {intellectualProperty.map((point,idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">5. Termination</h2>
                    <ul className="list-disc list-inside">
                        {terminationRights.map((point,idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">6. Disclaimers</h2>
                    <ul className="list-disc list-inside">
                        {disclaimers.map((point,idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
                    <ul className="list-disc list-inside">
                        {liabilityLimits.map((point,idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">8. Changes to Terms</h2>
                    <ul className="list-disc list-inside">
                        {changesToTerms.map((point,idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">9. Contact Information</h2>
                    <p className="mb-1">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:anastrying05@gmail.com" className="text-blue-600 underline">
                            anastrying05@gmail.com
                        </a>
                    </p>
                    <p>
                        <strong>Website:</strong>{" "}
                        <a
                            href="https://www.rankyads.com/"
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            RankyAds
                        </a>
                    </p>
                </section>
            </div>
        </section>
    );
};

export default TermsOfUse;
