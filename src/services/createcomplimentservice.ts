import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/usersrepositories";
import { hash } from "bcryptjs";
import { ComplimentsRepositories } from "../repositories/complimentsrepositories";

interface IComplimentRequest
{
	tagId: string;
	userSenderId: string;
	userReceiverId: string;
	message: string;
}

class CreateComplimentService {

	async execute({tagId, userSenderId, userReceiverId, message} : IComplimentRequest){
		const userRepository = getCustomRepository(UsersRepositories);
		const complimentRepository = getCustomRepository(ComplimentsRepositories);


		if(userSenderId  === userReceiverId)
		{
			throw new Error("You can't send a compliment to yourself.")
		}

		const userReceiverExists = userRepository.findOne(userReceiverId); 

		if(!userReceiverExists)
		{
			throw new Error("User Receiver does not exists.");
		}

		if(!message)
		{
			throw new Error("Message can't be empty.");
		}

		const compliment = complimentRepository.create({message, userSenderId, userReceiverId, tagId});

		await complimentRepository.save(compliment);

		return compliment;
	}
}

export {CreateComplimentService}