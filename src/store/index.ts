import { defineStore } from "pinia";
//global message
export const useCurrenInfo = defineStore('currentInfo', {
    state: () => ({
        robotInfo: {
            "sensor": {
                "seq": "302",
                "t1": "20.2",
                "h1": "30.7",
                "t2": "20.3",
                "h2": "27.6",
                "pm": "120",
                "o2": "20.7",
                "h2s": "0",
                "co": "0",
                "ch4": "0.1",
                "mic": "7",
                "cpu_t": "49.0"
            },
            "position": {
                "seq": "1821",
                "position": "298604",
                "ultrasonic": "307",
                "speed": "0.0"
            },
            "battery": {
                "seq": "302",
                "voltage": "26.1",
                "current": "-0.8",
                "th": "19.0",
                "tl": "19.0",
                "vh": "3.271",
                "vl": "3.266",
                "cap_t": "9.3",
                "cap_r": "5.6"
            },
            "warning":{
                "warning":"0"
            },
            "motor":{               
                    "seq": "65",
                    "m1_v": "-0.08",
                    "m1_i": "0.10",
                    "m1_t": "0",
                    "m2_v": "-0.14",
                    "m2_i": "-0.18",
                    "m2_t": "0"               
            }
        }
    }),
    getters: {
        
    },
    actions: {

    }
})

//muti & break
export const useDetectDeviceInfo = defineStore('detectDeviceInfo', {
    state: () => ({
        mutil: {},
        break: {}
    }),
    getters: {

    },
    actions: {

    }
})


//historyList
export const useHistoryInfo = defineStore('historyInfo', {
    state: () => ({
        infoList: {

        }
    }),
    getters: {

    },
    actions: {

    }
})