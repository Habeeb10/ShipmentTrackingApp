import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://shippex-demo.bc.brandimic.com/api/method';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation<any, {usr: string; pwd: string}>({
      query: ({usr, pwd}) => {
        const formData = new FormData();
        formData.append('usr', usr);
        formData.append('pwd', pwd);

        return {
          url: '/login',
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

export const {useLoginMutation} = loginApi;
