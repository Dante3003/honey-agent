import api from "./api";

type TAuthParams = {
  user: string;
};

type TContract = {
  no: string;
  issue_date: string;
};

type TOrganization = {
  name: string;
  shortname: string;
  businessEntity: string;
  contract: TContract;
  type: string;
};

export const authRequest = (params: TAuthParams) =>
  api.get("/auth", { params });

export const getOrganizationRequest = (organizationId: number) => {
  return api.get(`/companies/${organizationId}`);
};

export const updateOrganizationRequest = (
  organizationId: number,
  params: TOrganization
) => {
  return api.patch(`/companies/${organizationId}`, params);
};

export const deleteOrganizationRequest = (organizationId: number) => {
  return api.delete(`/companies/${organizationId}`);
};

export const addPhotoToOrganizationRequest = (
  organizationId: number,
  photo: any
) => {
  return api.post(`/companies/${organizationId}/image`, photo);
};

export const removePhotoFromOrganizationRequest = (
  organizationId: number,
  imageName: string
) => {
  return api.delete(`/companies/${organizationId}/image/${imageName}`);
};
