import { AxiosResponse } from 'axios';
import axios from 'src/core/config/axios';

export const sendApplication = async (
  fullName: string,
  phoneNumber: string,
  quantity: number,
): Promise<AxiosResponse> => {
  return await axios.post('/v1/bond/applications', { fullName, phoneNumber, quantity });
};
