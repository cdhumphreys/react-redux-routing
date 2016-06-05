function posts(state = [], action) {
	const { type, index } = action
	switch (type) {
		case 'INCREMENT_LIKES':
		// copy all the array elements from state[0] to state[index-1] into a new array
		// copy the object at state[index] and replace the likes with likes+1
		// copy all the array elements from state[index+1] to end into the new array
			const newState = [
				...state.slice(0, index),
				{...state[index], likes: state[index].likes + 1},
				...state.slice(index+1)
			];
			return newState;
		default:
			return state;
	}
}

export default posts;