import { useQuery } from "@apollo/client";
import GET_PHOTOS from "./queries/GetPhotos.gql";

export type GetPhotosParams = {
  limit: number;
  page: number;
  q: string;
};

export const GetPhotos = (params: GetPhotosParams) => {
  const { limit, page, q } = params;

  const variables = {
    options: {
      paginate: {
        limit,
        page,
      },
      search: {
        q,
      },
    },
  };

  const { data: result, loading } = useQuery(GET_PHOTOS, {
    variables,
  });

  return { result, loading };
};

export default {
  GetPhotos,
};
