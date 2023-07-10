import enrollmentRepository from "../../repositories/enrollment-repository";
import paymentsRepository from "../../repositories/payments-repository";
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

const paymentsService = { getPayments }

export default paymentsService;