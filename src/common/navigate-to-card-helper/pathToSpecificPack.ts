import {PATH} from "../../layout/AppRoutes/routes";

export const pathToSpecificPack = {
  learnPack: (packId: string) => {
    return `${PATH.LEARN_PACK}?cardsPack_id=${packId}`;
  },
  pack: (packId: string) => {
    return `${PATH.CARDS}?cardsPack_id=${packId}`;
  }
};
