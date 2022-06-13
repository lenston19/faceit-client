import { api } from 'boot/axios';
import { Faculty } from 'components/models';

export function useFaculty() {
  const fetchFaculty = async () => {
    const { data } = await api.get<Faculty[]>('stats/faculty/');
    return data;
  };
  return {
    fetchFaculty,
  };
}
