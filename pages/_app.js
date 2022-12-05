import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider} from 'next-themes'


function MyApp({ Component, pageProps }){https://NFT-Marketplace.clabhi.repl.co
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Goerli}
      chainRpc= {{
        [ChainId.Goerli]:'https://goerli.infura.io/v3/97cbb2ee66f64f86a6a20ed4f23f8248'
      }}
      >
      <ThemeProvider>
         <Component {...pageProps} />
      </ThemeProvider>
   
      
    </ThirdwebProvider>

  )
}

export default MyApp
