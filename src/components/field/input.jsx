function input({ placeholder = "Your Name *" }) {
	return (
		<>
			<input
				type="text"
				placeholder={placeholder}
				className="input border-2 rounded-xl input-lg input-error outline_css w-full"
			/>
		</>
	);
}

export default input;
