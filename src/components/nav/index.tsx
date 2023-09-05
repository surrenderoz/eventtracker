import {Box, Button, Typography } from "@mui/material"
import {  useState } from "react";
import Vid from "../../assets/video.mp4";
// import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {

	const [count, setCount]= useState(1);

	setInterval(async () => {
		setCount(count+1)
	}, 1000)

	return(
		<Box sx={{
			// bgcolor: '#fff',
			height: '100vh',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			margin: 'auto',
			"video": {
				zIndex: -1,
				position: "absolute",
				width: "100vw",
				// height: "vh",
				filter: "blur(12px)"
			}
		}}>
			<video autoPlay muted loop>
				<source src={Vid} />
			</video>

			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				rowGap: '30px'
			}}>
			<Typography sx={{color: '#279EFF'}} variant="h2">Welcome</Typography>
			<Typography sx={{color: '#279EFF'}} variant="h6">Click and get started</Typography>
			<Typography sx={{color: '#279EFF'}} variant="h6">{count}</Typography>
				
				<Link to={"/add"}>
				<Button sx={{
					padding: '10px',
					color: '#fff',
					bgcolor: '#0C356A',

				}}>Get Started</Button>
				</Link>
			</Box>
		</Box>
	)
}
