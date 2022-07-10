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
export const getOrganizationRequest = (organizationId: string) => {
  return api.get(`/companies/${organizationId}`);
};

export const updateOrganizationRequest = (
  organizationId: string,
  params: TOrganization
) => {
  return api.patch(`/companies/${organizationId}`, params);
};

export const deleteOrganizationRequest = (organizationId: string) => {
  return api.delete(`/companies/${organizationId}`);
};

export const addPhotoToOrganizationRequest = (
  organizationId: string,
  photo: any
) => {
  return api.post(`/companies/${organizationId}/image`, photo);
};

export const removePhotoFromOrganizationRequest = (
  organizationId: string,
  imageName: string
) => {
  return api.delete(`/companies/${organizationId}/image/${imageName}`);
};
