import ticketsRespository from "../../repositories/tickets-repository";
import enrollmentsService from "../enrollments-service";

async function getTicketsTypes(){
    return await ticketsRespository.getTicketsTypes();
}

async function getTickets(userId: number){
    const enrollmentUser = await enrollmentsService.getEnrollmentUser(userId);
    const ticket = await ticketsRespository.getTickets(enrollmentUser.id);
    if (!ticket){
        throw {
            name: "NotFoundError",
            message: "Enrollment Not Found!"
        }
    }
    return ticket;
}

async function createTicket(userId: number, ticketTypeId: number){
    const enrollmentUser = await enrollmentsService.getEnrollmentUser(userId);
    await ticketsRespository.createTicket(enrollmentUser.id, ticketTypeId);
    return await getTickets(userId);
}

const ticketsService = {
    getTicketsTypes, getTickets, createTicket
}

export default ticketsService;