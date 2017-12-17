import Immutable from 'seamless-immutable';

import endpoints from 'core/endpoints';

import history from 'browserHistory';

const types = {
    SET_AUTH_TOKEN: 'SET_AUTH_TOKEN',
    SET_ME: 'SET_ME',
};


const initialState = Immutable({
    authToken: window.localStorage.getItem('authToken') || '',
    me: {},
});


export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_AUTH_TOKEN:
            return {
                ...state,
                authToken: action.payload,
            };
        case types.SET_ME:
            return {
                ...state,
                me: action.payload,
            };
        default:
            return state;
    }
}


const setAuthToken = token => (
    (dispatch) => {
        window.localStorage.setItem('authToken', token);
        dispatch({
            type: types.SET_AUTH_TOKEN,
            payload: token,
        });
    }
);

const setMe = data => ({
    type: types.SET_ME,
    payload: data,
});


function logIn(username, password) {
    return (dispatch) => {
        fetch(endpoints.auth, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then(response => response.json()).then(
            (data) => {
                dispatch(setAuthToken(data.key));
                history.push('/');
            },
        );
    };
}

function logout() {
    return (dispatch) => {
        dispatch(setAuthToken(''));
        history.push('/');
    };
}

function checkTokenOrRedirectToLoginPage() {
    return (dispatch, getState) => {
        const {authToken} = getState().auth;
        if (!authToken) {
            history.push('/login/');
        } else {
            fetch(endpoints.me, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${authToken}`,
                },
            }).then((response) => {
                if (!response.ok) {
                    dispatch(setAuthToken(''));
                    history.push('/login/');
                }
                return response.json();
            }).then(
                (data) => {
                    dispatch(setMe(data));
                },
            );
        }
    };
}

export const actions = {
    logIn,
    logout,
    checkTokenOrRedirectToLoginPage,
};
