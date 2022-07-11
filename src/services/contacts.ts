import api from "./api";

type TContact = {
  lastname: string;
  firstname: string;
  patronymic: string;
  phone: string;
  email: string;
};

export const getContacts = (contactId: number) =>
  api.get(`/contacts/${contactId}`);

export const updateContacts = (contactId: number, params: TContact) =>
  api.patch(`/contacts/${contactId}`, params);
