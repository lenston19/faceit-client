import { api } from 'boot/axios';
import { Group } from 'components/models';

export function useGroup() {
  const fetchGroup = async () => {
    const { data } = await api.get<Group[]>('stats/group/');
    return data;
  };
  return {
    fetchGroup,
  };
}
