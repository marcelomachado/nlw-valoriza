import { Request, Response } from "express";
import { ListUserReceivedComplimentService } from "../services/listuserreceivedcomplimentservice";



class ListUserReceivedComplimentController{

	async handle(request: Request, response: Response){
		const { userId } = request;

		const listUserReceivedComplimentService = new ListUserReceivedComplimentService();

		const compliments = await listUserReceivedComplimentService.execute(userId);
		return response.json(compliments);
	}
}

export { ListUserReceivedComplimentController };