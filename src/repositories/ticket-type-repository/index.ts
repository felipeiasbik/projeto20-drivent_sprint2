import { prisma } from "../../config";


export async function getValue(id: number){
    return await prisma.ticketType.findFirst({
        where: {id}
    });
}

const ticketTypeRepository = {
    getValue
}

export default ticketTypeRepository;