import { PaginationResponse } from './Filters';

export interface Campaign {
  id?: number;
  name: string;
  card_numbers: string;
  createdAt?: string;
  days_to_claim: number;
  days_to_receive: number;
  description: string;
  gift_id: number;
  gift_quantity: number;
}

export interface CampaignResponse {
  data: Campaign[];
  pagination?: PaginationResponse;
}
