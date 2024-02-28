/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */

import { SwapContractContract } from "../generated/src/Handlers.gen.ts";

SwapContractContract.Swap.loader(({ event, context }) => {});

SwapContractContract.Swap.handler(({ event, context }) => {
  // console.log(event.transactionHash);
  // console.log(event.blockNumber);
  // event.chainId;
  // event.srcAddress;

  context.Swap.set({
    id: event.transactionHash + event.logIndex,
    recipient: event.params.recipient,
    sender: event.params.sender,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    sqrtPriceX96: event.params.sqrtPriceX96,
    liquidity: event.params.liquidity,
    tick: event.params.tick,
    blockNumber: event.blockNumber,
    blockTimestamp: event.blockTimestamp,
    transactionHash: event.transactionHash,
    chainId: event.chainId,
    srcAddress: event.srcAddress,
  });
});
