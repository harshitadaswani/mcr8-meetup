import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { useMeetup } from "../../contexts/Meetup";

// eslint-disable-next-line react/prop-types
export function BasicModalDialog({ isPaid }) {
  const [open, setOpen] = React.useState(false);
  const { rsvpStatus, updateRsvpStatus } = useMeetup();
  return (
    <React.Fragment>
      <Button
        style={{ backgroundColor: "#f65858", color: "white" }}
        className="border-none outline-none pt-s pl-m pr-m pb-s width-50 fw-bold br-m"
        onClick={() => setOpen(true)}
        disabled={rsvpStatus}
      >
        {rsvpStatus ? "Already RSVPed" : "RSVP"}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            Complete your RSVP
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            textColor="text.tertiary"
          >
            Fill in your personal information.
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
              updateRsvpStatus(true);
              console.log(rsvpStatus);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name:</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Email:</FormLabel>
                <Input type="email" required />
              </FormControl>
              {isPaid && (
                <Typography
                  id="basic-modal-dialog-description"
                  textColor="text.tertiary"
                >
                  * You have to make the payment at the venue.
                </Typography>
              )}
              <Button
                type="submit"
                style={{ backgroundColor: "#f65858", color: "white" }}
              >
                RSVP
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
