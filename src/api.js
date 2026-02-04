const base_url = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const API_URL = base_url.endsWith('/api') ? base_url : `${base_url}/api`;
export default API_URL;
