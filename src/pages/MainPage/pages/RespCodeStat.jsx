import { useRespCodeStat } from '#/hooks/queries/dashboard'
import { LineChart } from '@mui/x-charts'
import { useEffect, useState } from 'react'

function ResponseCodeStat() {
    const { data: apiResult } = useRespCodeStat()

    const [data, setData] = useState({
        code1: [],
        code2: [],
        code3: [],
        code4: [],
        code5: [],
        xLabels: [],
    })

    const processData = () => {
        const initialData = {
            code1: [],
            code2: [],
            code3: [],
            code4: [],
            code5: [],
            xLabels: [],
        }

        const codeMapping = apiResult.data.topFiveList.reduce((acc, code, index) => {
            acc[code] = `code${index + 1}`
            return acc
        }, {})

        apiResult.data.codeStatList.forEach((item) => {
            initialData.xLabels.push(item.statTime)

            apiResult.data.topFiveList.forEach((code) => {
                const key = codeMapping[code]
                if (key) {
                    initialData[key].push(0)
                }
            })

            item.respCodes.forEach((respCodeItem) => {
                const { respCode, count } = respCodeItem
                const key = codeMapping[respCode]
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
        return { data: data[`code${index + 1}`], label: label }
    })

    return (
        <LineChart
            width={900}
            height={500}
            series={seriesData ?? []}
            xAxis={[{ scaleType: 'point', data: data.xLabels }]}
            sx={{
                backgroundColor: 'background.contents',
            }}
        />
    )
}

export default ResponseCodeStat
