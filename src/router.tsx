import React, {FC} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./layout";
import Advertisers from "./Pages/Advertisers/index.tsx";
import Heroes from "./Pages/Heroes/index.tsx";
import Journal from "./Pages/Journal/index.tsx";
import {ThemeProvider} from "./Providers/theme-provider.tsx";

const Router: FC<any> = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/"/>
                        <Route path="/heroes" element={<Heroes/>}/>
                        <Route path="/journal/">
                            <Route path="special-project" element={<Journal/>}/>
                            <Route path="lookst" element={<Journal/>}/>
                            <Route path="body" element={<Journal/>}/>
                            <Route path="fun-toys" element={<Journal/>}/>
                            <Route path="home-and-design" element={<Journal/>}/>
                        </Route>
                        <Route path="/advertisers" element={<Advertisers/>}/>
                        <Route path="/contacts"/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default Router;
