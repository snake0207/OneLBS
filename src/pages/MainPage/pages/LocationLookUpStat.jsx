// import dashboard from '#/api/dashboard'
// import {
//     useDashboardActions,
//     useDashboardInterval,
//     useDashboardStatDate,
// } from '#/store/useDashboardStore'
// import { LineChart } from '@mui/x-charts'
// import { useCallback, useEffect, useState } from 'react'

// function LocationLookUpStat() {
//     const useStatDate = useDashboardStatDate()
//     const useInterval = useDashboardInterval()
//     const { setDashboardStatDate } = useDashboardActions()

//     const [topFiveList, setTopFiveList] = useState([])
//     const [codeStatList, setCodeStatList] = useState([])

//     const [data, setData] = useState({
//         code1: [],
//         code2: [],
//         code3: [],
//         code4: [],
//         code5: [],
//         xLabels: [],
//     })

//     const processData = useCallback(() => {
//         const initialData = {
//             xLabels: [],
//             code1: [],
//             code2: [],
//             code3: [],
//             code4: [],
//             code5: [],
//         }

//         const codeMapping = topFiveList.reduce((acc, code, index) => {
//             acc[code] = `code${index + 1}`
//             return acc
//         }, {})

//         codeStatList.forEach((item) => {
//             initialData.xLabels.push(item.statTime)

//             topFiveList.forEach((code) => {
//                 const key = codeMapping[code]
//                 if (key) {
//                     initialData[key].push(0)
//                 }
//             })

//             item.respCodes.forEach((respCodeItem) => {
//                 const { respCode, count } = respCodeItem
//                 const key = codeMapping[respCode]
//                 if (key) {
//                     initialData[key][initialData.xLabels.length - 1] = count
//                 }
//             })
//         })

//         return initialData
//     }, [topFiveList, codeStatList])

//     useEffect(() => {
//         console.log('=============LOCATION LOOK UP===================')
//         if (localStorage.getItem('dashboard-storage')) {
//             const fetchData = async () => {
//                 try {
//                     if (useStatDate === '') {
//                         setDashboardStatDate(
//                             new Date(Date.now()).toISOString().split('T')[0].split('-').join(''),
//                         )
//                     }

//                     const response = await dashboard.respCodeStat({ statDate: useStatDate })

//                     if (response.data.code === '0000') {
//                         setTopFiveList(response.data.data.topFiveList)
//                         setCodeStatList(response.data.data.codeStatList)
//                         const processedData = processData()
//                         setData(processedData)
//                     } else {
//                         console.error('API 요청 실패:', response.error)
//                     }
//                 } catch (error) {
//                     console.error('API 요청 실패:', error)
//                 }
//             }

//             const intervalId = setInterval(fetchData, useInterval * 10000)
//             return () => clearInterval(intervalId)
//         }
//     }, [useStatDate, useInterval, setDashboardStatDate, processData])

//     const seriesData = topFiveList.map((label, index) => {
//         return { data: data[`code${index + 1}`], label: label }
//     })

//     return (
//         <LineChart
//             width={900}
//             height={500}
//             series={seriesData}
//             xAxis={[{ scaleType: 'point', data: data.xLabels }]}
//             sx={{
//                 backgroundColor: 'background.contents',
//             }}
//         />
//     )
// }

// export default LocationLookUpStat
