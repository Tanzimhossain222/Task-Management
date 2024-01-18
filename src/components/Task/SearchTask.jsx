import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchTask = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  }
  

  return (
    <>
      <form>
        <div className="flex">
          <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
              placeholder="Search Task"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
              onClick={handleClick}
            >
              {<BsSearch className="w-6 h-6" />}
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchTask;
