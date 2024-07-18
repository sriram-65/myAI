import { serial, varchar } from "drizzle-orm/mysql-core";
import { pgTable, text } from "drizzle-orm/pg-core";

export const AIoutput = pgTable("aiOutput" , {
    id:serial('id').primaryKey(),
    FormData:varchar("FormData").notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt')

})