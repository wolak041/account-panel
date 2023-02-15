import React from 'react';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import {
    Box,
    Button,
    Divider,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
} from '@mui/material';
import { usePopupMenu } from '../../hooks/usePopupMenu';

interface FilterList {
    label: string;
    value: string;
    icon?: React.ReactElement;
}

interface FilterProps {
    label: string;
    value: string;
    list: FilterList[];
    onChange: (value: string) => void;
}

export const Filter = ({ label, value, list, onChange }: FilterProps) => {
    const { anchorElement, isMenuOpen, handleTriggerClick, handleMenuClose } = usePopupMenu();

    const handleValueChange = (value: string) => {
        onChange(value);
        handleMenuClose();
    };

    return (
        <>
            <Button
                onClick={handleTriggerClick}
                variant="outlined"
                endIcon={isMenuOpen ? <ExpandLess /> : <ExpandMore />}
                sx={{ textTransform: 'none', borderRadius: 3 }}
            >
                {label}
            </Button>
            <Menu
                anchorEl={anchorElement}
                open={isMenuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuList sx={{ padding: 0 }}>
                    {list.map(({ label, value: itemValue, icon }, index) => (
                        <Box key={itemValue}>
                            <MenuItem onClick={() => handleValueChange(itemValue)}>
                                <ListItemIcon>
                                    {icon ? (
                                        icon
                                    ) : itemValue === value ? (
                                        <RadioButtonCheckedOutlinedIcon />
                                    ) : (
                                        <RadioButtonUncheckedOutlinedIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText>{label}</ListItemText>
                            </MenuItem>
                            {index + 1 !== list.length && <Divider />}
                        </Box>
                    ))}
                </MenuList>
            </Menu>
        </>
    );
};
