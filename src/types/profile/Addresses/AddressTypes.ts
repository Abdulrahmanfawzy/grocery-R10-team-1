export interface AddressesInterface {
    success:     boolean;
    message:     string;
    data:        Datum[];
    total_count: number;
}

export interface Datum {
    id:              number;
    label:           null;
    full_name:       string;
    phone:           string;
    country_code:    string;
    formatted_phone: string;
    street_address:  string;
    building_number: null;
    floor:           null;
    apartment:       null;
    landmark:        null;
    city:            string;
    state:           null;
    postal_code:     null;
    country:         string;
    notes:           null;
    is_default:      boolean;
    latitude:        null;
    longitude:       null;
    full_address:    string;
    created_at:      Date;
    updated_at:      Date;
}
