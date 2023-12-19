import React from 'react'
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ columns }) => <pre>{JSON.stringify(columns, null, 2)}</pre>;
const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

const DataTables = () => {
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
            />
        </div>
    )
}

export default DataTables