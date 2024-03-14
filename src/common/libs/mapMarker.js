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
import AD from '#/assets/flag/AD.svg'
import AL from '#/assets/flag/AL.svg'
import AM from '#/assets/flag/AM.svg'
import AT from '#/assets/flag/AT.svg'
import AX from '#/assets/flag/AX.svg'
import AZ from '#/assets/flag/AZ.svg'
import BA from '#/assets/flag/BA.svg'
import BE from '#/assets/flag/BE.svg'
import BG from '#/assets/flag/BG.svg'
import BY from '#/assets/flag/BY.svg'
import CH from '#/assets/flag/CH.svg'
import CY from '#/assets/flag/CY.svg'
import CZ from '#/assets/flag/CZ.svg'
import DE from '#/assets/flag/DE.svg'
import DK from '#/assets/flag/DK.svg'
import EE from '#/assets/flag/EE.svg'
import ES from '#/assets/flag/ES.svg'
import FI from '#/assets/flag/FI.svg'
import FO from '#/assets/flag/FO.svg'
import FR from '#/assets/flag/FR.svg'
import GB from '#/assets/flag/GB.svg'
import GE from '#/assets/flag/GE.svg'
import GG from '#/assets/flag/GG.svg'
import GI from '#/assets/flag/GI.svg'
import GR from '#/assets/flag/GR.svg'
import HR from '#/assets/flag/HR.svg'
import HU from '#/assets/flag/HU.svg'
import IE from '#/assets/flag/IE.svg'
import IM from '#/assets/flag/IM.svg'
import IS from '#/assets/flag/IS.svg'
import IT from '#/assets/flag/IT.svg'
import JE from '#/assets/flag/JE.svg'
import XK from '#/assets/flag/XK.svg'
import LI from '#/assets/flag/LI.svg'
import LT from '#/assets/flag/LT.svg'
import LU from '#/assets/flag/LU.svg'
import LV from '#/assets/flag/LV.svg'
import MC from '#/assets/flag/MC.svg'
import MD from '#/assets/flag/MD.svg'
import ME from '#/assets/flag/ME.svg'
import MK from '#/assets/flag/MK.svg'
import MT from '#/assets/flag/MT.svg'
import NL from '#/assets/flag/NL.svg'
import NO from '#/assets/flag/NO.svg'
import PL from '#/assets/flag/PL.svg'
import PT from '#/assets/flag/PT.svg'
import RO from '#/assets/flag/RO.svg'
import RS from '#/assets/flag/RS.svg'
import RU from '#/assets/flag/RU.svg'
import SE from '#/assets/flag/SE.svg'
import SI from '#/assets/flag/SI.svg'
import SJ from '#/assets/flag/SJ.svg'
import SK from '#/assets/flag/SK.svg'
import SM from '#/assets/flag/SM.svg'
import UA from '#/assets/flag/UA.svg'
import VA from '#/assets/flag/VA.svg'

import { europeanCountries } from '#/contents/contryCode.js'

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

export const flagImage = (alpha3Code) => {
    const country = europeanCountries.find((country) => country.alpha3 === alpha3Code)

    switch (country.alpha2) {
        case 'AD':
            return AD
        case 'AL':
            return AL
        case 'AM':
            return AM
        case 'AT':
            return AT
        case 'AX':
            return AX
        case 'AZ':
            return AZ
        case 'BA':
            return BA
        case 'BE':
            return BE
        case 'BG':
            return BG
        case 'BY':
            return BY
        case 'CH':
            return CH
        case 'CY':
            return CY
        case 'CZ':
            return CZ
        case 'DE':
            return DE
        case 'DK':
            return DK
        case 'EE':
            return EE
        case 'ES':
            return ES
        case 'FI':
            return FI
        case 'FO':
            return FO
        case 'FR':
            return FR
        case 'GB':
            return GB
        case 'GE':
            return GE
        case 'GG':
            return GG
        case 'GI':
            return GI
        case 'GR':
            return GR
        case 'HR':
            return HR
        case 'HU':
            return HU
        case 'IE':
            return IE
        case 'IM':
            return IM
        case 'IS':
            return IS
        case 'IT':
            return IT
        case 'JE':
            return JE
        case 'XK':
            return XK
        case 'LI':
            return LI
        case 'LT':
            return LT
        case 'LU':
            return LU
        case 'LV':
            return LV
        case 'MC':
            return MC
        case 'MD':
            return MD
        case 'ME':
            return ME
        case 'MK':
            return MK
        case 'MT':
            return MT
        case 'NL':
            return NL
        case 'NO':
            return NO
        case 'PL':
            return PL
        case 'PT':
            return PT
        case 'RO':
            return RO
        case 'RS':
            return RS
        case 'RU':
            return RU
        case 'SE':
            return SE
        case 'SI':
            return SI
        case 'SJ':
            return SJ
        case 'SK':
            return SK
        case 'SM':
            return SM
        case 'UA':
            return UA
        case 'VA':
            return VA
        default:
            return ''
    }
}
