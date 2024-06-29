import jwt from 'jsonwebtoken';


const verifyJWT = (req,res,next) => {
    const token = req.cookies?.jwt;
    if(!token){
        return res.status(403).json({message : "No JWT token"})
    }
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET,{});
      req.user = user;
      next
    } catch (err) {
      console.error('JWT verification failed:', err);
      return null; // Or handle the error as needed
    }
    next()
  };

export {verifyJWT};