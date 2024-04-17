import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const Map = ({ lat, long , address}) => {
  return (
    <MapContainer
      center={{ lat: [lat], lng: [long] }}
      zoom={13}
      scrollWheelZoom={false}
      className="z-[1]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={{ lat: [lat], lng: [long] }}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
