import React from "react";

const PrivacyPolicy = () => {
    const personalInfo = [
        "Your name",
        "Email address",
        "Billing details (via our payment processor)",
        "Login credentials (secured and encrypted)",
    ];

    const usageData = [
        "Device type and browser",
        "IP address and location",
        "Pages visited, time spent, and features used",
        "Input text or prompts for ad generation (used solely to provide the service)",
    ];

    const howWeUse = [
        "Operate and improve RankyAds",
        "Personalize your experience",
        "Communicate with you (support, updates, billing)",
        "Analyze usage and trends",
        "Ensure security and prevent abuse",
    ];

    const dataSharing = [
        "Service providers (e.g. payment processors, analytics tools) under strict confidentiality agreements",
        "Legal authorities, if required to comply with laws or protect our rights",
    ];

    const yourRights = [
        "Access, update, or delete your data",
        "Object to or restrict certain uses",
        "Withdraw consent at any time",
    ];

    const cookiesTracking = [
        "Save preferences",
        "Understand how you use the site",
        "Improve performance and personalization",
    ];

    return (
        <section className="w-full bg-white my-10">
            <div className="max-w-4xl mx-auto p-6 shadow-md rounded-md">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4"><strong>Effective Date:</strong> [Insert Date]</p>
                <p className="mb-6">
                    Welcome to <strong>RankyAds</strong> (“we,” “our,” or “us”). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our service, RankyAds, an AI-powered tool that generates high-converting ads.
                </p>

                <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-2">a. Personal Information</h3>
                <p className="mb-4">When you register or interact with RankyAds, we may collect:</p>
                <ul className="list-disc list-inside mb-6">
                    {personalInfo.map((item,idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-semibold mb-2">b. Usage Data</h3>
                <p className="mb-6">We collect data about how you use the service, including:</p>
                <ul className="list-disc list-inside mb-6">
                    {usageData.map((item,idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
                <p className="mb-6">We use your information to:</p>
                <ul className="list-disc list-inside mb-6">
                    {howWeUse.map((item,idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mb-3">3. Data Sharing</h2>
                <p className="mb-6">
                    We <strong>do not sell</strong> your personal data. We may share data only with:
                </p>
                <ul className="list-disc list-inside mb-6">
                    {dataSharing.map((item,idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
                <p className="mb-6">
                    We use encryption, secure servers, and access control to protect your data. However, no system is 100% secure, and you use the service at your own risk.
                </p>

                <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
                <p className="mb-6">Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside mb-6">
                    {yourRights.map((item,idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
                <p className="mb-6">
                    To make such a request, contact us at{" "}
                    <a href="mailto:anastrying05@gmail.com" className="text-blue-600 underline">
                        anastrying05@gmail.com
                    </a>.
                </p>

                <h2 className="text-2xl font-semibold mb-3">6. Cookies and Tracking</h2>
                <p className="mb-6">We may use cookies and similar tools to:</p>
                <ul className="list-disc list-inside mb-6">
                    {cookiesTracking.map((item,idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
                <p className="mb-6">You can manage cookies via your browser settings.</p>

                <h2 className="text-2xl font-semibold mb-3">7. Third-Party Links</h2>
                <p className="mb-6">
                    RankyAds may link to third-party services. We are not responsible for their privacy practices. Please review their policies separately.
                </p>

                <h2 className="text-2xl font-semibold mb-3">8. Changes to This Policy</h2>
                <p className="mb-6">
                    We may update this Privacy Policy from time to time. We will notify you of significant changes via email or app notification.
                </p>

                <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
                <p className="mb-6">
                    If you have questions about this Privacy Policy, contact us at:
                </p>
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
            </div>
        </section>
    );
};

export default PrivacyPolicy;
