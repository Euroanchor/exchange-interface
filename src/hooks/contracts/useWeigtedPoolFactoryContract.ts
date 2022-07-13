import { ChainId } from '@koyofinance/core-sdk';
import { ChainVault } from 'constants/contracts';
import useProviders from 'hooks/useProviders';
import { useWeb3 } from 'hooks/useWeb3';
import { WeightedPoolFactory__factory } from 'types/contracts/exchange';

export default function useWeigtedPoolFactoryContract(chainId?: ChainId) {
	const { defaultedProvider, chainId: activeChainId } = useWeb3();
	const providers = useProviders();

	return WeightedPoolFactory__factory.connect(
		ChainVault[activeChainId || chainId || ChainId.BOBA] as string,
		providers[activeChainId || chainId] || defaultedProvider
	);
}
