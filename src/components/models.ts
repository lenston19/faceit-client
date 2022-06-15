export interface Faculty {
  id: number;
  name: string;
}
export interface Group {
  id: number;
  name: string;
  faculty: Faculty;
}
export interface Player {
  id: number;
  csgoStats: CSGOStats;
  group: Group;
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  nickname: string;
  faceitId: string;
}
export interface CSGOStats {
  elo: number;
  kdRatio: number;
  averageKdRatio: number;
  averageHs: number;
  winRate: number;
  player: number;
}
