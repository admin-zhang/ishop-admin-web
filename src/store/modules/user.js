import {login, logout, getInfo} from '@/api/login'
import {resetRouter} from '@/router'

const user = {
    state: {
        name: '',
        avatar: '',
        roles: []
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },

    actions: {
        // user login
        login({commit}, userInfo) {
            const {username, password} = userInfo
            return new Promise((resolve, reject) => {
                login(username,password).then(response => {
                    const {data} = response
                    commit('SET_TOKEN', data.token)
                    setToken(data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}
export default user

