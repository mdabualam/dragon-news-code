import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, rating, total_view, author, thumbnail_url, details} =
    news;

  return (
    <div className="card shadow-xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Author + Date */}
      <div className="flex items-center justify-between px-5 pt-4 bg-base-200">
        <div className="flex items-center gap-3 ">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <div>
            <h3 className="text-sm font-semibold">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="badge  capitalize">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="px-5 py-3 ">
        <h2 className="card-title text-lg font-semibold leading-snug">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-5 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body px-5 py-3">
        <p className="text-sm text-gray-600">
          {details.length > 180 ? (
            <>
              {details.slice(0, 180)}...
              <Link to = {`/news-details/${id}`} className="text-primary font-semibold cursor pointer hover:underline">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 ">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: rating.number }).map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-sm font-medium text-gray-700">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
