
const Row = ({ children }) => {
	return (
		<div className='grid gap-8 grid-flow-row grid-cols-12 py-10'>
			{children}
		</div>
	)
}

export default Row;