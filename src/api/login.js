import request from '@/utils/request'
export function login(username,password) {
    return request({
        url: '/sms/admin/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}
