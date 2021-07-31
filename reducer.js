export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null, 
    //token:"BQB6BvrE9KSnZyVoL7pKwpG6qK6dmhN6aX_4zv5HBBoUUb3jYx…bT_RWS9jI9jDkH03fXVAkPK8ofMf89UE-VdKcmr5IAJM--nvo"
};

const reducer = (state,action) => {
console.log(action);

switch(action.type) {
    case 'SET_USER':
        return {
            ...state,
            user: action.user,
        }
        
    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token,
        }
    case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists: action.playlists,
        }
    case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        }    
    default:
        return state;
            
}
}
export default reducer;