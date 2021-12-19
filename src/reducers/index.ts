import { HYDRATE } from "next-redux-wrapper";

interface UserInfo {
    user: User,
    posts: {
        mainPosts: any[]
    }
}
interface User {
    setIsLoggedIn: boolean,
    user: null,
    signUpData: {},
    loginData: {}
}

const initState:UserInfo = {
    user: {
        setIsLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {}
    },
    posts: {
        mainPosts: []
    },

}

export const loginAction  = (data: any) => {
    return {
        type: "LOGIN",
        data
    }

}


export const logOutAction  = (data: any) => {
    return {
        type: "LOGOUT",
        data
    }

}
// action - object

// 액션을 만들어주는 함수
// 액션을 직접써주는 것보다 함수를 만들어주자!


// async action creator 비동기 리덕스 saga


// (이전상태 , 액션) => 다음상태
export const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case HYDRATE:
            console.log(HYDRATE, action);
            return {...state, ...action.paylod}
        case "LOGIN":
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data
                }
            }
        case "LOGOUT":
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null
                }
            }
        default:
            return state;
    }
}