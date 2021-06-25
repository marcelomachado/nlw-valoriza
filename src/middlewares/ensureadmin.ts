import {Request, Response, NextFunction} from "express";
import { getCustomRepository } from "typeorm";
import { User } from "../entities/user";
import { UsersRepositories } from "../repositories/usersrepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
	const { userId } = request;

	const usersRepository = getCustomRepository(UsersRepositories);

	const { admin } = await usersRepository.findOne(userId) as User;

	if(admin){
		return next();
	}
	return response.status(401).json({error: "User is not allowed to access this resource."})
}