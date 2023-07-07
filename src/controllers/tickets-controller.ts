import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';

export async function getTicketsTypes(req: AuthenticatedRequest, res: Response) {
    res.status(httpStatus.OK).send("okok")
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
    res.status(httpStatus.OK).send("okokok")
}

export async function createTicket(req: AuthenticatedRequest, res: Response) {
    res.status(httpStatus.OK).send("okokokok")
}