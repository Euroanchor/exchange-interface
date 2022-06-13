import { ROOT_WITH_PROTOCOL } from 'constants/links';
import { SwapLayout } from 'layouts/SwapLayout';
import { NextSeo } from 'next-seo';
import React from 'react';
import { ExtendedNextPage } from 'types/ExtendedNextPage';

const LendingPage: ExtendedNextPage = () => {
	return (
		<>
			<NextSeo
				title="Farms"
				canonical={`${ROOT_WITH_PROTOCOL}/kyo/farms`}
				description="Deposit your LP tokens to desired gauges and earn rewards."
			/>
			<div className=" flex min-h-screen w-full flex-col items-center gap-[5vh] bg-darks-500 px-4 pb-8 pt-24 md:px-0 lg:pt-20 ">
				<div className="m-5 flex w-full flex-row items-center justify-center">
					<div>
						<img src="/assets/tokens/tokens-left.svg" alt="tokens" />
					</div>
					<div className="mt-8 flex w-1/2 flex-col items-center justify-center gap-8 text-center text-white">
						<h1 className=" text-4xl font-bold md:text-5xl">Kōyō Lending</h1>
						<div className="w-full font-normal md:w-3/4 md:text-xl md:font-semibold lg:w-1/2">
							Lend & borrow, to open yourself new financial opportunities for your DeFi assets.
						</div>
					</div>
					<div>
						<img src="/assets/tokens/tokens-right.svg" alt="tokens" />
					</div>
				</div>
				<div className="grid w-full grid-cols-2 grid-rows-2 justify-items-center gap-6 border-4 px-10">
					<div
						key={'Your lendings'}
						className="flex w-full flex-col gap-4 rounded-xl border-2 border-lights-400 bg-black bg-opacity-50 p-4 text-base text-white sm:w-3/4 md:w-1/2 lg:w-2/5 lg:text-lg xl:w-1/3 xl:text-xl"
					>
						<div className="w-full">Your lendings</div>
						<div>
							<div>Total balance: </div>
							<div>Total collateral</div>
							<div>Total APY:</div>
						</div>
					</div>
					<div
						key={'Borrowings'}
						className="flex w-full flex-col gap-4 rounded-xl border-2 border-lights-400 bg-black bg-opacity-50 p-4 text-base text-white sm:w-3/4 md:w-1/2 lg:w-2/5 lg:text-lg xl:w-1/3 xl:text-xl"
					>
						<div>Your borrowings</div>
						<div>
							<div>Total debt: </div>
							<div>Total APY: ffffffffffffgzasgfduziasgdiuasidhiukn</div>
							<div></div>
						</div>
					</div>
					<div
						key={'lend'}
						className="flex w-full flex-col gap-4 rounded-xl border-2 border-lights-400 bg-black bg-opacity-50 p-4 text-base text-white sm:w-3/4 md:w-1/2 lg:w-2/5 lg:text-lg xl:w-1/3 xl:text-xl"
					>
						<div>Lend your assets</div>
					</div>
					<div
						key={'borrow'}
						className="flex w-full flex-col gap-4 rounded-xl border-2 border-lights-400 bg-black bg-opacity-50 p-4 text-base text-white sm:w-3/4 md:w-1/2 lg:w-2/5 lg:text-lg xl:w-1/3 xl:text-xl"
					>
						<div>Borrow assets</div>
					</div>
				</div>
			</div>
		</>
	);
};

LendingPage.Layout = SwapLayout('lending');
export default LendingPage;
