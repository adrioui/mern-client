import React from "react";
import { useGetIdentity, useActiveAuthProvider } from "@refinedev/core";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { RefineLayoutHeaderProps } from "@refinedev/mui";

export const Header: React.FC<RefineLayoutHeaderProps> = () => {
  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });

  const shouldRenderHeader = user && (user.name || user.avatar);

  return shouldRenderHeader ? (
    <AppBar color="default" position="sticky" elevation={0} sx={{ background: "#FCFCFC" }}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="subtitle2">{user?.name}</Typography>
            <Avatar src={user?.avatar} alt={user?.name} />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};
