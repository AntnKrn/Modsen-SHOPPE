import React, { ChangeEvent, useState } from "react";
import { Input, Label, ModsenSHOPPE, Navigation, NavigationList, StyledHeader, Switch, ListItem, LeftNavItems } from "./styled";
import { Busket } from "../../assets/icons/busket";
import { Search } from "../../assets/icons/search";
import { Link } from "react-router-dom";

export const Header = () => {
    const [checked, setChecked] = useState(false); // store value

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)
    
    return(
        <StyledHeader>
            <Navigation>
                <ModsenSHOPPE>Modsen SHOPPE</ModsenSHOPPE>
                <NavigationList>
                        <LeftNavItems>
                            <ListItem $marginRight={64}><Link to="shop">Shop</Link></ListItem>
                            <ListItem $marginRight={14}>|</ListItem>
                        </LeftNavItems>
                        <ListItem $marginRight={41}>
                            <Label>
                                <Input checked={checked} type="checkbox" onChange={handleChange}/>
                                <Switch />
                            </Label>
                        </ListItem>
                        <ListItem $marginRight={43}><Search /></ListItem>
                        <ListItem $marginRight={14}><Link to="/busket"><Busket /></Link></ListItem>
                </NavigationList>
            </Navigation>
        </StyledHeader>
    )
}

