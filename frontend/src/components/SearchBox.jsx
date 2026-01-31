import { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword("");
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      className="relative flex items-center w-full"
      role="search"
    >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        value={keyword}
        className="search-input w-full rounded-full pr-14 pl-4 shadow-none h-10 border"
      ></Form.Control>
      <button
        type="submit"
        aria-label="Search"
        className="search-btn absolute right-2 flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 bg-white text-gray-700 transition-colors"
      >
        <FaSearch className="text-sm" />
      </button>
    </Form>
  );
};

export default SearchBox;
