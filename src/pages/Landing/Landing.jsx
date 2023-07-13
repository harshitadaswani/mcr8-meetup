import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { Dropdown } from "../../components";
import { useMeetup } from "../../contexts/Meetup";

export const Landing = () => {
  const { meetups } = data;
  const { eventsType, searchQuery } = useMeetup();
  const filteredMeetupData =
    eventsType === "" || eventsType === "Both"
      ? meetups
      : eventsType === "Online"
      ? meetups.filter(({ eventType }) => eventType === "Online")
      : meetups.filter(({ eventType }) => eventType === "Offline");
  const searchResults =
    searchQuery === ""
      ? filteredMeetupData
      : filteredMeetupData.filter(
          ({ location, title, eventTags }) =>
            location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            eventTags.some((tag) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
  return (
    <div>
      <div className="flex flex-row flex-space-between flex-align-center">
        <h1 className="pl-s">Upcoming Meetup Events</h1>
        <div className="mr-s flex flex-row gap-l flex-align-center">
          <p>Event Type: </p>
          <Dropdown />
        </div>
      </div>
      <div className="flex flex-row flex-align-center flex-space-evenly">
        {searchResults.map(
          ({ title, eventThumbnail, eventStartTime, eventType }) => {
            const dateString = new Date(eventStartTime);
            const formattedDate = dateString.toDateString();
            const formattedTime = dateString.toLocaleTimeString("en-US");
            return (
              <div key={title} className="p-xs m-s">
                <Link to={`/${title}`}>
                  <div className="relative">
                    <img
                      src={eventThumbnail}
                      alt={title}
                      style={{ height: "15rem", width: "18rem" }}
                      className="br-m"
                    />
                    <p
                      style={{
                        position: "absolute",
                        top: 0,
                        backgroundColor: "white",
                      }}
                      className="m-xs p-xs br-m"
                    >
                      {eventType} Event
                    </p>
                  </div>

                  <p style={{ color: "#7c6f50" }}>
                    {formattedDate} • {formattedTime} IST
                  </p>
                  <h3>{title}</h3>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
