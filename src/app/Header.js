import { Link } from "react-router-dom";
import * as React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
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

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            ENGINEERING DAYBOOK
                        </Typography>

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
                                <MenuItem key="home" onClick={handleCloseNavMenu} component="a" href="/">
                                    <Typography textAlign="center">Página Inicial</Typography>
                                </MenuItem>

                                <MenuItem key="archive" onClick={handleCloseNavMenu} component="a" href="/archive">
                                    <Typography textAlign="center">Textos</Typography>
                                </MenuItem>

                                <MenuItem key="about" onClick={handleCloseNavMenu} component="a" href="/about">
                                    <Typography textAlign="center">Sobre</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            ENGINEERING DAYBOOK
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button key="home" component="a" href="/" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                Página Inicial
                            </Button>

                            <Button key="archive" component="a" href="/archive" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                Textos
                            </Button>

                            <Button key="about" component="a" href="/about" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                Sobre
                            </Button>
                        </Box>
                    </Toolbar>
              </Container>
            </AppBar>
        </header>
    )
}

export default Header;