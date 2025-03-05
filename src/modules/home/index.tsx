"use client";

import Carousel from "@/components/carousel";
import SmartphoneLayout from "@/components/smartphone-layout";
import {
  AccessTimeOutlined,
  InfoOutlined,
  NotificationsOutlined,
  RotateRightOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Card,
  CardContent,
  Divider,
  Grid2,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

const HomeModuls = () => {
  const router = useRouter();
  const avatars = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
  ];

  const slides = [
    {
      author: "Ana Riswati",
      date: "Senin, 30 Mei 2022",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      content: [
        "Kalimat 1 - Lorem ipsum dolor sit amet consec",
        "Kalimat 2 - Lorem ipsum dolor sit amet consec",
        "Kalimat 3 - Lorem ipsum dolor sit amet consec",
        "Kalimat 4 - Lorem ipsum dolor sit amet consec",
      ],
    },
    {
      author: "Budi Santoso",
      date: "Selasa, 31 Mei 2022",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
      content: [
        "Update 1 - Consectetur adipiscing elit sed do",
        "Update 2 - Eiusmod tempor incididunt ut labore",
        "Update 3 - Et dolore magna aliqua ut enim ad",
        "Update 4 - Minim veniam quis nostrud",
      ],
    },
    {
      author: "Citra Dewi",
      date: "Rabu, 1 Juni 2022",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      content: [
        "Berita 1 - Ullamco laboris nisi ut aliquip ex",
        "Berita 2 - Commodo consequat duis aute irure",
        "Berita 3 - Dolor in reprehenderit in voluptate",
        "Berita 4 - Velit esse cillum dolore eu fugiat",
      ],
    },
  ];
  return (
    <SmartphoneLayout isBottomBar>
      <Box
        sx={{
          px: 3,
          pt: 3,
          pb: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" color="primary">
          KerjaYuk!
        </Typography>
        <IconButton onClick={() => router.push("/notification")}>
          <Badge
            color="secondary"
            badgeContent=" "
            variant="dot"
            sx={{
              "& .MuiBadge-badge": {
                top: 4,
                right: 7,
                backgroundColor: "red",
                border: "1px solid white",
              },
            }}
          >
            <NotificationsOutlined
              sx={{
                color: "black",
              }}
            />
          </Badge>
        </IconButton>
      </Box>

      <Box sx={{ px: 3, pb: 2 }}>
        <Typography variant="body1" color="text.main">
          Hi, Good Morning!
        </Typography>
      </Box>

      <Box sx={{ mx: 3, mb: 3 }}>
        <Paper
          elevation={2}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            background: "linear-gradient(to right, #f44336, #e91e63)",
          }}
        >
          <Box sx={{ p: 2, display: "flex" }}>
            <Avatar
              src="https://randomuser.me/api/portraits/men/20.jpg"
              alt="Profile"
              sx={{ width: 48, height: 48, mr: 1.5 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" color="white">
                Tabay
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontStyle: "italic" }}
                color="rgba(255,255,255,0.8)"
              >
                UI/UX Designer
              </Typography>
            </Box>
            <Box
              sx={{
                ml: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="caption" color="rgba(255,255,255,0.8)">
                Member since
              </Typography>
              <Typography variant="body2" color="white" fontWeight={500}>
                01 Juni 2021
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
          <Box
            sx={{
              px: 2,
              py: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="caption" color="rgba(255,255,255,0.8)">
                Location
              </Typography>
              <Typography variant="body2" color="white" fontWeight={500}>
                Kantor Sahid
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                px: 1,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              <Typography variant="caption" color="white">
                ICO
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ px: 3, mb: 3 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Today&apos;s activity
        </Typography>
        <Grid2 container spacing={2} justifyContent={"space-between"}>
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: "transparent",
                border: "2px solid",
                borderColor: "primary.main",
                color: "primary.main",
                mx: "auto",
                mb: 1,
              }}
            >
              <AccessTimeOutlined fontSize="small" />
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              08:30
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Check In
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: "transparent",
                border: "2px solid",
                borderColor: "primary.main",
                color: "primary.main",
                mx: "auto",
                mb: 1,
              }}
            >
              <RotateRightOutlined fontSize="small" />
            </Avatar>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
              03:00:00
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Working Hours
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: "transparent",
                border: "2px solid",
                borderColor: "primary.main",
                color: "primary.main",
                mx: "auto",
                mb: 1,
              }}
            >
              <InfoOutlined fontSize="small" />
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              --:--
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Check Out
            </Typography>
          </Box>
        </Grid2>
      </Box>

      <Box sx={{ px: 3, mb: 3 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          PCS News
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Carousel slides={slides} />
        </Box>
      </Box>

      <Box sx={{ px: 3, mb: 10 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Online
        </Typography>
        <Card sx={{ borderRadius: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <CardContent className="flex justify-center">
            <AvatarGroup
              renderSurplus={(surplus) => (
                <span>+{surplus.toString()[0]}k</span>
              )}
              total={100}
              max={8}
            >
              {avatars.map((e, i) => {
                return <Avatar key={i} alt="Remy Sharp" src={e} />;
              })}
            </AvatarGroup>
          </CardContent>
        </Card>
      </Box>
    </SmartphoneLayout>
  );
};

export default HomeModuls;
