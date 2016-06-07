function postComment(state=[], action) {
	const {type, author, comment} = action;
	switch (type) {
		case 'ADD_COMMENT':
		//take previous collection of comments and add on the new comment	
			const stateWithNewComment = [
				...state,
				{
					text: comment,
					user: author
				}
			];
			return stateWithNewComment;

		case 'REMOVE_COMMENT':
			const {postID, index} = action;

			const stateWithRemovedComment = [
				...state.slice(0, index),
				...state.slice(index+1)
			];
			return stateWithRemovedComment;

		default:
			return state;
	}

}

function comments(state = [], action) {
	const { postID } = action;
	if (postID !== 'undefined') {
		return {
			...state,
			// only pass the relevant part of the state (the comments of the particular post) & the relevant data (action)	
			[postID]: postComment(state[postID], action)
		}	

	}
	return state
}

export default comments;