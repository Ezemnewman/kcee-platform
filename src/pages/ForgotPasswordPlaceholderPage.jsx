import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import Icon from "../components/Icon";

/**
 * Where "Forgot Password?" leads for now. Real password reset needs a
 * backend (generate a reset token, email it, verify it, let the person
 * set a new password) that doesn't exist yet. This is an honest
 * placeholder rather than a fake "check your email" message, matching
 * how AgentVerificationPlaceholderPage handles the same kind of gap.
 */
export default function ForgotPasswordPlaceholderPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthHeader />

      <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-margin-mobile">
        <div className="w-full max-w-[480px] bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-6 md:p-10 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Icon name="lock_reset" className="text-3xl" />
          </div>
          <h1 className="font-headline-md text-headline-md text-on-surface">
            Password Reset — Coming Soon
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Password reset isn't built yet — it needs a backend to generate and email a
            secure reset link, which doesn't exist on this project yet. This page is a
            placeholder for that step.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-full font-label-md hover:bg-primary/5 transition-all"
            >
              Contact Support
            </Link>
            <Link
              to="/login"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full font-label-md hover:opacity-90 transition-all"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
}
