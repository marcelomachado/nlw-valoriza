import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/complimentsrepositories";

class ListUserSentComplimentService {
	async execute(userId: string){
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

		const compliments = await complimentsRepositories.find({
			where: {
				userSenderId: userId
			},
			relations: ["userSender", "userReceiver", "tag"]
		});

		return compliments;

	}
}

export { ListUserSentComplimentService }; 