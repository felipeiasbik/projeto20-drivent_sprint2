import enrollmentRepository from "../../repositories/enrollment-repository";
import paymentsRepository from "../../repositories/payments-repository";
import ticketsRespository from "../../repositories/tickets-repository";

export async function getPayments(ticketId: number, userId: number){
    const enrollmentId = await enrollmentRepository.getEnrollmentUser(userId);

    const ticket = await ticketsRespository.getTickets(enrollmentId.id);
    if (!ticket) {
        throw {
            name: "NotFoundError",
            message: "Ticket Not Found!"
        }
    }

    if (!enrollmentId){
        throw {
            name: "NotFoundError",
            message: "Enrollment not associated with this ticket!"
        }
    }

    return await paymentsRepository.getPayments(ticketId);
}

const paymentsService = { getPayments }

export default paymentsService;