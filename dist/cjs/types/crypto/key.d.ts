export declare type PrivKey = {
    bytes(): Uint8Array;
    sign(msg: Uint8Array): Uint8Array;
    pubKey(): PubKey;
};
export declare type PubKey = {
    bytes(): Uint8Array;
    verify(msg: Uint8Array, sig: Uint8Array): boolean;
    address(): Uint8Array;
};
export declare function generatePrivKeyFromMnemonic(mnemonic: string, path?: number): Promise<Uint8Array>;
