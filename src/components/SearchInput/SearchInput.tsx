import { FC } from "react";
import { useData } from "../../hooks/UseData";

const SearchInput: FC = () => {
  const { setFilteredData, mainData, searchValue, setSearchValue } = useData();

  const searchInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    let filteredData = mainData.filter((item) => {
      if (
        item.league.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        item.teams.home.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        item.teams.away.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        return item;
      }
      return null;  
    });

    setFilteredData(filteredData ?? []);
  };

  return (
    <div>
      <label
        htmlFor="search"
        className="w-11/12 m-auto my-0 bg-[#f5f6fb] h-12 rounded-md flex items-center px-4"
      >
        <span className="ml-2 rotate-90">
          <svg
            className="h-5 w-5 fill-[#aaa]"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
        </span>
        <input
          className="bg-transparent placeholder:font-italitc focus:outline-none h-full w-full"
          placeholder="جستجو..."
          type="text"
          id="search"
          onChange={searchInputChangeHandler}
          value={searchValue}
        />
      </label>
    </div>
  );
};

export default SearchInput;
