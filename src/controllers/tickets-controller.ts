import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import ticketsService from '@/services/tickets-service';

export async function getTicketsTypes(req: AuthenticatedRequest, res: Response) {
    const types = await ticketsService.getTicketsTypes();
    res.status(httpStatus.OK).send(types);
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
    const userId = req.userId;
    const ticket = await ticketsService.getTickets(userId);
    res.status(httpStatus.OK).send(ticket);
}

export async function createTicket(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const ticket = await ticketsService.createTicket(userId, req.body.ticketTypeId);
    res.status(httpStatus.CREATED).send(ticket);
}