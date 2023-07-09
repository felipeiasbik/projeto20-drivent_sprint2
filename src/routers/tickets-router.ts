import { Router} from "express";
import { createTicket, getTickets, getTicketsTypes } from "../controllers/tickets-controller";
import { authenticateToken, validateBody } from "../middlewares";
import { ticketTypeSchema } from "../schemas/tickets-schema";

const ticketRouter = Router();

ticketRouter.get("/types", authenticateToken, getTicketsTypes);
ticketRouter.get("/", authenticateToken, getTickets);
ticketRouter.post("/", authenticateToken, validateBody(ticketTypeSchema), createTicket);

export { ticketRouter };