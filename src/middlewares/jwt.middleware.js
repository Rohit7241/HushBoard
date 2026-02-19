
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const uservisit=asyncHandler(async(req,res)=>{
    const {token}=req.cookies.hushtoken;
    if(!token){
        const userid=uuidv4();
        const newToken = jwt.sign(
                { userId },
                process.env.JWT_SECRET,
                { expiresIn: "24h" }
                );
         res.cookie("hushToken", newToken, {
                httpOnly: true,
                secure: true,
                sameSite: "Strict",
                maxAge: 24 * 60 * 60 * 1000
            });
        req.user=userid;
    }
    else{
        try {
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=decoded;
        } catch (error) {
            return res.clearCookie("hushtoken")
        }
    }
    next();
})

export default uservisit;