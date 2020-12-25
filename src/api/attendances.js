import axios from './index';
export const CreateCheckInAttendances=(user,shift,note)=>{
    return axios.post("/attendances",{
        user,
        shift,
        note
    })
}
export const GetListAttendances=()=>{
    return axios.get("/attendances");
}