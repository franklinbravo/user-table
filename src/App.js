import { Container, Pagination } from 'react-bootstrap';
import { memo, useMemo, useState } from 'react';
import BaseTable, { Column } from 'react-base-table';
import './App.css';
import 'react-base-table/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './hooks/useFetch';
import columns from './utils/columns';
import UserDetails from './components/UserDetails';

function App() {
	const [userIdx, setUserIdx] = useState(null);
	const {
		data = [],
		changePageLimit,
		total,
		pagination,
	} = useFetch('https://dummyjson.com/users');

	const totalPages = useMemo(() => {
		return Array.from(new Array(Math.ceil(total / pagination.limit))).map(
			(_, i) => i + 1,
		);
	}, [total, pagination.limit]);

	const onChangePage = (num) => {
		changePageLimit(num, 10);
	};

	const onOpenUserDetails = (userIndex) => {
		setUserIdx(userIndex);
	};
	return (
		<div className="App">
			<Container className="d-flex justify-content-center align-items-center flex-column">
				<BaseTable data={data} width={500} height={550}>
					{columns.map((column) => (
						<Column
							key={column.key}
							{...column}
							cellRenderer={({ cellData, rowIndex }) => {
								return (
									<div
										className="w-100 h-100 d-flex align-items-center"
										onClick={() => onOpenUserDetails(rowIndex, data)}
									>
										{cellData}
									</div>
								);
							}}
						/>
					))}
				</BaseTable>
				<Pagination>
					{totalPages.map((number, i) => (
						<Pagination.Item
							key={number}
							active={number === pagination.page}
							onClick={() => onChangePage(number)}
						>
							{number}
						</Pagination.Item>
					))}
				</Pagination>
			</Container>
			{data[userIdx] && (
				<UserDetails user={data[userIdx]} onHide={() => setUserIdx(null)} />
			)}
		</div>
	);
}

export default memo(App);
