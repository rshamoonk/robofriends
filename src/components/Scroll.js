import React from 'react'

const Scroll = (props) => {
	return (
		<div className='pa3' style={{overflowY: 'scroll', border: '1px solid black', height: '550px'}}>
			{props.children}
		</div>
	)
};

export default Scroll;