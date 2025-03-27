import { apiClient } from '../utils/apiClient';
const { post } = apiClient;


const apiPostCoachApplication = (data: CoachFormValues): Promise<any> => post('/coach-application', data);

// Export all helper functions
export {
    apiPostCoachApplication
};
