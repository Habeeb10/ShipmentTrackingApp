import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://shippex-demo.bc.brandimic.com/api/method';

export const shipmentApi = createApi({
  reducerPath: 'shipmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      return headers;
    },
  }),
  endpoints: builder => ({
    getShipmentList: builder.query<any, string>({
      query: searchTerm => ({
        url: '/frappe.client.get_list',
        method: 'POST',
        body: JSON.stringify({
          doctype: 'AWB',
          fields: ['*'],
          filters: {
            name: ['like', `%${searchTerm}%`],
          },
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {useGetShipmentListQuery} = shipmentApi;
