import React from "react";
import { Flex, Box } from "@100mslive/react-ui";
import { ParticipantCount } from "./ParticipantList";
import { LeaveRoom } from "../LeaveRoom";
import MetaActions from "../MetaActions";
import { Logo, SpeakerTag } from "./HeaderComponents";
import { LiveStatus, RecordingStatus, StreamActions } from "./StreamActions";

export const StreamingHeader = ({ isPreview }) => {
  return (
    <Flex
      justify="between"
      align="center"
      css={{ position: "relative", height: "100%" }}
    >
      <Flex align="center" css={{ position: "absolute", left: "$10" }}>
        <Logo />
        <Box
          css={{
            display: "none",
            "@md": { display: "flex", alignItems: "center" },
          }}
        >
          <LeaveRoom />
          <LiveStatus />
          <RecordingStatus />
        </Box>
        {!isPreview ? <SpeakerTag /> : null}
      </Flex>

      <Flex
        align="center"
        css={{
          position: "absolute",
          right: "$10",
          gap: "$4",
          "@md": { gap: "$2" },
        }}
      >
        <Box css={{ display: "none", "@md": { display: "block" } }}>
          <MetaActions compact />
        </Box>
        <Flex css={{ gap: "$4", "@md": { display: "none" } }}>
          <StreamActions />
        </Flex>
        <ParticipantCount />
      </Flex>
    </Flex>
  );
};
