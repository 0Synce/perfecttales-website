import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PerfectTales privacy policy. We do not collect any data from our users. Your child's information stays on your device.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-muted space-y-6">
            <p className="text-xl leading-relaxed">
              <strong className="text-foreground">
                PerfectTales does not collect any data from its users.
              </strong>
            </p>

            <p>
              Your privacy — and especially your child&apos;s privacy — is our top
              priority. PerfectTales is designed with a privacy-first approach.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Data Collection
            </h2>
            <p>
              PerfectTales does not collect, store, or transmit any personal
              information. The stories you create, your child&apos;s name, and all
              preferences remain exclusively on your device.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Third-Party Services
            </h2>
            <p>
              We do not share any user data with third parties. There are no
              analytics SDKs, advertising trackers, or social media integrations
              that collect user data.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Children&apos;s Privacy (COPPA)
            </h2>
            <p>
              PerfectTales is designed for use by parents and caregivers with
              their children. We are committed to complying with the Children&apos;s
              Online Privacy Protection Act (COPPA). Since we do not collect any
              data, there is no personal information from children to protect,
              store, or manage.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Data Storage
            </h2>
            <p>
              All generated stories and user preferences are stored locally on
              your device. If you delete the app, all local data is removed
              permanently.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              In-App Purchases
            </h2>
            <p>
              In-app purchases are processed entirely through Apple&apos;s App Store.
              PerfectTales does not have access to your payment information.
              Please refer to{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Apple&apos;s Privacy Policy
              </a>{" "}
              for details on how Apple handles payment data.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Changes to This Policy
            </h2>
            <p>
              If we ever update this privacy policy, we will post the changes on
              this page with an updated effective date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Contact
            </h2>
            <p>
              If you have any questions about this privacy policy, please reach
              out through the App Store listing.
            </p>

            <p className="text-sm text-muted/60 mt-10">
              Last updated: February 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
