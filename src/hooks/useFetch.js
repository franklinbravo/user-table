import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [pagination, setPagination] = useState({ limit: 10, skip: 0, page: 1 });
	const [totalDocs, setTotalDocs] = useState(0);
	const changePageLimit = (page, limit) => {
		setPagination((prev) => ({ ...prev, skip: (page - 1) * limit, limit, page }));
	};

	useEffect(() => {
		axios
			.get(`${url}?skip=${pagination.skip}&limit=${pagination.limit}`)
			.then((response) => {
				const { users, total } = response.data;

				setData(users);
				setTotalDocs(total);
			});
	}, [url, pagination]);

	return { data, changePageLimit, pagination, total: totalDocs };
};

export default useFetch;
