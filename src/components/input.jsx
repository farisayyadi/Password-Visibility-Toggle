export const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
};
