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

async function getTicketsId(id: number){
    return await prisma.ticket.findFirst({
        where: {
            id
        }
    });
}

async function createTicket(enrollmentId: number, ticketTypeId: number){
    return await prisma.ticket.create({
        data: {
            ticketTypeId,
            enrollmentId,
            status: "RESERVED",
            updatedAt: new Date(Date.now()),
        },
    });
}

async function updateTicket(id: number){
    return await prisma.ticket.update({
        data: {status: "PAID"},
        where: {id}
    });
}

const ticketsRespository = {
    getTicketsTypes, getTickets, createTicket, getTicketsId, updateTicket
}

export default ticketsRespository;