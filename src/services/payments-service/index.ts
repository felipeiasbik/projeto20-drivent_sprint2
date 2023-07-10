import { CardData } from "../../protocols";
import enrollmentRepository from "../../repositories/enrollment-repository";
import paymentsRepository from "../../repositories/payments-repository";
import ticketTypeRepository from "../../repositories/ticket-type-repository";
import ticketsRespository from "../../repositories/tickets-repository";

export async function getPayments(ticketId: number, userId: number){
    if (!ticketId) {
        throw {
            name: "CannotEnrollBeforeStartDateError",
            message: "TicketID Not Found!"
        }
    }

    const ticket = await ticketsRespository.getTicketsId(ticketId);
    if (!ticket) {
        throw {
            name: "NotFoundError",
            message: "Ticket Not Found!"
        }
    }
    
    const enrollmentId = await enrollmentRepository.getEnrollmentUser(userId);
    if (enrollmentId.id !== ticket.enrollmentId){
        throw {
            name: "UnauthorizedError",
            message: "Enrollment not associated with this ticket!"
        }
    }

    return await paymentsRepository.getPayments(ticketId);
    
}

export async function createPayment(ticketId: number, cardData: CardData, userId: number){

    const ticket = await ticketsRespository.getTicketsId(ticketId);
    if (!ticket) {
        throw {
            name: "NotFoundError",
            message: "Ticket Not Found!"
        }
    }

    const enrollmentId = await enrollmentRepository.getEnrollmentUser(userId);
    if (enrollmentId.id !== ticket.enrollmentId){
        throw {
            name: "UnauthorizedError",
            message: "Enrollment not associated with this ticket!"
        }
    }

    const value = await ticketTypeRepository.getValue(ticket.ticketTypeId);

    const pay = await paymentsRepository.createPayment(ticketId, value.price, cardData);
    if (pay) {
        await ticketsRespository.updateTicket(ticket.id);
    }

    return pay;
}

const paymentsService = { getPayments, createPayment }

export default paymentsService;