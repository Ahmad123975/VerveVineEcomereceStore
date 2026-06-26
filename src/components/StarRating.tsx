import React from 'react';

interface StarRatingProps {
  rating: number;
  showText?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, showText = false }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const hasThreeQuarterOrMore = rating % 1 >= 0.75;
  
  const starsArray = [];
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars + (hasThreeQuarterOrMore ? 1 : 0)) {
      starsArray.push(<i key={i} className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>);
    } else if (i === fullStars + 1 && hasHalfStar) {
      starsArray.push(<i key={i} className="bi bi-star-half text-accent" style={{ color: 'var(--accent-secondary)' }}></i>);
    } else {
      starsArray.push(<i key={i} className="bi bi-star text-muted"></i>);
    }
  }

  return (
    <div className="d-flex align-items-center gap-1">
      <div className="d-flex gap-1" style={{ fontSize: '0.9rem' }}>
        {starsArray}
      </div>
      {showText && (
        <span className="ms-2 font-monospace text-secondary" style={{ fontSize: '0.85rem' }}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
