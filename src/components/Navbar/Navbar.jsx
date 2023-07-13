import { Link } from "react-router-dom";
import meetupLogo from "/meetup.svg";
import { BiSearchAlt2 } from "react-icons/bi";
import { useMeetup } from "../../contexts/Meetup";
import Input from "@mui/joy/Input";

export const Navbar = () => {
  const { searchQuery, updateSearchQuery } = useMeetup();
  const handleSearchChange = (event) =>
    updateSearchQuery(event.target.value);
  return (
    <nav className="flex flex-row flex-space-between flex-align-center m-s pb-m border-bottom">
      <Link to="/">
        <div>
          <img src={meetupLogo} alt="meetup logo" className="p-xs" />
        </div>
      </Link>
      <div>
        <Input
          type="search"
          placeholder="Search by location, tag, title"
          variant="plain"
          startDecorator={<BiSearchAlt2 />}
          size="md"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {/* <input
          type="search"
          name=""
          id=""
          className="p-xs outline-none"
          style={{ border: "1px solid #fff" }}
          onChange={handleSearchChange}
          value={searchQuery}
        />
        <button
          style={{ backgroundColor: "#f65858", border: "1px solid #f65858" }}
          className="p-xs"
          onClick={handleSearchClick}
        >
          <BiSearchAlt2 />
        </button> */}
      </div>
    </nav>
  );
};
