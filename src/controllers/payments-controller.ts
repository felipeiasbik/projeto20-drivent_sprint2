import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import paymentsService from '../services/payments-service/index';

export async function getPayments(req: AuthenticatedRequest, res: Response){
    const {ticketId}: {ticketId?: string} = req.query;
    console.log(`AQUI ${ticketId}`)
    const {userId} = req;
    const paymentTicket = await paymentsService.getPayments(Number(ticketId), userId);
    res.status(httpStatus.OK).send(paymentTicket);
}

export async function createPayment(req: AuthenticatedRequest, res: Response){
    res.status(httpStatus.OK).send("Pagou");
}