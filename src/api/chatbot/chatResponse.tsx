import { instance } from "../instance";


export const chatResponses = async (endPoint:string, data:string) => {
    try{
        console.log("질문 : ", data);
        const result = await instance.post(`${endPoint}`, {question : data});
        if(result.status === 200 && result.data) {
            return {data : result.data, success : true};
        }else{
            return {data : null, success : false};
        }

    }catch(err){
        console.error(err);
        throw err;
    }
};

