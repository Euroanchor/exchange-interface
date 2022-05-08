export const pools: Pool[] = [
	{
		lp_contract: 'CurveTokenV3',
		wrapped_contract: 'ERC20Mock',
		swap_constructor: {
			_A: 100,
			_fee: 4000000,
			_admin_fee: 0
		},
		lp_constructor: {
			name: 'Koyo.finance FRAX/USDC/USDT',
			symbol: '3Koyo'
		},
		coins: [
			{
				name: 'FRAX',
				decimals: 18,
				tethered: false,
				underlying_address: '0x7562F525106F5d54E891e005867Bf489B5988CD9'
			},
			{
				name: 'USDC',
				decimals: 6,
				tethered: false,
				underlying_address: '0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc'
			},
			{
				name: 'USDT',
				decimals: 6,
				tethered: true,
				underlying_address: '0x5DE1677344D3Cb0D7D465c10b72A8f60699C062d'
			}
		],
		deploy: {
			name: '3pool',
			token_address: '0xea1e627c12df4e054d61fd408ff7186353ac6ca1',
			swap_address: '0x0613adbd846cb73e65aa474b785f52697af04c0b'
		},
		testing: {
			initial_amount: 1000
		}
	}
];

export const getPool = (name: string) => pools.find((pool) => pool.deploy.name === name);
export const allPoolsByName = () => pools.map((pool) => pool.deploy.name);

export const allCoins = () => new Set(pools.flatMap((pool) => pool.coins.flatMap((coin) => coin.underlying_address)));

export interface PoolSwapConstructor {
	_A: number;
	_fee: number;
	_admin_fee: number;
}

export interface PoolLiquidityTokenConstructor {
	name: string;
	symbol: string;
}

export interface PoolCoin {
	name: string;
	decimals: number;
	tethered: boolean;
	underlying_address: string;
}

export interface PoolDeployedData {
	name: string;
	token_address: string;
	swap_address: string;
}

export interface PoolTestingOptions {
	initial_amount?: number;
}

export interface Pool {
	lp_contract: string;
	wrapped_contract?: string;
	swap_constructor: PoolSwapConstructor;
	lp_constructor: PoolLiquidityTokenConstructor;
	coins: PoolCoin[];
	deploy: PoolDeployedData;
	testing?: PoolTestingOptions;
}
