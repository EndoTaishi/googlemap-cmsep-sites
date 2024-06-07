async function initMap() {
  const DBFpos = [
    { lat: 39.0561, lng: -95.1907 },
    { lat: 53.6289, lng: -106.1978 },
    { lat: 48.4764, lng: 2.7801 },
    { lat: 51.0792, lng: 10.4522 },
    { lat: 42.5378, lng: -72.1715 },
    { lat: 44.3869, lng: 142.3186 },
    { lat: 42.3903, lng: 11.9209 },
    { lat: 42.4081, lng: 11.93 },
    { lat: 41.8494, lng: 13.5881 },
  ];

  const EBFpos = [
    { lat: -37.4259, lng: 145.1878 },
    { lat: -35.6566, lng: 148.1517 },
    { lat: 43.7413, lng: 3.5957 },
    { lat: 41.7043, lng: 12.3573 },
    { lat: 23.1733, lng: 112.5361 },
    { lat: -3.018, lng: -54.9714 },
    { lat: -33.6152, lng: 150.7236 },
    { lat: -17.1175, lng: 145.6301 },
    { lat: -37.4222, lng: 144.0944 },
    { lat: -36.6732, lng: 145.0294 },
    { lat: -35.6566, lng: 148.1517 },
    { lat: -37.4259, lng: 145.1878 },
  ];

  const ENFpos = [
    { lat: 35.4546, lng: 138.7623 },
    { lat: 49.6925, lng: -74.3421 },
    { lat: 53.9872, lng: -105.1178 },
    { lat: 67.3624, lng: 26.6386 },
    { lat: 61.8474, lng: 24.2948 },
    { lat: 44.3154, lng: -121.6078 },
    { lat: 44.4526, lng: -121.5589 },
    { lat: 56.4615, lng: 32.9221 },
    { lat: 52.1666, lng: 5.7436 },
    { lat: 46.5869, lng: 11.4337 },
  ];

  const GRApos = [
    { lat: 35.8725, lng: 139.4869 },
    { lat: 2.9666667, lng: 102.3 },
    { lat: 37.37, lng: 101.18 },
    { lat: 38.4309, lng: -120.966 },
    { lat: 31.8214, lng: -110.8661 },
    { lat: 35.5465, lng: -98.04 },
    { lat: 54.7252, lng: 90.0022 },
    { lat: 46.0147, lng: 11.0458 },
  ];

  const MFpos = [
    { lat: 48.2167, lng: -82.1556 },
    { lat: 51.3076, lng: 4.5198 },
    { lat: 45.9459, lng: -90.2723 },
    { lat: 35.2617, lng: 137.0788 },
  ];

  const { Map, GroundOverlay } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  const map = new Map(document.getElementById('map') as HTMLElement, {
    center: { lat: 0.0, lng: 0.0 },
    zoom: 2,
    mapId: '4504f8b37365c3d0',
  });

  const imageBounds = { north: 90, south: -90, east: 180, west: -180 };

  const overlay = new GroundOverlay(
    'wrmodelii.png',
    imageBounds,
    { map: map , }
  );

  const addMarker = (map: google.maps.Map, position: { lat: number; lng: number; }, color: string) => {
    const pinBackground = new PinElement({
      background: color,
    });

    new AdvancedMarkerElement({
      map,
      position: position,
      content: pinBackground.element,
    });
  }

  DBFpos.forEach(position => addMarker(map, position, '#FF0000')); // 赤
  EBFpos.forEach(position => addMarker(map, position, '#00FF00')); // 緑
  ENFpos.forEach(position => addMarker(map, position, '#0000FF')); // 青
  GRApos.forEach(position => addMarker(map, position, '#FFFF00')); // 黄
  MFpos.forEach(position => addMarker(map, position, '#FF00FF')); // ピンク
}

window.initMap = initMap;
