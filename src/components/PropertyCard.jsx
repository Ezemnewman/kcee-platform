import { useState } from "react";
import Icon from "./Icon";

/**
 * The single most important reuse win in this whole conversion.
 * The Stitch export had this exact card hand-copied 6 times with only
 * text/numbers changed. Now it's one component driven by a `property`
 * object — which also means later, swapping in real data from
 * `GET /api/listings` is just passing a different array into .map(),
 * no markup changes needed.
 *
 * `details` is intentionally generic (array of {icon, label}) rather
 * than hardcoded "beds/baths" fields, because land and office listings
 * show different stats (sqm) than houses do (beds/baths) — see
 * src/data/properties.js for both shapes.
 */
export default function PropertyCard({ property, onFavoriteToggle }) {
  const [isFavorited, setIsFavorited] = useState(property.isFavorited || false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorited((prev) => !prev);
    onFavoriteToggle?.(property.id, !isFavorited);
    // TODO: connect to POST /api/favorites/:propertyId once auth + backend exist
  };

  return (
    <a
      href={`/listing/${property.id}`}
      className="bg-surface rounded-xl shadow-md overflow-hidden group border border-outline-variant hover:shadow-lg transition-shadow block"
    >
      <div className="relative aspect-video">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={property.imageUrl}
          alt={property.imageAlt}
        />

        {property.verifiedAgent && (
          <div className="absolute top-3 left-3 bg-secondary text-on-secondary px-3 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-sm">
            <Icon name="verified" className="text-sm" filled />
            Verified Agent
          </div>
        )}

        <button
          onClick={handleFavoriteClick}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          className={`absolute top-3 right-3 w-10 h-10 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:bg-surface ${
            isFavorited ? "text-error" : "text-on-surface-variant hover:text-error"
          }`}
        >
          <Icon name="favorite" filled={isFavorited} />
        </button>
      </div>

      <div className="p-6">
        <h3 className="font-headline-sm text-headline-sm mb-1 truncate">{property.title}</h3>

        <div className="flex items-center text-on-surface-variant text-sm mb-3">
          <Icon name="location_on" className="text-sm mr-1" />
          {property.location}
        </div>

        <div className="text-primary font-price-display text-price-display mb-4">
          {property.formattedPrice}
        </div>

        <div className="flex items-center gap-4 text-on-surface-variant border-t border-outline-variant pt-4">
          {property.details.map((detail) => (
            <div key={detail.label} className="flex items-center gap-1">
              <Icon name={detail.icon} className="text-lg" />
              <span className="text-sm">{detail.label}</span>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
