type ButtonProps = {
  type: "button" | "submit";
  href?: string;
  icon?: string;
  label: string;
  className?: string;
  onClick?: () => void;
};
const Button = ({ type, icon, label, className }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {icon && <span className="icon-class">{icon}</span>}
      <span className="bold-16 whitespace-nowrap">{label}</span>{" "}
    </button>
  );
};

export default Button;
