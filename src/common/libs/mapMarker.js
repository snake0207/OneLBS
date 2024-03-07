import PointBlueEVIcon from '#/assets/pointBlueEVIcon.svg'
import PointBlueFuelIcon from '#/assets/pointBlueFuelIcon.svg'
import PointBlueH2Icon from '#/assets/pointBlueH2Icon.svg'
import PointBlueParkingIcon from '#/assets/pointBlueParkingIcon.svg'
import PointBluePoiIcon from '#/assets/pointBluePoiIcon.svg'
import PointRedEVIcon from '#/assets/pointRedEVIcon.svg'
import PointRedFuelIcon from '#/assets/pointRedFuelIcon.svg'
import PointRedH2Icon from '#/assets/pointRedH2Icon.svg'
import PointRedParkingIcon from '#/assets/pointRedParkingIcon.svg'
import PointRedPoiIcon from '#/assets/pointRedPoiIcon.svg'

export const markerImage = (category, cpType) => {
    switch (category) {
        case 'evCharging':
            return cpType === 'mcp' ? PointBlueEVIcon : PointRedEVIcon
        case 'fuel':
            return cpType === 'mcp' ? PointBlueFuelIcon : PointRedFuelIcon
        case 'h2Charging':
            return cpType === 'mcp' ? PointBlueH2Icon : PointRedH2Icon
        case 'parking':
            return cpType === 'mcp' ? PointBlueParkingIcon : PointRedParkingIcon
        case 'dealerPoi':
            return cpType === 'mcp' ? PointBluePoiIcon : PointRedPoiIcon
        default:
            return cpType === 'mcp' ? PointBluePoiIcon : PointRedPoiIcon
    }
}
