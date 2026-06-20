import StaticPage from "../components/StaticPage";

export default function AboutPage() {
  return (
    <StaticPage
      title="About KCEE"
      subtitle="Nigeria's trusted real estate marketplace."
    >
      <p>
        {/* TODO: replace with real company story */}
        KCEE connects buyers, renters, and verified agents across Nigeria's
        major cities — Lagos, Abuja, Port Harcourt, and beyond. We built this
        platform to make finding a home or investment property simpler,
        safer, and more transparent.
      </p>
      <p>
        Every agent on KCEE goes through a verification process before they
        can list a property, so you can browse with confidence.
      </p>
      <p className="text-sm italic">
        This page is a placeholder — real "About Us" content will replace
        this text.
      </p>
    </StaticPage>
  );
}
