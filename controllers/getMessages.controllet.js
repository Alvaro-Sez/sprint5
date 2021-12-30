module.exports = function buildGetMessages({listMessages}){
    return async function getMessages(httpRequest){
        try{
            const {username} = httpRequest.body
            const messages = await listMessages(username);
            return {
                headers: {
                    'Content-Type' : 'application/json',
                },
                statusCode:200,
                body: messages
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