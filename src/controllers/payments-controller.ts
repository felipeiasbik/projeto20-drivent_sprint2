import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import paymentsService from '../services/payments-service/index';

export async function getPayments(req: AuthenticatedRequest, res: Response){
    const ticketId = Number(req.query.ticketId);
    const {userId} = req;
    const paymentTicket = await paymentsService.getPayments(ticketId, userId);
    res.status(httpStatus.OK).send(paymentTicket);
}

export async function createPayment(req: AuthenticatedRequest, res: Response){
    res.status(httpStatus.OK).send("Pagou");
}