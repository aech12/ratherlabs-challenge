"use client";

import { useState, useEffect } from "react";
import { Pool } from "ui/types";

const m_pools = [
	{
		liquidity: {
			usd: 250606936.386015,
			eth: 142844.81098154068,
			native: 3297055.4371122983,
		},
		price: {
			eth: 0.04332496486824324,
			usd: 76.00931836484594,
		},
		address: "0x4da27a545c0c5B758a6BA100e3a049001de870f5",
		apy: 6.08,
		name: "Staked Aave",
		symbol: "stkAAVE",
		updatedAt: "2023-03-21T03:30:57.470Z",
	},
	{
		liquidity: {
			usd: 121779173.97634365,
			eth: 69413.57385792502,
			native: 1140207793.1735377,
		},
		price: {
			eth: 0.000060878003354745,
			usd: 0.10680436908556463,
		},
		address: "0xa1116930326D21fB917d5A27F1E9943A9595fb47",
		apy: 12.52,
		name: "Staked Aave Balancer Pool Token",
		symbol: "stkABPT",
		updatedAt: "2023-03-21T03:30:57.474Z",
	},
];

export default function PoolsList() {
	const [pools, setPools] = useState<Pool[]>([]);

	useEffect(() => {
		setPools(m_pools); // mock test
		// const fetchData = async () => {
		// 	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/pools`);
		// 	const data = await res.json();
		// 	setPools(data);
		// };
		// fetchData();
	}, []);

	return (
		<ul className="space-y-4">
			{pools.map((pool) => (
				<li key={pool.address} className="border border-slate-900 p-4 rounded-md">
					<h3 className="text-lg font-semibold">{pool.name}</h3>
					<p>Symbol: {pool.symbol}</p>
					<p>APY: {pool.apy}</p>
				</li>
			))}
		</ul>
	);
}
