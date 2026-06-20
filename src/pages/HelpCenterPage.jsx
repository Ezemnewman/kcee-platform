import StaticPage from "../components/StaticPage";
import { SITE_CONFIG } from "../data/siteConfig";

export default function HelpCenterPage() {
  return (
    <StaticPage title="Help Center" subtitle="Need a hand? Here's how to reach us.">
      <p>
        {/* TODO: expand with real help articles / categories once support content exists */}
        Can't find what you're looking for? Check our{" "}
        <a href="/faq" className="text-primary font-medium hover:underline">
          FAQ page
        </a>{" "}
        first, or reach out directly:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Email:{" "}
          <a href="mailto:support@kcee.com" className="text-primary hover:underline">
            support@kcee.com
          </a>
        </li>
        <li>
          WhatsApp:{" "}
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            className="text-primary hover:underline"
          >
            Chat with us
          </a>
        </li>
      </ul>
    </StaticPage>
  );
}
