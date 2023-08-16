import { ConnectButton } from '@rainbow-me/rainbowkit';

export const CustomConnectButton = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button
                                        className='w-48 font-poppins px-6 py-3 bg-blue-400 transform transition-all duration-100  hover:scale-110 rounded-full shadow-lg lg:mr-0 lg:mt-2 mt-4 mb-4 lg:text-xl text-sm text-white font-bold'
                                        onClick={openConnectModal} type="button">
                                        Connect
                                    </button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <button type="button">
                                        Wrong network
                                    </button>
                                );
                            }

                            return (
                                <div style={{ display: 'flex', gap: 12 }} className='ml-2 justify-center'>
                                    <button

                                        className='font-poppins text-center bg-gray-200 text-gray-800 rounded-md px-2 h-10 my-auto transition-all duration-100 hover:scale-110 shadow-lg'
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{ width: 12, height: 12 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </button>

                                    <button
                                        className='w-64 font-poppins px-6 py-3 bg-blue-400 transform transition-all duration-100  hover:scale-110 rounded-full shadow-lg lg:mr-0 lg:mt-3 mt-5 mb-4 lg:text-sm my-auto text-sm text-white font-bold'
                                        onClick={openAccountModal} type="button">
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};