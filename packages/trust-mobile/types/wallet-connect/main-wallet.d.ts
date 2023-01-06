import { EndpointOptions, Wallet } from '@cosmos-kit/core';
import { WCWalletV2 } from '@cosmos-kit/walletconnect-v2';
export declare class TrustMobileWallet extends WCWalletV2 {
    constructor(walletInfo: Wallet, preferredEndpoints?: EndpointOptions);
}
