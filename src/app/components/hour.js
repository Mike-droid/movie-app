export const Hour = ({ hour }) => {
	return (
		<fieldset>
			<label htmlFor={hour} className='cursor-pointer'>
				{hour}
			</label>
			<input type='radio' name='hour' id={hour} />
		</fieldset>
	);
};
