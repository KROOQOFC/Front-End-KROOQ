// export const BASE_URL = "https://localhost:7062";

// const API_URL = `${BASE_URL}/api`;

// export default API_URL;

export const BASE_URL = import.meta.env.VITE_API_URL;

const API_URL = `${BASE_URL}/api`;

export default API_URL;