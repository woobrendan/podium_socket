import Classification from "./Classification";
import InputContainer from "./InputContainer";

const EditVehicle = ({ entry, onInputChange, classification, series }) => {
  return (
    <section className="input_vehicle_container">
      <Classification
        onInputChange={onInputChange}
        classification={classification}
        series={series}
      />
      <InputContainer
        val={entry.number}
        name="number"
        onInputChange={onInputChange}
        label="Number"
      />
      <InputContainer
        val={entry.vehicle}
        name="vehicle"
        onInputChange={onInputChange}
        label="Vehicle"
      />
    </section>
  );
};

export default EditVehicle;
