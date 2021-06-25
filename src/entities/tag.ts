import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

import { Expose } from "class-transformer";

@Entity("tags")
class Tag {
	@PrimaryColumn()
	readonly id: string;
	@Column()
	name: string;
	@Column({default: "#aaaaaa"})
	color: string;
	@CreateDateColumn({name: "created_at"})
	createdAt: Date;
	@UpdateDateColumn({name: "updated_at"})
	updatedAt: Date;

	@Expose({name: "customName"})
	customName(): string {
		return `#${this.name}`;
	}

	constructor(){
		if(!this.id)
		{
			this.id = uuid();
		}
	}
}

export { Tag }
