import React from 'react'
import useBattery from '../hooks/useBattery';

const BatteryState = () => {
    const batteryStatus = useBattery();
  return (
    <div className="battery-state">
        <p>Charging: {batteryStatus.charging ? 'Yes' : 'No'}</p>
        <p>Battery Level: {batteryStatus.level !== null ? `${batteryStatus.level * 100}%` : 'N/A'}</p>
    </div>
  )
}

export default BatteryState