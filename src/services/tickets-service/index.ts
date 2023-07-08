import ticketsRespository from "../../repositories/tickets-repository";


async function getTicketsTypes(){
    return await ticketsRespository.getTicketsTypes();
}

const ticketsService = {
    getTicketsTypes
}

export default ticketsService;