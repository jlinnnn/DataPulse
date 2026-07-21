// Base URL of the DataPulse analytics backend.
// Override at build time with REACT_APP_API_URL (see .env.example).
export const API_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000';
