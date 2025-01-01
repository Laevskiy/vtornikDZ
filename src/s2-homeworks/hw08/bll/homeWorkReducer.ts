import {UserType} from '../HW8'




type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up') {
                const z = state.sort(function (a:any, b:any) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })

                return z;
            }else{
                console.log("down")
                const z = state.sort(function (a:any, b:any) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })

                return z;


            }

        }
        case 'check': {
            console.log(action.payload)
            const a = state.filter((a:any)=>a.age>=action.payload)
            return a // need to fix
        }
        default:
            return state
    }
}
