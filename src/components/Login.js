import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import {
    Grid,
    Avatar,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Typography,
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";
import { Key } from "@mui/icons-material";
function Login() {
    const [isSignup, setisSignup] = useState(false);
    console.log(isSignup);
    const mainGrid = {
        // display: 'flex'
    };
    const paperStyle = {
        // height: "70vh",
        width: "45vh",
        padding: "30px",
        margin: "30px auto",
        borderRadius: "30px",
    };
    const avtarStyle = {
        backgroundColor: "darkcyan",
    };
    const gridColor = {
        color: "darkcyan",
    };
    const textField = {
        // marginTop: '10px'
    };
    const loginbtn = {
        backgroundColor: "darkcyan",
        marginTop: "30px",
        borderRadius: "15px",
    };
    const text = {
        // color: "darkcyan",
        marginTop: "10px",
        fontSize: "10px",
    };

    return (
        <>
            <Grid style={mainGrid}>
                <Box
                    style={paperStyle}
                    borderRadius={5}
                    boxShadow={"10px 10px 20px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "20px 20px 45px #ccc",
                        },
                    }}
                >
                    <Grid align="center" style={gridColor}>
                        <Avatar style={avtarStyle}>
                            {isSignup ? <LockIcon></LockIcon> : <Key></Key>}
                        </Avatar>
                        <h2>{!isSignup ? "Login" : "Signup"}</h2>
                    </Grid>
                    <Grid>
                        {isSignup && (
                            <TextField
                                variant="standard"
                                label="Username"
                                type={text}
                                placeholder="Enter your name"
                                fullWidth
                                required
                                margin="normal"
                                style={textField}
                            ></TextField>
                        )}
                        <TextField
                            variant="standard"
                            label="Email"
                            type={text}
                            placeholder="Enter your email"
                            fullWidth
                            required
                            margin="normal"
                            style={textField}
                        ></TextField>
                        <TextField
                            variant="standard"
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            fullWidth
                            required
                            margin="normal"
                            style={textField}
                        ></TextField>
                    </Grid>
                    {!isSignup && (
                        <FormControlLabel
                            control={<Checkbox required />}
                            label="Remember me"
                            margin="normal"
                        />
                    )}
                    <Button
                        variant="contained"
                        fullWidth
                        style={loginbtn}
                        onClick={() => {
                            console.info("you are successfully login");
                        }}
                    >
                        {isSignup ? "Signup" : "Login"}
                    </Button>
                    <Typography align="center" style={text}>
                        <Link onClick={() => setisSignup(!isSignup)} sx={{ color: green }}>
                            {isSignup
                                ? "already have account Login"
                                : " create new account? Signup"}
                        </Link>
                    </Typography>
                </Box>
            </Grid>
        </>
    );
}

export default Login;
