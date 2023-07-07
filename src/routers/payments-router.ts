import { Router} from "express";
import { createPayment, getPayments } from "../controllers/payments-controller";
import { authenticateToken } from "../middlewares";

const paymentRouter = Router();

paymentRouter.get("/", authenticateToken, getPayments);
paymentRouter.post("/process", authenticateToken, createPayment);

export { paymentRouter };