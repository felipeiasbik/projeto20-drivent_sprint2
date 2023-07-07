import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';

export async function getPayments(req: AuthenticatedRequest, res: Response){
    res.status(httpStatus.OK).send("Viu pgts");
}

export async function createPayment(req: AuthenticatedRequest, res: Response){
    res.status(httpStatus.OK).send("Pagou");
}