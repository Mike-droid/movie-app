export const Hour = ({ hour, handleHourChange }) => {
	return (
		<fieldset className='border border-white rounded-md w-fit p-2 ease-in duration-200 hover:bg-slate-500'>
			<label htmlFor={hour} className='cursor-pointer'>
				{hour}
			</label>
			<input
				type='radio'
				name='hour'
				id={hour}
				className='ml-1'
				defaultChecked={true}
				onChange={() => handleHourChange(hour)}
			/>
		</fieldset>
	);
};
