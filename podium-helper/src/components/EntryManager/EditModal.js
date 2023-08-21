import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import "../../Styling/modal.scss";
import EditDriver from "./EditDriver";
import EditVehicle from "./EditVehicle";
import { useDispatch } from "react-redux";
import { entryActions } from "../../store/entry_slice";

const EditModal = ({ entry, handleToggle, show }) => {
  const [modalEntry, setModalEntry] = useState({
    ...entry,
    driver1: { ...entry.driver1 },
    ...(entry.driver2 ? { driver2: { ...entry.driver2 } } : {}),
  });
  const [toBeDeleted, setToBeDeleted] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    // no errors
    handleToggle();
    dispatch(entryActions.updateEntry(modalEntry));
  };

  const onInputChange = (e) => {
    setModalEntry((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onDriverChange = (e) => {
    const nameVal = e.target.name;
    let keyVal = "";
    const driverNum = nameVal.includes("1") ? "driver1" : "driver2";

    if (nameVal.includes("nationality")) {
      keyVal = "nationality";
    } else if (nameVal.includes("name")) {
      keyVal = "name";
    } else {
      keyVal = "rating";
    }

    setModalEntry((prev) => ({
      ...prev,
      [driverNum]: {
        ...prev[driverNum],
        [keyVal]: e.target.value,
      },
    }));
  };

  const handleDelete = (entry) => {
    dispatch(entryActions.removeEntry(entry));
    handleToggle();
  };

  const duo = modalEntry.driver2 ? "two_driver" : "single_driver";

  return (
    <Modal open={show} onClose={handleToggle}>
      <Box id="edit_modal">
        <Button
          variant="outlined"
          color="error"
          className="edit_modal_delete"
          data-testid="modal_delete"
          onClick={() => setToBeDeleted(!toBeDeleted)}
        >
          {toBeDeleted ? "Cancel" : "Delete Entry"}
        </Button>
        <h1>{modalEntry.team}</h1>
        <h2>Series: {modalEntry.series}</h2>
        <EditVehicle
          entry={modalEntry}
          onInputChange={onInputChange}
          classification={modalEntry.classification}
        />
        <section className={`input_driver_container ${duo}`}>
          <EditDriver
            entry={modalEntry}
            onChange={onDriverChange}
            driverNum="1"
          />
          {modalEntry.driver2 && (
            <EditDriver
              entry={modalEntry}
              onChange={onDriverChange}
              driverNum="2"
            />
          )}
        </section>
        <Button
          variant="outlined"
          color="error"
          className="edit_modal_update"
          onClick={(e) => handleSubmit(e)}
        >
          Update
        </Button>
        {toBeDeleted && (
          <Button
            variant="contained"
            color="error"
            data-testid="modal_delete_confirm"
            onClick={() => handleDelete(modalEntry)}
          >
            Confirm Delete
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default EditModal;
