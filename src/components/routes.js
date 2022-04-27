import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import {LinksPages} from "./pages/LinksPages";
import {DetailPages} from "./pages/DetailPages";
import {CreatePages} from "./pages/CreatePages";
import {RegisterPages} from "./pages/Login&Register/RegisterPages";
import {LoginPages} from "./pages/Login&Register/LoginPages";


export const useRouters = isAuthenticated => {

    if (isAuthenticated) {
        return (
            <Switch>
                <Route path={'/links'} exact>
                    <LinksPages/>
                </Route>
                <Route path={'/create'} exact>
                    <CreatePages/>
                </Route>
                <Route path={'/detail/:id'}>
                    <DetailPages/>
                </Route>

                <Route path={'/update'} exact><RegisterPages name={"update"}/></Route>

                <Redirect to={'/create'}/>
            </Switch>
        )
    }
    if (!isAuthenticated) {
        return (
            <Switch>
                <Route path={'/register'} exact><RegisterPages name={"Реєстрація"}/></Route>
                <Route path={'/login'} exact><LoginPages/></Route>
            </Switch>
        )
    }
}