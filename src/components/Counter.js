import React from "react";
import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Stack } from "@mui/system";
import { useState } from "react";
const paperStyle = {
    height: "80vh",
    width: 580,
    marginTop: 30,
    borderRadius: "15px",
    // padding: 40
};
function Counter() {
    const [count, setCount] = useState(0);
    const [isColor, setisColor] = useState("white");

    // const increment = function () {
    //     setCount(count + 1)
    // }
    // const decrement = function () {
    //     setCount(count - 1)
    // }
    return (
        <>
            <Grid align="center" mt={10}>
                <Paper elevation={7} style={paperStyle} sx={{ backgroundColor: [isColor] }}>
                    <Typography variant="h4" pt={5}>
                        CounterApp
                    </Typography>
                    <Typography variant="h1" mt={5}>
                        {count}
                    </Typography>
                    <Stack direction={"row"} spacing={4} mt={10} justifyContent="center" divider={<Divider orientation="vertical" flexItem />}>
                        <Button variant="outlined" onClick={() => setCount(count - 1)} >
                            <RemoveIcon></RemoveIcon>
                        </Button>
                        <Button variant="contained" onClick={() => setCount(count + 1)}>
                            <AddIcon></AddIcon>
                        </Button>

                    </Stack>
                    <Stack direction={"row"} spacing={4} mt={10} justifyContent="center" divider={<Divider orientation="vertical" flexItem />}>
                        <Button variant="contained" color="success" onClick={() => setisColor("green")} > </Button>
                        <Button variant="contained" color="warning" onClick={() => setisColor("orange")}> </Button>
                        <Button variant="contained" onClick={() => setisColor("blue")}> </Button>
                    </Stack>


                </Paper>
            </Grid >
        </>
    );
}

export default Counter;
