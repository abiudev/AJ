type ButtonProps = {
  type: "button" | "submit";
  icon?: string;
  label: string;
};
const Button = ({ type, icon, label }: ButtonProps) => {
  return (
    <button type={type}>
      {icon && <span className="icon-class">{icon}</span>}
      <span className="bold-16 whitespace-nowrap">{label}</span>{" "}
    </button>
  );
};

export default Button;
