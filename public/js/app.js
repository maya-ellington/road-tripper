mapboxgl.accessToken =
  "pk.eyJ1IjoibWF5YXBhcGF5YTciLCJhIjoiY2wxc3puN3Y2MmQ5MDNjanhtMTM1a2dyNiJ9.qGWA5EHxq-7X2G5woYkxEA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mayapapaya7/cl1z8ip6e000114mdguvvxpka",
  center: [-98.5795, 39.8283],
  zoom: 3.3,
});

// Pop-up on Click, built into MapBox tools
map.on("click", (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["points"],
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];
  const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<h3>${feature.properties.tripTitle}</h3><p><a href='/${feature.properties.tripId}/view'>View All Trips</a></p><p><a href='${feature.properties.tripId}/new'>Add New Trip</a></p>`
    )
    .addTo(map);
});

// Get trips begin locations from API
async function getTripsBegin() {
  const res = await fetch("/api/trips");
  const data = await res.json();
  console.log(data, "data");
  let tripsBegin = data.data.map((tripBegin) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [
        tripBegin.location.coordinates[0],
        tripBegin.location.coordinates[1],
      ],
    },
    properties: {
      city: tripBegin.location.city,
      tripTitle: tripBegin.tripTitle,
      tripId: tripBegin._id,
    },
  }));

  return tripsBegin;
}

// Show trips begin locations on map, renders map & points
async function showMap() {
  let tripsBegin = await getTripsBegin();
  map.on("load", () => {
    map.addSource("api", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: tripsBegin,
      },
    });

    map.addLayer({
      id: "points",
      type: "symbol",
      minzoom: 0,
      source: "api",
      layout: {
        "icon-image": "car-svgrepo-com",
        "icon-allow-overlap": true,
        "text-allow-overlap": true,
        "icon-size": 0.1,
        "text-offset": [0, 0.9],
        "text-anchor": "top",
      },
    });
  });
}

// Handle user input
const form = document.getElementById("form");
let tripBegin = document.getElementById("tripBegin");
let tripTitle = document.getElementById("tripBegin");

// Send POST to API to add trips begin locations
async function addTripBegin(e) {
  e.preventDefault();
  console.log("addtrip");
  if (tripBegin.value === "") {
    tripBegin.placeholder = "Location where trip begins";
    console.log("i am here");
    return;
  }

  try {
    tripBegin.placeholder = "Loading...";

    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: tripBegin.value,
        tripTitle: tripTitle.value,
      }),
    });

    if (res.status === 400) {
      throw Error;
    } else if (res.status === 200) {
      tripBegin.placeholder = "Succesfully added!";

      //Reset value
      tripBegin.value = "";
      tripTitle.value = "";

      // Retrieve updated data
      let allTrips = await getTripsBegin();

      map.getSource("api").setData({
        type: "FeatureCollection",
        features: allTrips,
      });
    }
  } catch (err) {
    tripBegin.placeholder = err;
    return;
  }
}

form.addEventListener("submit", addTripBegin);

// Render TripsBegin locations
showMap();
