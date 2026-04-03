export type UserInfoResponse = {
  zip: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  datetime: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
};

type GoogleAddressComponent = {
  long_name: string;
};

type GoogleGeocodingResult = {
  address_components: GoogleAddressComponent[];
};

type GoogleGeocodingResponse = {
  results?: GoogleGeocodingResult[];
};

type IpApiResponse = {
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
};

const DEFAULT_ZIPCODE = "00000";

function hasZipCode(results: GoogleGeocodingResult[]) {
  for (const result of results) {
    const addressComponents = result.address_components;
    const lastComponent = addressComponents[addressComponents.length - 1];

    if (!lastComponent) {
      continue;
    }

    const normalized = lastComponent.long_name.replaceAll(" ", "");

    if (!Number.isNaN(Number(normalized))) {
      return lastComponent.long_name;
    }
  }

  return DEFAULT_ZIPCODE;
}

export function getGoogleGeocodingApiKey() {
  return process.env.GOOGLE_GEOCODING_API_KEY || process.env.NEXT_PUBLIC_KEY_GOOGLE_API;
}

export async function getZipCodeFromLatLon(lat: string | number, lon: string | number) {
  const apiKey = getGoogleGeocodingApiKey();

  if (!apiKey) {
    return DEFAULT_ZIPCODE;
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`
    );
    const data = (await response.json()) as GoogleGeocodingResponse;

    return hasZipCode(data.results ?? []);
  } catch (error) {
    console.error("When fetching data from google api:\n", error);
    return DEFAULT_ZIPCODE;
  }
}

export async function getUserInfoByIp(ipAddress: string): Promise<UserInfoResponse | null> {
  try {
    const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
    const data = (await response.json()) as IpApiResponse;
    const zip = await getZipCodeFromLatLon(data.lat, data.lon);

    return {
      zip,
      country: data.country,
      countryCode: data.countryCode,
      region: data.region,
      regionName: data.regionName,
      city: data.city,
      datetime: new Date().toLocaleString("en-US", {
        timeZone: data.timezone,
      }),
      lat: data.lat,
      lon: data.lon,
      timezone: data.timezone,
      isp: data.isp,
      org: data.org,
      as: data.as,
      query: data.query,
    };
  } catch (error) {
    console.error("When fetching data from ip-api:\n", error);
    return null;
  }
}
