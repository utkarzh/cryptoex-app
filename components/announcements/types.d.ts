// all announcements types
export interface AnnouncementsList_int {
  announcement_id: number;
  announcement_title: string;
  announcement_content: string;
  announcement_preiority: string;
  announcement_addedon: Date;
  announcement_status: string;
  announcement_date: string;
}
export interface AnnouncementsData_int {
  status: number;
  message: string;
  announments: AnnouncementsList_int[];
  announmentcount: number;
  pagecoun: number;
  sessionid: string | null;
}

export interface AnnouncementApiResult_int {
  data: AnnouncementsData_int;
  isLoading: boolean;
  error: null | string;
  isError: boolean;
}

//single announcement details

export interface SingleAnnouncementData_int {
  status: number;
  message: string;
  announment: AnnouncementsList_int[];
  sessionid: string | null;
}

export interface SingleAnnouncementApiResult_int {
  data: SingleAnnouncementData_int;
  isLoading: boolean;
  error: null | string;
  isError: boolean;
}
