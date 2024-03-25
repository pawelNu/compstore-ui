const environmentUrls = new Map();

environmentUrls.set("localhost", "http://localhost:8080");
environmentUrls.set("compstore-ui.onrender.com", "https://compstore-api.onrender.com");

const hostName = environmentUrls.get(window.location.hostname);

export default hostName;
