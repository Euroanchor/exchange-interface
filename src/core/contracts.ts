import { augmentedPools } from '@koyofinance/swap-sdk';
import { BOBA_veKYO_ADDRESS } from 'constants/contracts';
import { bobaReadonlyProvider } from 'hooks/useProviders';
import { StableSwap4Pool, StableSwap4Pool__factory } from 'types/contracts/exchange';
import { VotingEscrow__factory } from 'types/contracts/koyo';

export const votingEscrowContract = VotingEscrow__factory.connect(
	BOBA_veKYO_ADDRESS, //
	bobaReadonlyProvider
);

export const swapContracts: Map<string, StableSwap4Pool> = new Map(
	augmentedPools.map((pool) => [pool.id, StableSwap4Pool__factory.connect(pool.addresses.swap, bobaReadonlyProvider)])
);
