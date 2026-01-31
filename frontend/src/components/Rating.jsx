import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  const stars = [1, 2, 3, 4, 5];

  const renderStar = (star) => {
    if (value >= star) return <FaStar />;
    if (value >= star - 0.5) return <FaStarHalfAlt />;
    return <FaRegStar />;
  };

  return (
    <div className="flex items-center gap-1 text-base leading-none">
      {stars.map((s) => (
        <span key={s} className="text-amber-400">
          {renderStar(s)}
        </span>
      ))}
      {text && (
        <span className="ml-2 text-sm font-semibold text-primary whitespace-nowrap">
          {text}
        </span>
      )}
    </div>
  );
};

export default Rating;
