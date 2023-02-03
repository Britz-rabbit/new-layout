import { defineStore } from "pinia";

//模拟异步
type User = {
    name: string,
    currentCount: number
}

const Login = (): Promise<User> => {
    return new Promise((res) => {
        setTimeout(() => {
            res({
                name: 'zmm',
                currentCount: 2
            })
        }, 2000);
    })
}

export const UseTestInfo = defineStore('testInfo', {
    state: () => ({
        currentCount: 1,
        name: 'zjh'
    }),

    getters: {

    },
    actions: {
        async getLoginInfo(){
            console.log('获取用户信息');
            const res = await Login();
            this.name = res.name;
            console.log(res);//获取到名字后，才会打印
            console.log(this.name);
        }
    }
})