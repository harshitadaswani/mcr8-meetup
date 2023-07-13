import { createContext, useContext, useState } from "react";

const defaultValue = [];

const MeetupContext = createContext(defaultValue);

// eslint-disable-next-line react/prop-types
export const MeetupProvider = ({ children }) => {
  const [rsvpStatus, setRsvpStatus] = useState(false);
  const [eventsType, setEventsType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const updateRsvpStatus = (status) => setRsvpStatus(status);
  const updateEventsType = (eventType) => setEventsType(eventType);
  const updateSearchQuery = (query) => setSearchQuery(query);
  return (
    <MeetupContext.Provider
      value={{
        rsvpStatus,
        updateRsvpStatus,
        eventsType,
        updateEventsType,
        searchQuery,
        updateSearchQuery,
      }}
    >
      {children}
    </MeetupContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMeetup = () => useContext(MeetupContext);
