export const Hour = ({ hour }) => {
	return (
		<fieldset>
			<label htmlFor='hour'>{hour}</label>
			<input type='radio' name='hour' id={hour} />
		</fieldset>
	);
};
