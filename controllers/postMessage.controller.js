module.exports = function buildPostMessage({addMessage}){
    return async function postMessage(httpRequest){
        try{
            const body = httpRequest.body
            const response = await addMessage(body)
            return {
                headers: {
                    'Content-Type' : 'application/json',
                },
                statusCode:201,
                body:  response 
            }
        } catch (e) {
            console.log(e)

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 404,
                body:{
                    error: e.message
                }
            }
        }
    }
}