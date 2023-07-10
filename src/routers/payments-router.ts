import { Router} from "express";
import { createPayment, getPayments } from "../controllers/payments-controller";
import { authenticateToken, validateBody } from "../middlewares";
import { paymentSchema } from "../schemas/payments-schema";

const paymentRouter = Router();

paymentRouter.get("/", authenticateToken, getPayments);
paymentRouter.post("/process", authenticateToken, validateBody(paymentSchema), createPayment);

export { paymentRouter };