import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/tagsrepositories";
import { classToPlain } from "class-transformer";

class ListTagService {
	async execute(){
		const tagsRepositories = getCustomRepository(TagsRepositories);

		const tags = await tagsRepositories.find();

		return classToPlain(tags);

	}
}

export { ListTagService }; 