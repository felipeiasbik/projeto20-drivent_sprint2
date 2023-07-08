import { prisma } from "../../config";


async function getTicketsTypes(){
    return await prisma.ticketType.findMany();
}

const ticketsRespository = {
    getTicketsTypes
}

export default ticketsRespository;