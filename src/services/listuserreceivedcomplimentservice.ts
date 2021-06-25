import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/complimentsrepositories";

class ListUserReceivedComplimentService {
	async execute(userId: string){
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

		const compliments = await complimentsRepositories.find({
			where: {
				userReceiverId: userId
			},
			relations: ["userSender", "userReceiver", "tag"]
		});

		return compliments;

	}
}

export { ListUserReceivedComplimentService }; 