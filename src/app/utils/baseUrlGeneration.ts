export const baseUrlGeneration = () => {
   return process.env.REACT_APP_BASE_URL
       ? process.env.REACT_APP_BASE_URL
       : 'http://localhost:7542/2.0/'
}