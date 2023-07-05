import React from "react";
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <React.Fragment>
            <AppBar sx = {{background:'#4d4dff'}} textColor="inherit">
                <Toolbar>                    
                    <ShoppingCartIcon />                    
                    <Typography>upGrad E-Shop</Typography>
                    <Tabs sx={{marginLeft: "auto"}} textColor="inherit">
                        <Tab label="Login"></Tab>
                        <Tab label="Sign Up"></Tab>
                    </Tabs>
                </Toolbar>                
            </AppBar>
        </React.Fragment>
    );
};

export default Navbar;