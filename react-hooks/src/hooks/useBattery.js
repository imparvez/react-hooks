import { useEffect, useState } from 'react'

const useBattery = () => {
    const [batteryState, setBatteryState] = useState({
        charging: null,
        level: 0
    });

    useEffect(() => {
        const updateBatteryStatus = (batteryManager) => {
            setBatteryState(batteryManager);
        }
        async function getNavigator() {
            navigator.getBattery().then((batteryManager) => {
                setBatteryState(batteryManager);
                batteryManager.addEventListener('chargingchange', updateBatteryStatus);
                batteryManager.addEventListener('levelchange', updateBatteryStatus);
            });
        }
        getNavigator();

        return () => {
            navigator.getBattery().then((batteryManager) => {
                batteryManager.removeEventListener('chargingchange', updateBatteryStatus);
                batteryManager.removeEventListener('levelchange', updateBatteryStatus);
            });
        }
    }, [batteryState]);

    return batteryState;
}

export default useBattery;