import { Pool, EthereumTransactionTypeExtended } from '@aave/contract-helpers';

export async function supply(pool: Pool, user: string, reserve: string, amount: string) {
  console.log('supply body', user, reserve, amount);

  const txs: EthereumTransactionTypeExtended[] = await pool.supply({
    user,
    reserve,
    amount,
  });

  console.log('txs', txs);

  return txs;
}

// - @param `user` The ethereum address that will make the deposit
// - @param `reserve` The ethereum address of the reserve
// - @param `amount` The amount to be deposited
// - @param `aTokenAddress` The aToken to redeem for underlying asset
export async function withdraw(
  pool: Pool,
  user: string,
  reserve: string,
  amount: string,
  aTokenAddress: string,
) {
  console.log('supply body', user, reserve, amount, aTokenAddress);

  const txs: EthereumTransactionTypeExtended[] = await pool.withdraw({
    user,
    reserve,
    amount,
    aTokenAddress,
  });
  
  console.log('txs', txs);

  return txs;
}
