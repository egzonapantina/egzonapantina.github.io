export const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country="
export const API_KEY = "f5e7955cc97847a0885e47f9a75761d0"
export const endpointPath = (country, category, page, pageSize) => `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;