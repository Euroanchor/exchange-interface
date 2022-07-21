import { formatBalance, formatDollarAmount } from '@koyofinance/core-sdk';
import { EXLUDED_POOL_IDS } from 'config/pools';
import useExchangeSubgraphURL from 'hooks/useExchangeSubgraphURL';
import { LitePoolFragment, useGetPoolsQuery } from 'query/generated/graphql-codegen-generated';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { getShortPoolName } from 'utils/exchange/getShortPoolName';

export interface PoolsModalProps {
	setPool: (poolAddress: string) => void;
	closeModal: () => void;
}

const PoolsModal: React.FC<PoolsModalProps> = (props) => {
	const exchangeSubgraphURL = useExchangeSubgraphURL();
	const { data: poolsQuery } = useGetPoolsQuery({ endpoint: exchangeSubgraphURL });
	const pools = poolsQuery?.allPools;

	const [filteredPoolList, setFilteredPoolList] = useState(
		pools
			?.filter((pool) => !EXLUDED_POOL_IDS.includes(pool.id))
			.sort((a, b) => parseFloat(b.totalLiquidity || '0') - parseFloat(a.totalLiquidity || '0'))
	);

	const filterPoolsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '') {
			setFilteredPoolList(pools?.filter((pool) => !EXLUDED_POOL_IDS.includes(pool.id)));
			return;
		}
		const filteredList = pools
			?.filter((pool) => !EXLUDED_POOL_IDS.includes(pool.id))
			.filter(
				(pool: LitePoolFragment) =>
					getShortPoolName(pool).toLowerCase().includes(e.target.value.toLowerCase()) ||
					pool.address.toLowerCase().includes(e.target.value.toLowerCase())
			)
			.sort((a, b) => parseFloat(b.totalLiquidity || '0') - parseFloat(a.totalLiquidity || '0'));

		setFilteredPoolList(filteredList);
	};

	return (
		<div className=" fixed top-0 left-0 z-40 flex min-h-screen w-full items-center justify-center px-4 ">
			<div className="fixed top-0 left-0 z-0 min-h-screen w-full cursor-pointer bg-black bg-opacity-50" onClick={props.closeModal}></div>
			<div className="z-20 flex w-full flex-col gap-4 rounded-xl bg-gray-800 p-4 text-white md:w-[40rem] lg:w-[50vw] 2xl:w-[40vw]">
				<div className=" flex w-full flex-row items-center justify-between">
					<div>Select Pool</div>
					<div className="cursor-pointer text-2xl" onClick={props.closeModal}>
						<FaTimes />
					</div>
				</div>
				<div>
					<input
						type="text"
						placeholder="Select Token by Name or Address"
						onChange={filterPoolsHandler}
						className="w-full rounded-xl border-2 border-darks-300 bg-transparent p-2 text-lg outline-none"
					/>
				</div>
				<div className="flex max-h-[50vh] flex-col overflow-x-hidden overflow-y-scroll">
					{filteredPoolList?.map((pool) => (
						<div
							key={pool.address}
							className="flex w-full transform-gpu cursor-pointer flex-row justify-between rounded-lg p-3 text-lg duration-100 hover:bg-gray-700"
							onClick={() => {
								props.setPool(pool.address);
								props.closeModal();
							}}
						>
							<div className="w-4/6 truncate text-left text-sm md:text-base">{getShortPoolName(pool)}</div>
							<div className="w-1/6 truncate text-left text-sm md:text-base">{formatDollarAmount(parseFloat(pool.totalLiquidity))}</div>
							<div className=" w-1/6 flex-row gap-1 truncate text-right text-sm text-gray-300 md:text-base">
								{parseFloat(pool.swapFee) * 100}%
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PoolsModal;
