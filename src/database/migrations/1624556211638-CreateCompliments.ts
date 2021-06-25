import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1624556211638 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "compliments",
			columns: [
				{
					name: "id",
					type: "uuid",
					isPrimary: true

				},
				{
					name: "user_sender_id",
					type: "uuid",
				},
				{
					name: "user_receiver_id",
					type: "uuid",
				},
				{
					name: "tag_id",
					type: "uuid",
				},
				{
					name: "message",
					type: "varchar",
				},
				{
					name: "created_at",
					type: "timestamp",
					default: "now()"
				}
			],
			foreignKeys: [
				{
					name: "FKComplimentUserSender",
					columnNames: ["user_sender_id"],
					referencedTableName: "users",
					referencedColumnNames: ["id"],
					onDelete: "SET NULL",
					onUpdate: "CASCADE"
				},
				{
					name: "FKComplimentUserReceiver",
					columnNames: ["user_receiver_id"],
					referencedTableName: "users",
					referencedColumnNames: ["id"],
					onDelete: "SET NULL",
					onUpdate: "CASCADE"
				},
				{
					name: "FKComplimentTag",
					columnNames: ["tag_id"],
					referencedTableName: "tags",
					referencedColumnNames: ["id"],
					onDelete: "SET NULL",
					onUpdate: "CASCADE"
				},
			]
		}))
	}

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("compliments");
    }

}
