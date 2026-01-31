import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel
      pause="hover"
      interval={4500}
      className="product-carousel mb-5 rounded-3 overflow-hidden shadow-lg"
    >
      {products.map((product) => (
        <Carousel.Item key={product._id} className="product-carousel__item">
          <Link
            to={`/product/${product._id}`}
            className="block text-white no-underline"
          >
            <Image
              src={product.image}
              alt={product.name}
              fluid
              className="product-carousel__img"
            />
            <Carousel.Caption className="product-carousel__caption">
              <h2 className="product-carousel__title text-white">
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
