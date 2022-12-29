import {useDeletePackMutation} from "../../features/cards/packsApi";


export const useDeletePackGeneral = async (id: string) => {
    const [deletePack] = useDeletePackMutation()
    debugger
     deletePack(id)
}