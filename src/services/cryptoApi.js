import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders={
    'x-rapidapi-key': '45aba45c03msh54f7383e05d9eacp1a0c56jsn93dc1cf8215d',
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
}
const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({url,headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'crypto',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
          }),
    }),

});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,

}=cryptoApi;
