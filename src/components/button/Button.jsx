const Button = ({ handelCounter }) => {
  return (
    <>
      <button
        onClick={() => {
          handelCounter("Pre");
        }}
      >
        Pre
      </button>

      <button
        onClick={() => {
          handelCounter("Next");
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          handelCounter("reset");
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Button;
