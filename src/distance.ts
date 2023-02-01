// This is an implementation of the Haversine formula from
// http://www.movable-type.co.uk/scripts/latlong.html
// You should edit this formula to how you would like to work with it
// to find the distance between two locations using their longitude
// and latitude
export const getDistance = () => {
  const lat1 = 0;
  const lon1 = 0;
  const lat2 = 0;
  const lon2 = 0;

  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres

  return d;
};
