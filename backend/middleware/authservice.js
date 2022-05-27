import jwt from "jsonwebtoken";
const secret = process.env.SECRET

const auth = async (req, res, next) => {
  try {
  
    const token = req.headers.authorization.split(" ")[1];
   
  if (token && isCustomAuth) {      
      let DecodedData = jwt.verify(token,secret);
      req.userId = DecodedData?.id;
     }   

    next();
  } catch (error) {
 
  }
};

export default auth;
