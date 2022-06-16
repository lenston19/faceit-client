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
  dota2Stats: Dota2Stats;
  group: Group;
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  nickname: string;
  faceitId: string;
}
export interface CSGOStats {
  id?: number;
  elo: number;
  kdRatio?: number;
  averageKdRatio: number;
  averageHs: number;
  winRate: number;
  player?: number;
}

export interface Dota2Stats {
  id?: number;
  elo: number;
  kdRatio?: number;
  averageKdRatio: number;
  averageGm: number;
  winRate: number;
  player?: number;
}
