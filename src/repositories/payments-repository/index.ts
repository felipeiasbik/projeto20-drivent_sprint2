import { prisma } from "../../config";

export async function getPayments(id: any){
    return await prisma.payment.findMany({
        where: {
            id
        }
    });
}

const paymentsRepository = {
    getPayments
}

export default paymentsRepository;