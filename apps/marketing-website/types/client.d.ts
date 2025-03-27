declare module '@/types/client' {
  import type { PaginatedResponse } from '@/types/pagination';

  export interface TrainingStyles {
    createdAt: string;
    id: string;
    trainingStyleName: string;
    updatedAt: string;
  }



  export interface Muscle {
    createdAt: string;
    updatedAt: string;
    muscleName: string;
    muscleGraphic: AssetGraphic;
    muscleLabelColor: string;
    id: string;
  }

  export interface MovementEquipment {
    createdAt: string;
    updatedAt: string;
    equipmentName: string;
    equipmentGraphic: AssetGraphic;
    id: string;
  }

  export type MusclesResponse = PaginatedResponse<Muscle>;
  export type MovementEquipmentResponse = PaginatedResponse<MovementEquipment>;
}
