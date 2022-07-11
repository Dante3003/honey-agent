export type TContract = {
  no: string;
  issue_date: string;
};

export type TOrganization = {
  id: number;
  contactId: number;
  name: string;
  shortname: string;
  businessEntity: string;
  contract: TContract;
  type: string;
  photos: TPhoto[];
};

export type TPhoto = {
  name: string;
  filepath: string;
  thumbpath: string;
};
