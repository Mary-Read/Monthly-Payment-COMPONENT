const distanceCalc = (lat1, lng1, lat2, lng2) => {
  // formula found here: https://www.movable-type.co.uk/scripts/latlong.html
  const R = 3958.754641;
  const phi1 = lat1 * (Math.PI / 180);
  const phi2 = lat2 * (Math.PI / 180);
  const deltaPhi = (lat2 - lat1) * (Math.PI / 180);
  const deltaLambda = (lng2 - lng1) * (Math.PI / 180);

  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2)
            + Math.cos(phi1) * Math.cos(phi2)
            * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

module.exports = distanceCalc;
