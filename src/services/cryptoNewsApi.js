// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
//  const cryptoNewsHeaders={
   
// 		'x-rapidapi-key': '45aba45c03msh54f7383e05d9eacp1a0c56jsn93dc1cf8215d',
// 		'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
// 		'X-BingApis-SDK': 'true'
	
//  }

//  const baseUrl='https://bing-news-search1.p.rapidapi.com'

//  const createRequest=(url)=>({url,headers: cryptoNewsHeaders})
 
//  export const cryptoNewsApi = createApi({
//      reducerPath : 'cryptoNewsApi',
//      baseQuery : fetchBaseQuery({baseUrl}),
//      endpoints: (builder)=>({
//          getCryptoNews:builder.query({
//              query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
//             }),
//      }),
 
//  });
 
//  export const {
//      useGetCryptoNewsQuery,
//  }=cryptoNewsApi;

//  const options = {
// 	method: 'GET',
// 	hostname: 'bing-news-search1.p.rapidapi.com',
// 	port: null,
// 	path: '/news?safeSearch=Off&textFormat=Raw',
// 	headers: {
// 		'x-rapidapi-key': '45aba45c03msh54f7383e05d9eacp1a0c56jsn93dc1cf8215d',
// 		'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
// 		'X-BingApis-SDK': 'true'
// 	}
// };

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-rapidapi-key': '45aba45c03msh54f7383e05d9eacp1a0c56jsn93dc1cf8215d',
		'x-rapidapi-host': 'news-api14.p.rapidapi.com'
};
 const baseUrl='https://news-api14.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory }) => createRequest(`/v2/search/publishers?query=${newsCategory}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;