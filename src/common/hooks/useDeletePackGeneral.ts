import {useDeletePackMutation} from "../../features/packs-cards/packs/packsApi";

export const useDeletePackGeneral = async (id: string) => {
  const [deletePack] = useDeletePackMutation();
  debugger;
  deletePack(id);
};
