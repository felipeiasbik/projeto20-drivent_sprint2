import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import paymentsService from '../services/payments-service/index';
import { CardData }from '../protocols';

export async function getPayments(req: AuthenticatedRequest, res: Response){
    const {ticketId}: {ticketId?: string} = req.query;
    const {userId} = req;
    const paymentTicket = await paymentsService.getPayments(Number(ticketId), userId);
    res.status(httpStatus.OK).send(paymentTicket);
}

export async function createPayment(req: AuthenticatedRequest, res: Response){
    const {ticketId, cardData}: { ticketId?: string, cardData?: CardData} = req.body;
    const {userId} = req;

    const pay = await paymentsService.createPayment(Number(ticketId), cardData, userId);
    res.status(httpStatus.OK).send(pay);
}