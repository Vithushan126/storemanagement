import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const Popup = (props) => {
  //   const [openPopup, setOpenPopup] = React.useState(false);
  //   const handleOpen = () => setOpenPopup(true);
  //   const handleClose = () => setOpenPopup(false);
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <div>
      <Box>
        <Dialog open={openPopup}>
          <DialogTitle>
            <div>Enter the Categorie</div>
          </DialogTitle>
          <DialogContent>{children}</DialogContent>
        </Dialog>
      </Box>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={openPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </div>
  );
};

export default Popup;
