import React from 'react'
import {Table, Icon} from 'antd'

export default class myTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tDate: [],
            selectedRowKeys: []
        }
    }

    componentDidMount() {
        const data = []
        for (let i = 0; i < 18; i++) {
            data.push({
                key: i,
                name: `***`,
                age: '***',
                address: `碧桂园${i}号`,
                remark: 'http://www.bgy.com.cn/',
                operate: '暂无'
            })
        }
        this.setState({
            tDate: data
        })
    }

    // checkbox状态
    onSelectChange = (selectedRowKeys) => {
        // console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    render() {
        const columns = [{
            title: '住户姓名',
            width: '20%',
            dataIndex: 'name'
        }, {
            title: '年龄',
            width: '20%',
            dataIndex: 'age',
        }, {
            title: '住址',
            width: '20%',
            dataIndex: 'address'
        }, {
            title: '备注',
            width: '20%',
            dataIndex: 'remark',
            render(text) {
                return <a href={text} target="_blank">碧桂园</a>
            }
        }, {
            title: '操作',
            width: '20%',
            dataIndex: 'operate'
        }]

        const { selectedRowKeys } = this.state

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        }

        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize)
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        }

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
        )
    }
}
