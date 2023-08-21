import InputContainer from "./InputContainer";

const EditDriver = ({ entry, onChange, driverNum }) => {
  const driver = `driver${driverNum}`;
  return (
    <section className={`input_driver_container_${driverNum}`}>
      <InputContainer
        val={entry[driver].name}
        name={`driver ${driverNum} name`}
        onInputChange={onChange}
        label={`Driver ${driverNum}`}
      />
      <InputContainer
        val={entry[driver].nationality}
        name={`driver ${driverNum} nationality`}
        onInputChange={onChange}
        label="Nationality"
      />
      <InputContainer
        val={entry[driver].rating}
        name={`driver ${driverNum} rating`}
        onInputChange={onChange}
        label="FIA Rating"
      />
    </section>
  );
};

export default EditDriver;
