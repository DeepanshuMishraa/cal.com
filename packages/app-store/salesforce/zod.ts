import { z } from "zod";

import { eventTypeAppCardZod } from "../eventTypeAppCardZod";

export const appDataSchema = eventTypeAppCardZod;

export const appKeysSchema = z.object({
  consumer_key: z.string().min(1),
  consumer_secret: z.string().min(1),
});
