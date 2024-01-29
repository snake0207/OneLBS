import { useState } from 'react'
import Select from '#/components/common/Select'

function SelectPage() {
    const items = [
        { key: 1, value: 1, label: '선택' },
        { key: 2, value: 2, label: '일반사용자' },
        { key: 3, value: 3, label: '요청자' },
        { key: 4, value: 4, label: '검토자' },
        { key: 5, value: 5, label: '승인자' },
        { key: 6, value: 6, label: '운영자' },
    ]

    const [selectedItem, setSelectedItem] = useState(items[0])

    const handleChange = (item) => {
        console.log(item)
        setSelectedItem(item)
    }

    return (
        <div>
            <h1>Select</h1>
            <h2>With Label</h2>
            <Select
                items={items}
                label="권한"
                value={selectedItem.value}
                onChange={handleChange}
                sx={{ width: 200 }}
            />
            <h2>Without Label</h2>
            <Select
                items={items}
                value={selectedItem.value}
                onChange={handleChange}
                sx={{ width: 200 }}
            />
            <p>Selected Value: {selectedItem.value}</p>
        </div>
    )
}

export default SelectPage
