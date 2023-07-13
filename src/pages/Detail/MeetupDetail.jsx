import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import "../../App.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineVideoCamera, HiOutlineLocationMarker } from "react-icons/hi";
import { PiCurrencyInrBold } from "react-icons/pi";
import { BasicModalDialog } from "../../components";

export const MeetupDetail = () => {
  const { meetupTitle } = useParams();
  const { meetups } = data;
  const getDetails = (meetupData, title) => {
    return meetupData.find((meetup) => meetup.title === title);
  };
  const {
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
  } = getDetails(meetups, meetupTitle);
  const dateStartString = new Date(eventStartTime);
  const formattedStartDate = dateStartString.toDateString();
  const formattedStartTime = dateStartString.toLocaleTimeString("en-US");
  const dateEndString = new Date(eventEndTime);
  const formattedEndDate = dateEndString.toDateString();
  const formattedEndTime = dateEndString.toLocaleTimeString("en-US");
  const currentTime = new Date();
  return (
    <div className="mr-m ml-m ">
      <div className="flex flex-row flex-space-between">
        <div className="width-50">
          <h2 className="pt-s">{title}</h2>
          <div className="pt-s pb-s">
            <p>Hosted By:</p>
            <h4>{hostedBy}</h4>
          </div>
          <img
            src={eventThumbnail}
            alt={title}
            style={{ height: "20rem" }}
            className="mt-m mb-m"
          />
          <h3>Details:</h3>
          <p className="mt-s mb-s">{eventDescription}</p>
          <h3>Additional Information:</h3>
          <div className="mb-s">
            {additionalInformation.dressCode !== "" && (
              <div className="flex flex-align-center mb-xs mt-xs">
                <h4>Dress Code: </h4>
                <p className="pl-xs">{additionalInformation.dressCode}</p>
              </div>
            )}
            {additionalInformation.ageRestrictions !== "" && (
              <div className="flex flex-align-center mb-xs mt-xs">
                <h4>Age Restrictions: </h4>
                <p className="pl-xs">{additionalInformation.ageRestrictions}</p>
              </div>
            )}
          </div>
          <h3>Event Tags:</h3>
          <div className="flex flex-row gap-l mt-xs mb-m">
            {eventTags.map((tag) => {
              return (
                <div
                  key={tag}
                  className="box-shadow pt-xs pb-xs pr-s pl-s br-m"
                  style={{ backgroundColor: "#f65858", color: "white" }}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="white-bg mt-m br-m p-m flex flex-column gap-l">
            <div className="flex flex-row flex-align-center">
              <AiOutlineClockCircle />
              <p className="pl-xs">
                {formattedStartDate} at {formattedStartTime} to <br />
                {formattedEndDate} at {formattedEndTime}
              </p>
            </div>
            <div className="pt-xs">
              {eventType === "Online" ? (
                <div className="flex flex-row flex-align-center">
                  <HiOutlineVideoCamera />
                  <p className="pl-xs">Online Event</p>
                </div>
              ) : (
                <div className="flex flex-row flex-align-center">
                  <HiOutlineLocationMarker />
                  <p className="pl-xs">
                    {location}
                    <br /> {address}
                  </p>
                </div>
              )}
            </div>
            <div className="pt-xs">
              {isPaid ? (
                <div className="flex flex-row flex-align-center">
                  <PiCurrencyInrBold />
                  <p className="pl-xs">{price}</p>
                </div>
              ) : (
                <div>{price}</div>
              )}
            </div>
          </div>
          {speakers.length !== 0 && (
            <div className="mt-xl">
              <h3>Speakers: ({speakers.length})</h3>
              <div className="">
                <div className="flex flex-row gap-l pt-s pb-s">
                  {speakers.map((speaker) => {
                    return (
                      <div
                        className="box-shadow flex flex-center flex-column p-s br-m white-bg"
                        key={speaker.name}
                      >
                        <img
                          src={speaker.image}
                          alt=""
                          className="br-full width-xxl"
                        />
                        <h4>{speaker.name}</h4>
                        <p>{speaker.designation}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {dateStartString.toJSON() > currentTime.toJSON() && (
            <div className="flex flex-center mt-m">
              <BasicModalDialog isPaid={isPaid} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
