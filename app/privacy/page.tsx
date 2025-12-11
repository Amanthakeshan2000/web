export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
          <p>
            AuthAPI ("we", "our", or "us") operates the AuthAPI website and services. This page informs you of our
            policies regarding the collection, use, and disclosure of personal data when you use our service and the
            choices you have associated with that data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Data Collection</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our service to
            you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal Data: Email address, name, phone number, and other contact information</li>
            <li>Usage Data: Browser type, IP address, pages visited, and time spent on pages</li>
            <li>Cookies: Information stored on your device to enhance user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Data</h2>
          <p>AuthAPI uses the collected data for various purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features of our service</li>
            <li>To provide customer support and respond to your inquiries</li>
            <li>To gather analysis or valuable information to improve our service</li>
            <li>To monitor the usage of our service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Data</h2>
          <p>
            The security of your data is important to us but remember that no method of transmission over the Internet
            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
            protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@authapi.com</p>
        </section>
      </div>
    </div>
  )
}
