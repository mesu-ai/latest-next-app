import { Jwt } from "jsonwebtoken";


export function singJwtToken(payload, options={}){
  const secret= process.env.JWT_SECRET;
  const token= Jwt.sign(payload, secret, options);
  return token;
}


export function verifyJwtToken(token){

  try {

    const secret= process.env.JWT_SECRET;
    const payload= Jwt.verify(token, secret);

    return payload;
    
  } catch (error) {
    
    console.log({error});
    return null;
    
  }

}