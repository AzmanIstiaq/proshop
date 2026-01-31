import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-4 rounded-xl border border-slate-300 shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-200 bg-white">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          className="object-contain h-48 w-full p-3"
        />
      </Link>
      <Card.Body className="space-y-2 px-4 pb-4">
        <Link
          to={`/product/${product._id}`}
          className="text-primary hover:text-primary no-underline"
        >
          <Card.Title as="div" className="product-title text-base font-semibold">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div" className="flex items-center justify-between">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <span className="text-sm font-semibold text-[var(--color-primary)]">${product.price}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
