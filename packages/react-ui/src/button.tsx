export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button className="bg-primary-800 px-10" type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
