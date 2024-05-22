import { useLocationTrafficStat } from '#/hooks/queries/dashboard'
import { LineChart } from '@mui/x-charts'
import { useEffect, useState } from 'react'

function LocationLookUpStat() {
    const { data: apiResult } = useLocationTrafficStat()

    const [data, setData] = useState({
        service1: [],
        service2: [],
        service3: [],
        service4: [],
        service5: [],
        xLabels: [],
    })

    const processData = () => {
        const initialData = {
            service1: [],
            service2: [],
            service3: [],
            service4: [],
            service5: [],
            xLabels: [],
        }

        const serviceMapping = apiResult.data.topFiveList.reduce((acc, service, index) => {
            acc[service] = `service${index + 1}`
            return acc
        }, {})

        apiResult.data.trafficStatList.forEach((item) => {
            initialData.xLabels.push(item.statTime)

            apiResult.data.topFiveList.forEach((service) => {
                const key = serviceMapping[service]
                if (key) {
                    initialData[key].push(0)
                }
            })

            item.trafficInfos.forEach((trafficInfoItem) => {
                const { service, count } = trafficInfoItem
                const key = serviceMapping[service]
                if (key) {
                    if (!isNaN(count)) initialData[key][initialData.xLabels.length - 1] = count
                }
            })
        })
        return initialData
    }

    useEffect(() => {
        if (apiResult && apiResult.code === '0000') {
            const processedData = processData()
            setData(processedData)
        }
    }, [apiResult])

    const seriesData = apiResult?.data.topFiveList.map((label, index) => {
        return { data: data[`service${index + 1}`], label: label }
    })

    return (
        <LineChart
            // width={900}
            height={500}
            series={seriesData ?? []}
            xAxis={[{ scaleType: 'point', data: data.xLabels }]}
            sx={{
                backgroundColor: 'background.contents',
            }}
        />
    )
}

export default LocationLookUpStat
