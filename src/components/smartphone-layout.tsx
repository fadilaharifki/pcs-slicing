import {
  ArrowBack,
  ArticleRounded,
  CalendarMonthRounded,
  HomeRounded,
  LogoutOutlined,
  SettingsRounded,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Fab,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";

interface SmartphoneLayoutInterface {
  children: ReactNode;
  title?: string;
  onArrowLeft?: () => void;
  isBottomBar?: boolean;
}

export default function SmartphoneLayout({
  children,
  title,
  onArrowLeft,
  isBottomBar,
}: SmartphoneLayoutInterface) {
  const [value, setValue] = useState(0);
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        p: 0,
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 390,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #e0e0e0",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        {title && (
          <Toolbar sx={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <IconButton
              onClick={onArrowLeft}
              edge="start"
              color="inherit"
              aria-label="back"
            >
              <ArrowBack />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ ml: 2, color: "primary.main", fontWeight: 700 }}
            >
              {title}
            </Typography>
          </Toolbar>
        )}

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>

        {isBottomBar && (
          <Paper
            sx={{
              position: "sticky",
              bottom: 0,
              left: 0,
              width: "100%",
              maxWidth: 390,
              borderRadius: 0,
              zIndex: 10,
            }}
            elevation={3}
          >
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{ height: 64 }}
            >
              <BottomNavigationAction
                label="Home"
                icon={<HomeRounded />}
                sx={{
                  fontWeight: 700,
                  color: value === 0 ? "primary.main" : "text.disabled",
                  "& .MuiBottomNavigationAction-label": {
                    fontSize: "0.7rem",
                  },
                }}
              />
              <BottomNavigationAction
                label="Attendance"
                icon={<CalendarMonthRounded />}
                sx={{
                  fontWeight: 700,
                  color: "text.disabled",
                  "& .MuiBottomNavigationAction-label": {
                    fontSize: "0.7rem",
                  },
                }}
              />
              <BottomNavigationAction
                disabled
                label="Check Out"
                icon={<Box sx={{ opacity: 0 }} />}
                sx={{
                  fontWeight: 700,
                  paddingTop: 5,
                  color: "text.disabled",
                  "& .MuiBottomNavigationAction-label": {
                    fontSize: "0.6rem",
                  },
                }}
              />
              <BottomNavigationAction
                label="Form"
                icon={<ArticleRounded />}
                sx={{
                  color: "text.disabled",
                  fontWeight: 700,
                  "& .MuiBottomNavigationAction-label": {
                    fontSize: "0.7rem",
                  },
                }}
              />
              <BottomNavigationAction
                label="Setting"
                icon={<SettingsRounded />}
                sx={{
                  color: "text.disabled",
                  fontWeight: 700,
                  "& .MuiBottomNavigationAction-label": {
                    fontSize: "0.7rem",
                  },
                }}
              />
            </BottomNavigation>
            <Fab
              onClick={() => setValue(2)}
              color="primary"
              aria-label="check out"
              sx={{
                position: "absolute",
                top: -20,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            >
              <LogoutOutlined />
            </Fab>
          </Paper>
        )}
      </Paper>
    </Container>
  );
}
