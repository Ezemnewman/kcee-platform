import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import Icon from "../components/Icon";

/**
 * Where agent signups land right now. The real verification flow
 * (document upload, NIN/passport check, office inspection scheduling —
 * see the Terms of Service "Agent Verification" section for what this
 * needs to eventually cover) doesn't exist yet. This is an honest
 * placeholder, not a fake "you're verified!" message, since pretending
 * verification happened would be actively misleading.
 */
export default function AgentVerificationPlaceholderPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthHeader />

      <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-margin-mobile">
        <div className="w-full max-w-[560px] bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-6 md:p-10 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Icon name="verified_user" className="text-3xl" />
          </div>
          <h1 className="font-headline-md text-headline-md text-on-surface">
            Agent Verification — Coming Soon
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Thanks for signing up as an agent or landlord. The verification process
            (identity check and office inspection, as described in our Terms of
            Service) isn't built yet — this page is a placeholder for that step.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            For now, you can browse the platform while we finish building this.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-primary text-white rounded-full font-label-md hover:opacity-90 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
}
