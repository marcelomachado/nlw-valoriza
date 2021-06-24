import { Request, Response } from "express";
import { CreateComplimentService } from "../services/createcomplimentservice";


class CreateComplimentController {
	async handle(request: Request, response: Response){
		const { tag_id: tagId, user_sender_id:userSenderId, user_receiver_id:userReceiverId, message} = request.body;

		const createComplimentService = new CreateComplimentService();
		const compliment = await createComplimentService.execute({tagId, userSenderId, userReceiverId, message});

		return response.json(compliment);
	}
}

export { CreateComplimentController }