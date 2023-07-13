import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useMeetup } from "../../contexts/Meetup";

export function Dropdown() {
  const { updateEventsType } = useMeetup();
  const handleEventChange = (event) => {
    updateEventsType(event.target.textContent);
  };
  return (
    <Select
      placeholder="Select Event Type"
      indicator={<KeyboardArrowDown />}
      size="md"
      onChange={handleEventChange}
      variant="plain"
    >
      <Option value="online">Online</Option>
      <Option value="offline">Offline</Option>
      <Option value="both">Both</Option>
    </Select>
  );
}
