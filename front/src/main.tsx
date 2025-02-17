import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import './assets/common.css'
import './assets/reset.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import "./assets/css/login/login.css"
import "./assets/css/user/user.css";
import "./assets/css/select.css";
import FindModal from "./component/router/login/modal/findModal/findModal";
import JoinModal from "./component/router/login/modal/joinModal/joinModal";
import WeeklyRouter from "./component/router/weeklyRouter";

const queryClient = new QueryClient();



createRoot(document.getElementById('root')!).render(

    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <WeeklyRouter/>
            <FindModal/>
            <JoinModal/>
        </QueryClientProvider>
  </StrictMode>,
)
