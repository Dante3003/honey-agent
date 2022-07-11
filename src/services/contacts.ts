import api from "./api";
import { TContacts } from "../types/contacts";

export const getContactsRequest = (contactId: number) =>
  api.get(`/contacts/${contactId}`);

export const updateContactsRequest = (contactId: number, params: TContacts) =>
  api.patch(`/contacts/${contactId}`, params);
