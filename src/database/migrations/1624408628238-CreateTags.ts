import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTags1624408628238 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "tags",
			columns: [
				{
					name: "id",
					type: "uuid",
					isPrimary: true
				},
				{
					name: "name",
					type: "varchar"
				},
				{
					name: "color",
					type: "varchar",
					default: "'#aaaaaa'"
				},
				{
					name: "created_at",
					type: "timestamp",
					default: "now()"
				},
				{
					name: "updated_at",
					type: "timestamp",
					default: "now()"
				}
			]
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("tags");
	}

}
