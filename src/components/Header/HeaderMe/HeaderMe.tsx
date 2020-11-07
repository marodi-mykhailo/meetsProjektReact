import React from 'react';
import s from './HeaderMe.module.css'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {Avatar} from "@material-ui/core";
import {Photoczka} from "../../MeetItem/ParticipantsItem/ParticipantsItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        large: {
            width: theme.spacing(8),
            height: theme.spacing(8),
        }
    }),
);

export default function HeaderMe() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={s.wrapper}>
            <div className={s.btnWrapp}>
                <Button variant="outlined"
                        color="secondary"
                        className={s.createBtn}>
                    Secondary
                </Button>
            </div>
            <div className={s.meWrapp}>
                <Avatar alt="Remy Sharp" className={classes.large + ' ' + s.avatar} src={Photoczka}/>
                <div className={classes.root}>
                    <div>
                        <Button
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            className={s.iconBtn}
                        >
                            <FontAwesomeIcon className={s.icon} icon={faAngleDown}/>
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({TransitionProps, placement}) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={open} id="menu-list-grow"
                                                      onKeyDown={handleListKeyDown}>
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </div>
            </div>
        </div>
    );
}
