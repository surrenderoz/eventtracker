import { Box, Typography, TextField, Button } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    fullname: string,
    casewareid: string,
    employeid: string,
    pcnum: string,
};

export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        window.localStorage.setItem("fullname", data.fullname);
        window.localStorage.setItem("casewareid", data.casewareid);
        window.localStorage.setItem("employeid", data.employeid);
        window.location.replace("/thanks")
    };

    return (

        <>
            <Box sx={{position: "relative"}}>
            <Box sx={{
                background: '#fff',
                width: '600px',
                height: '600px',
                // margin: 'auto',
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                justifyContent: "center",
                // top: "0",
                left: "50%",
                transform: "translate(-50%, 10%)",
                boxSizing: "border-box",
                borderRadius: '50px',
                boxShadow: '20px -20px 60px #bebebe,-20px 20px 60px #ffffff'
            }}>
                <Typography sx={{
                textAlign: 'center',
                fontWeight: "600",
                // margin: '20px'
            }} variant="h4">Register A User</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '30px',
                        rowGap: "15px",
                    }}>
                        <TextField helperText={errors.fullname ? "this field is required" : ""}
                            error={errors.fullname ? true : false} placeholder="Full Name" {...register("fullname", { required: true })} />
                        <TextField 
                             helperText={errors.casewareid ? "this field is required": ""}
                        error={errors.casewareid ? true : false} placeholder="Caseware Id" {...register("casewareid", { required: true })} />
                        <TextField placeholder="Pc Number (Optional )" {...register("pcnum")} />
                        <TextField 
                         helperText={errors.employeid ? "this field is required": ""}
                        error={errors.employeid ? true : false} placeholder="Employee Id " {...register("employeid", { required: true })} />
                        <Button sx={{
                            background: `${Object.keys(errors).length ? "red" : "#0C356A"}`,
                            color: '#fff',
                            width: '100%',
                            padding: '10px 0',
                            
                            ":hover": {
                                background: "#279EFF",
                            }

                        }} type="submit" disabled={Object.keys(errors).length ? true : false} >Save</Button>
                    </Box>

                </form>

            </Box>
            </Box>
        </>
    )
}