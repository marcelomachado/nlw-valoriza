import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
	sub: string
}

export function ensureAuthentication(request: Request, response: Response, next: NextFunction){
	const authToken = request.headers.authorization;

	if(!authToken)
	{
		return response.status(401).end();
	}

	const [, token] = authToken.split(" ");
	
	try
	{
		const { sub: userId } = verify(token, "a") as IPayload;
		request.userId = userId;
 
		return next();

	}
	catch(err)
	{
		return response.status(401).end();
	}
}