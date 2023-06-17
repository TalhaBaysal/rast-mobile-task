import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { ISocialMedia } from "../model";
import { initialSocialMedia } from "../constants/initialValues.ts";
import { addSocialMedia } from "./../services";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  setData: React.Dispatch<React.SetStateAction<ISocialMedia[]>>;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, setData }) => {
  const formik = useFormik({
    initialValues: initialSocialMedia,
    validationSchema: null,
    onSubmit: (newData) => {
      addSocialMedia({ newData, setData });
      onClose();
    },
  });

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box id="dialogContainer">
          <div className="icon-container">
            <Close onClick={onClose} className="close-dialog-icon" />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
              <div>
                <label className="input-label">Sosyal Medya Linki</label>
                <TextField
                  name="link"
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  onChange={formik.handleChange}
                  inputProps={{
                    style: {
                      WebkitBoxShadow: "0 0 0 #E8F0FF inset",
                      borderRadius: "50px",
                    },
                  }}
                />
              </div>
              <div>
                <label className="input-label">Sosyal Medya Adı</label>
                <TextField
                  name="name"
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  onChange={formik.handleChange}
                  inputProps={{
                    style: {
                      WebkitBoxShadow: "0 0 0 #E8F0FF inset",
                      borderRadius: "50px",
                    },
                  }}
                />
              </div>
              <div>
                <label className="input-label">Açıklama</label>
                <TextField
                  name="description"
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  onChange={formik.handleChange}
                  inputProps={{
                    style: {
                      WebkitBoxShadow: "0 0 0 #E8F0FF inset",
                      borderRadius: "50px",
                    },
                  }}
                />
              </div>
            </div>
            <div className="button-container">
              <Button
                style={{ color: "#744bfc", background: "#F5F7FF" }}
                variant="contained"
                onClick={onClose}
              >
                Vazgeç
              </Button>
              <Button variant="contained" type="submit">
                Kaydet
              </Button>
            </div>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Dialog;
