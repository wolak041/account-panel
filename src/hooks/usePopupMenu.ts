import { useState } from 'react';

export const usePopupMenu = () => {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorElement);
    const handleTriggerClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorElement(null);
    };

    return {
        anchorElement,
        isMenuOpen,
        handleTriggerClick,
        handleMenuClose,
    };
};
