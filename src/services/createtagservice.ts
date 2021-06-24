import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/tagsrepositories";


interface ITagRequest
{
	name: string,
	color?:string
}

class CreateTagService {

	async execute( { name, color } : ITagRequest){
		const tagRepository = getCustomRepository(TagsRepositories);
		if(!name)
		{
			throw new Error("Name incorrect for tag.")
		}

		const tagAlreadyExists = await tagRepository.findOne({name});

		if(tagAlreadyExists)
		{
			throw new Error("Tag already exists.");
		}
		let tag;
		if(color)
		{
			tag = tagRepository.create({name, color});
		}
		else
		{
			tag = tagRepository.create({name});
		}

		await tagRepository.save(tag);

		return tag;
	}
}

export {CreateTagService}