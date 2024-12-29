import jwt from "jsonwebtoken";

export const getDataFromToken = async (request) => {
    try {
        const encodedToken = request.cookies.get('token')?.value || '';
        const decodedToken = jwt.verify(encodedToken, process.env.TOKEN_SECRET)

        console.log(decodedToken);
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
    }
}