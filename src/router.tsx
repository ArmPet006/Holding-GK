import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Advertisers from "./Pages/Advertisers/advertisers.tsx";
import Heroes from "./Pages/Heroes/heroes.tsx";
import JournalList from "./Pages/Journal/journal-list.tsx";

const Router: FC<any> = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/advertisers" element={<Advertisers />} />
					<Route path="/heroes" element={<Heroes />} />
					<Route path="/journal/">
						<Route path="special-project" element={<JournalList />} />
						<Route path="lookst" element={<JournalList />} />
						<Route path="body" element={<JournalList />} />
						<Route path="fun-toys" element={<JournalList />} />
						<Route path="home-and-design" element={<JournalList />} />
					</Route>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
