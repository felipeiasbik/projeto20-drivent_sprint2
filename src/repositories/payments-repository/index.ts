import { prisma } from "../../config";
import { CardData } from "../../protocols";

export async function getPayments(ticketId: number){
    return await prisma.payment.findFirst({
        where: {
            ticketId
        }
    });
}

export async function createPayment(ticketId: number, value: number, cardData: CardData){
    return await prisma.payment.create({
        data: {
            ticketId,
            value,
            cardIssuer: cardData.issuer,
            cardLastDigits: cardData.number.toString().slice(-4), 
            updatedAt: new Date(Date.now())
        }
    });
}

const paymentsRepository = { getPayments, createPayment }

export default paymentsRepository;