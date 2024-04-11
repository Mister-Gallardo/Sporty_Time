export interface INotification {
  id: number;
  title: string;
  body: string;
  data: {
    url: string;
  };
  push: boolean;
  mail: boolean;
  read: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
}
