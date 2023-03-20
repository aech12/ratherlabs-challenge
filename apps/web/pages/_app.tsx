import Head from "next/head";
import React from "react";

import ContextProvider from "lib/context";
import "styles.css";

if (typeof window !== "undefined") {
	require("lazysizes/plugins/attrchange/ls.attrchange.js");
	require("lazysizes/plugins/respimg/ls.respimg.js");
	require("lazysizes");
}

const MyApp = ({ Component, pageProps }) => (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
		</Head>
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	</>
);

export default MyApp;
