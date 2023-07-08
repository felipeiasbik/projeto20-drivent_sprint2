import { Router} from "express";
import { createTicket, getTickets, getTicketsTypes } from "../controllers/tickets-controller";
import { authenticateToken, validateBody } from "../middlewares";
import { signInSchema } from "../schemas";

const ticketRouter = Router();

ticketRouter.get("/types", authenticateToken, getTicketsTypes);
ticketRouter.get("/", authenticateToken, getTickets);
ticketRouter.post("/", authenticateToken, createTicket);

export { ticketRouter };