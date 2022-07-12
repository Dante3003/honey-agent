import api from "./api";

export const getContactsRequest = (contactId: number) =>
  api.get(`/contacts/${contactId}`);

export const updateContactsRequest = (contactId: number, params: FormData) =>
  api.patch(`/contacts/${contactId}`, params);
