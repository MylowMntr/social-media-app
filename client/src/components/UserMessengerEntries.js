import { Box, Divider, List, Stack, Typography } from "@mui/material";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import Loading from "./Loading";
import UserMessengerEntry from "./UserMessengerEntry";
import HorizontalStack from "./util/HorizontalStack";
import "react-icons/bi";
import { BiSad } from "react-icons/bi";

const UserMessengerEntries = (props) => {
  return !props.loading ? (
    <>
      {props.conversations.length > 0 ? (
        <Stack>
          <HorizontalStack
            alignItems="center"
            spacing={2}
            sx={{ px: 2, height: "60px" }}
          >
            <AiFillMessage size={30} />
            <Typography>
              <b>Tes conversations</b>
            </Typography>
          </HorizontalStack>
          <Divider />
          <Box sx={{ height: "calc(100vh - 171px)" }}>
            <Box sx={{ height: "100%" }}>
              <List sx={{ padding: 0, maxHeight: "100%", overflowY: "auto" }}>
                {props.conversations.map((conversation) => (
                  <UserMessengerEntry
                    conservant={props.conservant}
                    conversation={conversation}
                    key={conversation.recipient.username}
                    setConservant={props.setConservant}
                  />
                ))}
              </List>
            </Box>
          </Box>
        </Stack>
      ) : (
        <Stack
          sx={{ height: "100%" }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
          textAlign="center"
        >
          <BiSad size={60} />
          <Typography variant="h5">Pas de conversations</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: "70%" }}>
            Clique sur "Message" sur le profil de quelqu'un pour lui parler !
          </Typography>
        </Stack>
      )}
    </>
  ) : (
    <Stack sx={{ height: "100%" }} justifyContent="center">
      <Loading />
    </Stack>
  );
};

export default UserMessengerEntries;
