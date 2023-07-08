import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import ticketsService from '@/services/tickets-service';

export async function getTicketsTypes(req: AuthenticatedRequest, res: Response) {
    const types = await ticketsService.getTicketsTypes();
    res.status(httpStatus.OK).send(types);
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
    res.status(httpStatus.OK).send("okokok")
}

export async function createTicket(req: AuthenticatedRequest, res: Response) {
    res.status(httpStatus.OK).send("okokokok")
}