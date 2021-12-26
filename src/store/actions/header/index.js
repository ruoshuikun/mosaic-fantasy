export default dispatch => {
    return {
        getUserStatus: (data) => {
            dispatch({type: "SET_MODALWALLET", state: data})
        },
        dispatch
    }
}
