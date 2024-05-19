export const Day = ({ day, handleDayChange }) => {
	return (
		<fieldset className='flex justify-start my-2'>
			<label
				htmlFor={day}
				className='bg-white w-f h-auto text-black cursor-pointer rounded-md p-1 ease-in duration-150 hover:bg-sky-500'
			>
				{day}
				<input
					type='radio'
					id={day}
					name='daysWeek'
					className='ml-1'
					defaultChecked={true}
					onChange={() => handleDayChange(day)}
				/>
			</label>
		</fieldset>
	);
};
