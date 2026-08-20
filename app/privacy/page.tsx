import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy & Data Protection Policy | Keyo Limited",
  description:
    "How Keyo Limited collects, uses, and protects personal data under Kenya's Data Protection Act, 2019.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy and Data Protection Policy
            </h1>
            <p className="text-lg text-gray-700 font-semibold">Keyo Limited</p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Keyo Limited ("Keyo", "we", "us", or "our") is a software development company based in Nairobi,
              Kenya. We build, launch, and maintain web, mobile, and enterprise applications for startups and
              established businesses.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We take the protection of personal data seriously. This policy explains how we handle personal data,
              both the data we collect directly through our own website and business operations, and the data we
              handle on behalf of our clients when we build and run software for them.
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              This policy is prepared in line with the <strong>Data Protection Act, No. 24 of 2019</strong> of
              Kenya (the "Act" or "DPA") and its subsidiary regulations, and it reflects the standards set by the{" "}
              <strong>Office of the Data Protection Commissioner (ODPC)</strong>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Scope</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">This policy applies to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Visitors to our website</strong> (www.keyo.co.ke) and people who contact us through it or
                through our published contact details.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Personal data we process on behalf of our clients</strong> when delivering software
                development, hosting, and support services.
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Where this policy refers to personal data we hold about our own website visitors and business
              contacts, we act as a <strong>data controller</strong>. Where we handle personal data inside the
              systems we build and run for clients, we generally act as a <strong>data processor</strong> for that
              client. Section 4 explains the difference and why it matters.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Definitions</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              To keep this policy clear, the following terms carry the meanings given in the Act:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-12">
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Personal data</strong> means any information relating to an identified or identifiable
                natural person (a "data subject"), such as a name, email address, phone number, or account
                details.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Sensitive personal data</strong> means data revealing things like health, ethnicity,
                religious beliefs, or financial status, which the Act protects more strictly.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Processing</strong> means any operation performed on personal data, including collecting,
                recording, storing, using, sharing, or deleting it.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Data controller</strong> means the party that decides why and how personal data is
                processed.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Data processor</strong> means the party that processes personal data on behalf of, and
                under the instructions of, a data controller.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Our two roles</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Because of the nature of our business, Keyo handles personal data in two distinct capacities. It is
              important to understand which role applies, because our obligations, and where you should direct
              any request, differ in each case.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>When Keyo is the data controller.</strong> For personal data collected through our own
              website and business operations (for example, when you send us an enquiry), Keyo decides the purpose
              and means of processing. We are responsible for that data and you can exercise your rights directly
              with us. Part A below governs this.
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              <strong>When Keyo is the data processor.</strong> When we build, host, or maintain a system for a
              client (for example an ERP, CRM, booking, or logistics platform), that system may hold personal data
              belonging to the client's own customers, staff, or users. In that situation the{" "}
              <strong>client is the data controller</strong>; they decide what data is collected and why. Keyo
              only processes that data on the client's documented instructions. Part B below governs this.
            </p>

            <div className="border-t border-[#E7F1FF] my-12" />

            <div className="text-center mb-12">
              <p className="text-sm font-bold text-[#4A8DFB] uppercase tracking-wide">
                Part A — When Keyo is the Data Controller
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Personal data we collect through our website and operations
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We keep the personal data we collect to a minimum. Depending on how you interact with us, we may
              collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Contact details you provide.</strong> When you use the contact form on our website or
                email us directly, we receive your name, email address, and the contents of your message.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Business contact information.</strong> In the course of discussing or delivering a
                project, we may hold the names, roles, email addresses, and phone numbers of our clients' and
                prospects' representatives.
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              We do <strong>not</strong> collect sensitive personal data through our website, and we do not
              knowingly collect data from children through it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and tracking</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Our website does not currently run third-party analytics, advertising, or tracking tools (such as
              Google Analytics or advertising pixels). Any cookies used are strictly those necessary for the
              website to function. If we introduce analytics or other non-essential cookies in future, we will
              update this policy and, where the law requires it, ask for your consent first.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Why we process this data and our lawful basis
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We process the personal data described above only where we have a lawful basis under Section 30 of
              the Act. In practice, we rely on:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Consent</strong>, for example when you choose to send us a message through our contact
                form.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Performance of a contract</strong>, or steps taken at your request before entering into
                one, when we discuss and deliver services to you.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Our legitimate interests</strong>, such as responding to enquiries, running and securing
                our website, and managing our business relationships, provided these interests do not override
                your rights.
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              We use the data to respond to your enquiries, communicate with you about projects and services,
              provide and improve our services, and keep our systems secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. How this data is stored and who can access it
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Enquiries submitted through our website and our direct correspondence are delivered to and stored in
              our company email (info@keyo.co.ke), which is hosted on a reputable third-party email service.
              Access is limited to Keyo personnel who need it to respond to you or manage the relationship. We do
              not sell personal data, and we do not share it for marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sharing this data</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We only share personal data we control where it is necessary and lawful. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-12">
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Service providers</strong> who support our operations, such as our email host and website
                hosting provider, who process data on our behalf under appropriate confidentiality obligations.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Legal and regulatory bodies</strong>, where we are required by law to disclose
                information.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. How long we keep it</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              We keep personal data only for as long as is reasonably necessary for the purpose for which it was
              collected, and to meet any legal or contractual obligations. Enquiry and correspondence data is
              retained for the duration of our engagement or discussion with you, and for a reasonable period
              afterwards, after which it is deleted or anonymised.
            </p>

            <div className="border-t border-[#E7F1FF] my-12" />

            <div className="text-center mb-12">
              <p className="text-sm font-bold text-[#4A8DFB] uppercase tracking-wide">
                Part B — When Keyo is the Data Processor
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Processing personal data on behalf of clients
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              When we develop, host, or maintain software for a client, that software may store and process
              personal data relating to the client's own customers, employees, agents, or other users. In this
              role:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-gray-700 leading-relaxed">
                The <strong>client is the data controller</strong> and determines what personal data is collected,
                for what purpose, and how it is used.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Keyo is the data processor</strong> and acts only on the documented instructions of the
                client.
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              The specific categories of personal data involved depend on the system in question, and are defined
              in the agreement with each client. Depending on the project, they may include identity and contact
              details, account and login information, transaction, order, or payment reference data, and delivery
              or location information relating to the client's users.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Our obligations as a data processor</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              In line with the Act, when we process personal data on behalf of a client we commit to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Act only on the client's documented instructions</strong>, and not use the data for our
                own purposes.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Enter into a written agreement</strong> with the client governing the processing, as
                required by the Act.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Keep the data confidential</strong> and ensure that our personnel who access it are bound
                by confidentiality.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Apply appropriate technical and organisational security measures</strong> to protect the
                data.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Use sub-processors responsibly.</strong> Where we rely on third parties such as cloud
                hosting or infrastructure providers to deliver the service, we do so under appropriate safeguards
                and, where required, with the client's authorisation.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Assist the client</strong> in responding to requests from data subjects and in meeting the
                client's own obligations under the Act.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>
                  Notify the client of any personal data breach without undue delay, and within 48 hours
                </strong>{" "}
                of becoming aware of it, so that the client can meet their own notification duties.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                <strong>Return or delete the data</strong> at the end of the engagement, in accordance with the
                client's instructions and the agreement between us.
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              If we ever process personal data other than on a client's instructions, the Act treats us as a data
              controller in respect of that processing, and we accept the corresponding responsibility.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. If you are an end user of a system we built</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              If your personal data sits inside a platform that Keyo built or runs for one of our clients, the{" "}
              <strong>client is responsible for that data as the controller</strong>. To exercise your rights over
              it, please contact that organisation directly. Where appropriate, we will support our client in
              responding to your request, but we are not able to act on your data without the client's
              instruction.
            </p>

            <div className="border-t border-[#E7F1FF] my-12" />

            <div className="text-center mb-12">
              <p className="text-sm font-bold text-[#4A8DFB] uppercase tracking-wide">
                Part C — Provisions that apply across both roles
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Your rights as a data subject</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Under Section 26 of the Act, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-gray-700 leading-relaxed">Be informed of how your personal data is being used.</li>
              <li className="text-lg text-gray-700 leading-relaxed">Access the personal data we hold about you.</li>
              <li className="text-lg text-gray-700 leading-relaxed">
                Object to the processing of all or part of your personal data.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                Have inaccurate or misleading personal data corrected.
              </li>
              <li className="text-lg text-gray-700 leading-relaxed">
                Have false or misleading personal data about you deleted.
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For personal data where Keyo is the controller, you can exercise these rights by contacting us using
              the details in Section 19. For personal data held inside a client's system, please direct your
              request to that client, as explained in Section 13.
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              We will respond to valid requests within the timelines set by the Act. We may need to verify your
              identity before acting on a request.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Security</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              We take reasonable technical and organisational measures to protect personal data against
              unauthorised access, loss, misuse, or disclosure. These include restricting access to authorised
              personnel, protecting data in transit, and keeping our systems maintained. No system can be
              guaranteed completely secure, but we work to reduce risk and to respond quickly if an incident
              occurs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Data breaches</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              We maintain procedures for identifying and responding to personal data breaches. Where Keyo is the
              data controller and a breach presents a real risk of harm, we will notify the Office of the Data
              Protection Commissioner without undue delay and within 72 hours of becoming aware of it, and will
              inform affected individuals where the Act requires. Where Keyo is a data processor, we will notify
              the affected client within 48 hours of becoming aware of the breach, so that they can meet their own
              obligations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. International data transfers</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Keyo's operations and clients are based in Kenya. Where any personal data is stored or processed
              outside Kenya, for example through a cloud service provider, we will ensure that the transfer meets
              the conditions of the Act, including that the receiving party is subject to appropriate data
              protection safeguards, or that another lawful basis for the transfer applies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Children's data</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Our website is not directed at children, and we do not knowingly collect personal data from children
              through it. Where a client's system processes children's data, that processing is governed by the
              client's instructions and the additional protections required by the Act.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Contact us</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If you have any questions about this policy, or wish to exercise your rights in relation to personal
              data for which Keyo is the controller, please contact us:
            </p>
            <div className="bg-[#F8FBFF] rounded-xl p-6 mb-12">
              <p className="text-lg text-gray-900 font-bold mb-1">Keyo Limited</p>
              <p className="text-lg text-gray-700 leading-relaxed">Mogadishu Road, Industrial Area, Nairobi, Kenya</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Email:{" "}
                <a href="mailto:info@keyo.co.ke" className="text-[#4A8DFB] hover:underline">
                  info@keyo.co.ke
                </a>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">Phone: +254 720 204403 / +254 796 283374</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Complaints to the regulator</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If you believe we have not handled your personal data in accordance with the Act, you have the right
              to lodge a complaint with the Office of the Data Protection Commissioner:
            </p>
            <div className="bg-[#F8FBFF] rounded-xl p-6 mb-6">
              <p className="text-lg text-gray-900 font-bold mb-1">Office of the Data Protection Commissioner (ODPC)</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Website:{" "}
                <a
                  href="https://www.odpc.go.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A8DFB] hover:underline"
                >
                  www.odpc.go.ke
                </a>
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              We would, however, appreciate the chance to address your concern directly before you do so.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">21. Changes to this policy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may update this policy from time to time to reflect changes in our practices or in the law. The
              current version is always available on our website, and the "Last updated" date at the top shows
              when it was most recently revised.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
