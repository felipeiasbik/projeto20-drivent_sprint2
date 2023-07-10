import { prisma } from "../../config";

export async function getPayments(ticketId: number){
    return await prisma.payment.findFirst({
        where: {
            ticketId
        }
    });
}

const paymentsRepository = {
    getPayments
}

export default paymentsRepository;