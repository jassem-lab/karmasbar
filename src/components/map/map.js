import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { place } from "./markerPlace"
import Marker from "./marker"

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFzc2VtZGV2IiwiYSI6ImNrbmIxdml0dzE3b2sycXRhNGd3ZDdhZXQifQ.2u53QU0_8NyykIK3yYVxrA"

const mapContainerStyle = {
  width: "600px",
  height: "250px",
}

const Map = () => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      // Empire State Building [lng, lat]
      center: [-122.38224555011027, 40.6120874855934],
      zoom: 10,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [])
  useEffect(() => {
    if (!map) return

    if (place.length !== 0) {
      const coords = []
      place.forEach(place => {
        coords.push([place.longitude, place.latitude])
      })
    } else {
      map.easeTo({
        center: [-122.38224555011027, 40.6120874855934],
        zoom: 10,
        duration: 2000,
      })
    }
  }, [map])

  return (
    <div ref={mapContainerRef} style={mapContainerStyle}>
      {place && map && <Marker map={map} place={place} />}
    </div>
  )
}

export default Map
