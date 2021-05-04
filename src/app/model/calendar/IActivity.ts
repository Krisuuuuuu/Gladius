
export interface IActivity {
  id: string;
  area: string;
  trainer: string;
  name: string;
  date: string;
  current_bookings_number: number;
  max_clients: number;
  start_hour: string;
  end_hour: string;
  is_booked_by_me: boolean;
}
