import { prisma } from "../../config";

async function getTicketsTypes(){
    return await prisma.ticketType.findMany();
}

async function getTickets(enrollmentId: number){
    return await prisma.ticket.findFirst({
        include: {
            TicketType: true
        },
        where: {
            enrollmentId
        }
    });
}

async function createTicket(enrollmentId: number, ticketTypeId: number){
    return await prisma.ticket.create({
        data: {
            status: "RESERVED",
            enrollmentId,
            ticketTypeId,
            updatedAt: new Date(Date.now())
        }
    });
}

const ticketsRespository = {
    getTicketsTypes, getTickets, createTicket
}

export default ticketsRespository;