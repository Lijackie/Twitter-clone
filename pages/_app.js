import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
import 'moment/locale/zh-tw';
import moment from 'moment';
import 'moment/min/moment-with-locales'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  moment.locale('zh-tw');

  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
