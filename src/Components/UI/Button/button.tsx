import React, { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
	return (
		<button className="read_more_btn" {...props}>
			{props.children}
		</button>
	);
};

export default Button;
