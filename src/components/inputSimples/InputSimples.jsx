export default function InputSimples({
  label,
  height,
  width,
  required,
  value,
  change,
}) {
  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const styleInput = {
    height: height,
    width: width,
    borderRadius: "5px",
    border: "1px solid lightgray",
    outline: "none",
  };

  return (
    <div style={container}>
      <span style={{ marginBottom: "5px" }}>
        {label}
        {required && " *"}
      </span>
      <input
        style={styleInput}
        value={value}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
