import { Request, Response } from "express";
import { ListUserSentComplimentService } from "../services/listusersentcomplimentservice";



class ListUserSentComplimentController{

	async handle(request: Request, response: Response){
		const { userId } = request;

		const listUserSentComplimentService = new ListUserSentComplimentService();

		const compliments = await listUserSentComplimentService.execute(userId);
		return response.json(compliments);
	}
}

export { ListUserSentComplimentController };