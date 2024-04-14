export const Day = ({ day }) => {
	return (
		<fieldset>
			<label
				htmlFor={day}
				className='bg-white w-f h-auto text-black cursor-pointer'
			>
				{day}
				<input type='radio' id={day} name='daysWeek' className='' />
			</label>
		</fieldset>
	);
};
