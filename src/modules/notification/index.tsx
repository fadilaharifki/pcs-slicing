"use client";

import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Box,
  Paper,
} from "@mui/material";
import {
  AttachMoney,
  Medication,
  AccessTime,
  CheckCircle,
  Cancel,
  ArrowCircleRight,
} from "@mui/icons-material";
import SmartphoneLayout from "@/components/smartphone-layout";
import { useRouter } from "next/navigation";

type NotificationType = "reimbursement" | "sickness" | "overtime";
type NotificationStatus = "approved" | "rejected" | "processing";

interface Notification {
  type: NotificationType;
  title: string;
  description: string;
  status: NotificationStatus;
  date: string;
  amount?: string;
}

const notifications: Notification[] = [
  {
    type: "reimbursement",
    title: "Reimbursement",
    description:
      'Your submission "Lorem ipsum dolor sit amet..." with the with a total cost of 50,000 has been paid, please check your BRIMO application, Thankyou',
    status: "approved",
    date: "Today",
    amount: "50,000",
  },
  {
    type: "reimbursement",
    title: "Reimbursement",
    description:
      'Your submission "description" has been rejected, please click for details.',
    status: "rejected",
    date: "Yesterday",
  },
  {
    type: "reimbursement",
    title: "Reimbursement",
    description:
      "Your submission will be processed according to the reimbursement schedule. Please wait",
    status: "processing",
    date: "2022-10-05",
  },
  {
    type: "sickness",
    title: "Sickness",
    description: "Your submission has been approved by the Superior.",
    status: "approved",
    date: "2022-10-05",
  },
  {
    type: "sickness",
    title: "Sickness",
    description:
      "Your submission has been rejected, please confirm with your Superior.",
    status: "rejected",
    date: "2022-10-05",
  },
  {
    type: "sickness",
    title: "Sickness",
    description:
      "Your submission is being reviewed to the Superior for the approval process, please wait.",
    status: "processing",
    date: "2022-10-05",
  },
  {
    type: "overtime",
    title: "Overtime",
    description: "Your submission has been approved by the Superior.",
    status: "approved",
    date: "2022-10-05",
  },
  {
    type: "overtime",
    title: "Overtime",
    description:
      "Your submission has been rejected, please confirm with your Superior.",
    status: "rejected",
    date: "2022-10-05",
  },
  {
    type: "overtime",
    title: "Overtime",
    description:
      "Your submission is being reviewed to the Superior for the approval process, please wait.",
    status: "processing",
    date: "2022-10-05",
  },
];

const getIcon = (type: NotificationType) => {
  switch (type) {
    case "reimbursement":
      return <AttachMoney />;
    case "sickness":
      return <Medication />;
    case "overtime":
      return <AccessTime />;
  }
};

const getStatusIcon = (status: NotificationStatus) => {
  switch (status) {
    case "approved":
      return <CheckCircle sx={{ color: "success.main" }} />;
    case "rejected":
      return <Cancel sx={{ color: "error.main" }} />;
    case "processing":
      return <ArrowCircleRight sx={{ color: "info.main" }} />;
  }
};

const NotificationModuls = () => {
  const router = useRouter();
  return (
    <SmartphoneLayout title="Notification" onArrowLeft={() => router.back()}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <List sx={{ width: "100%", bgcolor: "background.paper", py: 0 }}>
          {notifications.map((notification, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                mb: 1,
                bgcolor:
                  notification.status === "processing"
                    ? "rgba(33, 150, 243, 0.04)"
                    : "background.paper",
              }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    {getIcon(notification.type)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="text.primary"
                        >
                          {notification.title}
                        </Typography>
                        {getStatusIcon(notification.status)}
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          {notification.date}
                        </Typography>
                      </Box>
                    </Box>
                  }
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {notification.description}
                    </Typography>
                  }
                />
              </ListItem>
            </Paper>
          ))}
        </List>
      </Box>
    </SmartphoneLayout>
  );
};

export default NotificationModuls;
