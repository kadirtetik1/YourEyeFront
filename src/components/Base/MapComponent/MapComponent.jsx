import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import styles from './MapComponent.module.css';
import { useState, useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

// Icon reset
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapComponent = ({ addresses = [] }) => {
  const [selectedBranchId, setSelectedBranchId] = useState(null);
  const [hoveredBranchId, setHoveredBranchId] = useState(null);
  const mapRef = useRef();

  const handleClick = (branch) => {
    setSelectedBranchId(branch.branchId);
    mapRef.current?.flyTo([branch.lat, branch.lng], 16, {
      animate: true,
      duration: 1.2,
    });
  };

  const createBlinkingIcon = (isActive, isOffline) =>
    L.divIcon({
      className: styles.blinkingMarkerWrapper,
      html: `
        <div class="${styles.radarPulse} ${isActive ? styles.radarPulseHover : ''}">
          <div class="${styles.innerCircle} ${isOffline ? styles.red : styles.green}"></div>
          <div class="${styles.pulseRing} ${styles.ring1} ${isOffline ? styles.red : styles.green}"></div>
          <div class="${styles.pulseRing} ${styles.ring2} ${isOffline ? styles.red : styles.green}"></div>
          <div class="${styles.pulseRing} ${styles.ring3} ${isOffline ? styles.red : styles.green}"></div>
          <div class="${styles.pulseRing} ${styles.ring4} ${isOffline ? styles.red : styles.green}"></div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

  const MapRefConnector = () => {
    const map = useMap();
    useEffect(() => {
      mapRef.current = map;
    }, [map]);
    return null;
  };

  return (
    <div className={styles.mapContainer}>
      <h2 className={styles.mapTitle}>Aktif Sunucu Bilgileri</h2>
      <div className={styles.mapWrapper}>
        <MapContainer
          center={[39.92077, 32.85411]}
          zoom={6}
          scrollWheelZoom={true}
          className={styles.map}
          attributionControl={false}
        >
          <MapRefConnector />
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
          {addresses.map((branch, index) => {
            const lastPingDate = new Date(branch.lastPing);
            const now = new Date();
            const diffMinutes = (now - lastPingDate) / 1000 / 60;
            const isOffline = diffMinutes > 10;

            return (
              <Marker
                key={index}
                position={[branch.lat, branch.lng]}
                icon={createBlinkingIcon(selectedBranchId === branch.branchId, isOffline)}
                eventHandlers={{
                  click: () => handleClick(branch),
                  mouseover: () => setHoveredBranchId(branch.branchId),
                  mouseout: () => setHoveredBranchId(null),
                }}
              >
                {(hoveredBranchId === branch.branchId || selectedBranchId === branch.branchId) && (
                  <Tooltip
                    direction="top"
                    offset={[0, -15]}
                    permanent
                    className={`${styles.tooltip} ${isOffline ? styles.redTooltip : styles.greenTooltip}`}
                  >
                    <strong>Bağlı Şube: </strong> {branch.name}<br />
                    <strong>ID: </strong> {branch.branchId}<br />
                    <strong>Last Ping: </strong>{lastPingDate.toLocaleTimeString()}
                  </Tooltip>
                )}
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
