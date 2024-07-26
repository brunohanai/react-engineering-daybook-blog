import { NavLink, Link as RouterLink } from "react-router-dom";
import * as React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Link } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import eu from "../lib/eu.jpg"

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <header className="Header">
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ mx: 2, display: { xs: 'none', md: 'flex' } }}>
                            <Tooltip title="Bruno Hanai">
                                <IconButton sx={{ border: 1, borderColor: 'white', p: 0 }}>
                                    <Avatar alt="Bruno Hanai" src={eu} />
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <Link component={RouterLink} to="/">
                            <Typography
                                variant="h6"
                                noWrap
                                component="span"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                ENGINEERING DAYBOOK
                            </Typography>
                        </Link>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem component={RouterLink} to="/" key="home" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Página Inicial</Typography>
                                </MenuItem>


                                <MenuItem component={RouterLink} to="/" key="archive" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Textos</Typography>
                                </MenuItem>

                                <MenuItem component={RouterLink} to="/about" key="about" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" component="span">Sobre</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                        <Link component={RouterLink} to="/">
                            <Typography
                                variant="h5"
                                noWrap
                                component="span"
                                sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'white',
                                textDecoration: 'none',
                                }}
                            >
                                ENGINEERING DAYBOOK
                            </Typography>
                        </Link>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link component={NavLink} to="/" onClick={handleCloseNavMenu}>
                                <Button key="archive" component="span" sx={{ my: 2, color: 'white', textDecoration: 'none' }}>
                                    Textos
                                </Button>
                            </Link>

                            <Link component={NavLink} to="/about" onClick={handleCloseNavMenu}>
                                <Button key="about" component="span" sx={{ my: 2, color: 'white', textDecoration: 'none' }}>
                                    Sobre
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
              </Container>
            </AppBar>
        </header>
    )
}

export default Header;