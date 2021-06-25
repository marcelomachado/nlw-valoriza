import { Request, Response } from "express";
import { CreateTagService } from "../services/createtagservice";


class CreateTagController {
	async handle(request: Request, response: Response){
		const { name, color } = request.body;

		const createTagService = new CreateTagService();
		const tag = await createTagService.execute({name, color});

		return response.json(tag);
	}
}

export { CreateTagController }