import Footer from 'components/Footer';
import InfoCard from 'components/UI/Cards/HomePage/InfoCard';
import { generateSitemap } from 'core/sitemap';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import path from 'path';
import React, { useEffect, useState } from 'react';

const IndexPage: NextPage = () => {
	const [activeTitleWord, setActiveTitleWord] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			if (activeTitleWord === 2) {
				setActiveTitleWord(0);
				return;
			}
			setActiveTitleWord(activeTitleWord + 1);
		}, 2000);
	}, [activeTitleWord]);

	return (
		<div className=" min-h-screen w-full bg-darks-500 bg-leaves bg-contain bg-repeat">
			<div className=" flex min-h-screen w-full flex-col items-center gap-6 bg-contain bg-no-repeat px-[7.5vw] pt-[15vh] pb-10 lg:bg-trees xl:px-20">
				<div className="lg:3/5 flex w-full  flex-col items-center justify-center gap-10 rounded-[50%] bg-title-gradient text-white lg:px-36 xl:py-24 2xl:w-1/2">
					<div className=" flex flex-col items-center justify-center gap-4 text-center text-6xl font-bold transition-all duration-300 xl:text-7xl 2xl:text-8xl">
						<div className={`transform-gpu duration-500 ${activeTitleWord === 0 ? ' text-lights-400' : ''}`}>SWAP.</div>
						<div className={`transform-gpu duration-500 ${activeTitleWord === 1 ? ' text-lights-400' : ''}`}>DEPOSIT.</div>
						<div className={`transform-gpu duration-500 ${activeTitleWord === 2 ? ' text-lights-400' : ''}`}>EARN.</div>
					</div>
					<div className="w-full text-center text-xl">
						Kōyō Finance allows you to <b>swap</b> your tokens, <b>deposit</b> your assets in pools and <b>earn</b> fees.
					</div>
					<Link href="/swap">
						<button className=" btn transform-gpu border-0 bg-lights-400 px-10 text-black outline-none duration-100 hover:bg-lights-300 active:bg-lights-200">
							Launch App
						</button>
					</Link>
				</div>
				<div className="mt-10 flex w-full flex-row flex-wrap justify-evenly gap-10 lg:mt-2">
					<InfoCard data="TOTAL LIQUIDITY" value="$11.3k" />
					<InfoCard data="MOST ACTIVE POOL" value="4pool" />
					<InfoCard data="KŌYŌ PRICE" value="?" />
				</div>
				<div className="mt-10 flex w-full flex-row items-center justify-center">
					<InfoCard data="TOTAL LIQUIDITY" value="?" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'src');

	await generateSitemap(directory);

	return { props: {} };
};

export default IndexPage;
