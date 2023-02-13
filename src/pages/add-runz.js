import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"add-runz"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			align-items="center"
			min-width="70%"
			padding="20px"
			margin-left="260px"
			min-height="70px"
		>
			<Text margin="0px 0px 0px 0px">
				Description
			</Text>
			<Input />
			<br />
			<br />
			<br />
			<Text margin="0px 0px 0px 0px">
				University
			</Text>
			<Input />
			<br />
			<br />
			<br />
			<Text margin="0px 0px 0px 0px">
				Institute
			</Text>
			<Input />
			<br />
			<br />
			<br />
			<Text margin="0px 0px 0px 0px">
				Lab Name
			</Text>
			<Input />
			<br />
			<br />
			<br />
			<Text margin="0px 0px 0px 0px">
				Procedure Name
			</Text>
			<Input />
		</Box>
		<Box
			display="grid"
			width="20%"
			position="center"
			grid-gap="16px"
			margin-left="260px"
			min-height="70px"
		>
			<Button color="black" background="#f2c232" text="black">
				SAVE
			</Button>
			<Button background="red">
				CANCEL
			</Button>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63e9b37c3a0508001e079824"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});