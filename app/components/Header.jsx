import React from 'react'

function Header() {
    return (
        <div className="relative h-screen w-full">
                <img src="https://images-ext-1.discordapp.net/external/lSVKxx-PSqR_RlrNYwHSzgmSYV-cFwjACUxa-imM8MU/https/kingbong.com.br/media/wysiwyg/BongsFeitos3.webp?format=webp&width=877&height=585" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h1 className="text-4xl text-white font-bold">Vidros importados</h1>
                        <p className="text-xl text-white mt-4"></p>
                </div>
        </div>
    );
};

export default Header;
