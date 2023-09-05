import { Box, Typography, Button } from "@mui/material";
import { Command } from '@tauri-apps/api/shell'

export default function Thanks() {
    async function handle() {
        console.log('workign');
        let i = new Command('logo', 'l');
        i.on('close', data => {
            console.log(`command finished with code ${data.code} and signal ${data.signal}`);
          });
        
        i.on('error', error => console.error(`command error: "${error}"`));
        i.stdout.on('data', line => console.log(`command stdout: "${line}"`));
        i.stderr.on('data', line => console.log(`command stderr: "${line}"`))
        await i.execute();

    }
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: "center",
            margin: "auto",
            height: "100vh"
        }}>
            <Typography variant="h4">Thanks!</Typography>
            <Typography variant="h3">You're all set</Typography>
            <Button onClick={handle}>Click</Button>
        </Box>
    )
}