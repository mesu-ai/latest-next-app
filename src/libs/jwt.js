import { Jwt } from "jsonwebtoken";


export function singJwtToken(payload, options={}){
  console.log({payload, options});
  const secret= process.env.JWT_SECRET;
  console.log({secret})
  const token= Jwt.sign(payload, secret, options);
  console.log({token})  
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