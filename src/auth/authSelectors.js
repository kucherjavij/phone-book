const getIsLoggedIn = state => state.auth.isLoggedIn
const getUserName = state => state.auth.user.name
const getRefreshing = state => state.auth.isRefreshing

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getRefreshing,
}

export default authSelectors