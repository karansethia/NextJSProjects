import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { tickets } from '@/db/schema'
import { z } from 'zod'

export const insertTicketSchema = createInsertSchema(tickets,  {
  id: z.union([z.number(), z.literal("(New)")]),
  title: (schema) => schema.min(1, "Title is required"),
  description: (schema) => schema.min(1, "Description is required"),
  tech: (schema) => schema.email("Invalid email")
})

export const selectTicketSchema = createSelectSchema(tickets)

export type InsertTicketSchemaType = typeof insertTicketSchema._type;

export type SelectTicketSchemaType = typeof selectTicketSchema._type 
