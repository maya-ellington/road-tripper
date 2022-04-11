mapboxgl.accessToken =
  "pk.eyJ1IjoibWF5YXBhcGF5YTciLCJhIjoiY2wxc3puN3Y2MmQ5MDNjanhtMTM1a2dyNiJ9.qGWA5EHxq-7X2G5woYkxEA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-98.5795, 39.8283],
  zoom: 3.5,
});

// Pop-up on Click
map.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
    const features = map.queryRenderedFeatures(event.point, {
      layers: ['points'] // replace with your layer name
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];
    console.log(feature.geometry.coordinates)
  const popup = new mapboxgl.Popup({ offset: [0, -15] })
  .setLngLat(feature.geometry.coordinates)
  .setHTML(
    `<h3>${feature.geometry.coordinates}</h3><p>${feature.properties.description}</p>`
  )
  .addTo(map);
});


// Get trips begin locations from API
async function getTripsBegin() {
  const res = await fetch("/api");
  const data = await res.json();

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
    },
  }));

  return tripsBegin;
}

// Show trips begin locations on map
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
        "icon-image": "marker-15",
        "icon-allow-overlap": true,
        "text-allow-overlap": true,
        "icon-size": 3,
        "text-field": "{city}",
        "text-offset": [0, 0.9],
        "text-anchor": "top",
      },
      paint: {
        "text-color": "#41178f",
      },
    });
  });
}
//NEED TO ADJUST THIS SO THAT IT LOADS AUTOMATICALLY
// Handle user input
const form = document.getElementById("form");
const tripBegin = document.getElementById("tripBegin");

function handleChange() {
  if (tripBegin.value === "") {
    tripBegin.style.border = "3px solid lightcoral";
  } else {
    tripBegin.style.border = "none";
  }
}

// Send POST to API to add trips begin locations
async function addTripBegin(e) {
  e.preventDefault();

  if (tripBegin.value === "") {
    tripBegin.placeholder =
      "Please add the town/city you started your road trip from!";
    return;
  }

  const sendBody = {
    address: tripBegin.value,
  };

  try {
    tripBegin.value = "";
    tripBegin.placeholder = "Loading...";

    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendBody),
    });

    if (res.status === 400) {
      throw Error;
    }

    if (res.status === 200) {
      tripBegin.style.border = "none";
      tripBegin.placeholder = "Succesfully added!";

      // Retrieve updated data
      tripBegin = await getTripsBegin();

      map.getSource("api").setData({
        type: "FeatureCollection",
        features: tripBegin,
      });
    }
  } catch (err) {
    tripBegin.placeholder = err;
    return;
  }
}

tripBegin.addEventListener("keyup", handleChange);
form.addEventListener("submit", addTripBegin);




// Render TripsBegin locations
showMap();