interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	disableShadow?: boolean;

	variant?: "outline" | "text";
	size?: "sm" | "md" | "lg";
	color?: "default" | "primary" | "secondary" | "danger";
	startIcon?: string;
	endIcon?: string;

	children?: string;
}

import "./Button.css";

export const Button: React.FC<Props> = ({
	disabled = false,
	disableShadow = false,
	variant,
	size = "md",
	color = "default",
	startIcon,
	endIcon,
	children,
	...props
}) => {
	let classes = "btn";
	disableShadow && (classes += " btn--noShadow");
	variant && (classes += ` btn--${variant}`);
	size !== "md" && (classes += ` btn--${size}`);
	color !== "default" && (classes += ` btn--${color}`);

	return (
		<button className={classes} disabled={disabled} {...props}>
			{startIcon && (
				<span className="material-symbols-rounded btn__icon">{startIcon}</span>
			)}
			{children}
			{endIcon && (
				<span className="material-symbols-rounded btn__icon">{endIcon}</span>
			)}
		</button>
	);
};
